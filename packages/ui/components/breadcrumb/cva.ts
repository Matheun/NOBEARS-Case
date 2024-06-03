import { cva } from "class-variance-authority";

export const cvaBreadcrumbVariants = cva("relative text-sm");

export const cvaBreadcrumbEllipsisVariants = cva(
    `
        relative flex w-3 h-5 items-end justify-center rounded-md
        w-7 h-7
        
        text-[--breadcrumb-item-fg]
        
    `,
);

export const cvaBreadcrumbIconVariants = cva(
    `
        relative -mx-1 size-5 shrink-0 
    `,
);

export const cvaBreadcrumbItemVariants = cva(
    `
        relative inline-block items-center gap-1.5 rounded-md py-1 px-2 font-medium
        min-w-7 h-7 shrink-0
        transition-colors

        *:first-letter:uppercase

        bg-[--breadcrumb-item-bg] text-[--breadcrumb-item-fg]

        has-[[aria-current=page]]:[--breadcrumb-item-bg:theme(colors.background.primary.hover)]
        has-[[aria-current=page]]:[--breadcrumb-item-fg:theme(colors.foreground.tertiary.hover)]
        has-[[aria-current=page]]:font-semibold

        hover:[--breadcrumb-item-bg:theme(colors.background.primary.hover)]
        hover:[--breadcrumb-item-fg:theme(colors.foreground.tertiary.hover)]
    `,
);

export const cvaBreadcrumbLinkVariants = cva("cursor-pointer");

export const cvaBreadcrumbListVariants = cva(
    `
        relative flex flex-wrap items-center break-words gap-2 md:gap-3
        
        [--breadcrumb-item-bg:theme(colors.background.primary.DEFAULT)]
        [--breadcrumb-item-fg:theme(colors.foreground.tertiary.DEFAULT)]
    `,
);

export const cvaBreadcrumbPageVariants = cva("");

export const cvaBreadcrumbSeparatorVariants = cva(
    `
        relative

        text-[--breadcrumb-separator-fg]

        [--breadcrumb-separator-fg:theme(colors.foreground.senary)]
    `,
);
