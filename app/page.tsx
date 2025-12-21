import Link from 'next/link'
import { RiScrollToBottomLine } from 'react-icons/ri'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { FlexWrapper } from '@/app/ui/FlexWrapper'

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <section className="text-5xl space-y-2 text-center h-96 flex flex-col justify-around items-center relative">
        <div>
          <div className="text-primary font-bold animate-[slideLeft_0.5s_ease-in-out_both]">
            Docs
          </div>
          <div className="text-4xl animate-[slideRight_0.5s_0.25s_ease-in-out_both]">
            for <span className="italic border-b-2">casual</span> players
          </div>
        </div>
      </section>

      <section className="space-y-8 border-b-2 pb-16 mb-16">
        <Callout>
          <div className="text-xl">
            Games can be <em>fun</em>. They can be <em>hard</em> as well.{' '}
            <strong>Can’t they be both?</strong>
          </div>
        </Callout>

        <p>
          We think they can. This is why we consolidated the community knowledge
          (YouTube, reddit, official guides, forums, wikis) in this place. We
          pulled out the simple ideas from the complexity of mechanics.
        </p>

        <p className="text-lg italic">
          We hope to build relationships alongside the skills.
        </p>
      </section>

      <section className="space-y-8">
        <p className="text-lg">What drives your interest?</p>

        <FlexWrapper className="gap-4">
          {ROOT_NAVIGATION_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}
        </FlexWrapper>

        <p>
          Take a look inside. You’ll find games can be interesting once you
          understand them. We can’t help you with your execution, but we can
          give you the tools to practice. If not, please tell us what we can
          improve.
        </p>
      </section>
    </article>
  )
}
