<script setup lang="ts">
import type { PaginationPrevProps } from "./types";
import { cvaPaginationPrevVariants, cvaPaginationControlVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<PaginationPrevProps>(), {
    asChild: true,
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixPaginationPrev v-bind="delegatedProps">
        <ui-button :class="cn(cvaPaginationControlVariants(), cvaPaginationPrevVariants(), props.class)" variant="text">
            <slot>
                <ui-icon icon="chevron-left" size="xs" />
            </slot>
        </ui-button>
    </RadixPaginationPrev>
</template>
