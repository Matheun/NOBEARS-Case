import { cva } from "class-variance-authority";

export const cvaPopoverContentVariants = cva(
    `
        z-50 w-72 rounded-lg border p-4 shadow-lg outline-none
        bg-[--popover-bg] border border-solid border-[--popover-border] text-[--popover-fg]
        
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
        
        [--popover-bg:theme(colors.background.primary.DEFAULT)]
        [--popover-border:theme(colors.border.secondary)]
        [--popover-fg:theme(colors.text.primary.DEFAULT)]
    `,
    {
        variants: {
            matchTriggerWidth: {
                true: "w-[var(--radix-popover-trigger-width)]",
                false: "",
            },
        },
    },
);
