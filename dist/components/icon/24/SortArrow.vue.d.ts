/**
 * Created by Denis Abramyan (dennila2@gmail.com)
 * on 05.06.2023
 */
import { EIconColor } from '../types.ts';
import { ESortDirection } from '@/components/table';
declare const _default: import("vue").DefineComponent<{
    direction: {
        type: import("vue").PropType<ESortDirection>;
        required: true;
    };
    color: {
        type: import("vue").PropType<EIconColor>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: import("vue").PropType<ESortDirection>;
        required: true;
    };
    color: {
        type: import("vue").PropType<EIconColor>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
