import type { HTMLAttributes } from "vue";
import type {
    PaginationRootProps as RadixPaginationRootProps,
    PaginationRootEmits as RadixPaginationRootEmits,
    PaginationEllipsisProps as RadixPaginationEllipsisProps,
    PaginationFirstProps as RadixPaginationFirstProps,
    PaginationLastProps as RadixPaginationLastProps,
    PaginationListProps as RadixPaginationListProps,
    PaginationListItemProps as RadixPaginationListItemProps,
    PaginationNextProps as RadixPaginationNextProps,
    PaginationPrevProps as RadixPaginationPrevProps,
} from "radix-vue";

export interface PaginationProps extends RadixPaginationRootProps {
    class?: HTMLAttributes["class"];
}
export interface PaginationEmits extends RadixPaginationRootEmits {}

export interface PaginationEllipsisProps extends RadixPaginationEllipsisProps {
    class?: HTMLAttributes["class"];
}

export interface PaginationFirstProps extends RadixPaginationFirstProps {
    class?: HTMLAttributes["class"];
}

export interface PaginationLastProps extends RadixPaginationLastProps {
    class?: HTMLAttributes["class"];
}

export interface PaginationListProps extends RadixPaginationListProps {
    class?: HTMLAttributes["class"];
}

export interface PaginationListItemProps extends RadixPaginationListItemProps {
    class?: HTMLAttributes["class"];
}

export interface PaginationNextProps extends RadixPaginationNextProps {
    class?: HTMLAttributes["class"];
}

export interface PaginationPrevProps extends RadixPaginationPrevProps {
    class?: HTMLAttributes["class"];
}
