import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="about" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:bg-black text-white">
         this is an opinionated fork of an open source source clone of the game wordle -{' '}
        <a
          href="https://github.com/ericdrgn/wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          play the original here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
