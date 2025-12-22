import Link from 'next/link'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { FlexWrapper } from '@/app/ui/FlexWrapper'

export default function Page() {
  return (
    <>
      <section className="space-y-16 text-center h-[calc(100dvh-(--spacing(32)))] flex flex-col justify-around items-center relative">
        <div>
          <div className="text-5xl text-primary font-bold animate-[slideLeft_0.5s_ease-in-out_both]">
            Docs
          </div>

          <div className="text-4xl animate-[slideRight_0.5s_0.25s_ease-in-out_both]">
            for <span className="italic border-b">casual</span> players
          </div>
        </div>

        <FlexWrapper className="justify-center">
          {ROOT_NAVIGATION_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ animationDelay: `${0.5 + index * 0.25}s` }}
              className="text-lg animate-[fadeIn_0.5s_ease-in-out_both] px-4"
            >
              {item.name}
            </Link>
          ))}
        </FlexWrapper>

        <Callout className="animate-[fadeIn_0.5s_1s_ease-in-out_both] px-4">
          <div className="text-xl">
            Games can be <em>fun</em>. They can be <em>hard</em> as well.{' '}
            <strong>Can’t they be both?</strong>
          </div>
        </Callout>
      </section>

      <section className="space-y-8">
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
