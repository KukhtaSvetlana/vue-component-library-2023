import { ETagColor } from '@/components/ui/types';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    color: {
        type: import("vue").PropType<ETagColor>;
        required: true;
    };
    clickable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    tag: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
        required: true;
    };
    color: {
        type: import("vue").PropType<ETagColor>;
        required: true;
    };
    clickable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onTag?: (() => any) | undefined;
}, {
    clickable: boolean;
}, {}>;
export default _default;
