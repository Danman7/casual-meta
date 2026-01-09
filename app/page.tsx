import Link from 'next/link'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { FlexWrapper } from '@/app/ui/FlexWrapper'
import { Section } from '@/app/ui/Section'

export default function Page() {
  return (
    <div className="px-6 py-12 space-y-16">
      <Section className="max-w-3xl mx-auto space-y-16 text-center h-[calc(100dvh-(--spacing(32)))] flex flex-col justify-around items-center">
        <div className="font-display">
          <div className="text-5xl md:text-7xl text-primary font-bold animate-slide-left">
            Docs
          </div>

          <div className="text-4xl md:text-5xl animate-slide-right">
            for <span className="italic border-b">casual</span> players
          </div>
        </div>

        <FlexWrapper className="justify-center font-semibold font-serif text-xl">
          {ROOT_NAVIGATION_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ animationDelay: `${0.3 + index * 0.3}s` }}
              className="animate-fade-in-scale px-4 py-2 hover:text-primary transition underline"
            >
              {item.name}
            </Link>
          ))}
        </FlexWrapper>

        <Callout className="animate-fade-in-scale delay-75 px-4">
          <div className="text-xl">
            Games can be <em>fun</em>. They can be <em>hard</em>. They can be{' '}
            <strong>both</strong> as well.
          </div>
        </Callout>
      </Section>

      <Section className="max-w-3xl mx-auto">
        <p>
          The Casual Meta brings together community knowledge from YouTube,
          Reddit, official and unofficial guides, forums and wikis. The goal is
          to extract simple ideas from the multitude of sources out there, so
          you can focus on improving. The articles here are designed for{' '}
          <em>players</em> who:
        </p>

        <ul role="list" className="list-disc list-inside">
          <li>Want to get into a game, but feel intimidated;</li>
          <li>
            Are playing a game for some time, but feel a lack of progress or
            connection;
          </li>
          <li>
            Like to explore concepts, but are overwhelmed by the amount of
            information available.
          </li>
        </ul>

        <p>
          META means "most effective tactics available". This often refers to
          techniques which are challenging for casual players. Hence the name
          Casual Meta infers the pivot on consistency over the "best possible"
          outcoume.
        </p>
      </Section>
    </div>
  )
}
