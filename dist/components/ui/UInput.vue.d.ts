import { EInputType, EValidationState } from './types';
export interface Props {
    type: EInputType;
    modelValue: string | number;
    label: string;
    maxlength?: string | number;
    placeholder?: string;
    validationState?: EValidationState;
    disabled?: boolean;
    hint?: string;
    minRows?: number;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    hint: {
        type: import("vue").PropType<string>;
    };
    type: {
        type: import("vue").PropType<EInputType>;
        required: true;
    };
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    maxlength: {
        type: import("vue").PropType<string | number>;
    };
    validationState: {
        type: import("vue").PropType<EValidationState>;
    };
    minRows: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    hint: {
        type: import("vue").PropType<string>;
    };
    type: {
        type: import("vue").PropType<EInputType>;
        required: true;
    };
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    maxlength: {
        type: import("vue").PropType<string | number>;
    };
    validationState: {
        type: import("vue").PropType<EValidationState>;
    };
    minRows: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>>, {
    disabled: boolean;
    minRows: number;
}, {}>, {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
