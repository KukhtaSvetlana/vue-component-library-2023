import { Option } from './types';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
    };
    options: {
        type: import("vue").PropType<Option[]>;
        required: true;
    };
    filterable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
    };
    options: {
        type: import("vue").PropType<Option[]>;
        required: true;
    };
    filterable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    placeholder: string;
    disabled: boolean;
    filterable: boolean;
}, {}>;
export default _default;
