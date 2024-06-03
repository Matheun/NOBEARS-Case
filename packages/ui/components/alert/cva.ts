import { cva } from "class-variance-authority";

export const cvaAlertVariants = cva(
    `
        relative isolate w-full rounded-2xl p-4 shadow-xs group

        bg-[--alert-bg] border border-[--alert-border]

        [--alert-bg:theme(colors.background.primary.DEFAULT)]
        [--alert-border:theme(colors.border.primary)]
        [--alert-title:theme(colors.text.secondary.DEFAULT)]
        [--alert-description:theme(colors.text.tertiary.DEFAULT)]
        [--alert-icon:theme(colors.foreground.secondary.DEFAULT)]
        [--alert-icon-border:theme(colors.border.secondary)]
    `,
    {
        variants: {
            variant: {
                default: "",
                brand: "",
                error: "",
                warning: "",
                success: "",
                info: "",
                help: "",
            },
        },
    },
);

export const cvaAlertIconVariants = cva(
    `
        absolute isolate inline-flex items-center justify-center
        size-5

        text-[--alert-icon-fg]
    `,
    {
        variants: {
            variant: {
                default: `
                    [--alert-icon-fg:theme(colors.foreground.secondary.DEFAULT)]
                    [--alert-icon-ring:theme(colors.foreground.tertiary.DEFAULT)]
                `,
                brand: `
                    [--alert-icon-fg:theme(colors.foreground.brand.primary.DEFAULT)]
                    [--alert-icon-ring:theme(colors.foreground.brand.primary.DEFAULT)]
                `,
                error: `
                    [--alert-icon-fg:theme(colors.foreground.error.primary)]
                    [--alert-icon-ring:theme(colors.foreground.error.primary)]
                `,
                warning: `
                    [--alert-icon-fg:theme(colors.foreground.warning.primary)]
                    [--alert-icon-ring:theme(colors.foreground.warning.primary)]
                `,
                success: `
                    [--alert-icon-fg:theme(colors.foreground.success.primary)]
                    [--alert-icon-ring:theme(colors.foreground.success.primary)]
                `,
                info: `
                    [--alert-icon-fg:theme(colors.foreground.info.primary)]
                    [--alert-icon-ring:theme(colors.foreground.info.primary)]
                `,
                help: `
                    [--alert-icon-fg:theme(colors.foreground.help.primary)]
                    [--alert-icon-ring:theme(colors.foreground.help.primary)]
                `,
            },
            decoration: {
                ring: `
                    left-4 top-4

                    before:absolute before:-inset-1 before:-z-10 before:rounded-full before:border before:border-2 before:border-[--alert-icon-ring] before:opacity-30 before:size-7
                    after:absolute after:-inset-2 after:-z-10 after:rounded-full after:border after:border-2 after:border-[--alert-icon-ring] after:opacity-10 after:size-9
                `,
                box: `
                    top-[26px] left-[26px]
                    before:absolute before:-inset-2.5 before:-z-10 before:rounded-lg before:border before:border-[--alert-icon-border] before:size-10 before:bg-[--alert-bg] before:shadow-xs
                `,
            },
        },
    },
);

export const cvaAlertTitleVariants = cva(
    `
        mb-1 text-sm font-semibold leading-none tracking-tight text-[--alert-title]

        sm:group-has-[[data-slot=icon]]:pl-9
        sm:group-has-[[data-slot=icon]]:pt-0
        sm:group-has-[[data-slot=boxed-icon]]:pl-14
        sm:group-has-[[data-slot=boxed-icon]]:pt-0
        group-has-[[data-slot=icon]]:pl-0
        group-has-[[data-slot=icon]]:pt-9
        group-has-[[data-slot=boxed-icon]]:pl-0
        group-has-[[data-slot=boxed-icon]]:pt-14
    `,
);

export const cvaAlertDescriptionVariants = cva(
    `
        text-sm [&_p]:leading-relaxed text-[--alert-description]

        sm:group-has-[[data-slot=icon]]:pl-9
        sm:group-has-[[data-slot=boxed-icon]]:pl-14
        group-has-[[data-slot=icon]]:pl-0
        group-has-[[data-slot=boxed-icon]]:pl-0
    `,
);

export const cvaAlertActionsVariants = cva(
    `
        flex gap-x-3 mt-3

        sm:group-has-[[data-slot=icon]]:pl-9
        sm:group-has-[[data-slot=boxed-icon]]:pl-14
        group-has-[[data-slot=icon]]:pl-0
        group-has-[[data-slot=boxed-icon]]:pl-0
    `,
);
