import { type ClassValue, clsx } from "clsx";
import { createTailwindMerge, getDefaultConfig } from "tailwind-merge";
// import { camelize, getCurrentInstance, toHandlerKey } from 'vue'

const customTwMerge = createTailwindMerge(() => {
    const config = getDefaultConfig();
    // @ts-ignore
    config.classGroups["font-size"] = [
        "text-xs",
        "text-sm",
        "text-md",
        "text-lg",
        "text-xl",
        "text-display-xs",
        "text-display-sm",
        "text-display-md",
        "text-display-lg",
        "text-display-xl",
        "text-display-2xl",
    ];
    return config;
});

export function cn (...inputs: ClassValue[]) {
    return customTwMerge(clsx(inputs));
}
