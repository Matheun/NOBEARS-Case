// export type LogoVariants = "icon" | "wordmark";
export type LogoVariants = "icon";
export type LogoThemes = "light" | "dark";

export interface LogoProps {
    src?: string;
    theme?: LogoThemes;
    variant?: LogoVariants;
    width?: string;
    height?: string;
    placeholder?: Array<number>;
}
