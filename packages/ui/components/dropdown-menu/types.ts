import type { HTMLAttributes } from "vue";
import type {
    DropdownMenuRootProps as RadixDropdownMenuRootProps,
    DropdownMenuRootEmits as RadixDropdownMenuRootEmits,
    DropdownMenuCheckboxItemProps as RadixDropdownMenuCheckboxItemProps,
    DropdownMenuCheckboxItemEmits as RadixDropdownMenuCheckboxItemEmits,
    DropdownMenuContentProps as RadixDropdownMenuContentProps,
    DropdownMenuContentEmits as RadixDropdownMenuContentEmits,
    DropdownMenuGroupProps as RadixDropdownMenuGroupProps,
    DropdownMenuItemProps as RadixDropdownMenuItemProps,
    DropdownMenuLabelProps as RadixDropdownMenuLabelProps,
    DropdownMenuRadioGroupProps as RadixDropdownMenuRadioGroupProps,
    DropdownMenuRadioGroupEmits as RadixDropdownMenuRadioGroupEmits,
    DropdownMenuRadioItemProps as RadixDropdownMenuRadioItemProps,
    DropdownMenuRadioItemEmits as RadixDropdownMenuRadioItemEmits,
    DropdownMenuSeparatorProps as RadixDropdownMenuSeparatorProps,
    DropdownMenuSubProps as RadixDropdownMenuSubProps,
    DropdownMenuSubEmits as RadixDropdownMenuSubEmits,
    DropdownMenuSubContentProps as RadixDropdownMenuSubContentProps,
    DropdownMenuSubContentEmits as RadixDropdownMenuSubContentEmits,
    DropdownMenuSubTriggerProps as RadixDropdownMenuSubTriggerProps,
    DropdownMenuTriggerProps as RadixDropdownMenuTriggerProps,
} from "radix-vue";

// DropdownMenu
export interface DropdownMenuProps extends RadixDropdownMenuRootProps {}
export interface DropdownMenuEmits extends RadixDropdownMenuRootEmits {}

// DropdownMenuCheckboxItem
export interface DropdownMenuCheckboxItemProps extends RadixDropdownMenuCheckboxItemProps {
    class?: HTMLAttributes["class"];
}
export interface DropdownMenuCheckboxItemEmits extends RadixDropdownMenuCheckboxItemEmits {}

// DropdownMenuContent
export interface DropdownMenuContentProps extends RadixDropdownMenuContentProps {
    class?: HTMLAttributes["class"];
}
export interface DropdownMenuContentEmits extends RadixDropdownMenuContentEmits {}

// DropdownMenuGroup
export interface DropdownMenuGroupProps extends RadixDropdownMenuGroupProps {}

// DropdownMenuItem
export interface DropdownMenuItemProps extends RadixDropdownMenuItemProps {
    label?: string;
    inset?: boolean;
    icon?: string;
    shortcut?: string;
    class?: HTMLAttributes["class"];
}

// DropdownMenuLabel
export interface DropdownMenuLabelProps extends RadixDropdownMenuLabelProps {
    inset?: boolean;
    class?: HTMLAttributes["class"];
}

// DropdownMenuRadioGroup
export interface DropdownMenuRadioGroupProps extends RadixDropdownMenuRadioGroupProps {}
export interface DropdownMenuRadioGroupEmits extends RadixDropdownMenuRadioGroupEmits {}

// DropdownMenuRadioItem
export interface DropdownMenuRadioItemProps extends RadixDropdownMenuRadioItemProps {
    class?: HTMLAttributes["class"];
}
export interface DropdownMenuRadioItemEmits extends RadixDropdownMenuRadioItemEmits {}

// DropdownMenuSeparator
export interface DropdownMenuSeparatorProps extends RadixDropdownMenuSeparatorProps {
    class?: HTMLAttributes["class"];
}

// DropdownMenuShortcut
export interface DropdownMenuShortcutProps {
    shortcut?: string;
    class?: HTMLAttributes["class"];
}

// DropdownMenuSub
export interface DropdownMenuSubProps extends RadixDropdownMenuSubProps {}
export interface DropdownMenuSubEmits extends RadixDropdownMenuSubEmits {}

// DropdownMenuSubContent
export interface DropdownMenuSubContentProps extends RadixDropdownMenuSubContentProps {
    class?: HTMLAttributes["class"];
}
export interface DropdownMenuSubContentEmits extends RadixDropdownMenuSubContentEmits {}

// DropdownMenuSubTrigger
export interface DropdownMenuSubTriggerProps extends RadixDropdownMenuSubTriggerProps {
    class?: HTMLAttributes["class"];
}

// DropdownMenuTrigger
export interface DropdownMenuTriggerProps extends RadixDropdownMenuTriggerProps {}
