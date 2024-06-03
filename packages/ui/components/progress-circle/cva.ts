import { cva } from "class-variance-authority";

export const cvaProgressCircleWrapperVariants = cva(
    "relative inline-flex flex-col items-center justify-center overflow-hidden",
    {
        variants: {
            size: {
                xxs: "size-16",
                xs: "size-40",
                sm: "size-[12.5rem]",
                md: "size-60",
                lg: "size-72",
            },
            half: { false: "" },
        },
        compoundVariants: [
            { size: "xxs", half: true, class: "h-[36px]" },
            { size: "xs", half: true, class: "h-[88px]" },
            { size: "sm", half: true, class: "h-[110px]" },
            { size: "md", half: true, class: "h-[132px]" },
            { size: "lg", half: true, class: "h-[154px]" },
        ],
    },
);

export const cvaProgressCircleVariants = cva(
    `
        relative inline-flex justify-center items-center overflow-hidden

        [--progress-circle-underlay-color:theme(colors.background.quaternary)]
        [--progress-circle-overlay-color:theme(colors.brand.600)]
    `,
    {
        variants: {
            size: {
                xxs: "size-16",
                xs: "size-40",
                sm: "size-[12.5rem]",
                md: "size-60",
                lg: "size-72",
            },
            half: {
                false: "-rotate-90",
            },
        },
        compoundVariants: [
            { size: "xxs", half: true, class: "h-[36px]" },
            { size: "xs", half: true, class: "h-[88px]" },
            { size: "sm", half: true, class: "h-[110px]" },
            { size: "md", half: true, class: "h-[132px]" },
            { size: "lg", half: true, class: "h-[154px]" },
        ],
    },
);

export const cvaProgressCircleLabelVariants = cva("font-semibold text-text-primary", {
    variants: {
        size: {
            xxs: "text-sm leading-5",
            xs: "text-display-xs leading-8",
            sm: "text-display-sm leading-[38px]",
            md: "text-display-md leading-[44px]",
            lg: "text-display-lg leading-[60px]",
        },
    },
});
