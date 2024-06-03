<script setup lang="ts">
import { type PrimitiveProps, useForwardProps } from "radix-vue";

const props = defineProps<PrimitiveProps>();
const forwardedProps = useForwardProps(props);
</script>

<template>
    <RadixPrimitive v-bind="forwardedProps">
        <slot>
            <ui-icon icon="placeholder" />
        </slot>
    </RadixPrimitive>
</template>
