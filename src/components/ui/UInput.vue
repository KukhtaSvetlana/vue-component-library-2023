<template>
  <label
    :for="name_input"
    class="c-field__content"
  >
    <ElInput
      ref="ref_input"
      :autosize="{ minRows }"
      :class="classes"
      :disabled="!!disabled"
      :maxlength="maxlength!"
      :model-value="modelValue"
      :name="name_input"
      :placeholder="placeholder!"
      show-word-limit
      :type="type"
      v-bind="$attrs"
      @input="$emit('input:modelValue', $event)"
      @focus="changeFocusState(true)"
      @blur="changeFocusState(false)"
    >
      <template
        v-if="slots['prefix']"
        #prefix
      >
        <slot name="prefix"/>
      </template>

      <template
        v-if="slots['suffix'] || canShowHintForInput"
        #suffix
      >
        <slot name="suffix"/>

        <el-tooltip
          v-if="canShowHintForInput"
          popper-class="tooltip"
          effect="light"
          placement="top"
          show-arrow
          :content="hint!"
        >
          <Icon24Info class="ml-10"/>
        </el-tooltip>
      </template>

    </ElInput>

    <!-- NB! only textarea. El-plus does not have a suffix slot for the textarea. -->
    <el-tooltip
      v-if="canShowHintForTextarea"
      popper-class="tooltip"
      effect="light"
      placement="top"
      show-arrow
      :content="hint!"
    >
      <Icon24Info class="tooltip-textarea"/>
    </el-tooltip>

    <span
      v-text="label"
      class="c-field__label"
      tabindex="1"
      @focus="changeFocusState(true)"
    />
  </label>

</template>

<script setup lang="ts">
import { computed, ComputedRef, ref, Ref, useSlots } from 'vue'
// import { v4 as uuidV4 } from 'uuid'
import { EInputType, EValidationState } from './types'

export interface Props {
  type: EInputType
  modelValue: string | number
  label: string
  maxlength?: string | number
  placeholder?: string
  validationState?: EValidationState
  disabled?: boolean
  hint?: string
  // NB! only for textarea
  minRows?: number
}

const props = withDefaults(defineProps<Props>(), { disabled: false, minRows: 3 })

const slots = useSlots()

// const name_input = uuidV4()
const name_input = ref('uuidV4')

const isFocus: Ref<boolean> = ref(false)

const ref_input: Ref = ref(null)

const classes = computed(() => {
  const classForFocus = new Map<boolean, string>([
    [true, 'c-field__input--focus'],
    [false, ''],
  ])

  const classValidationState = new Map<undefined | EValidationState, string>([
    [EValidationState.success, 'input--success'],
    [EValidationState.error, 'input--error'],
    [EValidationState.none, ''],
    [undefined, ''],
  ])

  return [
    classForFocus.get(!!props.modelValue || isFocus.value),
    classValidationState.get(props.validationState),
  ]
})

const canShowHintForTextarea: ComputedRef<boolean> = computed(() => props.type === EInputType.textarea && !!props.hint)

const canShowHintForInput: ComputedRef<boolean> = computed(() => props.type !== EInputType.textarea && !!props.hint)

const changeFocusState = (inFocus: boolean) => {
  const canFocus = !props.disabled && !props.placeholder && props.label !== '' && props.modelValue === ''

  if (canFocus && inFocus) {
    // @ts-ignore
    ref_input.value.focus()
  }

  if (canFocus) {
    isFocus.value = inFocus
  }
}

const _init = () => {
  if (!!props.placeholder || props.modelValue !== '') {
    isFocus.value = true
  }
}

_init()

</script>

<style lang="scss">
.tooltip-textarea {
  position: absolute;
  top: 25px;
  right: 16px;
}
</style>
