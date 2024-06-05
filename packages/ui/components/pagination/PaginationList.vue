<script setup lang="ts">
import type { PaginationListProps } from "./types";
import { cvaPaginationListVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<PaginationListProps>();

const forwarded = useForwardProps(props);
</script>

<template>
    <RadixPaginationList v-slot="{ items }" v-bind="forwarded" :class="cn(cvaPaginationListVariants(), props.class)">
        <slot :items="items" />
    </RadixPaginationList>
</template>
