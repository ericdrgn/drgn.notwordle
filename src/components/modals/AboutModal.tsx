import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="about" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-white dark:bg-black dark:text-white">
         this is an opinionated fork of an open source source clone of the game wordle -{' '}
        <a
          href="https://github.com/ericdrgn/drgn.notwordle/tree/hardle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        and{' '}
        <a
          href="https://wordle.drgn.app"
          className="underline font-bold"
        >
          play not wordle here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
