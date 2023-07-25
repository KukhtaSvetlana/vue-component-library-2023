/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 26.05.2023
 */
import { EDirectionArrow, EIconColor } from '../../types.ts';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<24 | 32>;
        default: number;
    };
    color: {
        type: import("vue").PropType<EIconColor>;
        default: EIconColor;
    };
    direction: {
        type: import("vue").PropType<EDirectionArrow>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<24 | 32>;
        default: number;
    };
    color: {
        type: import("vue").PropType<EIconColor>;
        default: EIconColor;
    };
    direction: {
        type: import("vue").PropType<EDirectionArrow>;
        required: true;
    };
}>>, {
    size: 24 | 32;
    color: EIconColor;
}, {}>;
export default _default;
