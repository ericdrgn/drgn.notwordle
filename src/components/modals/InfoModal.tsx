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
        <Cell value="D" status="correct" />
        <Cell value="R" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="O" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter D is in the word and in the correct spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" />
        <Cell value="Y" />
        <Cell value="V" status="present" />
        <Cell value="E" />
        <Cell value="R" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter V is in the word but in the wrong spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" />
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="D" status="absent" />
        <Cell value="L" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter D is not in the word in any spot
      </p>
    </BaseModal>
  )
}
