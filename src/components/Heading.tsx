import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type HeadingProps = {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  className?: string
}

export const Heading = ({ children, size = 'md', asChild, className }: HeadingProps) => {
  const Component = asChild ? Slot : 'h1'
  return (
    <Component
      className={clsx(
        'font-bold font-sans text-gray-100 ',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Component>
  )
}
