import { cva } from "class-variance-authority";

export const cvaRadioGroupVariants = cva("grid gap-2 data-[disabled]:pointer-events-none");

export const cvaRadioGroupItemVariants = cva(
    `
        relative isolate aspect-square ring-offset-background rounded-full
        transition-all

        bg-[--radio-group-item-bg] border border-[--radio-group-item-border] text-[--radio-group-item-fg]

        focus-visible:outline-none
        focus-visible:ring-[--radio-group-item-ring]
        focus-visible:ring-offset-0
        focus-visible:ring-4
        
        after:absolute after:inset-0 after:-z-10 after:shadow-[inset_0_1px_#ffffff25] after:rounded-full

        hover:data-[state=unchecked]:[--radio-group-item-bg:theme(colors.background.secondary.DEFAULT)]

        data-[state=checked]:[--radio-group-item-bg:theme(colors.background.brand.solid.DEFAULT)]
        data-[state=checked]:[--radio-group-item-border:theme(colors.background.brand.solid.DEFAULT)]
        hover:data-[state=checked]:[--radio-group-item-bg:theme(colors.background.brand.solid.hover)]
        

        data-[disabled]:pointer-events-none
        data-[disabled]:[--radio-group-item-bg:theme(colors.background.disabled.subtle)]
        data-[disabled]:[--radio-group-item-border:theme(colors.background.disabled.DEFAULT)]
        data-[disabled]:data-[state=checked]:[--radio-group-item-bg:theme(colors.background.brand.secondary)]
        data-[disabled]:data-[state=checked]:[--radio-group-item-border:theme(colors.background.brand.secondary)]

        [--radio-group-item-bg:theme(colors.background.primary.DEFAULT)]
        [--radio-group-item-border:theme(colors.border.primary)]
        [--radio-group-item-fg:theme(colors.white)]
        [--radio-group-item-ring:theme(colors.ring.brand)]
    `,
    {
        variants: {
            size: {
                sm: "size-4",
                md: "size-5",
            },
        },
    },
);
