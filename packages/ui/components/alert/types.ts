import type { HTMLAttributes } from "vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaAlertVariants, cvaAlertIconVariants } from "./cva";

export type CvaAlertVariants = VariantProps<typeof cvaAlertVariants>;
export type CvaAlertIconVariants = VariantProps<typeof cvaAlertIconVariants>;

export type AlertVariants = CvaAlertVariants["variant"];
export type AlertIconVariants = CvaAlertIconVariants["variant"];
export type AlertIconDecorations = CvaAlertIconVariants["decoration"];

export interface AlertRootProps {}
export type AlertRootEmits = {}

export interface AlertProps {
    variant?: AlertVariants
    class?: HTMLAttributes["class"]
}

export interface AlertTitleProps {
    class?: HTMLAttributes["class"]
}

export interface AlertDescriptionProps {
    class?: HTMLAttributes["class"]
}

export interface AlertActionsProps {
    class?: HTMLAttributes["class"]
}

export interface AlertIconProps {
    icon?: string
    decoration?: AlertIconDecorations
    variant?: AlertVariants
    class?: HTMLAttributes["class"]
}
