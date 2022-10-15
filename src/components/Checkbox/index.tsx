import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export const Checkbox = () => {
  return (
    <RadixCheckbox.Root
      className="p-[2px] h-6 w-6 bg-gray-800 rounded"
    >
      <RadixCheckbox.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}
