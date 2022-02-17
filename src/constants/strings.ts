export const GAME_TITLE = 'drudgele'
export const WIN_MESSAGES = ['echo the truest hackerman', 'echo is hacking in your blood?', 'root@drudgle:~$']
export const GAME_COPIED_MESSAGE = 'xclip -sel c'
export const ABOUT_GAME_MESSAGE = 'source'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'try harder'
export const WORD_NOT_FOUND_MESSAGE = 'permission denied'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `you could have achieved root with ${solution}`
export const ENTER_TEXT = 'enter'
export const DELETE_TEXT = 'delete'
export const STATISTICS_TITLE = 'times achieved root'
export const GUESS_DISTRIBUTION_TEXT = ''
export const NEW_WORD_TEXT = 'or'
export const SHARE_TEXT = 'xclip'
export const TOTAL_TRIES_TEXT = 'attempts'
export const SUCCESS_RATE_TEXT = 'hack rate'
export const CURRENT_STREAK_TEXT = 'hack streak'
export const BEST_STREAK_TEXT = 'best streak'
export const HARD_MODE = 'now in god mode'
export const EASY_MODE = 'now in n00b mode'
export const FOCUS_MODE = 'now using hacker interface'
export const VIS_MODE = 'now using n00b interface'
export const HARD_MODE_ALERT_MESSAGE =
  'enable before first guess'
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `guess must contain ${letter}`
