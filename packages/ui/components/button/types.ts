import type { VariantProps } from "class-variance-authority";
import type { cvaButtonVariants } from "./cva";

export type CvaButtonVariants = VariantProps<typeof cvaButtonVariants>;

export type ButtonSizes = CvaButtonVariants["size"];
export type ButtonVariants = CvaButtonVariants["variant"];
export type ButtonColors = CvaButtonVariants["color"];
export type ButtonTypes = "button" | "submit" | "reset" | "";

export type ButtonProps = {
    label?: string;
    variant?: ButtonVariants;
    color?: ButtonColors;
    size?: ButtonSizes;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;

    type?: ButtonTypes;
    as?: string;

    icon?: string;
    prependIcon?: string;
    appendIcon?: string;
}
