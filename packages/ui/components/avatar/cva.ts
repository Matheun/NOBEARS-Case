import { cva } from "class-variance-authority";

export const cvaAvatarVariants = cva(
    `
        relative inline-flex items-center justify-center font-semibold select-none shrink-0 overflow-hidden rounded-[--avatar-border-radius]

        bg-[--avatar-bg] text-[--avatar-fg]

        after:absolute after:inset-0 after:z-10 after:rounded-[--avatar-border-radius] after:border after:border-[--avatar-contrast-border] after:opacity-[8%]

        [--avatar-bg:theme(colors.background.tertiary)]
        [--avatar-border:theme(colors.background.tertiary)]
        [--avatar-fg:theme(colors.foreground.quaternary.DEFAULT)]
        [--avatar-contrast-border:theme(colors.black)]
        dark:[--avatar-contrast-border:theme(colors.white)]
        [--avatar-border-radius:theme(borderRadius.full)]
    `,
    {
        variants: {
            size: {
                xs: "size-6",
                sm: "size-8",
                md: "size-10",
                lg: "size-12",
                xl: "size-14",
                "2xl": "size-16",
            },
            shape: {
                circle: "[--avatar-border-radius:theme(borderRadius.full)]",
                square: "[--avatar-border-radius:theme(borderRadius.md)]",
            },
        },
    },
);

export const cvaAvatarFallbackVariants = cva(
    `
        relative font-semibold size-full flex items-center justify-center

        [--avatar-bg:theme(colors.background.tertiary)]
    `,
    {
        variants: {
            size: {
                xs: "text-xs",
                sm: "text-sm",
                md: "text-md",
                lg: "text-lg",
                xl: "text-xl",
                "2xl": "text-display-xs",
            },
        },
    },
);
