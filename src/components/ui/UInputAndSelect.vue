<template>
  <div class="c-wrap-group">
    <UInput
      :label="label"
      :type="props.inputType"
      :placeholder="placeholderInput"
      :disabled="disabled"
      :model-value="inputValue"
      :validation-state="validationState"
      v-bind="$attrs"
    >
      <template #suffix>
        <USelect
          :options="options"
          :disabled="disabled"
          :model-value="selectValue"
          :placeholder="placeholderSelect"
          v-bind="$attrs"
          @update:modelValue="$emit('update:selectValue', $event)"
        />
      </template>
    </UInput>
  </div>
</template>

<script setup lang="ts">
import UInput from '@/components/ui/UInput.vue'
import USelect from '@/components/ui/USelect.vue'
import { EInputType, EValidationState, Option } from './types'


interface Props {
  label: string
  inputValue: string | number
  selectValue?: string | number
  options: Option[]
  placeholderSelect?: string
  inputType?: EInputType
  maxlength?: string
  placeholderInput?: string
  validationState?: EValidationState
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), { inputType: EInputType.number })
</script>

<style scoped lang="scss">
.c-wrap-group {
  flex: 1;

  :deep(.el-input) {
    & .el-input__wrapper {
      padding-right: 148px;
    }

    &.input--error .el-input__wrapper {
      border: none;
      box-shadow: var(--shadows-border-worning);
    }

    & .el-input__suffix {
      right: 3px;

      & .c-field__content .el-input .el-input__wrapper {
        padding: 0 0 0 23px;
        width: 100px;
        height: 37px;
        box-shadow: none;
        border-left: var(--border-default);
        border-radius: 0;

        & .el-input__inner {
          padding: 0 32px 0 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          @extend %fv-med !optional;
        }

        & .el-input__suffix {
          top: 6px;
          right: 9px;
          width: 24px;
          height: 24px;
          display: block;

          &.el-select .el-input .el-select__caret.el-icon {
            padding: 0;
          }

          & svg {
            display: none;
          }
        }
      }

      & .c-field__content .el-input.is-disabled .el-input__wrapper {
        border: none;
        border-left: var(--border-default);
      }

      & .el-select.c-field__input--focus:hover:not(.el-select--disabled) .el-input__wrapper,
      .c-field__content .el-select:hover:not(.el-select--disabled) .el-input__wrapper,
      .el-select.c-field__input--focus .el-input.is-focus .el-input__wrapper,
      .c-field__content .el-select .el-input.is-focus .el-input__wrapper,
      .el-select.c-field__input--focus .el-input__wrapper.is-focus,
      .c-field__content .el-select .el-input__wrapper.is-focus {
        box-shadow: none !important;
      }
    }
  }
}
</style>
