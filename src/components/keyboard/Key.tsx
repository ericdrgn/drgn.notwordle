import { ReactNode } from 'react'
import classnames from 'classnames'
import { CharStatus } from '../../lib/statuses'
import { MAX_WORD_LENGTH, REVEAL_TIME_MS } from '../../constants/settings'

type Props = {
  children?: ReactNode
  value: string
  width?: number
  status?: CharStatus
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * MAX_WORD_LENGTH

  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none text-white dark:text-white',
    {
      'transition ease-in-out': isRevealing,
      'bg-black dark:bg-black dark:border-solid dark:border-2 dark:border-white hover:bg-black active:bg-black':
        !status,
      'bg-black text-black dark:bg-black dark:text-white': status === 'absent',
      'bg-black text-green-500 hover:bg-black dark:bg-green-500 dark:text-white dark:border-solid dark:border-2 dark:border-green-500 dark:text-white active:bg-black':
        status === 'correct',
      'bg-black text-yellow-500 hover:bg-black dark:bg-yellow-500 dark:text-white dark:border-solid dark:border-2 dark:border-yellow-500 active:bg-black':
        status === 'present',
    }
  )

  const styles = {
    transitionDelay: isRevealing ? `${keyDelayMs}ms` : 'unset',
    width: `${width}px`,
    height: '58px',
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button style={styles} className={classes} onClick={handleClick}>
      {children || value}
    </button>
  )
}
