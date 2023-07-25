/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 21.05.2023
 */
import { EIconColor, EXSize } from '../types.ts';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<EXSize>;
        required: true;
        default: EXSize;
    };
    color: {
        type: import("vue").PropType<EIconColor>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<EXSize>;
        required: true;
        default: EXSize;
    };
    color: {
        type: import("vue").PropType<EIconColor>;
        required: true;
    };
}>>, {
    size: EXSize;
}, {}>;
export default _default;
