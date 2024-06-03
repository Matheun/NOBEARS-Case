<script setup lang="ts">
import type { PageHeaderTitleProps } from "./types";
import { cvaPageHeaderTitleVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<PageHeaderTitleProps>(), {
    as: "h1",
});
</script>

<template>
    <RadixPrimitive
        :class="cn(cvaPageHeaderTitleVariants(), props.class)"
        :as="as"
    >
        <slot />
    </RadixPrimitive>
</template>
