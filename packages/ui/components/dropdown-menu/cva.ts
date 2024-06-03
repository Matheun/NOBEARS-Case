import { cva } from "class-variance-authority";

export const cvaDropdownMenuContentVariants = cva(
    `
        z-50 min-w-32 overflow-hidden rounded-lg p-1 shadow-lg

        bg-[--dropdown-menu-bg] border border-[--dropdown-menu-border] text-[--dropdown-menu-fg]
        
        data-[state=open]:animate-in
        data-[state=open]:fade-in-0
        data-[state=open]:zoom-in-95

        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=closed]:zoom-out-95

        data-[side=top]:slide-in-from-bottom-2
        data-[side=right]:slide-in-from-left-2
        data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2

        [--dropdown-menu-bg:theme(colors.background.primary.DEFAULT)]
        [--dropdown-menu-border:theme(colors.border.secondary)]
        [--dropdown-menu-fg:theme(colors.text.secondary.DEFAULT)]
        [--dropdown-menu-icon-fg:theme(colors.text.quaternary.DEFAULT)]
    `,
);

export const cvaDropdownMenuItemVariants = cva(
    `
        relative isolate flex items-center select-none rounded-md outline-none px-2.5 py-2 min-w-56
        text-sm font-medium
        transition-colors

        bg-[--dropdown-menu-bg] text-[--dropdown-menu-fg]

        focus:[--dropdown-menu-bg:theme(colors.background.active)]
        focus:[--dropdown-menu-fg:theme(colors.text.secondary.hover)]

        data-[disabled]:pointer-events-none
        data-[disabled]:opacity-50

        [&>[data-slot=icon]]:mr-2
        [&>[data-slot=shortcut]]:ml-auto
        [&>[data-slot=shortcut]]:text-[--dropdown-menu-icon-fg]
        [&>[data-slot=shortcut]]:text-xs
        [&>[data-slot=shortcut]]:font-normal
    `,
    {
        variants: {
            inset: {
                true: "pl-8",
                false: "",
            },
        },
    },
);

export const cvaDropdownMenuLabelVariants = cva(
    "text-[--dropdown-menu-fg] px-2.5 py-1.5 text-sm font-semibold",
    {
        variants: {
            inset: {
                true: "pl-8",
                false: "",
            },
        },
    },
);

export const cvaDropdownMenuSeparatorVariants = cva("bg-[--dropdown-menu-border] -mx-1 my-1 h-px");

export const cvaDropdownMenuSubContentVariants = cva(
    `
        z-50 min-w-32 overflow-hidden rounded-lg p-1 shadow-lg

        bg-[--dropdown-menu-bg] border border-[--dropdown-menu-border] text-[--dropdown-menu-fg]
        
        data-[state=open]:animate-in
        data-[state=open]:fade-in-0
        data-[state=open]:zoom-in-95

        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=closed]:zoom-out-95

        data-[side=top]:slide-in-from-bottom-2
        data-[side=right]:slide-in-from-left-2
        data-[side=bottom]:slide-in-from-top-2
        data-[side=left]:slide-in-from-right-2
    `,
);

export const cvaDropdownMenuSubTriggerVariants = cva(
    `
        flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none

        bg-[--dropdown-menu-bg]

        focus:[--dropdown-menu-bg:theme(colors.background.active)]
        data-[state=open]:[--dropdown-menu-bg:theme(colors.background.active)]
    `,
);
