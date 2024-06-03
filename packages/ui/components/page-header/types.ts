import type { HTMLAttributes } from "vue";
import type {
    PrimitiveProps as RadixPrimitiveProps,
} from "radix-vue";

export interface PageHeaderProps {
    class?: HTMLAttributes["class"];
}

export interface PageHeaderActionsProps {
    class?: HTMLAttributes["class"];
}

export interface PageHeaderBreadcrumbProps {
    class?: HTMLAttributes["class"];
}

export interface PageHeaderDescriptionProps {
    class?: HTMLAttributes["class"];
}

export interface PageHeaderHeaderProps {
    class?: HTMLAttributes["class"];
}

export interface PageHeaderTitleProps extends RadixPrimitiveProps {
    class?: HTMLAttributes["class"];
}
