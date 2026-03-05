import { FaDice } from 'react-icons/fa'
import { TbArrowBigRight } from 'react-icons/tb'

export const DiceRoll: React.FC<{
  title: string
  dice: string
  effect: string
}> = ({ title, dice, effect }) => (
  <div className="my-4">
    <div className="flavor">{title}:</div>
    <div>
      <FaDice className="inline text-2xl mr-2" />{' '}
      <strong className="mr-2">Roll {dice}</strong>{' '}
      <TbArrowBigRight className="inline mr-2" /> <span>{effect}</span>
    </div>
  </div>
)
