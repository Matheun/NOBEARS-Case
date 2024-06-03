import type { HTMLAttributes } from "vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaLinkVariants } from "./cva";

export type CvaLinkVariants = VariantProps<typeof cvaLinkVariants>;

export type LinkSizes = CvaLinkVariants["size"];

export interface LinkProps {
    size?: LinkSizes;
    prependIcon?: string;
    appendIcon?: string;
    class?: HTMLAttributes["class"];
}
