import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { AboutModal } from './AboutModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
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
      
      <AboutModal
        isOpen={isAboutModalOpen}
        handleClose={() => setIsAboutModalOpen(false)}
      />
      
      <button
        type="button"
        className="mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-black dark:text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black select-none"
        onClick={() => setIsAboutModalOpen(true)}
      >
        {ABOUT_GAME_MESSAGE}
      </button>
    </BaseModal>
  )
}
