import type { HTMLAttributes } from "vue";
import type { ProgressRootProps } from "radix-vue";

// Nice to have: add the option to show the progress inside the bar
export interface ProgressBarProps extends ProgressRootProps {
    showProgress?: boolean;
    progressPosition?: "right" | "bottom";
    class?: HTMLAttributes["class"]
}
