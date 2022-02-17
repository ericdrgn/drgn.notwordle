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
    'flex z-20 max-w-sm shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
    {
      'bg-black text-white': variant === 'error',
      'bg-black text-white': variant === 'success',
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
        <div className="p-1">
          <p className="text-sm text-center font-medium">{message}</p>
        </div>
      </div>
    </Transition>
  )
}
