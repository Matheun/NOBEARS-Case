<script setup lang="ts">
import type { JobsApiReponse } from "@/types/jobs";
import { createReusableTemplate } from "@vueuse/core";

definePageMeta({
    layout: "job",
});

const [DefineTemplate, ReuseTemplate] = createReusableTemplate();

const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const { data: job } = await useAsyncData<JobsApiReponse>(
    "jobs",
    () => $fetch(`${runtimeConfig.public.apiURL}/job/${route.params.id}`, {
        method: "GET",
    }), {
        transform: (job): JobsApiReponse => {
            return job.docs[0];
        },
    },
);

onMounted(() => {
    console.log(job.value);
});
</script>

<template>
    <div v-if="job" class="container pb-24 pt-12">
        <DefineTemplate v-slot="{ icon, label }">
            <div class="flex items-center gap-x-2">
                <ui-icon :icon="icon" size="sm" class="text-foreground-quinary" />
                <span class="text-md text-text-tertiary font-medium first-letter:capitalize">
                    {{ label }}
                </span>
            </div>
        </DefineTemplate>

        <div class="flex gap-x-16">
            <div class="content w-full">
                <div>
                    <span class="text-foreground-brand-primary text-md font-semibold">
                        {{ job._source.website.location.place }}, {{ job._source.website.location.province }}
                    </span>
                    <h1 class="mt-2">
                        {{ job._source.website.title }}
                    </h1>
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
                    <p class="mt-4">
                        {{ job._source.website.subtitle }}
                    </p>
                    <div class="html-text mt-4" v-html="job._source.website.intro" />
                </div>

                <ui-separator class="my-5" />

                <div>
                    <h2>Functieomschrijving</h2>
                    <div class="html-text" v-html="job._source.website.description" />
                </div>

                <ui-separator class="my-5" />

                <div>
                    <h2>Functievereisten</h2>
                    <div class="html-text" v-html="job._source.website.requirements" />
                </div>

                <ui-separator class="my-5" />

                <div>
                    <h2>Arbeidsvoorwaarden</h2>
                    <div class="html-text" v-html="job._source.website.benefits" />
                </div>
            </div>

            <div class="border-border-secondary bg-background-primary h-fit w-full max-w-sm space-y-6 rounded-2xl border p-6">
                <div>
                    <h2 class="text-display-xs">
                        Vragen?
                    </h2>
                    <p class="text-md mt-2">
                        Onze specialisten staan je graag te woord.
                    </p>
                </div>

                <div>
                    <h2>
                        {{ job._source.recruiter.name }}
                    </h2>
                    <p class="text-md">
                        {{ job._source.recruiter.title }}
                    </p>
                    <ReuseTemplate
                        icon="mail-01"
                        :label="job._source.recruiter.email"
                        class="mt-3"
                    />
                    <ReuseTemplate
                        icon="phone"
                        :label="job._source.recruiter.telephone"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.content {
    h1 {
        @apply scroll-m-20 text-display-xs md:text-display-lg font-semibold text-text-primary leading-8 md:leading-[2.375rem] mb-4 md:mb-8;
    }

    h2 {
        @apply text-display-xs font-semibold text-text-primary mb-4 mt-8;
    }

    p {
        @apply text-lg font-normal text-text-tertiary leading-6;
    }
}

.html-text {
    @apply text-lg font-normal text-text-tertiary leading-6 marker:text-foreground-brand-primary;

    ul {
        @apply my-2;
    }

    li {
        @apply list-disc ml-5;
    }
}
</style>
