import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'

type Props = {
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
}

export const Grid = ({
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
}: Props) => {

  return (
    <div className="relative bg-gradient-to-b from-black/50 to-black z-[500] flex-1 w-[80%] sm:w-[75%] max-w-[24rem] md:max-w-[30rem] mx-auto flex flex-col justify-start py-10 mt-4 mb-4">      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && (
        <CurrentRow guess={currentGuess} className={currentRowClassName} />
      )}
    </div>
  )
}
