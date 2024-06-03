<script lang="ts" setup>
import type { FieldErrorProps } from "./types";
import { ErrorMessage } from "vee-validate";
import { toValue } from "vue";
import { useField } from "./useField";
import { cvaFieldErrorVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<FieldErrorProps>();

const { name, fieldDisabled, fieldErrorId, isTouched } = useField();
</script>

<template>
    <transition
        enter-active-class="transition ease-out duration-100 h-fit origin-top"
        enter-from-class="transform opacity-0 scale-y-50"
        enter-to-class="transform opacity-100 scale-y-100"
        leave-active-class="transition ease-in duration-100 h-fit origin-top"
        leave-from-class="transform opacity-100 scale-y-100"
        leave-to-class="transform opacity-0 scale-y-50"
    >
        <ErrorMessage
            v-if="isTouched && !fieldDisabled"
            :id="fieldErrorId"
            as="p"
            :name="toValue(name)"
            :class="cn(cvaFieldErrorVariants(), props.class)"
        />
    </transition>
</template>
