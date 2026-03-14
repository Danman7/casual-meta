import { FaDice } from 'react-icons/fa'
import { TbArrowBigRight } from 'react-icons/tb'

export const DiceRoll: React.FC<{
  title: string
  dice: string
  effect: string
}> = ({ title, dice, effect }) => (
  <div className="box">
    <div className="flavor mb-1">{title}:</div>
    <div>
      <FaDice className="inline text-3xl mr-4" />{' '}
      <strong className="mr-4">Roll {dice}</strong>{' '}
      <TbArrowBigRight className="inline mr-4" /> <span>{effect}</span>
    </div>
  </div>
)
