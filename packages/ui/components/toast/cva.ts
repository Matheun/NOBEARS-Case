import { cva } from "class-variance-authority";

export const cvaToastVariants = cva(
    `
        relative group pointer-events-auto p-4 pr-12 mx-2 mt-4 md:m-6 overflow-hidden rounded-2xl shadow-lg
        grid grid-cols-[auto_1fr_1fr] gap-y-3 gap-x-4
        transition-all

        bg-[--toast-bg] border border-[--toast-border] text-[--toast-fg]

        data-[swipe=cancel]:translate-x-0
        data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x]
        data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x]
        data-[swipe=move]:transition-none
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[swipe=end]:animate-out
        data-[state=closed]:fade-out-80
        data-[state=closed]:slide-out-to-right-full
        data-[state=open]:slide-in-from-top-full
        data-[state=open]:sm:slide-in-from-top-full

        [--toast-bg:theme(colors.background.primary.DEFAULT)]
        [--toast-border:theme(colors.border.primary)]
        [--toast-fg:theme(colors.text.tertiary.DEFAULT)]
        [--toast-title:theme(colors.foreground.primary)]
        [--toast-action:theme(colors.foreground.brand.primary.DEFAULT)]
        [--toast-icon:theme(colors.foreground.secondary.DEFAULT)]
        [--toast-icon-border:theme(colors.border.secondary)]
        [--toast-icon-ring:theme(colors.foreground.tertiary.DEFAULT)]
    `,
    {
        variants: {
            variant: {
                default: "",
                brand: "",
                error: "",
                warning: "",
                success: "",
                help: "",
                info: "",
            },
        },
    },
);

// md:row-span-1
// group-has-[[data-slot=description]]:md:row-span-2
// group-has-[[data-slot=description],[data-slot=action]]:md:row-span-3
export const cvaToastIconVariants = cva(
    `
        relative isolate flex items-center justify-center
        col-span-3 md:col-span-1
        row-span-full

        data-[slot=icon]:size-5
        data-[slot=boxed-icon]:size-10

        text-[--toast-icon-fg]
    `,
    {
        variants: {
            variant: {
                default: "",
                brand: `
                    [--toast-icon-fg:theme(colors.foreground.brand.primary.DEFAULT)]
                    [--toast-icon-ring:theme(colors.foreground.brand.primary.DEFAULT)]
                `,
                error: `
                    [--toast-icon-fg:theme(colors.foreground.error.primary)]
                    [--toast-icon-ring:theme(colors.foreground.error.primary)]
                `,
                warning: `
                    [--toast-icon-fg:theme(colors.foreground.warning.primary)]
                    [--toast-icon-ring:theme(colors.foreground.warning.primary)]
                `,
                success: `
                    [--toast-icon-fg:theme(colors.foreground.success.primary)]
                    [--toast-icon-ring:theme(colors.foreground.success.primary)]
                `,
                info: `
                    [--toast-icon-fg:theme(colors.foreground.info.primary)]
                    [--toast-icon-ring:theme(colors.foreground.info.primary)]
                `,
                help: `
                    [--toast-icon-fg:theme(colors.foreground.help.primary)]
                    [--toast-icon-ring:theme(colors.foreground.help.primary)]
                `,
            },
            decoration: {
                ring: `
                    before:absolute before:-inset-1 before:-z-10 before:rounded-full before:border before:border-2 before:border-[--toast-icon-ring] before:opacity-30 before:size-7
                    after:absolute after:-inset-2 after:-z-10 after:rounded-full after:border after:border-2 after:border-[--toast-icon-ring] after:opacity-10 after:size-9
                `,
                box: `
                    before:absolute before:-z-10 before:rounded-lg before:border before:border-[--toast-icon-border] before:size-10 before:bg-[--toast-bg] before:shadow-xs
                    [--toast-icon-fg:theme(colors.foreground.secondary.DEFAULT)]
                `,
            },
        },
    },
);

export const cvaToastTitleVariants = cva(
    `
        text-sm font-semibold leading-5 first-letter:uppercase
        col-span-3 

        group-has-[[data-slot=icon]]:mt-1
        md:group-has-[[data-slot=icon]]:mt-0
        md:group-has-[[data-slot=icon]]:col-span-2
        md:group-has-[[data-slot=icon]]:col-start-2
        md:group-has-[[data-slot=boxed-icon]]:col-span-2
        md:group-has-[[data-slot=boxed-icon]]:col-span-2

        text-[--toast-title]
    `,
);

export const cvaToastDescriptionVariants = cva(
    `
        text-sm leading-5 first-letter:uppercase -mt-2
        col-span-3

        md:group-has-[[data-slot=icon]]:col-span-2
        md:group-has-[[data-slot=icon]]:col-start-2
        md:group-has-[[data-slot=boxed-icon]]:col-span-2
        md:group-has-[[data-slot=boxed-icon]]:col-start-2
    `,
);

export const cvaToastCloseVariants = cva("");

export const cvaToastActionVariants = cva(
    `
        text-sm font-semibold leading-5 w-fit
        col-span-3

        md:group-has-[[data-slot=icon]]:col-span-2
        md:group-has-[[data-slot=icon]]:col-start-2
        md:group-has-[[data-slot=boxed-icon]]:col-span-2
        md:group-has-[[data-slot=boxed-icon]]:col-start-2

        hover:[--toast-action:theme(colors.brand.800)]

        text-[--toast-action]
    `,
);

export const cvaToastViewportVariants = cva(
    `
        fixed top-0 right-0 z-[100] pointer-events-none
        
        max-h-screen w-full md:max-w-md

        before:absolute
        before:right-0
        before:bottom-0
        before:top-0
        before:-z-10
        before:w-[calc(100%+2rem)]
        before:h-[inherit]
        before:max-h-72
        before:md:max-w-[500px]

        before:bg-[linear-gradient(178deg,rgba(0,0,0,0.10)2.75%,rgba(0,0,0,0.00)92.77%)]
        before:md:bg-[linear-gradient(210deg,rgba(0,0,0,0.10)0%,rgba(0,0,0,0.00)48.68%)]
    `,
);
