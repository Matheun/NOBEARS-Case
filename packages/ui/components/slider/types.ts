import type { HTMLAttributes } from "vue";
import type {
    SliderRootEmits as RadixSliderRootEmits,
    SliderRootProps as RadixSliderRootProps,
} from "radix-vue";

export interface SliderProps extends RadixSliderRootProps {
    class?: HTMLAttributes["class"]
}
export interface SliderEmits extends RadixSliderRootEmits {}
