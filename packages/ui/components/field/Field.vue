<script lang="ts">
import { createContext, cn } from "@/lib";
import type { FieldProps, FieldContext } from "./types";

export const [injectFieldContext, provideFieldContext] = createContext<FieldContext>("FieldContext");
</script>

<script setup lang="ts">
import { Field as VeeField } from "vee-validate";
import { useForwardProps } from "radix-vue";
import { cvaFieldVariants } from "./cva";

const props = defineProps<FieldProps>();

const delegatedProps = computed(() => {
    const {
        class: _,
        size,
        disabled,
        ...delegated
    } = props;
    return delegated;
});
const forwarded = useForwardProps(delegatedProps);

const id = useId();
provideFieldContext({
    id,
    size: props.size ? props.size : "md",
    disabled: props.disabled,
});
</script>

<template>
    <VeeField
        v-slot="{ field, value, handleChange }"
        v-bind="forwarded"
        as="div"
        :class="cn(cvaFieldVariants(), props.class)"
    >
        <slot
            :component-field="field"
            :value="value"
            :handle-change="handleChange"
        />
    </VeeField>
</template>
