// export type DelayFormat = "seconds" | "minutes" | "hours" | "days";

export const get60SecondsDelay = (timestamp: number | null, timestampNow: number) => {
    if (timestamp === null) { return 0; }
    const delay = Math.floor(((((timestamp + (1000 * 60)) - (timestampNow)) % 86400000) % 3600000) / 1000);
    return delay < 0 ? 0 : delay;
};
