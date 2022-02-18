import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import {
  UserGroupIcon,
  EyeIcon,
  PuzzleIcon,
} from '@heroicons/react/outline'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="what is extremele?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-white dark:text-white">
        you will have six guesses to get the seven letter wordle of the day. when a word is guessed
        the colors of the letters will change to reflect positions for the correct word
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" isRevealing={true} isCompleted={true} status="absent" />
        <Cell value="Y" isRevealing={true} isCompleted={true} status="absent" />
        <Cell value="V" isRevealing={true} isCompleted={true} status="absent" />
        <Cell value="E" isRevealing={true} isCompleted={true} status="absent" />
        <Cell value="R" isRevealing={true} isCompleted={true} status="present" />
        <Cell value="N" isRevealing={true} isCompleted={true} status="correct" />
        <Cell value="S" isRevealing={true} isCompleted={true} status="correct" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letters N & S are perfectly placed. letters W, Y, V, and E are not in the word. the letter R is in the word, but is in the wrong spot
      </p>
      <div className="flex justify-center mb-1 mt-4">
          <PuzzleIcon
                    className="h-6 w-6 mr-0 stroke-white dark:stroke-white"
                  />
      </div>
      <p className="text-sm text-white dark:text-white">
        toggles a hard mode that forces use of all discovered letters
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
          <UserGroupIcon
                    className="h-6 w-6 mr-0 stroke-white dark:stroke-white"
                  />
      </div>
      <p className="text-sm text-white dark:text-white">
        shows personal stats and helpful navigation links
      </p>
      <div className="flex justify-center mb-1 mt-4">
          <UserGroupIcon
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
