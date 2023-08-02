import { StoryObj } from '@storybook/vue3'
// @ts-ignore
import InputAndSelect, { Props } from '~/components/base/InputAndSelect.vue'
import { EInputType, EValidationState } from '~/components/base/types'
import '~/assets/style/base/baseInput.scss'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Base/Input',
  component: InputAndSelect,
  tags: ['autodocs'],
  argTypes: {
    maxlength: {
      control: 'number',
      defaultValue: '0',
    },
    type: {
      control: 'select',
      description: 'The value of the slider',
      options: [EInputType.text, EInputType.textarea, EInputType.tel, EInputType.email, EInputType.number, EInputType.password],
      defaultValue: EInputType.text,
    },
    modelValue: {
      control: 'text',
    },
    validationState: {
      control: 'select',
      options: [EValidationState.error, EValidationState.none, EValidationState.success],
      defaultValue: EValidationState.none,
    },
    disabled: {
      control: 'select',
      options: [true, false],
      defaultValue: false,
    },
    placeholder: {
      control: 'text',
    },
    hint: {
      control: 'text',
    },
  },
}

type Story = StoryObj<typeof InputAndSelect>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Input_And_Select: Story = {
  args: {
    label: 'Default',
    type: EInputType.number,
    modelValue: '',
    selectValue: 'USD',
    options: [
      {
        value: 'USD',
        label: 'USD',
      },
      {
        value: 'EUR',
        label: 'EUR',
      },
      {
        value: 'UNI',
        label: 'UNI',
      },
    ],
  },
}