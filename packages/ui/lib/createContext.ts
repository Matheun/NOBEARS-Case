import { provide, inject } from "vue";
import type { InjectionKey } from "vue";

// const key = Symbol() as InjectionKey<string>;

// provide(key, "foo"); // providing non-string value will result in error

// const foo = inject(key); // type of foo: string | undefined
// const foo = inject<string>('foo') // type: string | undefined
// const foo = inject<string>('foo', 'bar') // type: string
// const foo = inject('foo') as string

export function createContext<ContextValue> (
    providerComponentName: string | string[],
    contextName?: string,
) {
    const symbolDescription =
        typeof providerComponentName === "string" && !contextName
            ? `${providerComponentName}Context`
            : contextName;

    const injectionKey: InjectionKey<ContextValue | null> = Symbol(symbolDescription);

    /**
       * @param fallback The context value to return if the injection fails.
       *
       * @throws When context injection failed and no fallback is specified.
       * This happens when the component injecting the context is not a child of the root component providing the context.
       */
    const injectContext = <
            T extends ContextValue | null | undefined = ContextValue,
        >(
            fallback?: T,
        ): T extends null ? ContextValue | null : ContextValue => {
        const context = inject(injectionKey, fallback);
        if (context) { return context; }

        if (context === null) { return context as any; }

        throw new Error(
            `Injection \`${injectionKey.toString()}\` not found. Component must be used within ${
                Array.isArray(providerComponentName)
                    ? `one of the following components: ${providerComponentName.join(
                        ", ",
                    )}`
                    : `\`${providerComponentName}\``
            }`,
        );
    };

    const provideContext = (contextValue: ContextValue) => {
        provide(injectionKey, contextValue);
        return contextValue;
    };

    return [injectContext, provideContext] as const;
}

// import { computed, ref } from "vue";

// export const [injectRadioGroupContext, provideRadioGroupContext] = createInjectionState((initialValue: any) => {
//     // state
//     const context = ref(initialValue);

//     // getters
//     const isDisabled = computed(() => context.value.disabled);

//     // actions
//     const setContext = (value: any) => {
//         context.value = value;
//     };

//     return {
//         context,
//         isDisabled,
//         setContext,
//     };
// });
