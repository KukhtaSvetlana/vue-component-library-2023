/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 21.05.2023
 */
import { EDirection_x4, EIconColor } from '../types.ts';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<EIconColor>;
        required: true;
    };
    direction: {
        type: import("vue").PropType<EDirection_x4>;
        default: EDirection_x4;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<EIconColor>;
        required: true;
    };
    direction: {
        type: import("vue").PropType<EDirection_x4>;
        default: EDirection_x4;
    };
}>>, {
    direction: EDirection_x4;
}, {}>;
export default _default;
