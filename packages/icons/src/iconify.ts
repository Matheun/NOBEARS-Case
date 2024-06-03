import { promises as fs } from 'fs';
import * as path from 'path';
import {
  importDirectory,
  exportIconPackage,
  cleanupSVG,
  runSVGO,
  parseColors,
  isEmptyColor,
} from '@iconify/tools';
import { countryListAllIsoData } from './countryCodes';

const kebabLowerToCamel = (str: string): string => str.replace(/_([a-z0-9])/g, (g) => g[1].toUpperCase());
const kebabToCamel = (str: string): string => str.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase());

const generateIndexFiles = async (
    directory: string,
    prefix: string,
): Promise<void> => {
    try {
        // Determine icon prefix
        let iconPrefix = '';
        if (prefix === 'duocolor') iconPrefix = 'uidc';
        else if (prefix === 'duotone') iconPrefix = 'uidt';
        else if (prefix === 'line') iconPrefix = 'uil';
        else if (prefix === 'solid') iconPrefix = 'uis';
        else if (prefix === 'flag') iconPrefix = 'uif';
        else if (prefix === 'payment') iconPrefix = 'uip';
        else if (prefix === 'integration') iconPrefix = 'uii';
        else if (prefix === 'file') iconPrefix = 'uif';
        else if (prefix === 'misc') iconPrefix = 'uim';
        else if (prefix === 'background-pattern') iconPrefix = 'uibp';
        else if (prefix === 'background-pattern-decorative') iconPrefix = 'uibpd';
        else throw new Error(`Unknown icon prefix: ${prefix}`);

        // Scan directory for files
        const files: string[] = await fs.readdir(directory);

        // Filter icon files (just using .js as an indicator, assuming corresponding .d.ts and .mjs exist)
        const iconFiles = files.filter((file) => {
            if (!file.endsWith('.js') || file.endsWith('index.js')) return false;
            const baseName = path.basename(file, '.js');
            return files.includes(`${baseName}.d.ts`);
        });

        if (!iconFiles.length) {
            console.log('No icon files found.');
            return;
        }

        // Create content for index files
        const availibleIcons: string[] = [];
        const jsExports: string[] = [];
        const dtsExports: string[] = [
            "import type { IconifyIcon } from '@iconify/types';",
        ];

        iconFiles.forEach((file) => {
            const baseName = path.basename(file, '.js');
            const camelCaseLower = kebabLowerToCamel(`${baseName}`);
            const camelCaseExportName = kebabToCamel(
                `${iconPrefix}-${camelCaseLower}`,
            );
            // const camelCaseBaseName = kebabToCamel(baseName);
            jsExports.push(
                `export { default as ${camelCaseExportName} } from './${baseName}.js';`,
            );
            dtsExports.push(`export const ${camelCaseExportName}: IconifyIcon;`);
            availibleIcons.push(baseName);
        });

        // Add export for all icons
        const jsContent = jsExports.join('\n');
        const dtsIconType = `export type ${iconPrefix}Icons = '${availibleIcons.join("' | '")}';`;
        const dtsContent = `${dtsExports.join('\n')}\n\n${dtsIconType}`;

        // Write to index files
        await fs.writeFile(path.join(directory, 'index.js'), jsContent, 'utf8');
        await fs.writeFile(path.join(directory, 'index.d.ts'), dtsContent, 'utf8');
        await fs.writeFile(
            path.join(directory, 'index.mjs'),
            jsContent.replace(/\.js/g, '.js'),
            'utf8',
        );
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error generating index files: ${error.message}`);
        } else {
            console.error(`An unexpected error occurred: ${String(error)}`);
        }
    }
};

const getIconSet = async (directory: string, prefix: string) => {
    // Import icons
    const iconSet = await importDirectory(`./src/icons/${directory}`, {
        prefix,
    });

    // Validate, clean up, fix palette and optimise
    await iconSet.forEach(async (name, type) => {
        if (type !== 'icon') return;

        const svg = iconSet.toSVG(name);
        if (!svg) {
            // Invalid icon
            iconSet.remove(name);
            return;
        }

        // Clean up and optimise icons
        try {
            // Clean up icon code
            cleanupSVG(svg);

            // If icon is a flag, it is not monotone.
            // Thus, we don't want to replace the color with currentColor.
            if (!['flag', 'payment', 'integration', 'file', 'misc', 'background-pattern', 'background-pattern-decorative'].includes(prefix)) {
                // Assume icon is monotone: replace color with currentColor, add if missing
                // If icon is not monotone, remove this code
                await parseColors(svg, {
                    defaultColor: 'currentColor',
                    callback: (attr, colorStr, color) => (!color || isEmptyColor(color) ? colorStr : 'currentColor'),
                });
            }

            // Optimise
            runSVGO(svg);
        } catch (err) {
            // Invalid icon
            console.error(`Error parsing ${name}:`, err);
            iconSet.remove(name);
            return;
        }

        // Update icon
        iconSet.fromSVG(name, svg);
    });

    // Export
    return iconSet;
};

const createIconifyJSON = async (directory: string, prefix: string) => {
    const iconSet = await getIconSet(directory, prefix);
    const iconifyJSON: string = `${JSON.stringify(
        iconSet.export(),
        null,
        '\t',
    )}\n`;

    // Create output directory if it doesn't exist
    await fs.mkdir('build', { recursive: true });

    // Save to file
    await fs.writeFile(`build/${prefix}.json`, iconifyJSON, 'utf8');
};

const createIconPackage = async (directory: string, prefix: string) => {
    const iconSet = await getIconSet(directory, prefix);
    const target = (prefix === 'background-pattern' || prefix === 'background-pattern-decorative') ? prefix : `${prefix}-icons`;

    await exportIconPackage(iconSet, {
        target,
        module: true,
        package: {
            name: `@trajectxpert/icons/${prefix}-icons`,
            version: '1.0.0',
            bugs: 'https://gitlab.trajectxpert.nl/trajectxpert/icon-builder/-/issues',
            homepage: 'https://gitlab.trajectxpert.nl/trajectxpert/icon-builder/-/blob/main/README.md?ref_type=heads',
        },
        cleanup: true,
    });

    await generateIndexFiles(target, prefix);
};

export { createIconifyJSON, createIconPackage, generateIndexFiles };
