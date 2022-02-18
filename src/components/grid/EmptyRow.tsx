import { Cell } from './Cell'
import { solutionLength } from '../../lib/words'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(solutionLength))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
