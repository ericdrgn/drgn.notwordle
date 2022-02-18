export const GAME_TITLE = 'obscenele'
export const WIN_MESSAGES = ['are you, the one?', 'wordle, meet your maker', 'is this your world?']
export const GAME_COPIED_MESSAGE = 'grid copied to clipboard'
export const ABOUT_GAME_MESSAGE = 'about'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'try harder'
export const WORD_NOT_FOUND_MESSAGE = 'unknown word'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `the word was ${solution}`
export const ENTER_TEXT = 'enter'
export const DELETE_TEXT = 'delete'
export const STATISTICS_TITLE = 'statistics'
export const GUESS_DISTRIBUTION_TEXT = ''
export const NEW_WORD_TEXT = 'or'
export const SHARE_TEXT = 'copy'
export const TOTAL_TRIES_TEXT = 'attempts'
export const SUCCESS_RATE_TEXT = 'win rate'
export const CURRENT_STREAK_TEXT = 'streak'
export const BEST_STREAK_TEXT = 'best streak'
export const HARD_MODE = 'now in hard mode'
export const EASY_MODE = 'now in easy mode'
export const FOCUS_MODE = 'now using minimal interface'
export const VIS_MODE = 'now using standard interface'
export const HARD_MODE_ALERT_MESSAGE =
  'enable before first guess'
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `guess must contain ${letter}`
