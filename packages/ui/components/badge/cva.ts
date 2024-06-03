import { cva } from "class-variance-authority";

export const cvaBadgeVariants = cva(
    `
        inline-flex items-center box-border font-medium
        
        bg-[--badge-bg] border border-[--badge-border] text-[--badge-fg]
    `,
    {
        variants: {
            color: {
                default: `
                    [--badge-bg:theme(colors.utility.gray.50)]
                    [--badge-border:theme(colors.utility.gray.200)]
                    [--badge-fg:theme(colors.utility.gray.700)]
                    [--badge-icon-fg:theme(colors.utility.gray.500)]
                `,
                brand: `
                    [--badge-bg:theme(colors.utility.brand.50)]
                    [--badge-border:theme(colors.utility.brand.200)]
                    [--badge-fg:theme(colors.utility.brand.700)]
                    [--badge-icon-fg:theme(colors.utility.brand.500)]
                `,
                error: `
                    [--badge-bg:theme(colors.utility.error.50)]
                    [--badge-border:theme(colors.utility.error.200)]
                    [--badge-fg:theme(colors.utility.error.700)]
                    [--badge-icon-fg:theme(colors.utility.error.500)]
                `,
                warning: `
                    [--badge-bg:theme(colors.utility.warning.50)]
                    [--badge-border:theme(colors.utility.warning.200)]
                    [--badge-fg:theme(colors.utility.warning.700)]
                    [--badge-icon-fg:theme(colors.utility.warning.500)]
                `,
                success: `
                    [--badge-bg:theme(colors.utility.success.50)]
                    [--badge-border:theme(colors.utility.success.200)]
                    [--badge-fg:theme(colors.utility.success.700)]
                    [--badge-icon-fg:theme(colors.utility.success.500)]
                `,
                info: `
                    [--badge-bg:theme(colors.utility.info.50)]
                    [--badge-border:theme(colors.utility.info.200)]
                    [--badge-fg:theme(colors.utility.info.700)]
                    [--badge-icon-fg:theme(colors.utility.info.500)]
                `,
                help: `
                    [--badge-bg:theme(colors.utility.help.50)]
                    [--badge-border:theme(colors.utility.help.200)]
                    [--badge-fg:theme(colors.utility.help.700)]
                    [--badge-icon-fg:theme(colors.utility.help.500)]
                `,
                "gray-blue": `
                    [--badge-bg:theme(colors.utility.gray-blue.50)]
                    [--badge-border:theme(colors.utility.gray-blue.200)]
                    [--badge-fg:theme(colors.utility.gray-blue.700)]
                    [--badge-icon-fg:theme(colors.utility.gray-blue.500)]
                `,
                "blue-light": `
                    [--badge-bg:theme(colors.utility.blue-light.50)]
                    [--badge-border:theme(colors.utility.blue-light.200)]
                    [--badge-fg:theme(colors.utility.blue-light.700)]
                    [--badge-icon-fg:theme(colors.utility.blue-light.500)]
                `,
                blue: `
                    [--badge-bg:theme(colors.utility.blue.50)]
                    [--badge-border:theme(colors.utility.blue.200)]
                    [--badge-fg:theme(colors.utility.blue.700)]
                    [--badge-icon-fg:theme(colors.utility.blue.500)]
                `,
                "blue-dark": `
                    [--badge-bg:theme(colors.utility.blue-dark.50)]
                    [--badge-border:theme(colors.utility.blue-dark.200)]
                    [--badge-fg:theme(colors.utility.blue-dark.700)]
                    [--badge-icon-fg:theme(colors.utility.blue-dark.500)]
                `,
                indigo: `
                    [--badge-bg:theme(colors.utility.indigo.50)]
                    [--badge-border:theme(colors.utility.indigo.200)]
                    [--badge-fg:theme(colors.utility.indigo.700)]
                    [--badge-icon-fg:theme(colors.utility.indigo.500)]
                `,
                purple: `
                    [--badge-bg:theme(colors.utility.purple.50)]
                    [--badge-border:theme(colors.utility.purple.200)]
                    [--badge-fg:theme(colors.utility.purple.700)]
                    [--badge-icon-fg:theme(colors.utility.purple.500)]
                `,
                pink: `
                    [--badge-bg:theme(colors.utility.pink.50)]
                    [--badge-border:theme(colors.utility.pink.200)]
                    [--badge-fg:theme(colors.utility.pink.700)]
                    [--badge-icon-fg:theme(colors.utility.pink.500)]
                `,
                orange: `
                    [--badge-bg:theme(colors.utility.orange.50)]
                    [--badge-border:theme(colors.utility.orange.200)]
                    [--badge-fg:theme(colors.utility.orange.700)]
                    [--badge-icon-fg:theme(colors.utility.orange.500)]
                `,
            },
            rounded: {
                default: "rounded-full",
                rectangle: "rounded-md",
            },
            variant: {
                default: "",
                modern: "shadow-xs rounded-md",
            },
            size: {
                sm: "px-2 py-0.5 gap-x-0.5 text-xs h-5.5",
                md: "px-2.5 py-0.5 gap-x-1 text-sm h-6",
                lg: "px-3 py-1 gap-x-1 text-sm h-7",
            },
            icon: {
                true: "",
                false: "",
            },
            prependIcon: {
                true: "",
                false: "",
            },
            appendIcon: {
                true: "",
                false: "",
            },
            leadingDot: {
                true: "",
                false: "",
            },
        },
        compoundVariants: [
            { icon: false, prependIcon: true, size: "sm", class: "pl-1.5" },
            { icon: false, prependIcon: true, size: "md", class: "pl-2" },
            { icon: false, prependIcon: true, size: "lg", class: "pl-2.5" },
            { icon: false, appendIcon: true, size: "sm", class: "pr-1.5" },
            { icon: false, appendIcon: true, size: "md", class: "pr-2" },
            { icon: false, appendIcon: true, size: "lg", class: "pr-2.5" },
            { icon: true, size: "sm", class: "p-[5px]" },
            { icon: true, size: "md", class: "p-1.5" },
            { icon: true, size: "lg", class: "p-2" },
            { icon: false, leadingDot: true, size: "sm", class: "pl-1.5 gap-x-1" },
            { icon: false, leadingDot: true, size: "md", class: "pl-2 gap-x-1.5" },
            { icon: false, leadingDot: true, size: "lg", class: "pl-2.5 gap-x-1.5" },
            {
                variant: "modern",
                class: `
                    [--badge-bg:theme(colors.background.primary.DEFAULT)]
                    [--badge-border:theme(colors.border.primary)]
                    [--badge-fg:theme(colors.utility.gray.700)]
                `,
            },
            {
                leadingDot: true,
                color: "default",
                variant: "modern",
                class: `
                    [--badge-icon-fg:theme(colors.utility.gray.500)]
                `,
            },
            {
                leadingDot: false,
                variant: "modern",
                class: `
                    [--badge-icon-fg:theme(colors.utility.gray.500)]
                `,
            },
        ],
    },
);
