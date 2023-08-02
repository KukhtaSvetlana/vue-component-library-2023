<template>
  <label
    for="use-input"
    class="c-field__content"
  >
    <ElSelect
      :filterable="!!filterable"
      :placeholder="props.placeholder"
      :disabled="!!disabled"
      :class="classes"
      :model-value="modelValue!"
      @change="$emit('update:modelValue', $event)"
      @focus="changeFocusState(true)"
      @blur="changeFocusState(false)"
    >
      <el-option
        v-for="item in options"
        :key="item.value ?? item"
        :label="item.label"
        :value="item.value"
      />
    </ElSelect>

    <span
      class="c-field__label"
      v-text="label"
    />
  </label>
</template>

<script setup lang="ts">
import { ComputedRef, Ref, ref, computed } from 'vue'
import { ElSelect, ElOption } from 'element-plus'
import { Option } from './types'

interface Props {
  options: Option[]
  modelValue?: string | number
  label?: string
  placeholder?: string
  disabled?: boolean
  filterable?: boolean
}

// @ts-ignore
const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Select',
  filterable: true,
  disabled: false,
})

const isFocus: Ref<boolean> = ref(false)

const classes: ComputedRef<string> = computed(() => !!props.modelValue || isFocus.value === true ? 'c-field__input--focus' : '')

const changeFocusState = (focusState: boolean) => {
  const canFocus = !props.disabled && !props.placeholder

  if (canFocus) {
    isFocus.value = focusState
  }
}

const _init = () => {
  if (!!props.modelValue || !!props.placeholder || !!props.label) {
    isFocus.value = true
  }
}

_init()

</script>

<style scoped>

</style>
