<script setup lang="ts">
import type { Job } from "@/types/jobs";
import { createReusableTemplate, useTimeAgo } from "@vueuse/core";

const [DefineTemplate, ReuseTemplate] = createReusableTemplate();

const props = defineProps<{
    job: Job;
}>();

const timeAgo = computed(() => {
    return useTimeAgo(props.job._source.created_at).value
        .replace("ago", "geleden")
        .replace("just now", "zojuist")
        .replace("minutes", "minuten")
        .replace("hours", "uur")
        .replace("yesterday", "gisteren")
        .replace("days", "dagen")
        .replace("last week", "vorige week")
        .replace("weeks", "weken")
        .replace("last month", "vorige maand")
        .replace("months", "maanden")
        .replace("last year", "vorig jaar")
        .replace("years", "jaar");
});
</script>

<template>
    <DefineTemplate v-slot="{ icon, label }">
        <div class="flex items-center gap-x-2">
            <ui-icon :icon="icon" size="sm" class="text-foreground-quinary" />
            <span class="text-md text-text-tertiary font-medium first-letter:capitalize">
                {{ label }}
            </span>
        </div>
    </DefineTemplate>

    <ui-card>
        <ui-card-header class="flex flex-row justify-between">
            <div class="w-fit">
                <ui-card-title class="text-xl">
                    {{ job._source.website.title }}
                </ui-card-title>
                <ui-card-description class="text-md leading-6">
                    {{ job._source.website.subtitle }}
                </ui-card-description>
            </div>
            <div class="flex w-fit shrink-0 flex-col items-end">
                <span class="text-text-secondary text-md font-semibold">
                    {{ job._source.website.location.place }}, {{ job._source.website.location.province }}
                </span>
                <span class="text-text-tertiary text-sm font-normal">
                    {{ timeAgo }}
                </span>
            </div>
        </ui-card-header>

        <ui-card-footer>
            <div class="flex gap-x-5">
                <ReuseTemplate
                    icon="clock"
                    :label="job._source.vacancy.employment_type"
                />
                <ReuseTemplate
                    icon="currency-euro-circle"
                    :label="`€${job._source.vacancy.salary_indication.min} - €${job._source.vacancy.salary_indication.max}`"
                />
                <ReuseTemplate
                    icon="tag-01"
                    :label="job._source.website.sector[0]"
                />
            </div>
            <ui-link append-icon="arrow-up-right" class="ml-auto" :to="`/vacature/${job._id}`">
                Bekijk vacature
            </ui-link>
        </ui-card-footer>
    </ui-card>
</template>
