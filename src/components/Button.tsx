import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string
  asChild?: boolean
  className?: string
}

export const Button = ({ children, asChild, className, ...rest }: ButtonProps) => {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      className={clsx(
        'text-sm font-semibold text-black py-3 px-4 w-full bg-cyan-500 rounded transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
