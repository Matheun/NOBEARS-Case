<script setup lang="ts">
import type { LabelProps } from "@/components/label";
import { useField } from "@/components/field";
import { useForwardProps } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<LabelProps>();

const { error, fieldId, fieldDisabled } = useField();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <ui-label
        v-bind="forwardedProps"
        :for="fieldId"
        :class="cn(
            (error && !fieldDisabled) && 'text-text-error-primary',
            props.class,
        )"
    >
        <slot />
    </ui-label>
</template>
