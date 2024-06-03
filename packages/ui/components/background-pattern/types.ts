import type { HTMLAttributes } from "vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaBackgroundPatternVariants } from "./cva";

export type CvaBackgroundPatternVariants = VariantProps<typeof cvaBackgroundPatternVariants>;

export type BackgroundPatternSizes = CvaBackgroundPatternVariants["size"];
export type BackgroundPatternPatterns = "grid-dot" | "grid" | "squares" | "circles";

export interface BackgroundPatternProps {
    icon?: string;
    size?: BackgroundPatternSizes;
    fade?: boolean;
    pattern?: BackgroundPatternPatterns;
    class?: HTMLAttributes["class"];
}
