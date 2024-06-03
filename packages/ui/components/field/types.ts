import type { HTMLAttributes } from "vue";
import type { LabelProps as RadixLabelProps } from "radix-vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaFieldVariants } from "./cva";

export type CvaFieldVariants = VariantProps<typeof cvaFieldVariants>;

export type FieldSize = CvaFieldVariants["size"];

export interface FieldProps {
    name: string;
    rules?: string;
    size?: FieldSize
    disabled?: boolean;
    class?: HTMLAttributes["class"]
}
export type FieldContext = {
    id: String,
    size: FieldSize,
    disabled?: boolean
}

export interface FieldLabelProps extends RadixLabelProps {
    class?: HTMLAttributes["class"]
}

export interface FieldItemProps {
    class?: HTMLAttributes["class"]
}

export interface FieldDescriptionProps {
    class?: HTMLAttributes["class"]
}

export interface FieldErrorProps extends RadixLabelProps {
    class?: HTMLAttributes["class"]
}
