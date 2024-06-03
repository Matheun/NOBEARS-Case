import { cva } from "class-variance-authority";

export const cvaSeparatorVariants = cva(
    `
        shrink-0 transition-all h-fit relative flex items-center justify-center overflow-hidden


    `,
    {
        variants: {
            variant: {
                primary: "[--separator-border:theme(colors.border.primary)]",
                secondary: "[--separator-border:theme(colors.border.secondary)]",
                tertiary: "[--separator-border:theme(colors.border.tertiary)]",
            },
            orientation: {
                horizontal: "w-full",
                vertical: "h-full",
            },
            hasContent: {
                true: "gap-2",
            },
            contentType: {
                heading: "text-lg font-semibold text-text-primary leading-7",
                text: "text-sm font-medium text-text-tertiary leading-5",
                // button: "",
                // "button-group": "",
            },
        },
    },
);

export const cvaSeparatorLineVariants = cva(
    "shrink-0 transition-all bg-[--separator-border] rounded-full",
    {
        variants: {
            variant: {
                primary: "[--separator-border:theme(colors.border.primary)]",
                secondary: "[--separator-border:theme(colors.border.secondary)]",
                tertiary: "[--separator-border:theme(colors.border.tertiary)]",
            },
            orientation: {
                horizontal: "h-px w-full",
                vertical: "h-full w-px",
            },
            straightEdges: {
                true: "rounded-none",
            },
        },
    },
);
