<script setup lang="ts">
import type { JobsApiReponse, JobFilterFormValues, JobFilters, ApiJobsBody } from "@/types/jobs";
// @ts-ignore
import { useForm } from "vee-validate";
import * as yup from "yup";
import { watchDebounced } from "@vueuse/core";

const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const { data: availableFilters } = await useAsyncData<JobFilters>(
    "availableFilters",
    () => $fetch(`${runtimeConfig.public.apiURL}/jobs`, {
        method: "POST",
        body: {
            perpage: 1,
            pagenum: 1,
            aggs: true,
        } as ApiJobsBody,
    }), {
        transform: (availableFilters) => {
            const filters: JobFilters = {};

            Object.entries((availableFilters as JobsApiReponse).aggregations).forEach(([key, value], index) => {
                Object.assign(filters, {
                    [value.meta.pname]: {
                        meta: value.meta,
                        collapsibleStates: {
                            primary: index === 0,
                            secondary: false,
                        },
                        options: value.buckets,
                    },
                });
            });
            return filters;
        },
    },
);

const initialValues: JobFilterFormValues = {
    q: "" as string,
    pc: "" as string,
    c: [] as string[],
    s: [] as string[],
    p: [] as string[],
    sw: [] as string[],
    el: [] as string[],
    pagenum: 1 as number,
};
const validationSchema = yup.object().shape({
    q: yup
        .string(),
    pc: yup
        .string(),
    c: yup
        .array().of(yup.string()),
    s: yup
        .array().of(yup.string()),
    p: yup
        .array().of(yup.string()),
    sw: yup
        .array().of(yup.string()),
    el: yup
        .array().of(yup.string()),
    pagenum: yup
        .number().positive().integer(),
});
const { values: filterValues, setValues, resetForm, setFieldValue } = useForm({
    validationSchema,
    initialValues,
    keepValuesOnUnmount: true,
});

const formatFilterOptions = (options: any): string[] => {
    if (typeof options === "string") {
        return [options];
    } else {
        return options;
    }
};

const apiJobsFilterValues = computed(() => {
    return {
        ...(route.query.q && { q: route.query.q as string }),
        ...(route.query.pc && { pc: route.query.pc as string }),
        ...(route.query.pagenum && { pagenum: Number(route.query.pagenum) }),
        ...(route.query.c && { c: formatFilterOptions(route.query.c) }),
        ...(route.query.s && { s: formatFilterOptions(route.query.s) }),
        ...(route.query.p && { p: formatFilterOptions(route.query.p) }),
        ...(route.query.sw && { sw: formatFilterOptions(route.query.sw) }),
        ...(route.query.el && { el: formatFilterOptions(route.query.el) }),
    };
});

const jobsFilterValues = computed(() => {
    return {
        ...(filterValues.q && { q: filterValues.q as string }),
        ...(filterValues.pc && { pc: filterValues.pc as string }),
        ...(filterValues.pagenum && { pagenum: filterValues.pagenum as number }),
        ...(filterValues.c.length > 0 && { c: filterValues.c as string[] }),
        ...(filterValues.s.length > 0 && { s: filterValues.s as string[] }),
        ...(filterValues.p.length > 0 && { p: filterValues.p as string[] }),
        ...(filterValues.sw.length > 0 && { sw: filterValues.sw as string[] }),
        ...(filterValues.el.length > 0 && { el: filterValues.el as string[] }),
    };
});

const apiJobsRequestBody = computed(() => {
    const body: ApiJobsBody = {
        ...(route.query.q && { q: route.query.q as string }),
        ...(route.query.pc && { pc: route.query.pc as string }),
        ...(route.query.pagenum && { pagenum: Number(route.query.pagenum) }),
    };

    const filter = {
        ...(route.query.c && { c: formatFilterOptions(route.query.c) }),
        ...(route.query.s && { s: formatFilterOptions(route.query.s) }),
        ...(route.query.p && { p: formatFilterOptions(route.query.p) }),
        ...(route.query.sw && { sw: formatFilterOptions(route.query.sw) }),
        ...(route.query.el && { el: formatFilterOptions(route.query.el) }),
    };

    if (Object.keys(filter).length > 0) {
        body.f = filter;
    }

    return body;
});

const { data } = await useAsyncData<JobsApiReponse>(
    "jobs",
    () => $fetch("https://data.pro-cluster.com/jobs", {
        method: "POST",
        body: {
            ...apiJobsRequestBody.value,
            perpage: 10,
            aggs: true,
        },
    }), {
        watch: [() => apiJobsFilterValues.value],
    },
);

onMounted(() => {
    setValues({
        ...apiJobsFilterValues.value,
    });
});

watchDebounced(
    filterValues,
    () => {
        router.push({
            query: {
                ...(jobsFilterValues.value),
            },
        });
    },
    { debounce: 500, maxWait: 1000 },
);

const handlePageChange = (page: number) => {
    setFieldValue("pagenum", page);
    document.getElementById("page-title")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
    <div class="container px-0 pb-24">
        <ui-page-header id="page-title" class="pb-8 pt-12">
            <ui-page-header-header>
                <ui-page-header-title>
                    Zoek naar vacatures op basis van uw voorkeuren
                </ui-page-header-title>
                <ui-page-header-description>
                    Ontdek, filter en ontdek eindeloze carrièremogelijkheden.
                </ui-page-header-description>
            </ui-page-header-header>
        </ui-page-header>

        <div class="flex gap-x-16 px-8">
            <div class="border-border-secondary bg-background-primary max-w-84 h-fit w-full rounded-2xl border p-6">
                <form class="space-y-6" @submit.prevent>
                    <h2 class="mb-6 flex items-center text-xl">
                        Filters
                        <ui-button
                            label="Wis filters"
                            variant="plain"
                            color="brand"
                            class="ml-auto underline"
                            @click.prevent="resetForm"
                        />
                    </h2>

                    <ui-field
                        v-slot="{ componentField }"
                        name="q"
                        validate-on-blur
                    >
                        <ui-input-text
                            v-bind="componentField"
                            prepend-icon="search-lg"
                            type="text"
                            placeholder="Functie of trefwoord"
                        />
                        <ui-field-error />
                    </ui-field>

                    <ui-field
                        v-slot="{ componentField }"
                        name="pc"
                        validate-on-blur
                    >
                        <ui-input-text
                            v-bind="componentField"
                            prepend-icon="marker-pin-01"
                            type="text"
                            placeholder="Postcode"
                        />
                        <ui-field-error />
                    </ui-field>

                    <ui-separator variant="secondary" class="mt-5" />

                    <ui-field
                        v-for="(filter, filterName) in availableFilters"
                        :key="filter?.meta.label"
                        :name="filterName"
                    >
                        <ui-collapsible
                            v-if="filter !== undefined"
                            v-slot="{ open }"
                            :default-open="filter.collapsibleStates.primary"
                            @update:open="filter.collapsibleStates.primary = $event"
                        >
                            <ui-collapsible-trigger class="w-full">
                                <h3 class="hover:text-text-primary text-text-secondary flex cursor-pointer items-center">
                                    {{ filter.meta.label }}
                                    <ui-icon
                                        icon="chevron-down"
                                        size="sm"
                                        :class="[open ? 'scale-y-100' : '-scale-y-100', ' ml-auto transition']"
                                    />
                                </h3>
                            </ui-collapsible-trigger>
                            <ui-collapsible-content>
                                <div class="relative space-y-3 pb-1 pl-2 pt-4">
                                    <ui-field
                                        v-for="option in filter.options.slice(0, 5)"
                                        :key="option.position"
                                        v-slot="{ value, handleChange }"
                                        :value="option.key"
                                        :unchecked-value="false"
                                        :name="filterName"
                                        type="checkbox"
                                        class="flex flex-row gap-x-2 space-y-0"
                                    >
                                        <ui-field-control>
                                            <ui-checkbox
                                                :label="option.key"
                                                :checked="value.includes(option.key)"
                                                class="mt-0.5"
                                                size="xs"
                                                @update:checked="handleChange"
                                            />
                                        </ui-field-control>
                                        <ui-field-label>
                                            {{ option.key }}
                                        </ui-field-label>
                                    </ui-field>

                                    <ui-collapsible
                                        v-if="filter.options.length > 5"
                                        v-slot="{ open: childOpen }"
                                        :default-open="filter.collapsibleStates.secondary"
                                        @update:open="filter.collapsibleStates.secondary = $event"
                                    >
                                        <ui-collapsible-content>
                                            <div class="relative space-y-3 pb-3">
                                                <ui-field
                                                    v-for="option in filter.options.slice(5)"
                                                    :key="option.position"
                                                    v-slot="{ value, handleChange }"
                                                    :value="option.key"
                                                    :unchecked-value="false"
                                                    :name="filterName"
                                                    type="checkbox"
                                                    class="flex flex-row gap-x-2 space-y-0"
                                                >
                                                    <ui-field-control>
                                                        <ui-checkbox
                                                            :label="option.key"
                                                            :checked="value.includes(option.key)"
                                                            class="mt-0.5"
                                                            size="xs"
                                                            @update:checked="handleChange"
                                                        />
                                                    </ui-field-control>
                                                    <ui-field-label>
                                                        {{ option.key }}
                                                    </ui-field-label>
                                                </ui-field>
                                            </div>
                                        </ui-collapsible-content>
                                        <ui-collapsible-trigger>
                                            <ui-button
                                                :label="childOpen ? 'Minder weergeven' : 'Meer weergeven'"
                                                variant="plain"
                                                color="brand"
                                                class="underline"
                                                @click.prevent
                                            />
                                        </ui-collapsible-trigger>
                                    </ui-collapsible>
                                </div>
                            </ui-collapsible-content>
                        </ui-collapsible>
                    </ui-field>
                </form>
            </div>

            <div v-if="data" class="w-full space-y-8">
                <div class="flex items-center justify-between">
                    <h2>
                        <span class="text-foreground-brand-primary font-semibold">
                            {{ data.hits.total || '...' }}
                        </span>
                        Vacatures gevonden
                    </h2>
                    <span class="text-text-tertiary text-sm font-normal">
                        Vacatures {{ ((filterValues.pagenum - 1) * 10) + 1 }} - {{ filterValues.pagenum * 10 > data.hits.total ? data.hits.total : filterValues.pagenum * 10 }} worden weergegeven
                    </span>
                </div>

                <div class="space-y-6">
                    <job-card
                        v-for="job in data.hits.hits"
                        :key="job._id"
                        :job="job"
                    />
                </div>

                <ui-pagination
                    v-model:page="filterValues.pagenum"
                    :total="data.hits.total"
                    :sibling-count="1"
                    show-edges
                    :default-page="1"
                    @update:page="handlePageChange"
                >
                    <ui-pagination-list v-slot="{ items }">
                        <ui-pagination-first />
                        <ui-pagination-prev />

                        <div class="mx-auto flex gap-0.5">
                            <template v-for="(item, index) in items">
                                <ui-pagination-list-item v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                                    {{ item.value }}
                                </ui-pagination-list-item>
                                <ui-pagination-ellipsis v-else :key="item.type" :index="index" />
                            </template>
                        </div>

                        <ui-pagination-next />
                        <ui-pagination-last />
                    </ui-pagination-list>
                </ui-pagination>
            </div>
        </div>
    </div>
</template>
