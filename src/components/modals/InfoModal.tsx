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
    <BaseModal title="what is wordle?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-white dark:text-white">
        you will have six guesses to get the wordle of the day. when a word is guessed
        the colors of the letters will change to reflect positions for the correct word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" status="correct" />
        <Cell value="L" status="absent" />
        <Cell value="A" status="present" />
        <Cell value="M" status="absent" />
        <Cell value="E" status="absent" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter F is perfectly placed. letters L, M, and E are not in the word. the letter A is in the word, but is in the wrong spot
      </p>
          <PuzzleIcon
                    className="h-6 w-6 mr-1 cursor-pointer stroke-white dark:stroke-white"
                  />
      <p className="text-sm text-white dark:text-white">
        toggles hard mode on and off
      </p>
          <EyeIcon
                    className="h-6 w-6 mr-1 cursor-pointer stroke-white dark:stroke-white"
                  />
      <p className="text-sm text-white dark:text-white">
        toggles a focus mode on and off
      </p>
          <UserGroupIcon
                    className="h-6 w-6 mr-1 cursor-pointer stroke-white dark:stroke-white"
                  />
      <p className="text-sm text-white dark:text-white">
        shows stats and has a button to copy a shareable grid to your clipboard
      </p>
      <p className="text-sm text-white dark:bg-black dark:text-white">
        <a
          href="https://github.com/ericdrgn/drgn.notwordle"
          className="underline font-bold"
        >
          source
        </a>{' '}
        and{' '}
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
