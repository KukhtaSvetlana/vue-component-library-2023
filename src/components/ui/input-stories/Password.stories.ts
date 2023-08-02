import { StoryObj } from '@storybook/vue3'
// @ts-ignore
import BasePassword, { Props } from '~/components/base/Password.vue'
import { EInputType, EValidationState } from '~/components/base/types'
import '~/assets/style/base/baseInput.scss'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

type Story = StoryObj<typeof BasePassword>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args

const options: Props[] = [
  { label: 'Password', type: EInputType.password, modelValue: '', validationState: EValidationState.none },
  {
    label: 'Password',
    type: EInputType.password,
    modelValue: '1q2w3e4r5tDC`!',
    validationState: EValidationState.none,
  },
  { label: 'Password', type: EInputType.password, modelValue: '12344', validationState: EValidationState.error },
  {
    label: 'Password',
    type: EInputType.password,
    modelValue: '1q2w3e4r5tDC`!',
    validationState: EValidationState.success,
  },
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
}

export const TypePassword = {
  render: (args: { sets: Props[] }) => ({
    components: {
      BasePassword,
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
        <BasePassword
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
