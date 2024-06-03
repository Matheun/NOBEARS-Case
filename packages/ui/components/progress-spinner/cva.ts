import { cva } from "class-variance-authority";

export const cvaProgressSpinnerVariant = cva(
    `
        inline-flex justify-center items-center overflow-hidden
        border-transparent stroke-[--progress-spinner-color]
        
        [--progress-spinner-color:theme(colors.brand.600)]
    `,
    {
        variants: {
            color: {
                default: "[--progress-spinner-color:theme(colors.gray.600)]",
                brand: "[--progress-spinner-color:theme(colors.brand.600)]",
                error: "[--progress-spinner-color:theme(colors.error.600)]",
                warning: "[--progress-spinner-color:theme(colors.warning.600)]",
                success: "[--progress-spinner-color:theme(colors.success.600)]",
                info: "[--progress-spinner-color:theme(colors.info.600)]",
                help: "[--progress-spinner-color:theme(colors.help.600)]",
                white: "[--progress-spinner-color:theme(colors.white)]",
            },
            size: {
                xs: "size-4",
                sm: "size-4.5",
                md: "size-5",
                lg: "size-5",
                xl: "size-6",
            },
        },
    },
);
