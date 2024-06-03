import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import type { cvaBadgeVariants } from "./cva";

export type CvaBadgeVariants = VariantProps<typeof cvaBadgeVariants>;

export type BadgeVariant = CvaBadgeVariants["variant"];
export type BadgeColor = CvaBadgeVariants["color"];
export type BadgeRounded = CvaBadgeVariants["rounded"];
export type BadgeSize = CvaBadgeVariants["size"];

export interface BadgeProps {
    label?: string;
    variant?: BadgeVariant;
    color?: BadgeColor;
    rounded?: BadgeRounded;
    size?: BadgeSize;
    icon?: string;
    prependIcon?: string;
    appendIcon?: string;
    leadingDot?: boolean;
    class?: HTMLAttributes["class"];
}
