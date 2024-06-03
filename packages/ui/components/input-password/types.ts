import type { HTMLAttributes } from "vue";

export interface InputPasswordProps {
    disabled?: boolean;
    prependIcon?: string;
    feedback?: boolean;
    class?: HTMLAttributes["class"];
}
