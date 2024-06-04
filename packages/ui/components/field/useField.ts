import { FieldContextKey, useFieldError, useIsFieldDirty, useIsFieldTouched, useIsFieldValid, useValidateField } from "vee-validate";
import { inject } from "vue";
import { injectFieldContext } from "./Field.vue";

export function useField () {
    const fieldContext = inject(FieldContextKey);
    const fieldItemContext = injectFieldContext();

    const fieldState = {
        valid: useIsFieldValid(),
        isDirty: useIsFieldDirty(),
        isTouched: useIsFieldTouched(),
        error: useFieldError(),
    };

    if (!fieldContext) { throw new Error("useFormField should be used within <VeeField>"); }

    const { name, value } = fieldContext;
    const { id, size, disabled } = fieldItemContext;

    const validateField = useValidateField();

    return {
        name,
        id,
        value,
        validateField,
        fieldContext,
        fieldSize: size,
        fieldDisabled: disabled,
        fieldId: `${id}-field`,
        fieldDescriptionId: `${id}-field-description`,
        fieldMessageId: `${id}-field-message`,
        fieldErrorId: `${id}-field-error`,
        ...fieldState,
    };
}
