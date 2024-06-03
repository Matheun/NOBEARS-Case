import { cva } from "class-variance-authority";

export const cvaButtonVariants = cva(
    `
        relative isolate inline-flex items-center justify-center whitespace-nowrap flex-shrink-0
        font-semibold
        transition-all
        focus-visible:outline-none outline-none
        disabled:pointer-events-none

        bg-[--btn-bg]

        [--btn-bg:theme(colors.background.primary.DEFAULT)]
    `,
    {
        variants: {
            variant: {
                default: `
                    border-[--btn-border] text-[--btn-fg]

                    before:absolute before:inset-0 before:-z-10 before:rounded-lg-inset before:bg-[--btn-bg] before:shadow-xs
                    disabled:before:shadow-none
                    
                    after:absolute after:inset-0 after:-z-10 after:rounded-lg-inset after:shadow-[inset_0_1px_#ffffff15] after:hover:bg-[--btn-hover-overlay] after:transition-all

                    disabled:[--btn-bg:theme(colors.background.disabled.DEFAULT)]
                    disabled:[--btn-fg:theme(colors.foreground.disabled.DEFAULT)]
                    disabled:[--btn-border:theme(colors.border.disabled.subtle)]

                    [--btn-fg:theme(colors.white)]
                `,
                outlined: `
                    hover:bg-[--btn-hover-overlay]
                    border-[--btn-border]
                    text-[--btn-fg]

                    disabled:[--btn-bg:theme(colors.background.primary.DEFAULT)]
                    disabled:[--btn-fg:theme(colors.foreground.disabled.DEFAULT)]
                    disabled:[--btn-border:theme(colors.border.disabled.subtle)]
                `,
                text: `
                    hover:bg-[--btn-hover-overlay]
                    border-none
                    text-[--btn-fg]

                    disabled:[--btn-fg:theme(colors.foreground.disabled.DEFAULT)]

                    [--btn-bg:theme(colors.background.primary.DEFAULT)]
                `,
                plain: "text-[--btn-fg] disabled:[--btn-fg:theme(colors.foreground.disabled.DEFAULT)] !p-0",
                close: `
                    border-none
                    text-[--btn-fg]

                    disabled:[--btn-fg:theme(colors.foreground.disabled.DEFAULT)]

                    hover:[--btn-bg:theme(colors.background.primary.hover)]
                    hover:[--btn-fg:theme(colors.foreground.quinary.hover)]

                    [--btn-bg:theme(colors.background.primary.DEFAULT)]
                    [--btn-fg:theme(colors.foreground.quinary.DEFAULT)]
                    [--btn-ring:theme(colors.ring.primary)]
                `,
            },
            color: {
                default: "",
                brand: "",
                error: "",
            },
            size: {
                xs: "px-2 gap-x-1 text-xs h-8",
                sm: "px-2.5 gap-x-1.5 text-sm h-9",
                md: "px-3.5 gap-x-1.5 text-sm h-10",
                lg: "px-4 gap-x-1.5 text-md h-11",
                xl: "px-4.5 gap-x-1.5 text-md h-12",
                "2xl": "px-5.5 gap-x-2.5 text-lg h-14",
            },
            iconOnly: {
                true: "p-0",
                false: "",
            },
            block: {
                true: "w-full",
                false: "w-fit",
            },
        },
        compoundVariants: [
            { iconOnly: true, size: "xs", class: "size-8" },
            { iconOnly: true, size: "sm", class: "size-9" },
            { iconOnly: true, size: "md", class: "size-10" },
            { iconOnly: true, size: "lg", class: "size-11" },
            { iconOnly: true, size: "xl", class: "size-12" },
            { iconOnly: true, size: "2xl", class: "size-14" },
            {
                variant: ["default", "outlined"],
                class: "border",
            },
            {
                variant: ["default", "outlined", "text", "close"],
                class: "rounded-lg focus-visible:ring-offset-0 focus-visible:ring-4 focus-visible:ring-[--btn-ring]",
            },
            {
                variant: "default",
                color: ["brand", "default"],
                class: `
                    [--btn-bg:theme(colors.background.brand.solid.DEFAULT)]
                    [--btn-border:theme(colors.brand.600)]
                    [--btn-ring:theme(colors.ring.brand)]
                    [--btn-hover-overlay:theme(colors.background.brand.solid.hover)]
                `,
            },
            {
                variant: "default",
                color: "error",
                class: `
                    [--btn-bg:theme(colors.error.600)]
                    [--btn-border:theme(colors.error.600)]
                    [--btn-ring:theme(colors.ring.error)]
                    [--btn-hover-overlay:theme(colors.error.500)]
                `,
            },
            {
                variant: "outlined",
                color: "default",
                class: `
                    [--btn-bg:theme(colors.background.primary.DEFAULT)]v
                    [--btn-fg:theme(colors.gray.700)] hover:[--btn-fg:theme(colors.gray.800)]
                    [--btn-border:theme(colors.border.primary)]
                    [--btn-ring:theme(colors.ring.primary)]
                    [--btn-hover-overlay:theme(colors.background.primary.hover)]
                `,
            },
            {
                variant: "outlined",
                color: "brand",
                class: `
                    [--btn-bg:theme(colors.background.primary.DEFAULT)]
                    [--btn-fg:theme(colors.text.brand.secondary)] hover:[--btn-fg:theme(colors.brand.800)]
                    [--btn-border:theme(colors.border.brand.DEFAULT)]
                    [--btn-ring:theme(colors.ring.brand)]
                    [--btn-hover-overlay:theme(colors.background.brand.primary.DEFAULT)]
                `,
            },
            {
                variant: "outlined",
                color: "error",
                class: `
                    [--btn-bg:theme(colors.background.primary.DEFAULT)]
                    [--btn-fg:theme(colors.error.700)] hover:[--btn-fg:theme(colors.error.800)]
                    [--btn-border:theme(colors.border.error.DEFAULT)]
                    [--btn-ring:theme(colors.ring.error)]
                    [--btn-hover-overlay:theme(colors.background.error.primary)]
                `,
            },
            {
                variant: "text",
                color: "default",
                class: `
                    [--btn-fg:theme(colors.foreground.tertiary.DEFAULT)] hover:[--btn-fg:theme(colors.foreground.tertiary.hover)]
                    [--btn-border:theme(colors.border.primary)][--btn-ring:theme(colors.ring.primary)]
                    [--btn-hover-overlay:theme(colors.background.primary.hover)]
                `,
            },
            {
                variant: "text",
                color: "brand",
                class: `
                    [--btn-fg:theme(colors.text.brand.secondary)] hover:[--btn-fg:theme(colors.brand.800)]
                    [--btn-border:theme(colors.border.brand.DEFAULT)]
                    [--btn-ring:theme(colors.ring.brand)]
                    [--btn-hover-overlay:theme(colors.background.brand.primary.DEFAULT)]
                `,
            },
            {
                variant: "text",
                color: "error",
                class: `
                    [--btn-fg:theme(colors.error.700)] hover:[--btn-fg:theme(colors.error.800)]
                    [--btn-border:theme(colors.border.error.DEFAULT)]
                    [--btn-ring:theme(colors.ring.error)]
                    [--btn-hover-overlay:theme(colors.background.error.primary)]
                `,
            },
            {
                variant: "plain",
                color: "default",
                class: `
                    [--btn-fg:theme(colors.foreground.tertiary.DEFAULT)] hover:[--btn-fg:theme(colors.gray.800)]
                `,
            },
            {
                variant: "plain",
                color: "brand",
                class: `
                    [--btn-fg:theme(colors.text.brand.secondary)] hover:[--btn-fg:theme(colors.brand.800)]
                `,
            },
            {
                variant: "plain",
                color: "error",
                class: `
                    [--btn-fg:theme(colors.error.700)] hover:[--btn-fg:theme(colors.error.800)]
                `,
            },
            { variant: "plain", size: "xs", class: "h-4" },
            { variant: "plain", size: "sm", class: "h-5" },
            { variant: "plain", size: "md", class: "h-5" },
            { variant: "plain", size: "lg", class: "h-6" },
            { variant: "plain", size: "xl", class: "h-6" },
            { variant: "plain", size: "2xl", class: "h-7" },
        ],
    },
);
