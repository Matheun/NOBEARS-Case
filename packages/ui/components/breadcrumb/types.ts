import type { HTMLAttributes } from "vue";
import type { PrimitiveProps } from "radix-vue";

export type BreadcrumbSeparatorVariants = "chevron" | "slash";

export interface BreadcrumbProps {
    separator?: BreadcrumbSeparatorVariants;
    class?: HTMLAttributes["class"];
}
export interface BreadcrumbContext {
    separator?: BreadcrumbSeparatorVariants;
}

export interface BreadcrumbEllipsisProps {
    class?: HTMLAttributes["class"];
}

export interface BreadcrumbIconProps {
    class?: HTMLAttributes["class"];
}

export interface BreadcrumbItemProps {
    class?: HTMLAttributes["class"];
}

export interface BreadcrumbLinkProps extends PrimitiveProps {
    to: string;
    class?: HTMLAttributes["class"];
}

export interface BreadcrumbListProps {
    class?: HTMLAttributes["class"];
}

export interface BreadcrumbPageProps {
    class?: HTMLAttributes["class"];
}

export interface BreadcrumbSeparatorProps {
    variant?: BreadcrumbSeparatorVariants;
    class?: HTMLAttributes["class"];
}
