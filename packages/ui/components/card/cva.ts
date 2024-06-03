import { cva } from "class-variance-authority";

export const cvaCardVariants = cva(
    `
        rounded-2xl bg-card text-card-foreground shadow-sm

        bg-[--card-bg] border border-[--card-border]

        [--card-bg:theme(colors.background.primary.DEFAULT)]
        [--card-border:theme(colors.border.secondary)]
    `,
    {
        variants: {
            elevated: {
                true: "shadow-xs",
                false: "",
            },
        },
    },
);

export const cvaCardContentVariants = cva("p-6 pt-0");

export const cvaCardHeaderVariants = cva(
    `
        flex flex-col relative group
        gap-y-1 gap-x-4
        px-4 py-5 sm:p-6
    `,
);
export const cvaCardTitleVariants = cva(
    `
        text-lg font-semibold leading-7 gap-x-2 flex items-center
        
        group-has-[[data-slot=card-settings]]:pr-11
        sm:group-has-[[data-slot=card-settings]]:pr-10
    `,
);
export const cvaCardDescriptionVariants = cva("text-sm text-text-tertiary leading-5");

// export const cvaCardSettingsVariants = cva("absolute top-4 right-4");
export const cvaCardSettingsContentVariants = cva("");
export const cvaCardSettingsTriggerVariants = cva(
    `
        absolute top-4 right-4 sm:top-5 sm:right-5

        data-[state=open]:text-foreground-quinary-hover
        text-foreground-quinary
    `,
);

export const cvaCardFooterVariants = cva("flex items-center p-6 pt-0");
