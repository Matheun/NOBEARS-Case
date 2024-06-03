<script setup lang="ts">
import type { DropdownMenuGroupProps } from "./types";

const props = defineProps<DropdownMenuGroupProps>();
</script>

<template>
    <RadixDropdownMenuGroup v-bind="props">
        <slot />
    </RadixDropdownMenuGroup>
</template>
