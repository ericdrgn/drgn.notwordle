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
        hack the password in 10 tries. if not you will be locked out of the system.
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
        the letter D is in the password and in the correct spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="H" status="absent" />
        <Cell value="A" status="absent" />
        <Cell value="C" status="absent" />
        <Cell value="K" status="absent" />
        <Cell value="3" status="present" />
        <Cell value="R" status="absent" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the number 3 is in the password but in the wrong spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" status="absent" />
        <Cell value="3" status="correct" />
        <Cell value="S" status="correct" />
        <Cell value="T" status="absent" />
        <Cell value="E" status="correct" />
        <Cell value="R" status="correct" />
      </div>
      <p className="text-sm text-white dark:text-white">
        the letter T is not in the password in any spot
      </p>
    </BaseModal>
  )
}
