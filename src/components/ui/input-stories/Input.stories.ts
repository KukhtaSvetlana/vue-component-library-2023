import { StoryObj } from '@storybook/vue3'
import { ISmSearch } from 'uluky-ui'
// @ts-ignore
import BaseInput, { Props } from '~/components/base/Input.vue'
import { EInputType, EValidationState } from '~/components/base/types'
import '~/assets/style/base/baseInput.scss'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

export default {
  title: 'Base/Input',
  component: BaseInput,
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

type Story = StoryObj<typeof BaseInput>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const DefaultInput: Story = {
  args: {
    label: 'Default',
    type: EInputType.text,
    modelValue: '',
  },
}

export const SuffixInput = {
  render: (args: { sets: Props[] }) => ({
    components: {
      BaseInput,
      ISmSearch,
    },
    template: `
      <BaseInput
        label="Label"
        placeholder="Search"
        type="text"
      >
      <template #suffix>
        <Search/>
      </template>
      </BaseInput>
    `,
  }),
}
export const PrefixInput = {
  render: (args: { sets: Props[] }) => ({
    components: {
      BaseInput,
      ISmSearch,
    },
    template: `
      <BaseInput
        class="filter-input"
        placeholder="Search"
        type="text"
      >
      <template #prefix>
        <Search/>
      </template>
      </BaseInput>
    `,
  }),
}
