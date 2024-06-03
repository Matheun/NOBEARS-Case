import { cva } from "class-variance-authority";

export const cvaSidebarNavigationVariants = cva(
    `
        relative isolate md:h-screen overflow-hidden shrink-0

        bg-[--sidebar-navigation-bg] border-r border-[--sidebar-navigation-border] text-[--sidebar-navigation-fg]

        [--sidebar-navigation-bg:theme(colors.background.primary.DEFAULT)]
        [--sidebar-navigation-border:theme(colors.border.secondary)]
        [--sidebar-navigation-fg:theme(colors.foreground.white)]
    `,
    {
        variants: {
            theme: {
                light: "",
                dark: "dark",
            },
            style: {
                simple: "w-80",
                "dual-tier": "max-w-70 w-fit",
                slim: "w-20",
            },
            open: {
                true: "w-[33rem]",
                false: "w-70",
            },
        },
    },
);

export const cvaSidebarNavigationContentVariants = cva(
    `
        relative isolate h-full py-8 px-6 flex flex-col gap-y-6 overflow-y-scroll
    `,
);

export const cvaSidebarNavigationSubContentVariants = cva(
    `
        relative isolate h-full py-8 px-4 flex flex-col gap-y-3 w-[15.5rem]
    `,
);

export const cvaSidebarNavigationGroupVariants = cva("space-y-1");

export const cvaSidebarNavigationItemVariants = cva(
    `
        relative isolate flex items-center gap-x-2 py-2 px-3 rounded-md select-none font-semibold text-md
        overflow-hidden
        transition-all

        bg-[--sidebar-navigation-item-bg] text-[--sidebar-navigation-item-fg]

        hover:[--sidebar-navigation-item-bg:theme(colors.background.active)]
        hover:[--sidebar-navigation-item-fg:theme(colors.foreground.secondary.hover)]
        hover:[--sidebar-navigation-item-icon-fg:theme(colors.foreground.secondary.hover)]

        focus-visible:outline-none outline-none
        focus-visible:ring-offset-0
        focus-visible:ring-4
        focus-visible:ring-[--sidebar-navigation-item-ring]

        [&>[data-slot=icon]]:text-[--sidebar-navigation-item-icon-fg]
        [&>[data-slot=icon]]:transition-colors
        [&>[data-slot=icon]]:mr-1
        [&>[data-slot=append]]:ml-auto

        [--sidebar-navigation-item-bg:theme(colors.background.primary.DEFAULT)]
        [--sidebar-navigation-item-fg:theme(colors.foreground.secondary.DEFAULT)]
        [--sidebar-navigation-item-ring:theme(colors.ring.primary)]
        [--sidebar-navigation-item-icon-fg:theme(colors.foreground.quaternary.DEFAULT)]
    `,
    {
        variants: {
            theme: {
                light: "",
                dark: "dark",
            },
            active: {
                true: `
                    [--sidebar-navigation-item-bg:theme(colors.background.active)]
                    [--sidebar-navigation-item-fg:theme(colors.foreground.secondary.hover)]
                    [--sidebar-navigation-item-icon-fg:theme(colors.foreground.secondary.hover)]
                `,
            },
        },
    },
);
