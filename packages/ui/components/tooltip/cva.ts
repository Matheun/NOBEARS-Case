import { cva } from "class-variance-authority";

export const cvaTooltipContentVariants = cva(
    `
        relative isolate overflow-hidden rounded-lg shadow-lg z-50
        text-xs font-semibold
        animate-in fade-in-0 zoom-in-95

        bg-[--tooltip-content-bg] border border-[--tooltip-content-border] *:text-[--tooltip-content-fg]

        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=closed]:zoom-out-95

        data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2

        [--tooltip-content-bg:theme(colors.background.primary.DEFAULT)]
        [--tooltip-content-border:theme(colors.border.secondary)]
        [--tooltip-content-fg:theme(colors.foreground.secondary.DEFAULT)]
    `,
    {
        variants: {
            theme: {
                dark: `
                    [--tooltip-content-bg:theme(colors.background.primary.solid)]
                    [--tooltip-content-border:theme(colors.background.primary.solid)]
                    [--tooltip-content-fg:theme(colors.foreground.white)]
                `,
                light: "",
            },
            size: {
                sm: "px-2 py-1",
                md: "px-3 py-2",
            },
        },
    },
);
