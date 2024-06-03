<script setup lang="ts">
const useIdFunction = () => useId();
</script>

<template>
    <RadixConfigProvider :use-id="useIdFunction">
        <RadixTooltipProvider>
            <RadixToastProvider>
                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>
                <ui-toast-viewport />
            </RadixToastProvider>
        </RadixTooltipProvider>
    </RadixConfigProvider>
</template>
