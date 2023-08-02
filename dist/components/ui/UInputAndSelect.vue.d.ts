import { EInputType, EValidationState, Option } from './types';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    maxlength: {
        type: import("vue").PropType<string>;
    };
    validationState: {
        type: import("vue").PropType<EValidationState>;
    };
    options: {
        type: import("vue").PropType<Option[]>;
        required: true;
    };
    inputValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    selectValue: {
        type: import("vue").PropType<string | number>;
    };
    placeholderSelect: {
        type: import("vue").PropType<string>;
    };
    inputType: {
        type: import("vue").PropType<EInputType>;
        default: EInputType;
    };
    placeholderInput: {
        type: import("vue").PropType<string>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    maxlength: {
        type: import("vue").PropType<string>;
    };
    validationState: {
        type: import("vue").PropType<EValidationState>;
    };
    options: {
        type: import("vue").PropType<Option[]>;
        required: true;
    };
    inputValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    selectValue: {
        type: import("vue").PropType<string | number>;
    };
    placeholderSelect: {
        type: import("vue").PropType<string>;
    };
    inputType: {
        type: import("vue").PropType<EInputType>;
        default: EInputType;
    };
    placeholderInput: {
        type: import("vue").PropType<string>;
    };
}>>, {
    inputType: EInputType;
}, {}>;
export default _default;
