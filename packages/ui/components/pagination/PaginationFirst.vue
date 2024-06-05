<script setup lang="ts">
import type { PaginationFirstProps } from "./types";
import { cvaPaginationFirstVariants, cvaPaginationControlVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<PaginationFirstProps>(), {
    asChild: true,
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixPaginationFirst v-bind="delegatedProps">
        <ui-button :class="cn(cvaPaginationControlVariants(), cvaPaginationFirstVariants(), props.class)" variant="text">
            <slot>
                <ui-icon icon="chevron-left-double" size="xs" />
            </slot>
        </ui-button>
    </RadixPaginationFirst>
</template>
