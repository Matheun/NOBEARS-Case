import { cva } from "class-variance-authority";

export const cvaSwitchVariants = cva(
    `
        group relative inline-flex shrink-0 isolate cursor-pointer items-center rounded-full ring-offset-background
        transition-all

        bg-[--switch-bg] border border-[--switch-border]
        
        before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-[--switch-bg] before:transition-all

        after:absolute after:inset-0 after:-z-10 after:rounded-full after:shadow-[inset_0_1px_#ffffff25]

        focus-visible:outline-none outline-none
        focus-visible:ring-offset-0
        focus-visible:ring-4
        focus-visible:ring-[--switch-ring]

        data-[state=checked]:[--switch-bg:theme(colors.background.brand.solid.DEFAULT)]
        data-[state=checked]:[--switch-border:theme(colors.background.brand.solid.DEFAULT)]
        hover:data-[state=checked]:[--switch-bg:theme(colors.background.brand.solid.hover)]
        focus-visible:data-[state=checked]:[--switch-ring:theme(colors.ring.brand)]

        hover:data-[state=unchecked]:[--switch-bg:theme(colors.background.tertiary)]
        hover:data-[state=unchecked]:[--switch-border:theme(colors.border.primary)]
        focus-visible:data-[state=unchecked]:[--switch-border:theme(colors.border.primary)]

        data-[disabled]:pointer-events-none
        data-[disabled]:[--switch-border:theme(colors.border.secondary)]
        data-[disabled]:[--switch-fg:theme(colors.background.disabled.subtle)]
        data-[disabled]:[--switch-thumb-shadow:theme(boxShadow.none)]
        data-[disabled]:data-[state=checked]:[--switch-bg:theme(colors.background.brand.secondary)]
        data-[disabled]:data-[state=checked]:[--switch-border:theme(colors.background.brand.secondary)]

        [--switch-bg:theme(colors.background.secondary.DEFAULT)]
        [--switch-border:theme(colors.border.primary)]
        [--switch-fg:theme(colors.foreground.white)]
        [--switch-ring:theme(colors.ring.primary)]

    `,
    {
        variants: {
            size: {
                sm: "w-9 h-5",
                md: "w-11 h-6",
            },
        },
    },
);

export const cvaSwitchTumbVariants = cva(
    `
        block rounded-full ring-0 pointer-events-none shadow-xs
        transition-all

        bg-[--switch-fg] border border-[--switch-border] 
        
        data-[state=unchecked]:translate-x-[1px]
    `,
    {
        variants: {
            size: {
                sm: "size-4 data-[state=checked]:translate-x-[17px]",
                md: "size-5 data-[state=checked]:translate-x-[21px]",
            },
        },
    },
);
