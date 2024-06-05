<script setup lang="ts">
import type { PaginationLastProps } from "./types";
import { cvaPaginationLastVariants, cvaPaginationControlVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<PaginationLastProps>(), {
    asChild: true,
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixPaginationLast v-bind="delegatedProps">
        <ui-button :class="cn(cvaPaginationControlVariants(), cvaPaginationLastVariants(), props.class)" variant="text">
            <slot>
                <ui-icon icon="chevron-right-double" size="xs" />
            </slot>
        </ui-button>
    </RadixPaginationLast>
</template>
