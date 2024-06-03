<script setup lang="ts">
import type { DropdownMenuTriggerProps } from "./types";
import { useForwardProps } from "radix-vue";

const props = defineProps<DropdownMenuTriggerProps>();

const forwardedProps = useForwardProps(props);
</script>

<template>
    <RadixDropdownMenuTrigger class="outline-none" v-bind="forwardedProps">
        <slot>
            <ui-button variant="text" icon="dots-vertical" size="sm" />
        </slot>
    </RadixDropdownMenuTrigger>
</template>
