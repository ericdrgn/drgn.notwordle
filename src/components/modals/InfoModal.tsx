import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import {
  UserGroupIcon,
  EyeIcon,
} from '@heroicons/react/outline'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="what is luckle?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-white dark:text-white">
        you will have six guesses to get the letterle of the day. not hard, but you need luck!
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="E" isRevealing={true} isCompleted={true} status="absent" />
      </div>
      <p className="text-sm text-white dark:text-white">
        E is not the letter
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" isRevealing={true} isCompleted={true} status="correct" />
      </div>
      <p className="text-sm text-white dark:text-white">
        D is the letter
      </p>
      <div className="flex justify-center mb-1 mt-4">
          <EyeIcon
                    className="h-6 w-6 mr-0 stroke-white dark:stroke-white"
                  />
      </div>
      <p className="text-sm text-white dark:text-white">
        toggles a mode with a minimal interface
      </p>
      <div className="flex justify-center mb-1 mt-4">
          <UserGroupIcon
                    className="h-6 w-6 mr-0 stroke-white dark:stroke-white"
                  />
      </div>
      <p className="text-sm text-white dark:text-white">
        shows personal stats and helpful navigation links
      </p>
      <div className="flex justify-center mb-1 mt-4">
          <UserGroupIcon
                    className="h-6 w-6 mr-0 stroke-black dark:stroke-black"
                  />
      </div>
      <p className="text-sm text-white dark:bg-black dark:text-white">
        check out{' '}
        <a
          href="https://wordler.space"
          className="underline font-bold"
        >
          other versions
        </a>{' '}
      </p>
    </BaseModal>
  )
}
