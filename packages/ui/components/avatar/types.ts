import type { HTMLAttributes } from "vue";
import type { VariantProps } from "class-variance-authority";
import type {
    AvatarImageProps as RadixAvatarImageProps,
    AvatarFallbackProps as RadixAvatarFallbackProps,
} from "radix-vue";
import type { cvaAvatarVariants, cvaAvatarFallbackVariants } from "./cva";

export type CvaAvatarVariants = VariantProps<typeof cvaAvatarVariants>;
export type CvaAvatarFallbackVariants = VariantProps<typeof cvaAvatarFallbackVariants>;

export type AvatarSize = CvaAvatarVariants["size"];
export type AvatarShape = CvaAvatarVariants["shape"];

export interface AvatarProps {
    src?: string
    size?: AvatarSize
    shape?: AvatarShape
    alt?: string
    fallback?: string
    class?: HTMLAttributes["class"]
}

export interface AvatarImageProps extends RadixAvatarImageProps {}

export interface AvatarFallbackProps extends RadixAvatarFallbackProps {
    size?: AvatarSize
    fallback?: string
    class?: HTMLAttributes["class"]
}
