<script lang="ts" setup>
import type { BreadcrumbEllipsisProps } from "./types";
import { cvaBreadcrumbEllipsisVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<BreadcrumbEllipsisProps>();
</script>

<template>
    <span
        role="presentation"
        aria-hidden="true"
        :class="cn(cvaBreadcrumbEllipsisVariants(), props.class)"
    >
        <slot>
            <ui-icon icon="dots-horizontal" size="sm" />
        </slot>
        <span class="sr-only">More</span>
    </span>
</template>
