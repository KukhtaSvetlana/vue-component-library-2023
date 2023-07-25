import { EMoneyDirection } from '@/types';
import { EMoneyDirectionSize } from '../../types.ts';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<EMoneyDirectionSize>;
        default: EMoneyDirectionSize;
    };
    direction: {
        type: import("vue").PropType<EMoneyDirection>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<EMoneyDirectionSize>;
        default: EMoneyDirectionSize;
    };
    direction: {
        type: import("vue").PropType<EMoneyDirection>;
        required: true;
    };
}>>, {
    size: EMoneyDirectionSize;
}, {}>;
export default _default;
