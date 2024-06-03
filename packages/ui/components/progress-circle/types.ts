import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import type { cvaProgressCircleVariants } from "./cva";

export type CvaProgressCircleVariants = VariantProps<typeof cvaProgressCircleVariants>;

export type ProgressCircleSizes = CvaProgressCircleVariants["size"];

export interface ProgressCircleProps {
    size?: ProgressCircleSizes
    half?: boolean
    percentage?: number
    rangeStart?: number
    rangeEnd?: number
    rangeFormat?: "percent" | "value"
    showRange?: boolean
    label?: string
    class?: HTMLAttributes["class"]
}
