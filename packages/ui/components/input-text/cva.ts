import { cva } from "class-variance-authority";

export const cvaInputVariants = cva(
    `
        text-md leading-6 font-regular peer rounded-lg shadow-xs w-full relative
        transition-all ease-in-out duration-150
        
        bg-[--input-bg] border border-solid border-[--input-border] text-[--input-fg]
        placeholder:text-[--input-placeholder]

        focus-visible:outline-none outline-none
        focus-visible:ring-offset-0
        focus-visible:ring-4
        focus-visible:[--input-border:theme(colors.border.brand.DEFAULT)]
        focus-visible:ring-[--input-ring]

        aria-invalid:[--input-ring:theme(colors.ring.error)]
        aria-invalid:[--input-border:theme(colors.border.error.DEFAULT)]

        aria-disabled:pointer-events-none
        aria-disabled:[--input-bg:theme(colors.background.disabled.subtle)]
        aria-disabled:[--input-fg:theme(colors.text.disabled)]
        disabled:![--input-border:theme(colors.border.disabled.DEFAULT)]

        [--input-bg:theme(colors.background.primary.DEFAULT)]
        [--input-border:theme(colors.border.primary)]
        [--input-fg:theme(colors.text.primary.DEFAULT)]
        [--input-ring:theme(colors.ring.brand)]
        [--input-placeholder:theme(colors.text.placeholder.DEFAULT)]
    `,
    {
        variants: {
            size: {
                sm: "h-10 py-2 px-3 pr-9",
                md: "h-11 py-2.5 px-3.5 pr-[38px]",
            },
            hasPrependIcon: {
                true: "",
                false: "",
            },
            hasAppendIcon: {
                true: "",
                false: "",
            },
        },
        compoundVariants: [
            { size: "sm", hasPrependIcon: true, class: "pl-10" },
            { size: "md", hasPrependIcon: true, class: "pl-[42px]" },
        ],
    },
);

export const cvaInputWrapperVariants = cva("");
