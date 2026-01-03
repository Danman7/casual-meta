import Link from 'next/link'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { FlexWrapper } from '@/app/ui/FlexWrapper'

export default function Page() {
  return (
    <>
      <section className="max-w-3xl mx-auto space-y-16 text-center h-[calc(100dvh-(--spacing(32)))] flex flex-col justify-around items-center">
        <div className="font-display">
          <div className="text-6xl text-primary font-bold animate-slide-left">
            Docs
          </div>

          <div className="text-4xl animate-slide-right">
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
            Games can be <em>fun</em>. They can be <em>hard</em> as well.{' '}
            <strong>Can’t they be both?</strong>
          </div>
        </Callout>
      </section>

      <section className="space-y-8 max-w-3xl mx-auto">
        <p>
          We think they can. This is why we consolidated the community knowledge
          (YouTube, reddit, official guides, forums, wikis) in this place. We
          pulled out the simple ideas from the complexity of mechanics.
        </p>

        <p className="text-lg italic">
          We hope to build relationships alongside the skills.
        </p>
      </section>
    </>
  )
}
