import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type HeadingProps = {
  text: ReactNode
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export const Heading = ({ text, size = 'md', asChild }: HeadingProps) => {
  const Component = asChild ? Slot : 'h1'
  return (
    <Component
      className={clsx(
        'font-bold font-sans text-gray-100 ',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg'
        }
      )}
    >
      {text}
    </Component>
  )
}
