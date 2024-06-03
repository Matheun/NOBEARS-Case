import { cva } from "class-variance-authority";

export const cvaPinInputVariants = cva("flex items-center gap-2");

export const cvaPinInputGroupVariants = cva("flex items-center gap-2");

// relative flex size-10 items-center justify-center border-y border-r text-center text-md transition-all

// focus:ring-ring

// border-input

// first:rounded-l-md
// first:border-l

// last:rounded-r-md

// focus:relative
// focus:z-10
// focus:outline-none
// focus:ring-2
export const cvaPinInputInputVariants = cva(
    `
        relative flex items-center justify-center text-center text-md leading-6 font-medium shadow-xs rounded-lg peer
        transition-all

        bg-[--pin-input-bg] border border-solid border-[--pin-input-border] text-[--pin-input-fg]
        placeholder:text-[--pin-input-placeholder]

        focus:outline-none outline-none
        focus:ring-offset-0
        focus:ring-4
        focus:[--pin-input-border:theme(colors.border.brand.DEFAULT)]
        focus:ring-[--pin-input-ring]
        focus:z-10

        aria-invalid:[--pin-input-ring:theme(colors.ring.error)]
        aria-invalid:[--pin-input-border:theme(colors.border.error.DEFAULT)]

        aria-disabled:pointer-events-none
        aria-disabled:[--pin-input-bg:theme(colors.background.disabled.subtle)]
        aria-disabled:[--pin-input-fg:theme(colors.text.disabled)]
        disabled:![--pin-input-border:theme(colors.border.disabled.DEFAULT)]

        [--pin-input-bg:theme(colors.background.primary.DEFAULT)]
        [--pin-input-border:theme(colors.border.primary)]
        [--pin-input-fg:theme(colors.text.primary.DEFAULT)]
        [--pin-input-ring:theme(colors.ring.brand)]
        [--pin-input-placeholder:theme(colors.text.placeholder.subtle)]
    `,
    {
        variants: {
            size: {
                // xs: "size-8 text-sm",
                // sm: "size-9",
                // md: "size-10",
                // lg: "size-11 text-lg",
                // xl: "size-12 text-xl",
                // "2xl": "size-14 text-display-sm",
                xs: "h-8 w-6 text-sm",
                sm: "h-9 w-7",
                md: "h-10 w-8",
                lg: "h-11 w-9 text-lg",
                xl: "h-12 w-10 text-xl",
                "2xl": "h-14 w-14 text-display-sm",
                // xs: "px-2 gap-x-1 text-xs h-8",
                // sm: "px-2.5 gap-x-1.5 text-sm h-9",
                // md: "px-3.5 gap-x-1.5 text-sm h-10",
                // lg: "px-4 gap-x-1.5 text-md h-11",
                // xl: "px-4.5 gap-x-1.5 text-md h-12",
                // "2xl": "px-5.5 gap-x-2.5 text-lg h-14",
            },
        },
    },
);

// export const cvaInputVariants = cva(
//     `
//         text-md leading-6 font-regular peer rounded-lg shadow-xs w-full relative
//         transition-all ease-in-out duration-150

//         bg-[--input-bg] border border-solid border-[--input-border] text-[--input-fg]
//         placeholder:text-[--input-placeholder]

//         focus-visible:outline-none outline-none
//         focus-visible:ring-offset-0
//         focus-visible:ring-4
//         focus-visible:[--input-border:theme(colors.border.brand.DEFAULT)]
//         focus-visible:ring-[--input-ring]

//         aria-invalid:[--input-ring:theme(colors.ring.error)]
//         aria-invalid:[--input-border:theme(colors.border.error.DEFAULT)]

//         aria-disabled:pointer-events-none
//         aria-disabled:[--input-bg:theme(colors.background.disabled.subtle)]
//         aria-disabled:[--input-fg:theme(colors.text.disabled)]
//         disabled:![--input-border:theme(colors.border.disabled.DEFAULT)]

//         [--input-bg:theme(colors.background.primary.DEFAULT)]
//         [--input-border:theme(colors.border.primary)]
//         [--input-fg:theme(colors.text.primary.DEFAULT)]
//         [--input-ring:theme(colors.ring.brand)]
//         [--input-placeholder:theme(colors.text.placeholder.DEFAULT)]
//     `,
//     {
//         variants: {
//             size: {
//                 sm: "h-10 py-2 px-3 pr-9",
//                 md: "h-11 py-2.5 px-3.5 pr-[38px]",
//             },
//             hasPrependIcon: {
//                 true: "",
//                 false: "",
//             },
//             hasAppendIcon: {
//                 true: "",
//                 false: "",
//             },
//         },
//         compoundVariants: [
//             { size: "sm", hasPrependIcon: true, class: "pl-10" },
//             { size: "md", hasPrependIcon: true, class: "pl-[42px]" },
//         ],
//     },
// );
