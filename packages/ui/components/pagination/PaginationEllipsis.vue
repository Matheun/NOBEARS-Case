<script setup lang="ts">
import type { PaginationEllipsisProps } from "./types";
import { cvaPaginationEllipsisVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<PaginationEllipsisProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixPaginationEllipsis
        v-bind="delegatedProps"
        :class="cn(cvaPaginationEllipsisVariants(), props.class)"
    >
        <slot>
            <ui-icon icon="dots-horizontal" size="xs" />
        </slot>
    </RadixPaginationEllipsis>
</template>
