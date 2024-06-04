<script setup lang="ts">
const useIdFunction = () => useId();
</script>

<template>
    <RadixConfigProvider :use-id="useIdFunction" class="">
        <RadixTooltipProvider>
            <RadixToastProvider>
                <div />
                <ui-toast-viewport />
            </RadixToastProvider>
        </RadixTooltipProvider>
    </RadixConfigProvider>
</template>
