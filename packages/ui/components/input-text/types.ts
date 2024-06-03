import type { HTMLAttributes } from "vue";

export interface InputTextProps {
    disabled?: boolean;
    prependIcon?: string
    appendIcon?: string
    class?: HTMLAttributes["class"];
}
