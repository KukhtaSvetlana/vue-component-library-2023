import 'element-plus/dist/index.css';
import { EButtonDesign, EButtonSize, EIconLocation } from './types.ts';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<EButtonSize>;
        default: (rawProps: any) => EButtonSize | undefined;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    design: {
        type: import("vue").PropType<EButtonDesign>;
        default: EButtonDesign;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    iconLocation: {
        type: import("vue").PropType<EIconLocation>;
    };
    fullWidth: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<EButtonSize>;
        default: (rawProps: any) => EButtonSize | undefined;
    };
    label: {
        type: import("vue").PropType<string>;
    };
    design: {
        type: import("vue").PropType<EButtonDesign>;
        default: EButtonDesign;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    iconLocation: {
        type: import("vue").PropType<EIconLocation>;
    };
    fullWidth: {
        type: import("vue").PropType<boolean>;
    };
}>>, {
    size: EButtonSize;
    design: EButtonDesign;
    disabled: boolean;
}, {}>, {
    icon?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
