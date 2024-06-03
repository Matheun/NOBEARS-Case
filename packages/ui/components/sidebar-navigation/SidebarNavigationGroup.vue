<script setup lang="ts">
import type { SidebarNavigationGroupProps } from "./types";
import { cvaSidebarNavigationGroupVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SidebarNavigationGroupProps>();
</script>

<template>
    <div :class="cn(cvaSidebarNavigationGroupVariants(), props.class)">
        <slot />
    </div>
</template>
