<script lang="ts">
import { createContext, cn } from "@/lib";
import type { ToastProps, ToastEmits, ToastContext } from "./types";

export const [injectToastContext, provideToastContext] = createContext<ToastContext>("ToastContext");
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from "radix-vue";
import { cvaToastVariants } from "./cva";

const props = withDefaults(defineProps<ToastProps>(), {
    variant: "default",
});
const emits = defineEmits<ToastEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const count = ref(0);

const add = () => {
    count.value++;
};

defineExpose({
    add,
});

provideToastContext({
    variant: props.variant,
});
</script>

<template>
    <RadixToastRoot
        v-for="index in count"
        v-bind="forwarded"
        :key="index"
        :class="cn(cvaToastVariants({ variant }), props.class)"
        @update:open="onOpenChange"
    >
        <slot />
        <ui-toast-close />
    </RadixToastRoot>
</template>
