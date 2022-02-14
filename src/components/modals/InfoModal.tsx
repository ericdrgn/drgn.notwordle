import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="how to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-white dark:text-white">
        guess the word in 6 tries. after each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" status="correct" />
        <Cell value="L" status="absent" />
        <Cell value="A" status="present" />
        <Cell value="M" status="absent" />
        <Cell value="E" status="absent" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter F is perfectly placed, letters L, M, and E are not in the word, and the letter A is in the word in the wrong spot
      </p>
      <p className="text-sm text-white dark:bg-black dark:text-white">
         this is an opinionated fork of an open source source clone of the game wordle -{' '}
        <a
          href="https://github.com/ericdrgn/drgn.notwordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        and{' '}
        <a
          href="https://wordler.space"
          className="underline font-bold"
        >
          play other versions here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
