import type { HTMLAttributes } from "vue";
import type { SeparatorProps as SeparatorRootProps } from "radix-vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaSeparatorVariants } from "./cva";

export type CvaSeparatorVariants = VariantProps<typeof cvaSeparatorVariants>;

export type SeparatorVariants = CvaSeparatorVariants["variant"];
export type SepertorContentTypes = CvaSeparatorVariants["contentType"];

export interface SeparatorLineProps extends SeparatorRootProps {
    variant?: SeparatorVariants;
    straightEdges?: boolean;
    class?: HTMLAttributes["class"];
}

export interface SeparatorProps extends SeparatorLineProps {
    contentType?: SepertorContentTypes;
}
