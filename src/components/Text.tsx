import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export type TextProps = {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export const Text = ({ size = 'md', children, asChild, className }: TextProps) => {
  const Component = asChild ? Slot : 'span'
  return (
    <Component
      className={clsx(
        'font-sans text-gray-100',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-lg': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Component>
  )
}
