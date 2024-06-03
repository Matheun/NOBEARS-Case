import { cva } from "class-variance-authority";

export const cvaSliderRootVariants = cva(
    `
        relative flex w-full touch-none select-none items-center z-10
    `,
);
export const cvaSliderTrackVariants = cva(
    `
        relative h-2 w-full grow overflow-hidden rounded-full

        bg-[--slider-track-bg]

        [--slider-track-bg:theme(colors.background.quaternary)]
    `,
);
export const cvaSliderRangeVariants = cva(
    `
        absolute h-full

        bg-[--slider-range-bg]

        [--slider-range-bg:theme(colors.foreground.brand.primary.DEFAULT)]
    `,
);
export const cvaSliderThumbVariants = cva(
    `
        block size-5 rounded-full shadow-md cursor-pointer
        transition-colors

        ring-offset-background
        
        bg-[--slider-thumb-bg] border-[3px] border-[--slider-thumb-border]
        
        focus-visible:outline-none
        focus-visible:ring-4
        focus-visible:ring-[--slider-thumb-ring]
        focus-visible:ring-offset-0
        
        disabled:pointer-events-none
        disabled:opacity-50

        [--slider-thumb-bg:theme(colors.background.primary.DEFAULT)]
        [--slider-thumb-border:theme(colors.border.brand.solid.DEFAULT)]
        [--slider-thumb-ring:theme(colors.ring.brand)]
    `,
);
