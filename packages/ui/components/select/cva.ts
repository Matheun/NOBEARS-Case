import { cva } from "class-variance-authority";

export const cvaSelectVariants = cva("");

export const cvaSelectContentVariants = cva(
    `
        relative z-50 max-h-96 min-w-32 overflow-hidden rounded-lg shadow-lg

        bg-[--select-content-bg] border border-[--select-content-border] text-[--select-content-fg]
        
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0
        data-[state=closed]:zoom-out-95
        data-[state=open]:zoom-in-95
        data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2
        data-[side=right]:slide-in-from-left-2
        data-[side=top]:slide-in-from-bottom-2
        
        [--select-content-bg:theme(colors.background.primary.DEFAULT)]
        [--select-content-border:theme(colors.border.secondary)]
        [--select-content-fg:theme(colors.text.primary.DEFAULT)]
        [--select-content-ring:theme(colors.ring.brand)]
        [--select-content-placeholder:theme(colors.text.placeholder.DEFAULT)]
    `,
    {
        variants: {
            position: {
                popper: `
                    data-[side=bottom]:translate-y-1
                    data-[side=left]:-translate-x-1
                    data-[side=right]:translate-x-1
                    data-[side=top]:-translate-y-1
                `,
                "item-aligned": "",
            },
        },
    },
);
export const cvaSelectViewportVariants = cva(
    `
        p-1
    `,
    {
        variants: {
            position: {
                popper: `
                    h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]
                `,
                "item-aligned": "",
            },
        },
    },
);

export const cvaSelectGroupVariants = cva("w-full p-1");

export const cvaSelectItemVariants = cva(
    `
        relative flex w-full cursor-default select-none items-center rounded-md px-2.5 py-2 pl-8 outline-none
        text-sm font-medium
        transition-colors

        bg-[--select-item-bg] text-[--select-item-fg]

        focus:[--select-item-bg:theme(colors.background.active)]
        focus:[--select-item-fg:theme(colors.text.secondary.hover)]
        
        data-[disabled]:pointer-events-none
        data-[disabled]:opacity-50

        aria-selected:![--select-item-fg:theme(colors.foreground.brand.primary.DEFAULT)]

        [--select-item-bg:theme(colors.background.primary.DEFAULT)]
        [--select-item-fg:theme(colors.text.primary.DEFAULT)]
        [--select-item-indicator-fg:theme(colors.foreground.brand.primary.DEFAULT)]
    `,
);

export const cvaSelectItemIndicatorVariants = cva(
    `
        absolute left-2 flex size-5 items-center justify-center
        
        text-[--select-item-indicator-fg]
    `,
);

export const cvaSelectItemLabelVariants = cva(
    `
        py-1.5 pl-8 pr-2 text-sm font-semibold
    `,
);

export const cvaSelectScrollDownButtonVariants = cva(
    `
        flex cursor-default items-center justify-center py-1
    `,
);

export const cvaSelectScrollUpButtonVariants = cva(
    `
        flex cursor-default items-center justify-center py-1
    `,
);

export const cvaSelectSeparatorVariants = cva(
    `
        bg-[--select-border] -mx-1 my-1 h-px
    `,
);
// flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm
export const cvaSelectTriggerVariants = cva(
    `
        text-md leading-6 font-regular peer rounded-lg shadow-xs w-full relative flex items-center justify-between
        transition-all ease-in-out duration-150
        ring-offset-background

        bg-[--select-trigger-bg] border border-solid border-[--select-trigger-border] text-[--select-trigger-fg]
        
        focus-visible:outline-none outline-none
        focus-visible:ring-offset-0
        focus-visible:ring-4
        focus-visible:[--select-trigger-border:theme(colors.border.brand.DEFAULT)]
        focus-visible:ring-[--select-trigger-ring]

        [&[data-placeholder]]:text-[--select-trigger-placeholder]

        disabled:cursor-not-allowed
        disabled:opacity-50
        
        [&>span]:line-clamp-1

        [&>[data-slot=chevron-icon]]:text-[--select-trigger-icon-fg]
        [&>[data-slot=chevron-icon]]:transition
        [&>[data-slot=chevron-icon]]:data-[state=open]:-scale-y-100
        
        [--select-trigger-bg:theme(colors.background.primary.DEFAULT)]
        [--select-trigger-border:theme(colors.border.primary)]
        [--select-trigger-fg:theme(colors.text.primary.DEFAULT)]
        [--select-trigger-ring:theme(colors.ring.brand)]
        [--select-trigger-placeholder:theme(colors.text.placeholder.DEFAULT)]
        [--select-trigger-icon-fg:theme(colors.text.primary.DEFAULT)]
    `,
    {
        variants: {
            size: {
                sm: "h-10 py-2 px-3",
                md: "h-11 py-2.5 px-3.5",
            },
        },
    },
);
