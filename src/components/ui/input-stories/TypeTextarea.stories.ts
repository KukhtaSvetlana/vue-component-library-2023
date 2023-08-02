import { StoryObj, Meta } from '@storybook/vue3'
// @ts-ignore
import BaseInput from '~/components/base/Input.vue'
// @ts-ignore
import { EInputType, EValidationState } from '~/components/base/types'
import '~/assets/style/base/baseInput.scss'

type Story = StoryObj<typeof BaseInput>;

export default {
  title: 'Base/Input',
  component: BaseInput,
}

export const TypeTextarea: Story = {
  args: {
    label: 'Label',
    type: EInputType.textarea,
    modelValue: '',
    maxlength: 200,
    placeholder: '',
    hint: 'Hint',
    minRows: 3,
  },
}