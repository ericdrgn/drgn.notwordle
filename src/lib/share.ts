import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'
import { GAME_URL } from '../constants/strings'
import { MAX_CHALLENGES } from '../constants/settings'
import { isMobileBrowser } from './browser'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean,
  handleShareToClipboard: () => void
) => {
  const textToShare =
    `${GAME_TITLE} ${solutionIndex} ${
      lost ? '☠️' : guesses.length
    }/${MAX_CHALLENGES}${isHardMode ? '*' : ''}\n` +
      generateEmojiGrid(guesses)
    `${GAME_URL}`
     
  
  const shareData = { text: textToShare }

  if (isMobileBrowser() && navigator.canShare(shareData) && navigator.share) {
    navigator.share(shareData)
  } else {
    navigator.clipboard.writeText(textToShare)
    handleShareToClipboard()
  }
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟦 '
            case 'present':
              return '🟧 '
            default:
              return '⬛ '
          }
        })
        .join('')
    })
    .join('\n')
}
