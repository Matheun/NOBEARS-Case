<script setup lang="ts">
import type { InputPasswordProps } from "./types";
import { useForwardExpose } from "radix-vue";
import { cvaInputPasswordVariants } from "./cva";
import { useField } from "@/components/field";
import { cn } from "@/lib";

defineOptions({
    inheritAttrs: false,
});

const attrs = useAttrs();
const props = withDefaults(defineProps<InputPasswordProps>(), {
    feedback: false,
});

const { error, fieldSize, fieldDisabled, fieldId, fieldDescriptionId, fieldMessageId } = useField();
const { forwardRef } = useForwardExpose();
const prependIconPosition = computed(() => fieldSize === "sm" ? "left-3 top-2.5" : "left-3.5 top-3");
const appendIconPosition = computed(() => fieldSize === "sm" ? "right-3 top-3" : "right-3.5 top-3.5");

const showPassword = ref(false);
const appendIcon = computed(() => showPassword.value ? "eye-off" : "eye");
const inputType = computed(() => showPassword.value ? "text" : "password");
const togglePassword = () => { showPassword.value = !showPassword.value; };
</script>

<template>
    <div class="relative">
        <lazy-ui-icon
            v-if="!!props.prependIcon"
            :icon="props.prependIcon"
            :class="cn(prependIconPosition, 'text-foreground-quaternary peer-disabled:text-foreground-quinary absolute z-10 size-5')"
            aria-hidden="true"
        />

        <input
            v-bind="attrs"
            :id="fieldId"
            :ref="forwardRef"
            :type="inputType"
            :disabled="props.disabled || fieldDisabled"
            :aria-disabled="props.disabled || fieldDisabled"
            :aria-invalid="!!error"
            :aria-describedby="!error ? `${fieldDescriptionId}` : `${fieldDescriptionId} ${fieldMessageId}`"
            :class="cn(
                cvaInputPasswordVariants({
                    size: fieldSize,
                    hasPrependIcon: !!props.prependIcon,
                    showPassword: showPassword,
                    hasValue: !!attrs.value,
                }),
                ''
            )"
        >

        <ui-button
            variant="plain"
            :icon="appendIcon"
            :class="cn(appendIconPosition, 'text-foreground-quinary focus:text-foreground-quaternary absolute z-10 size-4')"
            @click.prevent="togglePassword"
        />

        <transition
            v-if="!disabled && !fieldDisabled"
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
