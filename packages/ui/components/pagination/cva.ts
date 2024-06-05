import { cva } from "class-variance-authority";

export const cvaPaginationVariants = cva(
    `
        text-[--pagination-fg]
        
        [--pagination-bg:theme(colors.transparent)]
        [--pagination-fg:theme(colors.text.tertiary.DEFAULT)]
        [--pagination-ring:theme(colors.ring.primary)]
    `,
);

export const cvaPaginationEllipsisVariants = cva("flex items-end justify-center size-10 pb-2");

export const cvaPaginationControlVariants = cva(
    `
        size-10 p-0

        focus-visible:ring-[--pagination-ring]
    `,
);

export const cvaPaginationFirstVariants = cva("");
export const cvaPaginationLastVariants = cva("");

export const cvaPaginationListVariants = cva("flex items-center gap-0.5");
export const cvaPaginationListItemVariants = cva(
    `
        size-10 p-0 text-sm font-medium

        bg-[--pagination-bg] text-[--pagination-fg]

        hover:[--pagination-bg:theme(colors.background.primary.hover)]
        hover:[--pagination-fg:theme(colors.text.secondary.hover)]

        focus-visible:[--pagination-fg:theme(colors.text.secondary.hover)]
        focus-visible:ring-[--pagination-ring]

        data-[selected]:[--pagination-bg:theme(colors.background.primary.hover)]
        data-[selected]:[--pagination-fg:theme(colors.text.secondary.hover)]
    `,
);

export const cvaPaginationNextVariants = cva("");
export const cvaPaginationPrevVariants = cva("");
