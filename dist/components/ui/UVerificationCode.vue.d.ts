import { EValidationState } from './types';
declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    validationState: {
        type: import("vue").PropType<EValidationState>;
        default: EValidationState;
    };
    codeLength: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'change-code': (prop: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    validationState: {
        type: import("vue").PropType<EValidationState>;
        default: EValidationState;
    };
    codeLength: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
    "onChange-code"?: ((prop: string) => any) | undefined;
}, {
    disabled: boolean;
    validationState: EValidationState;
    codeLength: number;
}, {}>;
export default _default;
