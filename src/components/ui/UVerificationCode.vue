<template>
  <div
    class="verification-code"
    data-cy="verification-code--wrapper"
  >
    <input
      class="verification-code--input "
      type="number"
      pattern="\d*"
      maxlength="1"
      ref="ref_verificationCode"
      v-for="(item, idx) in code"
      :key="item + idx"
      :min="0"
      :max="9"
      :id="'input_' + idx"
      :class="classes"
      :data-cy="`input--code--${idx}`"
      :value="code[idx]"
      :disabled="disabled"
      @input="handleInput"
      @keypress="isNumber"
      @paste="onPaste"
      @keyup.left="previousElement"
      @keyup.right="nextElement"
      @keydown.delete="handleDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, computed, watch, nextTick } from 'vue'
import { EValidationState } from './types'

interface Props {
  codeLength?: number
  validationState?: EValidationState
  disabled?: boolean
}
// @ts-ignore
const props = withDefaults(defineProps<Props>(), {
  codeLength: 6,
  validationState: EValidationState.none,
  disabled: false,
})

const emit = defineEmits<{
  'change-code': [prop: string],
}>()

const code: Ref<number[]> = ref(Array(props.codeLength))

let dataFromPaste: string[] | undefined

const keysAllowed: string[] = '0123456789'.split('')

const classes = computed<string[]>(() => {
  const _classes: string[] = []

  const choices_state = new Map<undefined | EValidationState, string>([
    [EValidationState.success, 'verification-code--success'],
    [EValidationState.error, 'verification-code--error'],
    [EValidationState.none, ''],
    [undefined, ''],
  ])

  const _class = choices_state.get(props.validationState)

  if (_class) _classes.push(_class)

  return _classes
})

const ref_verificationCode = ref()

const focusOnFirstElement = () => {
  nextTick(() => {
    ref_verificationCode.value[0].focus()
  })
}

watch(
  () => props.disabled,
  () => {
    if (!props.disabled) {
      focusOnFirstElement()
    }
  },
  { immediate: true },
)

const handleInput = (event: Event) => {
  const inputType = (event as InputEvent).inputType
  const inputValue = (event.target as HTMLInputElement).value

  let currentActiveElement = event.target as HTMLInputElement


  if (inputType === 'insertText') {
    (currentActiveElement.nextElementSibling as HTMLElement)?.focus()
    const id: number = parseInt(currentActiveElement.id.split('_')[1])
    code.value[id] = Number(inputValue)
  }

  if (inputType === 'insertFromPaste' && dataFromPaste) {
    for (const num of dataFromPaste) {
      const id: number = parseInt(currentActiveElement.id.split('_')[1])
      currentActiveElement.value = num
      // @ts-ignore
      code.value[id] = num
      if (currentActiveElement.nextElementSibling) {
        currentActiveElement = currentActiveElement.nextElementSibling as HTMLInputElement;
        (currentActiveElement.nextElementSibling as HTMLElement)?.focus()
      }
    }
  }

  emit('change-code', code.value.join(''))
}

const onPaste = (event: Event) => {
  dataFromPaste = (event as ClipboardEvent).clipboardData
    ?.getData('text')
    .trim()
    .split('')

  if (dataFromPaste) {
    for (const num of dataFromPaste) {
      if (!keysAllowed.includes(num)) event.preventDefault()
    }
  }
}

const previousElement = (event: Event) => {
  const currentActiveElement = event.target as HTMLInputElement
  (currentActiveElement.previousElementSibling as HTMLElement)?.focus()
}
const nextElement = (event: Event) => {
  const currentActiveElement = event.target as HTMLInputElement
  (currentActiveElement.nextElementSibling as HTMLElement)?.focus()
}

const isNumber = (event: Event) => {
  const keyPressed: string = (event as KeyboardEvent).key

  if (keysAllowed.includes(keyPressed)) {
    (event.currentTarget as HTMLInputElement).value = ''
  }
  else if (!keysAllowed.includes(keyPressed)) {
    event.preventDefault()
  }
}

const handleDelete = (event: Event) => {
  const currentActiveElement = event.target as HTMLInputElement

  const id: number = parseInt(currentActiveElement.id.split('_')[1])

  const value = (event.target as HTMLInputElement).value

  if (value) {
    currentActiveElement.value = ''
    // @ts-ignore
    code.value[id] = ''
  }
  if (id !== code.value.join('').length) {
    code.value = Array(props.codeLength)
  }

  (currentActiveElement.previousElementSibling as HTMLElement)?.focus()

  event.preventDefault()

  emit('change-code', code.value.join(''))
}
</script>

<style scoped lang="scss">

.verification-code {
  margin: 0;
  display: flex;
  gap: 16px;
  height: 56px;
  transition-property: background-color, border-color;
  transition-duration: .3s;
  transition-timing-function: ease-in-out;

  &--input {
    width: 48px;
    height: 100%;
    text-align: center;
    box-shadow: var(--shadows-border-default);
    outline: none;
    border-radius: 12px;
    appearance: none;

    @extend %fv-bb !optional;

    &:hover {
      box-shadow: var(--shadows-border-hover);
    }

    &:focus {
      box-shadow: var(--shadows-border-active);
    }
  }

  &--error {
    box-shadow: var(--shadows-border-worning);
  }

  &--success {
    box-shadow: var(--shadows-border-success);
  }

}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  appearance: textfield;
}
</style>
