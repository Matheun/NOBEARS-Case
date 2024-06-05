export interface JobStatus {
    exclusive: boolean;
    internal: boolean;
}

export interface JobCampaign {
    channels: string[];
    exclude: boolean;
    weight: number;
}

export interface JobBranch {
    name: string;
    location: string;
    street: string;
    postcode: string;
    telephone: string;
    callback_id: string;
    email: string;
}

export interface JobPhoto {
    src: string;
    path: string;
    format: string;
}

export interface JobRecruiter {
    name: string;
    first_name: string;
    last_name: string;
    telephone: string;
    email: string;
    title: string;
    is_active: boolean;
    about_text: string | null;
    photo: JobPhoto;
}

export interface JobExperience {
    min: number;
    max: number;
}

export interface JobSalary {
    min: number;
    max: number;
}

export interface JobHours {
    min: number;
    max: number;
}

export interface JobCriteria {
    es_structured: boolean;
    type: string;
    value: string;
    text: string;
}

export interface JobVacancy {
    id: string;
    parent_id: string;
    number: string;
    date: string;
    employment_type: string;
    career_level: string;
    contract_type: string;
    shiftwork: string[];
    years_experience: JobExperience;
    salary_indication: JobSalary;
    driving_license: string;
    hours: JobHours;
    languages: string[];
    education_level: string;
    hard_criteria: JobCriteria[];
}

export interface JobIGB {
    name: string;
}

export interface JobImage {
    src: string;
    path: string;
    format: string;
}

export interface JobMedia {
    images: JobImage[];
    videos: any[];
}

export interface JobLocation {
    text: string;
    place: string;
    province: string;
}

export interface JobWebsite {
    label: string | null;
    title: string;
    subtitle: string;
    media: JobMedia;
    location: JobLocation;
    intro: string;
    description: string;
    requirements: string;
    benefits: string;
    sector: string[];
    category: string[];
    slug: string;
}

export interface JobSource {
    published_at: string;
    created_at: string;
    updated_at: string;
    status: JobStatus;
    campaign: JobCampaign;
    branch: JobBranch;
    recruiter: JobRecruiter;
    vacancy: JobVacancy;
    igb: JobIGB;
    website: JobWebsite;
}

export interface Job {
    _index: string;
    _type: string;
    _id: string;
    _score: number;
    _timestamp: number;
    _source: JobSource;
}

export interface JobAggregationMeta {
    label_singular: string;
    field: string;
    pname: string;
    label: string;
}
export interface JobAggregationBucket {
    key: string;
    doc_count: number;
    position: number;
}
export interface JobAggregation {
    meta: JobAggregationMeta;
    doc_count_error_upper_bound: number;
    sum_other_doc_count: number;
    buckets: JobAggregationBucket[];
}

export interface JobsApiReponse {
    hits: {
        total: number;
        max_score: number;
        hits: Job[];
    },
    aggregations: {
        sectors: JobAggregation;
        provinces: JobAggregation;
        education_level: JobAggregation;
        categories: JobAggregation;
        shiftwork: JobAggregation;
    };
    [key: string]: any;
}

export interface ApiJobFilters {
    /**
     * @description Category
     */
    c?: string[];
    /**
     * @description Sector
     */
    s?: string[];
    /**
     * @description Province
     */
    p?: string[];
    /**
     * @description Shift Work
     */
    sw?: string[];
    /**
     * @description Education Level
     */
    el?: string[];
    /**
     * @description Account Number
     */
    an?: string[];
    /**
     * @description Branch Name (lowercase)
     */
    bn?: string[];
}

export interface JobFilter {
    meta: JobAggregationMeta,
    collapsibleStates: {
        primary: boolean;
        secondary: boolean;
    },
    options: JobAggregationBucket[]
}
export interface JobFilters {
    c?: JobFilter;
    s?: JobFilter;
    p?: JobFilter;
    sw?: JobFilter;
    el?: JobFilter;
}
export interface JobFilterFormValues {
    q: string;
    pc: string;
    // postalCodeRange: string;
    c: string[];
    s: string[];
    p: string[];
    sw: string[];
    el: string[];
    pagenum?: number;
}

export interface ApiJobsBody {
    /**
     * @description query
     */
    q?: string | null;
    /**
     * @description show internal jobs
     * @default false
     */
    internal?: boolean | null;
    /**
     * @description postalcode
     */
    pc?: string | null;
    /**
     * @description Use title, slug, updated, created, inserted or published
     * @default title.asc
     */
    sortby?: string | null;
    /**
     * @description hits per page
     * @default 10
     */
    perpage?: number | null;
    /**
     * @description page number
     * @default 1
     */
    pagenum?: number | null;
    /**
     * @description filter
     */
    f?: ApiJobFilters;
    /**
     * @description query type
     * @default 2
     */
    qtype?: number | null;
    /**
     * @description Show suggestions
     * @default true
     */
    sugs?: boolean | null;
    /**
     * @description enable aggregation results
     */
    aggs?: boolean | null;
    /**
     * @description add missing aggregations
     */
    missing_aggs?: boolean | null;
    /**
     * @description show highlighted jobs
     */
    highlight?: boolean | null;
}
