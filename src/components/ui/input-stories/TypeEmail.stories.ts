// @ts-ignore
import BaseInput, { Props } from '~/components/base/Input.vue'
import { EInputType, EValidationState } from '~/components/base/types'
import '~/assets/style/base/baseInput.scss'

const options: Props[] = [
  { label: 'Email', type: EInputType.email, modelValue: '', validationState: EValidationState.none },
  { label: 'Email', type: EInputType.email, modelValue: 'test@gmail.com', validationState: EValidationState.none },
  { label: 'Email', type: EInputType.email, modelValue: 'test', validationState: EValidationState.error },
  { label: 'Email', type: EInputType.email, modelValue: 'test@gmail.com', validationState: EValidationState.success },
]
  .map(({ label, type, modelValue, validationState }) => ({
    name: `${label}`,
    label,
    type,
    modelValue,
    validationState,
  }))

export default {
  title: 'Base/Input',
  tags: ['autodocs'],
}

export const TypeEmail = {
  render: (args: { sets: Props[] }) => ({
    components: {
      BaseInput,
    },
    setup() {
      return args
    },
    template: `
      <div>

      <div
        v-for="(d, idx) in sets"
        :key="idx + '-' + d.name"
      >
        <BaseInput
          :name="d.name"
          :label="d.label"
          :type="d.type"
          :modelValue="d.modelValue"
          :validationState="d.validationState"
        />

        <div style="padding: 4px;"/>
      </div>

      </div>
    `,
  }),
  args: {
    sets: options,
  },
}