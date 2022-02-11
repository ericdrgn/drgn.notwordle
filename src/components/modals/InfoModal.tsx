import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="man drudgele" isOpen={isOpen} handleClose={handleClose}>
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
        the letter D is in the password and in the correct spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="H" />
        <Cell value="A" />
        <Cell value="C" />
        <Cell value="K" />
        <Cell value="3" status="present" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the number 3 is in the password but in the wrong spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" status="absent" />
        <Cell value="3" />
        <Cell value="S" />
        <Cell value="T" status="absent" />
        <Cell value="E" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter T is not in the password in any spot
      </p>
    </BaseModal>
  )
}
