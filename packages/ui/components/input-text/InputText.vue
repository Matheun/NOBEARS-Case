<script setup lang="ts">
import type { InputTextProps } from "./types";
import { useForwardExpose } from "radix-vue";
import { cvaInputVariants, cvaInputWrapperVariants } from "./cva";
import { useField } from "@/components/field";
import { cn } from "@/lib";

defineOptions({
    inheritAttrs: false,
});

const props = defineProps<InputTextProps>();

const { error, fieldSize, fieldDisabled, fieldId, fieldDescriptionId, fieldMessageId } = useField();
const { forwardRef } = useForwardExpose();
const prependIconPosition = computed(() => fieldSize === "sm" ? "left-3 top-2.5" : "left-3.5 top-3");
const appendIconPosition = computed(() => fieldSize === "sm" ? "right-3 top-3" : "right-3.5 top-3.5");
</script>

<template>
    <div :class="cn(cvaInputWrapperVariants(), props.class, 'relative')">
        <lazy-ui-icon
            v-if="!!props.prependIcon"
            :icon="props.prependIcon"
            :class="cn(prependIconPosition, 'text-foreground-quaternary peer-disabled:text-foreground-quinary absolute z-10 size-5')"
            aria-hidden="true"
        />

        <input
            v-bind="$attrs"
            :id="fieldId"
            :ref="forwardRef"
            :disabled="props.disabled || fieldDisabled"
            :aria-disabled="props.disabled || fieldDisabled"
            :aria-invalid="!!error"
            :aria-describedby="!error ? `${fieldDescriptionId}` : `${fieldDescriptionId} ${fieldMessageId}`"
            :class="cn(cvaInputVariants({ size: fieldSize, hasPrependIcon: !!props.prependIcon }), '')"
        >

        <lazy-ui-icon
            v-if="!!props.appendIcon"
            :icon="props.appendIcon"
            :class="cn(appendIconPosition, 'text-foreground-quinary absolute z-10 size-4')"
            aria-hidden="true"
        />

        <transition
            v-else-if="!disabled && !fieldDisabled"
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-50"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-100"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-50"
        >
            <ui-icon
                v-if="error"
                icon="alert-circle"
                :class="cn(appendIconPosition, 'text-foreground-error-secondary peer-disabled:text-foreground-quinary absolute')"
                size="xs"
                aria-hidden="true"
            />
        </transition>
    </div>
</template>
