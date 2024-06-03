import { cva } from "class-variance-authority";

export const cvaKbdVariants = cva(
    `
        relative font-regular rounded-sm

        bg-[--kbd-bg] border-[--kbd-border] text-[--kbd-fg]

        [--kbd-bg:theme(colors.transparent)]
        [--kbd-border:theme(colors.border.secondary)]
        [--kbd-fg:theme(colors.text.quaternary.DEFAULT)]
    `,
    {
        variants: {
            outlined: {
                true: `
                    border

                    [--kbd-bg:theme(colors.background.secondary.alt)]
                    [--kbd-fg:theme(colors.text.tertiary.DEFAULT)]
                `,
                false: "",
            },
            size: {
                sm: "py-0.5 px-1 text-xs",
                md: "py-0.5 px-1 text-sm",
            },
        },
    },
);
