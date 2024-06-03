<script setup lang="ts">
import type { DialogContentProps, DialogContentEmits } from "./types";
import { cvaDialogScrollContentVariants, cvaDialogScrollContentOverlayVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { computed } from "vue";
import { cn } from "@/lib";

const props = defineProps<DialogContentProps>();
const emits = defineEmits<DialogContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadixDialogPortal>
        <RadixDialogOverlay :class="cvaDialogScrollContentOverlayVariants()">
            <RadixDialogContent
                :class="cn(cvaDialogScrollContentVariants(), props.class)"
                v-bind="forwarded"
                @pointer-down-outside="(event) => {
                    const originalEvent = event.detail.originalEvent;
                    const target = originalEvent.target as HTMLElement;
                    if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                        event.preventDefault();
                    }
                }"
            >
                <slot />

                <ui-dialog-close />
            </RadixDialogContent>
        </RadixDialogOverlay>
    </RadixDialogPortal>
</template>
