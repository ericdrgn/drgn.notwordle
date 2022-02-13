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
        <Cell value="A" status="absent" />
        <Cell value="M" status="absent" />
        <Cell value="E" status="absent" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter F is in the word and in the correct spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" status="absent" />
        <Cell value="A" status="absent" />
        <Cell value="L" status="present" />
        <Cell value="O" status="absent" />
        <Cell value="N" status="absent" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter L is in the word but in the wrong spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" status="absent" />
        <Cell value="I" status="correct" />
        <Cell value="N" status="correct" />
        <Cell value="G" status="correct" />
        <Cell value="S" status="correct" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter W is not in the word in any spot
      </p>
    </BaseModal>
  )
}
