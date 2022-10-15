import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement> & {}
export type TextInputRootProps = {
  children: ReactNode
}
export type TextInputIconProps = {
  children: ReactNode
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 py-4 px-3 h-12 w-full bg-gray-800 rounded focus-within:ring-2 ring-cyan-300'
      )}
    >
      {children}
    </div>
  )
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return (
    <Slot className="text-gray-400 h-6 w-6">
      {children}
    </Slot>
  )
}

export const TextInputInput = (props: TextInputInputProps) => {
  return (
    <input
      className="flex-1 text-xs text-gray-100 bg-transparent outline-none placeholder:text-gray-400"
      {...props}
    />
  )
}

TextInputRoot.displayName = 'TextInput.Root'
TextInputInput.displayName = 'TextInput.Input'
TextInputIcon.displayName = 'TextInput.Icon'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
