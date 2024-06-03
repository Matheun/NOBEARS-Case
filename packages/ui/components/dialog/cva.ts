import { cva } from "class-variance-authority";

export const cvaDialogOverlayVariants = cva(
    `
        fixed inset-0 z-50 backdrop-blur-sm
        
        bg-[--dialog-overlay-bg]
        
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0

        [--dialog-overlay-bg:theme(colors.background.overlay.alt)]
    `,
);

export const cvaDialogCloseVariants = cva("");

export const cvaDialogContentVariants = cva(
    `
        fixed z-50 grid w-[calc(100%-2rem)] max-w-lg shadow-xl rounded-2xl duration-200 px-4 md:px-6 m-4 overflow-hidden
        left-[--dialog-offset] top-[--dialog-offset] -translate-x-1/2 -translate-y-1/2 

        bg-[--dialog-bg] text-[--dialog-fg]

        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0
        data-[state=closed]:zoom-out-95
        data-[state=open]:zoom-in-95
        data-[state=closed]:slide-out-to-left-1/2
        data-[state=closed]:slide-out-to-top-48
        data-[state=open]:slide-in-from-left-1/2
        data-[state=open]:slide-in-from-top-48

        [--dialog-bg:theme(colors.background.primary.DEFAULT)]
        [--dialog-fg:theme(colors.foreground.tertiary.DEFAULT)]
        [--dialog-offset:calc(50%-1rem)]
    `,
);

export const cvaDialogDescriptionVariants = cva("text-sm");

export const cvaDialogFooterVariants = cva(
    `
        flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pb-4 pt-6 md:pb-6 md:pt-8

        *:w-full sm:*:w-fit
    `,
);

export const cvaDialogHeaderVariants = cva(
    `
        flex flex-col gap-y-1 py-5 md:pt-6
    `,
);

export const cvaDialogIconVariants = cva(
    `
        size-12 grid place-content-center mb-2 md:mb-3

        bg-[--dialog-icon-bg] border-[--dialog-icon-border] text-[--dialog-icon-fg]

        [--dialog-icon-bg:theme(colors.background.primary.DEFAULT)]
        [--dialog-icon-border:theme(colors.border.secondary)]
        [--dialog-icon-fg:theme(colors.foreground.secondary.DEFAULT)]
        [--dialog-icon-line-fg:theme(colors.border.secondary)]
    `,
    {
        variants: {
            shape: {
                square: "rounded-xl shadow-xs border",
                circle: "rounded-full",
            },
            color: {
                default: "",
                brand: `
                    [--dialog-icon-bg:theme(colors.background.brand.secondary)]
                    [--dialog-icon-border:theme(colors.ring.brand)]
                    [--dialog-icon-fg:theme(colors.foreground.brand.primary.DEFAULT)]
                `,
                error: `
                    [--dialog-icon-bg:theme(colors.background.error.secondary)]
                    [--dialog-icon-border:theme(colors.ring.error)]
                    [--dialog-icon-fg:theme(colors.foreground.error.primary)]
                `,
                warning: `
                    [--dialog-icon-bg:theme(colors.background.warning.secondary)]
                    [--dialog-icon-border:theme(colors.ring.warning)]
                    [--dialog-icon-fg:theme(colors.foreground.warning.primary)]
                `,
                success: `
                    [--dialog-icon-bg:theme(colors.background.success.secondary)]
                    [--dialog-icon-border:theme(colors.ring.success)]
                    [--dialog-icon-fg:theme(colors.foreground.success.primary)]
                `,
                info: `
                    [--dialog-icon-bg:theme(colors.background.info.secondary)]
                    [--dialog-icon-border:theme(colors.ring.info)]
                    [--dialog-icon-fg:theme(colors.foreground.info.primary)]
                `,
                help: `
                    [--dialog-icon-bg:theme(colors.background.help.secondary)]
                    [--dialog-icon-border:theme(colors.ring.help)]
                    [--dialog-icon-fg:theme(colors.foreground.help.primary)]
                `,
            },
        },
    },
);

export const cvaDialogScrollContentVariants = cva(
    `
        relative z-50 grid w-full max-w-lg shadow-xl rounded-2xl px-4 md:px-6
        duration-200

        bg-[--dialog-bg]

        [--dialog-bg:theme(colors.background.primary.DEFAULT)]
    `,
);
export const cvaDialogScrollContentOverlayVariants = cva(
    `
        fixed inset-0 z-50 backdrop-blur-sm grid place-items-center overflow-y-auto

        bg-[--dialog-overlay-bg] text-[--dialog-fg]
        
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0

        [--dialog-overlay-bg:theme(colors.background.overlay.alt)]
        [--dialog-fg:theme(colors.foreground.tertiary.DEFAULT)]
    `,
);

export const cvaDialogTitleVariants = cva(
    `
        text-lg font-semibold leading-7
    `,
);
