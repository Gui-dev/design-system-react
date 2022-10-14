import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type ButtonProps = {
  title: string
  asChild?: boolean
}

export const Button = ({ title, asChild }: ButtonProps) => {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      className={clsx(
        'text-sm font-semibold text-black py-4 px-3 w-full bg-cyan-500 rounded transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'
      )}
    >
      {title}
    </Component>
  )
}
