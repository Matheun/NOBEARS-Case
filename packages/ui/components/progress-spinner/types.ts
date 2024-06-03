import type { HTMLAttributes } from "vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaProgressSpinnerVariant } from "./cva";

export type CvaProgressSpinnerVariants = VariantProps<typeof cvaProgressSpinnerVariant>;

export type ProgressSpinnerSizes = CvaProgressSpinnerVariants["size"];
export type ProgressSpinnerColors = CvaProgressSpinnerVariants["color"];

export interface ProgressSpinnerProps {
    color?: ProgressSpinnerColors;
    size?: ProgressSpinnerSizes;
    class?: HTMLAttributes["class"];
}
