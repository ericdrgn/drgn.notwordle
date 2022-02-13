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
        <Cell value="R" status="absent" />
        <Cell value="A" status="absent" />
        <Cell value="G" status="absent" />
        <Cell value="O" status="absent" />
        <Cell value="N" status="absent" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter D is in the word and in the correct spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" status="absent" />
        <Cell value="Y" status="absent" />
        <Cell value="V" status="present" />
        <Cell value="E" status="absent" />
        <Cell value="R" status="absent" />
        <Cell value="N" status="absent" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter V is in the word but in the wrong spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" status="correct" />
        <Cell value="O" status="correct" />
        <Cell value="R" status="correct" />
        <Cell value="D" status="absent" />
        <Cell value="L" status="correct" />
        <Cell value="E" status="correct" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter D is not in the word in any spot
      </p>
    </BaseModal>
  )
}
