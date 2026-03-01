import { IoThumbsDown, IoThumbsUp } from 'react-icons/io5'

import { Section } from '@/app/ui/Section'

export const PlayOrSkip: React.FC<{
  pros: React.ReactNode
  cons: React.ReactNode
}> = ({ pros, cons }) => (
  <Section title="Play or Skip" id="play-or-skip">
    <div className="flex-wrapper gap-4 md:flex-nowrap items-start">
      <div className="w-full md:w-1/2">
        <p className="lead flex-wrapper">
          Maybe, yes <IoThumbsUp />
        </p>
        <div className="divide-y divide-foreground/20 *:py-2">{pros}</div>
      </div>
      <div className="w-full md:w-1/2">
        <p className="lead flex-wrapper">
          Maybe, no <IoThumbsDown />
        </p>
        <div className="divide-y divide-foreground/20 *:py-2">{cons}</div>
      </div>
    </div>
  </Section>
)
