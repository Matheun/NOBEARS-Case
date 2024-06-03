import { cva } from "class-variance-authority";

export const cvaHoverCardContentVariants = cva(
    `
        z-50 w-64 rounded-md border py-2 px-3 shadow-xl outline-none
        bg-[--hover-card-bg] border border-solid border-[--hover-card-border] text-[--hover-card-fg]
        
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
        
        [--hover-card-bg:theme(colors.background.primary.DEFAULT)]
        [--hover-card-border:theme(colors.border.secondary)]
        [--hover-card-fg:theme(colors.text.primary.DEFAULT)]
    `,
    {
        variants: {},
    },
);
