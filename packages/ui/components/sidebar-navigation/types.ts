import type { HTMLAttributes } from "vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaSidebarNavigationVariants } from "./cva";

export type CvaSidebarNavigationVariants = VariantProps<typeof cvaSidebarNavigationVariants>;

export type SidebarNavigationThemes = CvaSidebarNavigationVariants["theme"];
export type SidebarNavigationStyles = CvaSidebarNavigationVariants["style"];

export interface SidebarNavigationProps {
    theme?: SidebarNavigationThemes;
    style?: SidebarNavigationStyles;
    open?: boolean;
    class?: HTMLAttributes["class"];
}

export interface SidebarNavigationContentProps {
    class?: HTMLAttributes["class"];
}

export interface SidebarNavigationSubContentProps {
    class?: HTMLAttributes["class"];
}

export interface SidebarNavigationGroupProps {
    class?: HTMLAttributes["class"];
}

export interface SidebarNavigationItemProps {
    active?: boolean;
    label?: string;
    icon?: string;
    badge?: string;
    class?: HTMLAttributes["class"];
}
