import { IoIosThumbsDown, IoIosThumbsUp } from 'react-icons/io'

import { Callout } from '@/app/ui/Callout'
import { FlexWrapper } from '@/app/ui/FlexWrapper'

export const ProsConsList: React.FC<
  React.PropsWithChildren<{
    pros: React.ReactNode[]
    cons: React.ReactNode[]
    className?: string
  }>
> = ({ pros, cons }) => (
  <Callout titleId="play-or-skip" title="Play or skip?">
    <div className="md:flex gap-4 space-y-4 md:space-y-0">
      <div className="md:w-1/2 space-y-2">
        <FlexWrapper className="font-bold">
          <IoIosThumbsUp aria-hidden="true" focusable="false" /> Maybe, yes
        </FlexWrapper>

        <ul className="divide-y *:py-2">
          {pros.map((item, index) => (
            <li key={`pros-${index}`}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="md:w-1/2 space-y-2">
        <FlexWrapper className="font-bold text-error">
          <IoIosThumbsDown aria-hidden="true" focusable="false" /> Maybe, no
        </FlexWrapper>

        <ul className="divide-y *:py-2">
          {cons.map((item, index) => (
            <li key={`cons-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </Callout>
)
