import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import classNames from 'classnames'

type Props = {
  isOpen: boolean
  message: string
  variant?: 'success' | 'error'
  topMost?: boolean
}

export const Alert = ({ isOpen, message, variant = 'error', topMost = true }: Props) => {
  const classes = classNames(
    'flex z-20 max-w-sm',
    {
      'bg-black text-white z-20': variant === 'error',
      'bg-transparent text-white z-20': variant === 'success',
    }
  )

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300 transition"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={classes}>
        <div className="p-0">
          <p className="text-sm text-center font-medium">{message}</p>
        </div>
      </div>
    </Transition>
  )
}
