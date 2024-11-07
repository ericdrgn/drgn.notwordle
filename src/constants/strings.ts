export const GAME_TITLE = 'Recurrle'
export const GAME_URL = 'https://r.wordler.space'
export const WIN_MESSAGES = ['Are you, the one?', 'Nice', 'Is this your world?']
export const GAME_COPIED_MESSAGE = 'Grid copied to clipboard'
export const ABOUT_GAME_MESSAGE = 'About'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Try harder'
export const WORD_NOT_FOUND_MESSAGE = 'Unknown word'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = ''
export const NEW_WORD_TEXT = 'Or'
export const SHARE_TEXT = 'Copy'
export const TOTAL_TRIES_TEXT = 'Attempts'
export const SUCCESS_RATE_TEXT = 'Win rate'
export const CURRENT_STREAK_TEXT = 'Streak'
export const BEST_STREAK_TEXT = 'Best streak'
export const HARD_MODE = 'Now in hard mode'
export const EASY_MODE = 'Now in easy mode'
export const FOCUS_MODE = 'Now using minimal interface'
export const VIS_MODE = 'Now using standard interface'
export const HARD_MODE_ALERT_MESSAGE =
  'Enable before first guess'
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
