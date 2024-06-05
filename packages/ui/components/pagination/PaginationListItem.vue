<script setup lang="ts">
import type { PaginationListItemProps } from "./types";
import { cvaPaginationListItemVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<PaginationListItemProps>();

const forwarded = useForwardProps(props);
</script>

<template>
    <RadixPaginationListItem v-bind="forwarded">
        <ui-button variant="text" :class="cn(cvaPaginationListItemVariants(), props.class)">
            <slot />
        </ui-button>
    </RadixPaginationListItem>
</template>
