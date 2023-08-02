<template>
  <UInput
    class="input-password"
    :label="label"
    :type="fieldType"
    :disabled="disabled"
    :placeholder="placeholder"
    :validation-state="validationState"
    :model-value="modelValue"
    v-bind="$attrs"
  >
    <template #suffix>
      <UButton
        :disabled="disabled"
        :design="EButtonDesign.TextDefault"
        data-cy="btn--password--eye"
        @click="handlerChangePasswordState"
      >
        <template #icon>
          <Component
            :is="eyeIcon"
            :data-cy="`btn--password--eye--${displayPassword}`"
          />
        </template>
      </UButton>

      <slot name="link"/>
    </template>
  </UInput>
</template>

<script setup lang="ts">
import { ComputedRef, Ref, ref, computed } from 'vue'
import { ISmEyeClosed, ISmEyeOpened } from '../icon/24'
import {
  EInputType,
  EValidationState,
  EButtonDesign,
} from './types'
import UInput from '@/components/ui/UInput.vue'
import UButton from '@/components/ui/UButton.vue'


interface Props {
  label: string
  modelValue: string
  validationState?: EValidationState
  disabled?: boolean
  placeholder?: string
}

// @ts-ignore
const props = defineProps<Props>()

const displayPassword: Ref<boolean> = ref(false)

const fieldType: ComputedRef<EInputType> = computed(() => displayPassword.value ? EInputType.text : EInputType.password)

const eyeIcon = computed(() => displayPassword.value ? ISmEyeOpened : ISmEyeClosed)

const handlerChangePasswordState = (): void => {
  displayPassword.value = !displayPassword.value
}
</script>

<style scoped lang="scss">
.input-password {
  :deep(.el-input .el-input__wrapper) {
    padding-right: 137px;
  }

  :deep(.el-input.is-disabled .el-input__wrapper) {
    &:hover {
      box-shadow: none;
      border: var(--border-dashed);
    }
  }

  :deep(.el-input .el-input__wrapper .el-input__suffix) {
    right: 22px;
  }

  & .el-button {
    position: relative;
    top: 1px;
    width: 26px;
    height: 26px;
    margin: 0 17px 0 0;
    border: none;
  }
}
</style>
