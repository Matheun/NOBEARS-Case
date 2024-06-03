import { cva } from "class-variance-authority";

export const cvaBackgroundPatternVariants = cva(
    `
        text-border-secondary

        // mask-alpha
        // mask-radial-gradient
    `,
    {
        variants: {
            size: {
                sm: "size-[336px]",
                md: "size-[480px]",
                lg: "size-[768px]",
            },
            fade: {
                // true: "[mask-image:radial-gradient(50%_50%_at_50%_50%,_#000_0%,_rgba(0,_0,_0,_0.00)_100%)]",
                // true: "mask-alpha mask-radial-gradient",
                true: "",
                false: "",
            },
        },
    },
);

// mask-image: radial-gradient(50% 50% at 50% 50%, #000 0%, rgba(0, 0, 0, 0.00) 100%);
// mask-mode: alpha;
