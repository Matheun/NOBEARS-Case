import { cva } from "class-variance-authority";

export const cvaCheckboxVariants = cva(
    `
        relative shrink-0 isolate ring-offset-background
        transition-all

        bg-[--checkbox-bg] border border-[--checkbox-border] text-[--checkbox-fg]

        focus-visible:outline-none outline-none
        focus-visible:ring-[--checkbox-ring]
        focus-visible:ring-offset-0
        focus-visible:ring-4

        after:absolute after:inset-0 after:-z-10 after:shadow-[inset_0_1px_#ffffff25]

        hover:data-[state=unchecked]:[--checkbox-bg:theme(colors.background.secondary.DEFAULT)]

        data-[state=checked]:[--checkbox-bg:theme(colors.background.brand.solid.DEFAULT)]
        data-[state=checked]:[--checkbox-border:theme(colors.background.brand.solid.DEFAULT)]
        data-[state=checked]:[--checkbox-ring:theme(colors.ring.brand)]
        hover:data-[state=checked]:[--checkbox-bg:theme(colors.background.brand.solid.hover)]

        data-[state=indeterminate]:[--checkbox-bg:theme(colors.background.brand.solid.DEFAULT)]
        data-[state=indeterminate]:[--checkbox-border:theme(colors.background.brand.solid.DEFAULT)]
        data-[state=indeterminate]:[--checkbox-ring:theme(colors.ring.brand)]
        hover:data-[state=indeterminate]:[--checkbox-bg:theme(colors.background.brand.solid.hover)]

        data-[disabled]:pointer-events-none
        data-[disabled]:[--checkbox-bg:theme(colors.background.disabled.subtle)]
        data-[disabled]:[--checkbox-border:theme(colors.background.disabled.DEFAULT)]
        data-[disabled]:data-[state=checked]:[--checkbox-bg:theme(colors.background.brand.secondary)]
        data-[disabled]:data-[state=checked]:[--checkbox-border:theme(colors.background.brand.secondary)]
        data-[disabled]:data-[state=indeterminate]:[--checkbox-bg:theme(colors.background.brand.secondary)]
        data-[disabled]:data-[state=indeterminate]:[--checkbox-border:theme(colors.background.brand.secondary)]

        [--checkbox-bg:theme(colors.background.primary.DEFAULT)]
        [--checkbox-border:theme(colors.border.primary)]
        [--checkbox-fg:theme(colors.foreground.white)]
        [--checkbox-ring:theme(colors.ring.primary)]
    `,
    {
        variants: {
            size: {
                xs: "size-4 rounded-sm after:rounded-sm-inset",
                sm: "size-5 rounded-md after:rounded-md-inset",
            },
        },
    },
);
