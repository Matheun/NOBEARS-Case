<script lang="ts" setup>
import type { BreadcrumbSeparatorProps } from "./types";
import { cvaBreadcrumbSeparatorVariants } from "./cva";
import { cn } from "@/lib";
import { injectBreadcrumbContext } from "./Breadcrumb.vue";

const { separator } = injectBreadcrumbContext();

const props = defineProps<BreadcrumbSeparatorProps>();

const separatorVariant = computed(() => {
    return props.variant ? props.variant : separator;
});

const icon = computed(() => {
    switch (separatorVariant.value) {
        case "chevron":
            return "chevron-right";

        default:
            return "slash-divider";
    }
});

const iconSize = computed(() => {
    return props.variant === "chevron" ? "xs" : "sm";
});
</script>

<template>
    <li
        role="presentation"
        aria-hidden="true"
        :class="cn(cvaBreadcrumbSeparatorVariants(), props.class)"
    >
        <slot>
            <ui-icon :icon="icon" :size="iconSize" />
        </slot>
    </li>
</template>
