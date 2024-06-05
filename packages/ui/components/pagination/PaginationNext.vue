<script setup lang="ts">
import type { PaginationNextProps } from "./types";
import { cvaPaginationNextVariants, cvaPaginationControlVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<PaginationNextProps>(), {
    asChild: true,
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixPaginationNext v-bind="delegatedProps">
        <ui-button :class="cn(cvaPaginationControlVariants(), cvaPaginationNextVariants(), props.class)" variant="text">
            <slot>
                <ui-icon icon="chevron-right" size="xs" />
            </slot>
        </ui-button>
    </RadixPaginationNext>
</template>
