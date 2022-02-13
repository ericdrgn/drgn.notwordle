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
        guess the letter in 6 tries. it isn't that hard, if you're lucky.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" status="correct" />
      </div>
      <p className="text-sm text-white dark:text-white">
        L is the letter
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="U" status="absent" />
      </div>
      <p className="text-sm text-white dark:text-white">
        U is not the letter
      </p>
    </BaseModal>
  )
}
