import type { HTMLAttributes } from "vue";
import type { DropdownMenuProps } from "@/components/dropdown-menu";

export interface CardProps {
    elevated?: boolean;
    class?: HTMLAttributes["class"];
}

export interface CardContentProps { class?: HTMLAttributes["class"] }

export interface CardHeaderProps { class?: HTMLAttributes["class"] }
export interface CardTitleProps { class?: HTMLAttributes["class"] }
export interface CardDescriptionProps { class?: HTMLAttributes["class"] }

export interface CardSettingsProps extends DropdownMenuProps { class?: HTMLAttributes["class"] }

export interface CardFooterProps { class?: HTMLAttributes["class"] }
