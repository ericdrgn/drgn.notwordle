import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import {
  TerminalIcon,
  EyeIcon,
  KeyIcon,
} from '@heroicons/react/outline'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="what is drudgele?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-white dark:text-white">
        you will have eight attempts to hack the six character password of the day. when a password is guessed
        the colors of the characters will change to reflect positions for the correct password. keep in mind
        all guesses must be passwords, normal words won't always work
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="H" isRevealing={true} isCompleted={true} status="correct" />
        <Cell value="A" isRevealing={true} isCompleted={true} status="absent" />
        <Cell value="C" isRevealing={true} isCompleted={true} status="absent" />
        <Cell value="K" isRevealing={true} isCompleted={true} status="absent" />
        <Cell value="3" isRevealing={true} isCompleted={true} status="present" />
        <Cell value="R" isRevealing={true} isCompleted={true} status="correct" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the characters H & R are perfectly placed. characters A, C, and K are not in the password. the character 3 is in the word, but is in the wrong spot
      </p>
      <div className="flex justify-center mb-1 mt-4">
          <KeyIcon
                    className="h-6 w-6 mr-0 stroke-white dark:stroke-white"
                  />
      </div>
      <p className="text-sm text-white dark:text-white">
        toggles a hard mode that forces use of all discovered characters
      </p>
      <div className="flex justify-center mb-1 mt-4">
          <EyeIcon
                    className="h-6 w-6 mr-0 stroke-white dark:stroke-white"
                  />
      </div>
      <p className="text-sm text-white dark:text-white">
        toggles a mode with a minimal interface
      </p>
      <div className="flex justify-center mb-1 mt-4">
          <TerminalIcon
                    className="h-6 w-6 mr-0 stroke-white dark:stroke-white"
                  />
      </div>
      <p className="text-sm text-white dark:text-white">
        shows personal stats and helpful navigation links
      </p>
      <div className="flex justify-center mb-1 mt-4">
          <TerminalIcon
                    className="h-6 w-6 mr-0 stroke-black dark:stroke-black"
                  />
      </div>
      <p className="text-sm text-white dark:bg-black dark:text-white">
        check out{' '}
        <a
          href="https://wordler.space"
          className="underline font-bold"
        >
          other versions
        </a>{' '}
      </p>
    </BaseModal>
  )
}
