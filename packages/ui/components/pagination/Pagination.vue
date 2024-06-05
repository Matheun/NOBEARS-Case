<script setup lang="ts">
import type { PaginationProps, PaginationEmits } from "./types";
import { cvaPaginationVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<PaginationProps>();
const emits = defineEmits<PaginationEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
    <RadixPaginationRoot
        v-slot="{ page, pageCount }"
        v-bind="forwarded"
        :class="cn(cvaPaginationVariants(), props.class)"
    >
        <slot :page="page" :page-count="pageCount" />
    </RadixPaginationRoot>
</template>
