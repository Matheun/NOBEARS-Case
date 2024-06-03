<script setup lang="ts">
import type { SheetContentProps, SheetContentEmits } from "./types";
import { cvaSheetContentVariants, cvaSheetOverlayVariants, cvaSheetCloseVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<SheetContentProps>(), {
    side: "right",
    closePosition: "inside",
});
const emits = defineEmits<SheetContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, side, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadixDialogPortal>
        <RadixDialogOverlay :class="cvaSheetOverlayVariants()" />
        <RadixDialogContent
            :class="cn(cvaSheetContentVariants({ side }), props.class)"
            v-bind="{ ...forwarded, ...$attrs }"
        >
            <slot />
            <RadixDialogClose as-child :class="cvaSheetCloseVariants({ position: 'outside', side })">
                <ui-button variant="close" size="md" />
            </RadixDialogClose>
        </RadixDialogContent>
    </RadixDialogPortal>
</template>
