<script setup lang="ts">
import type { BackgroundPatternProps } from "./types";
import { cvaBackgroundPatternVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<BackgroundPatternProps>(), {
    size: "md",
    fade: true,
    pattern: "squares",
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <ui-icon
        v-bind="delegatedProps"
        type="background-pattern-decorative"
        :icon="props.pattern + '-' + props.size"
        :class="cn(
            cvaBackgroundPatternVariants({
                size: props.size,
                fade: props.fade,
            }),
            props.class
        )"
    />
    <!-- <div>
        <div class="background-pattern background-pattern-circles-lg" />
        <ui-icon icon="circles-sm" type="background-pattern" />
    </div> -->
</template>

<!-- <style lang="scss">
.background-pattern {
    // transform: rotate(45deg);
    // background-image:  linear-gradient(green 1px, transparent 1px), linear-gradient(to right, green 1px, transparent 1px);
    // background-size: 48px 48px;
    // background-image: radial-gradient(circle at center center, green, rgba(255,255,255,0)), repeating-radial-gradient(circle at center center, green, green, 10px, transparent 20px, transparent 10px);
    // background: repeating-radial-gradient(circle at center center, green 1px, hsl(var(--background-primary) / 1) 10px);
    // background: repeating-radial-gradient(circle at center center, green 1px, transparent 3px, transparent 48px);
    // background-blend-mode: multiply;
    // background-image: url("data:image/svg+xml,<svg width='216' height='216' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='48' cy='48' r='47.5' stroke='green'/><circle cx='48' cy='48' r='47.5' stroke='green'/><circle cx='48' cy='48' r='71.5' stroke='green'/><circle cx='48' cy='48' r='95.5' stroke='green'/><circle cx='48' cy='48' r='119.5' stroke='green'/><circle cx='48' cy='48' r='143.5' stroke='green'/><circle cx='48' cy='48' r='167.5' stroke='green'/></svg>");
    // background-image: url("data:image/svg+xml,");
    // background: url("data:image/svg+xml,%3Csvg width='216' height='216' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='48' cy='48' r='47.5' stroke='green'/%3E%3Ccircle cx='48' cy='48' r='47.5' stroke='green'/%3E%3Ccircle cx='48' cy='48' r='71.5' stroke='green'/%3E%3Ccircle cx='48' cy='48' r='95.5' stroke='green'/%3E%3Ccircle cx='48' cy='48' r='119.5' stroke='green'/%3E%3Ccircle cx='48' cy='48' r='143.5' stroke='green'/%3E%3Ccircle cx='48' cy='48' r='167.5' stroke='green'/%3E%3C/svg%3E");
    background-image: url("data:image/svg+xml,%3Csvg width='336' height='336' viewBox='0 0 336 336' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='168' cy='168' r='47.5' stroke='%23EAECF0'/%3E%3Ccircle cx='168' cy='168' r='47.5' stroke='%23EAECF0'/%3E%3Ccircle cx='168' cy='168' r='71.5' stroke='%23EAECF0'/%3E%3Ccircle cx='168' cy='168' r='95.5' stroke='%23EAECF0'/%3E%3Ccircle cx='168' cy='168' r='119.5' stroke='%23EAECF0'/%3E%3Ccircle cx='168' cy='168' r='143.5' stroke='%23EAECF0'/%3E%3Ccircle cx='168' cy='168' r='167.5' stroke='%23EAECF0'/%3E%3C/svg%3E");
    // background-size: 336px;
    background-repeat: no-repeat;
    background-position: center;
    mask-image: radial-gradient(50% 50% at 50% 50%, #000 0%, rgba(0, 0, 0, 0.00) 100%);
    mask-mode: alpha;
    // mask-size: 336px;
}

@media screen and (max-width: 640px) {
    .background-pattern {
        background-size: 32px 32px;
    }
}

.auth-password-background-circles {
    background-color: rgba(255,255,255,0);
    opacity: 1;
    background-image: radial-gradient(circle at center center, #444cf7, rgba(255,255,255,0)), repeating-radial-gradient(circle at center center, #444cf7, #444cf7, 10px, transparent 20px, transparent 10px);
    background-blend-mode: multiply;
}
</style> -->

<style lang="scss">
@use "sass:map";

$patterns: (
    circles-sm: "<svg width='336' height='336' viewBox='0 0 336 336' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='168' cy='168' r='47.5' stroke='currentColor'/><circle cx='168' cy='168' r='47.5' stroke='currentColor'/><circle cx='168' cy='168' r='71.5' stroke='currentColor'/><circle cx='168' cy='168' r='95.5' stroke='currentColor'/><circle cx='168' cy='168' r='119.5' stroke='currentColor'/><circle cx='168' cy='168' r='143.5' stroke='currentColor'/><circle cx='168' cy='168' r='167.5' stroke='currentColor'/></svg>",
    circles-md: "<svg width='480' height='480' viewBox='0 0 480 480' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='240' cy='240' r='47.5' stroke='currentColor'/><circle cx='240' cy='240' r='79.5' stroke='currentColor'/><circle cx='240' cy='240' r='111.5' stroke='currentColor'/><circle cx='240' cy='240' r='143.5' stroke='currentColor'/><circle cx='240' cy='240' r='143.5' stroke='currentColor'/><circle cx='240' cy='240' r='175.5' stroke='currentColor'/><circle cx='240' cy='240' r='207.5' stroke='currentColor'/><circle cx='240' cy='240' r='239.5' stroke='currentColor'/></svg>",
    circles-lg: "<svg width='768' height='768' viewBox='0 0 768 768' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='384' cy='384' r='47.5' stroke='currentColor'/><circle cx='384' cy='384' r='95.5' stroke='currentColor'/><circle cx='384' cy='384' r='143.5' stroke='currentColor'/><circle cx='384' cy='384' r='191.5' stroke='currentColor'/><circle cx='384' cy='384' r='239.5' stroke='currentColor'/><circle cx='384' cy='384' r='287.5' stroke='currentColor'/><circle cx='384' cy='384' r='335.5' stroke='currentColor'/><circle cx='384' cy='384' r='383.5' stroke='currentColor'/></svg>",
);

@mixin pattern-style($pattern-name) {
    .background-pattern-#{$pattern-name} {
        // .wp-block-button__link {
        //     &::after, &::before {
        $pattern: 'data:image/svg+xml;utf8,' + map.get($patterns, $pattern-name);
        mask-image: url( $pattern );
        -webkit-mask-image: url( $pattern );
        //     }
        // }
    }
}

@include pattern-style(circles-sm);
@include pattern-style(circles-md);
@include pattern-style(circles-lg);

// // Add icons to Button blocks and style appropriately.
// .wp-block-button[class*=has-icon__] {
//     .wp-block-button__link {
//         &::after {
//             margin-left: 0.375rem;
//             content: "";
//         }

//         // Styles the icon.
//         &::after, &::before {
//             $icon: map.get($icons, chevron-right);
//             display: inline-block;
//             background-color: currentColor;
//             -webkit-mask-size: contain;
//             mask-size: contain;
//             -webkit-mask-position:center;
//             mask-position:center;
//             -webkit-mask-repeat: no-repeat;
//             mask-repeat: no-repeat;
//             height: 1.25rem;
//             width: 1.25rem;
//             mask-image: url( $icon );
//             -webkit-mask-image: url( $icon );
//             // mask-image: url( map.get($icons, chevron-right) );
//             // -webkit-mask-image: url( map.get($icons, chevron-right) );
//         }
//     }

//     &.has-icon-position__left {
//         .wp-block-button__link {
//             &::after {
//                 content: none;
//             }

//             &::before {
//                 margin-right: 0.375rem;
//                 content: "";
//             }
//         }
//     }

//     @include icon-style(chevron-right);

// // Icons
// $icons: (
//     clock: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'><path d='M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
//     share-07: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'><path d='M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49M21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5ZM9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12ZM21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 17.3431 16.3431 16 18 16C19.6569 16 21 17.3431 21 19Z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
//     calendar: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='currentColor'><path d='M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
//     expand-05: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M15 9l6-6m0 0h-6m6 0v6M9 9L3 3m0 0v6m0-6h6m0 12l-6 6m0 0h6m-6 0v-6m12 0l6 6m0 0v-6m0 6h-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-narrow-up: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M12 20V4m0 0l-6 6m6-6l6 6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     switch-vertical-02: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M7 4v16m0 0l-4-4m4 4l4-4m6 4V4m0 0l-4 4m4-4l4 4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     switch-vertical-01: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M17 4v16m0 0l-4-4m4 4l4-4M7 20V4m0 0L3 8m4-4l4 4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     switch-horizontal-02: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M4 17h16m0 0l-4-4m4 4l-4 4m4-14H4m0 0l4-4M4 7l4 4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     switch-horizontal-01: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M20 17H4m0 0l4-4m-4 4l4 4M4 7h16m0 0l-4-4m4 4l-4 4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     reverse-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M20 7H10a6 6 0 1 0 0 12h10m0-12l-4-4m4 4l-4 4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     reverse-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M4 7h10a6 6 0 0 1 0 12H4M4 7l4-4M4 7l4 4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     refresh-cw-05: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M20.453 12.893A8.5 8.5 0 0 1 4.638 16.25l-.25-.433m-.842-4.71A8.5 8.5 0 0 1 19.361 7.75l.25.433M3.493 18.066l.732-2.732 2.732.732m10.085-8.132l2.732.732.732-2.732' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     refresh-cw-04: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M17 5.125A8.5 8.5 0 0 1 12 20.5h-.5M7 18.875A8.5 8.5 0 0 1 12 3.5h.5m.5 18.9l-2-2 2-2M11 5.6l2-2-2-2' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     refresh-cw-03: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M14 22s.85-.121 4.364-3.636A9 9 0 0 0 14 3.224M14 22h6m-6 0v-6M10 2s-.85.122-4.364 3.636A9 9 0 0 0 10 20.776M10 2H4m6 0v6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     refresh-cw-02: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M2 14s.121.85 3.636 4.364A9 9 0 0 0 20.776 14M2 14v6m0-6h6m14-4s-.121-.85-3.636-4.364A9 9 0 0 0 3.224 10M22 10V4m0 6h-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     refresh-cw-01: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M22 10s-2.005-2.732-3.634-4.362a9 9 0 1 0 2.282 8.862M22 10V4m0 6h-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     refresh-ccw-05: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M8.547 19.767A8.5 8.5 0 0 0 19.362 7.75l-.25-.433M4.638 16.25A8.5 8.5 0 0 1 15.453 4.233m-12.96 12.1l2.732.733.733-2.732m12.085-4.668l.732-2.732 2.732.732' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     refresh-ccw-04: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M17 18.875A8.5 8.5 0 0 0 12 3.5h-.5m.5 17A8.5 8.5 0 0 1 7 5.125M11 22.4l2-2-2-2m2-12.8l-2-2 2-2' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     refresh-ccw-03: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M14 2s.85.121 4.364 3.636A9 9 0 0 1 14 20.776M14 2h6m-6 0v6m-4 14s-.85-.122-4.364-3.636A9 9 0 0 1 10 3.224M10 22H4m6 0v-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     refresh-ccw-02: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M2 10s.121-.85 3.636-4.364A9 9 0 0 1 20.776 10M2 10V4m0 6h6m14 4s-.121.85-3.636 4.364A9 9 0 0 1 3.224 14M22 14v6m0-6h-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     refresh-ccw-01: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M2 10s2.005-2.732 3.634-4.362A9 9 0 1 1 12 21a9.004 9.004 0 0 1-8.648-6.5M2 10V4m0 6h6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     infinity: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.74-8-4.584 0-4.584 8 0 8 5.607 0 7.645-8 12.74-8z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     flip-forward: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M21 9H7.5a4.5 4.5 0 1 0 0 9H12m9-9l-4-4m4 4l-4 4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     flip-backward: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M3 9h13.5a4.5 4.5 0 1 1 0 9H12M3 9l4-4M3 9l4 4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     expand-06: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M16 8l5-5m0 0h-5m5 0v5M8 8L3 3m0 0v5m0-5h5m0 13l-5 5m0 0h5m-5 0v-5m13 0l5 5m0 0v-5m0 5h-5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     expand-04: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M20 14v2.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 20 17.92 20 16.8 20H14M10 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2V10m11-1l6-6m0 0h-6m6 0v6M9 15l-6 6m0 0h6m-6 0v-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     expand-03: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M21 14v2.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H14M10 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8V10m12-1l6-6m0 0h-6m6 0v6M9 15l-6 6m0 0h6m-6 0v-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     expand-02: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M3 21L21 3M3 21h6m-6 0v-6M21 3h-6m6 0v6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     expand-01: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M14 10l7-7m0 0h-6m6 0v6m-11 5l-7 7m0 0h6m-6 0v-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     corner-up-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M4 20v-1.4c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C8.56 9 10.24 9 13.6 9H20m0 0l-5 5m5-5l-5-5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     corner-up-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9 14L4 9m0 0l5-5M4 9h6.4c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C20 13.56 20 15.24 20 18.6V20' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     corner-right-up: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M3 20h3.4c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C16 15.44 16 13.76 16 10.4V4m0 0l-5 5m5-5l5 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     corner-right-down: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M3 4h3.4c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C16 8.56 16 10.24 16 13.6V20m0 0l-5-5m5 5l5-5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     corner-left-up: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M21 20h-3.4c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C8 15.44 8 13.76 8 10.4V4m0 0l5 5M8 4L3 9' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     corner-left-down: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M21 4h-3.4c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622C8 8.56 8 10.24 8 13.6V20m0 0l5-5m-5 5l-5-5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     corner-down-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M4 4v1.4c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C8.56 15 10.24 15 13.6 15H20m0 0l-5-5m5 5l-5 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     corner-down-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M20 4v1.4c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C15.44 15 13.76 15 10.4 15H4m0 0l5-5m-5 5l5 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     chevron-up: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M18 15l-6-6-6 6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     chevron-up-double: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M17 18l-5-5-5 5m10-7l-5-5-5 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     chevron-selector-vertical: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M7 15l5 5 5-5M7 9l5-5 5 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     chevron-selector-horizontal: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9 7l-5 5 5 5m6-10l5 5-5 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     chevron-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9 18l6-6-6-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     chevron-right-double: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M6 17l5-5-5-5m7 10l5-5-5-5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     chevron-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M15 18l-6-6 6-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     chevron-left-double: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M18 17l-5-5 5-5m-7 10l-5-5 5-5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     chevron-down: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M6 9l6 6 6-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     chevron-down-double: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M7 13l5 5 5-5M7 6l5 5 5-5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrows-up: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M7 20V4m0 0L3 8m4-4l4 4m6 12V9m0 0l-4 4m4-4l4 4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrows-triangle: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M13 19h4.294c1.865 0 2.798 0 3.328-.39a2 2 0 0 0 .804-1.436c.058-.655-.429-1.451-1.401-3.043l-.997-1.631M6.13 10.605l-2.155 3.526c-.972 1.592-1.459 2.388-1.401 3.043a2 2 0 0 0 .804 1.435C3.908 19 4.841 19 6.706 19H8.5m8.389-10L14.73 5.468C13.829 3.991 13.377 3.252 12.795 3a2 2 0 0 0-1.59 0c-.581.252-1.033.99-1.935 2.468L8.25 7.137M18 5l-1.098 4.098L12.804 8M2 11.598L6.098 10.5l1.098 4.098M15.5 22l-3-3 3-3' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrows-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M4 7h11m0 0l-4 4m4-4l-4-4M4 17h16m0 0l-4 4m4-4l-4-4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrows-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M20 17H4m0 0l4 4m-4-4l4-4m12-6H9m0 0l4 4M9 7l4-4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrows-down: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M17 4v11m0 0l-4-4m4 4l4-4M7 4v16m0 0l-4-4m4 4l4-4' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-up: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M12 19V5m0 0l-7 7m7-7l7 7' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-up-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M7 17L17 7m0 0H7m10 0v10' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-up-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M17 17L7 7m0 0v10M7 7h10' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-square-up: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M16 12l-4-4m0 0l-4 4m4-4v8m-4.2 5h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-square-up-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M15 15V9m0 0H9m6 0l-6 6m-1.2 6h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-square-up-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9 15V9m0 0h6M9 9l6 6m-7.2 6h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-square-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M12 16l4-4m0 0l-4-4m4 4H8m-.2 9h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-square-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M12 8l-4 4m0 0l4 4m-4-4h8m-8.2 9h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-square-down: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M8 12l4 4m0 0l4-4m-4 4V8M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-square-down-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M15 9v6m0 0H9m6 0L9 9M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-square-down-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9 9v6m0 0h6m-6 0l6-6M7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M5 12h14m0 0l-7-7m7 7l-7 7' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-narrow-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M4 12h16m0 0l-6-6m6 6l-6 6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-narrow-up-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M6 18L18 6m0 0h-8m8 0v8' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-narrow-up-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M18 18L6 6m0 0v8m0-8h8' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-narrow-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M20 12H4m0 0l6 6m-6-6l6-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-narrow-down: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M12 4v16m0 0l6-6m-6 6l-6-6' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-narrow-down-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M6 6l12 12m0 0v-8m0 8h-8' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-narrow-down-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M18 6L6 18m0 0h8m-8 0v-8' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M19 12H5m0 0l7 7m-7-7l7-7' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-down: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M12 5v14m0 0l7-7m-7 7l-7-7' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-down-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M7 7l10 10m0 0V7m0 10H7' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-down-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M17 7L7 17m0 0h10M7 17V7' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-up: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M16 12l-4-4m0 0l-4 4m4-4v8m10-4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-up-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M15 15V9m0 0H9m6 0l-6 6m13-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-up-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9 15V9m0 0h6M9 9l6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M12 16l4-4m0 0l-4-4m4 4H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M12 8l-4 4m0 0l4 4m-4-4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-down: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M8 12l4 4m0 0l4-4m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-down-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M15 9v6m0 0H9m6 0L9 9m13 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-down-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9 9v6m0 0h6m-6 0l6-6m7 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-broken-up: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M7 20.662A9.996 9.996 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.996 9.996 0 0 1-5 8.662M16 12l-4-4m0 0l-4 4m4-4v14' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-broken-up-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M2.34 14.59a9.996 9.996 0 0 1 2.589-9.661c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142a9.996 9.996 0 0 1-9.66 2.59M15 15V9m0 0H9m6 0L5 19' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-broken-up-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M14.59 21.66a9.996 9.996 0 0 1-9.661-2.589c-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0a9.996 9.996 0 0 1 2.59 9.66M9 15V9m0 0h6M9 9L19 19' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-broken-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M3.338 7A9.996 9.996 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.996 9.996 0 0 1-8.662-5M12 16l4-4m0 0l-4-4m4 4H2' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-broken-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M20.662 17A9.996 9.996 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.996 9.996 0 0 1 8.662 5M12 8l-4 4m0 0l4 4m-4-4h14' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-broken-down: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M17 3.338A9.996 9.996 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.996 9.996 0 0 1 5-8.662M8 12l4 4m0 0l4-4m-4 4V2' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-broken-down-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9.41 2.34a9.996 9.996 0 0 1 9.661 2.589c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0a9.996 9.996 0 0 1-2.59-9.66M15 9v6m0 0H9m6 0L5 5' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-circle-broken-down-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9 9v6m0 0h6m-6 0L19 5m2.66 4.41a9.996 9.996 0 0 1-2.589 9.661c-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142a9.996 9.996 0 0 1 9.66-2.59' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-block-up: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9.8 21c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C9 20.62 9 20.48 9 20.2V10H5l7-7 7 7h-4v10.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C14.62 21 14.48 21 14.2 21H9.8z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-block-right: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M21 12l-7-7v4H3.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218C3 9.38 3 9.52 3 9.8v4.4c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C3.38 15 3.52 15 3.8 15H14v4l7-7z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-block-left: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M3 12l7-7v4h10.2c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218C21 9.38 21 9.52 21 9.8v4.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C20.62 15 20.48 15 20.2 15H10v4l-7-7z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
//     arrow-block-down: "data:image/svg+xml;utf8,<svg width='20' height='20' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' stroke='currentColor' style='fill: none;'><path d='M9 3.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.219C9.38 3 9.52 3 9.8 3h4.4c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219C15 3.38 15 3.52 15 3.8V14h4l-7 7-7-7h4V3.8z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path></svg>",
// );

// @mixin icon-style($icon-name) {
//     &.has-icon__#{$icon-name} {
//         .wp-block-button__link {
//             &::after, &::before {
//                 $icon: map.get($icons, $icon-name);
//                 mask-image: url( $icon );
//                 -webkit-mask-image: url( $icon );
//             }
//         }
//     }
// }

// // Add icons to Button blocks and style appropriately.
// .wp-block-button[class*=has-icon__] {
//     .wp-block-button__link {
//         &::after {
//             margin-left: 0.375rem;
//             content: "";
//         }

//         // Styles the icon.
//         &::after, &::before {
//             $icon: map.get($icons, chevron-right);
//             display: inline-block;
//             background-color: currentColor;
//             -webkit-mask-size: contain;
//             mask-size: contain;
//             -webkit-mask-position:center;
//             mask-position:center;
//             -webkit-mask-repeat: no-repeat;
//             mask-repeat: no-repeat;
//             height: 1.25rem;
//             width: 1.25rem;
//             mask-image: url( $icon );
//             -webkit-mask-image: url( $icon );
//             // mask-image: url( map.get($icons, chevron-right) );
//             // -webkit-mask-image: url( map.get($icons, chevron-right) );
//         }
//     }

//     &.has-icon-position__left {
//         .wp-block-button__link {
//             &::after {
//                 content: none;
//             }

//             &::before {
//                 margin-right: 0.375rem;
//                 content: "";
//             }
//         }
//     }

//     @include icon-style(chevron-right);
//     @include icon-style(clock);
//     @include icon-style(share-07);
//     @include icon-style(calendar);
//     @include icon-style(expand-05);
//     @include icon-style(arrow-narrow-up);
//     @include icon-style(switch-vertical-02);
//     @include icon-style(switch-vertical-01);
//     @include icon-style(switch-horizontal-02);
//     @include icon-style(switch-horizontal-01);
//     @include icon-style(reverse-right);
//     @include icon-style(reverse-left);
//     @include icon-style(refresh-cw-05);
//     @include icon-style(refresh-cw-04);
//     @include icon-style(refresh-cw-03);
//     @include icon-style(refresh-cw-02);
//     @include icon-style(refresh-cw-01);
//     @include icon-style(refresh-ccw-05);
//     @include icon-style(refresh-ccw-04);
//     @include icon-style(refresh-ccw-03);
//     @include icon-style(refresh-ccw-02);
//     @include icon-style(refresh-ccw-01);
//     @include icon-style(infinity);
//     @include icon-style(flip-forward);
//     @include icon-style(flip-backward);
//     @include icon-style(expand-06);
//     @include icon-style(expand-04);
//     @include icon-style(expand-03);
//     @include icon-style(expand-02);
//     @include icon-style(expand-01);
//     @include icon-style(corner-up-right);
//     @include icon-style(corner-up-left);
//     @include icon-style(corner-right-up);
//     @include icon-style(corner-right-down);
//     @include icon-style(corner-left-up);
//     @include icon-style(corner-left-down);
//     @include icon-style(corner-down-right);
//     @include icon-style(corner-down-left);
//     @include icon-style(chevron-up);
//     @include icon-style(chevron-up-double);
//     @include icon-style(chevron-selector-vertical);
//     @include icon-style(chevron-selector-horizontal);
//     @include icon-style(chevron-right);
//     @include icon-style(chevron-right-double);
//     @include icon-style(chevron-left);
//     @include icon-style(chevron-left-double);
//     @include icon-style(chevron-down);
//     @include icon-style(chevron-down-double);
//     @include icon-style(arrows-up);
//     @include icon-style(arrows-triangle);
//     @include icon-style(arrows-right);
//     @include icon-style(arrows-left);
//     @include icon-style(arrows-down);
//     @include icon-style(arrow-up);
//     @include icon-style(arrow-up-right);
//     @include icon-style(arrow-up-left);
//     @include icon-style(arrow-square-up);
//     @include icon-style(arrow-square-up-right);
//     @include icon-style(arrow-square-up-left);
//     @include icon-style(arrow-square-right);
//     @include icon-style(arrow-square-left);
//     @include icon-style(arrow-square-down);
//     @include icon-style(arrow-square-down-right);
//     @include icon-style(arrow-square-down-left);
//     @include icon-style(arrow-right);
//     @include icon-style(arrow-narrow-right);
//     @include icon-style(arrow-narrow-up-right);
//     @include icon-style(arrow-narrow-up-left);
//     @include icon-style(arrow-narrow-left);
//     @include icon-style(arrow-narrow-down);
//     @include icon-style(arrow-narrow-down-right);
//     @include icon-style(arrow-narrow-down-left);
//     @include icon-style(arrow-left);
//     @include icon-style(arrow-down);
//     @include icon-style(arrow-down-right);
//     @include icon-style(arrow-down-left);
//     @include icon-style(arrow-circle-up);
//     @include icon-style(arrow-circle-up-right);
//     @include icon-style(arrow-circle-up-left);
//     @include icon-style(arrow-circle-right);
//     @include icon-style(arrow-circle-left);
//     @include icon-style(arrow-circle-down);
//     @include icon-style(arrow-circle-down-right);
//     @include icon-style(arrow-circle-down-left);
//     @include icon-style(arrow-circle-broken-up);
//     @include icon-style(arrow-circle-broken-up-right);
//     @include icon-style(arrow-circle-broken-up-left);
//     @include icon-style(arrow-circle-broken-right);
//     @include icon-style(arrow-circle-broken-left);
//     @include icon-style(arrow-circle-broken-down);
//     @include icon-style(arrow-circle-broken-down-right);
//     @include icon-style(arrow-circle-broken-down-left);
//     @include icon-style(arrow-block-up);
//     @include icon-style(arrow-block-right);
//     @include icon-style(arrow-block-left);
//     @include icon-style(arrow-block-down);
// }

// // Style "Icon Settings" panel.
// .button-icon-picker {
//     .components-panel__row {
//         &:not(:nth-child(2)) {
//             margin-top: 16px;
//         }
//     }

//     .button-icon-picker__grid {
//         border: 1px solid rgb(148, 148, 148);
//         border-radius: 2px;
//         padding: 2px;
//         width: 100%;
//         max-height: 200px;
//         overflow-y: auto;

//         .components-button svg {
//             fill: none;
//         }
//     }
// }
</style>
