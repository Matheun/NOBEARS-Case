import type { HTMLAttributes } from "vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaIconVariants } from "./cva";

export type CvaIconVariants = VariantProps<typeof cvaIconVariants>;

export type IconSizes = CvaIconVariants["size"];
export type IconVariants = CvaIconVariants["size"];
// TODO: add support for the following icon types: flag, file, integration, payment
export type IconTypes =
    | "duocolor"
    | "duotone"
    | "line"
    | "misc"
    | "solid"
    | "background-pattern"
    | "background-pattern-decorative";

export interface IconProps {
    icon: string;
    provider?: string;
    type?: IconTypes;
    size?: IconVariants;
    class?: HTMLAttributes["class"];
}
