<script setup lang="ts">
import type { AvatarImageProps } from "./types";

const props = defineProps<AvatarImageProps>();
</script>

<template>
    <RadixAvatarImage v-bind="props" class="size-full object-cover" />
</template>
