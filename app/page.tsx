import Link from 'next/link'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { FlexWrapper } from '@/app/ui/FlexWrapper'

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="text-5xl space-y-2 text-center py-20">
        <div className="text-primary font-bold">Docs</div>
        <div className="text-4xl">for casual players</div>
      </div>

      <div className="text-xl text-center text-light bg-surface mb-12">
        Games can be <em>fun</em>. But they can be <em>hard</em> as well.{' '}
        <strong>Can’t they be both?</strong>
      </div>

      <p>
        We think so. That is why we put effort into the Casual Meta. We
        consolidated the community knowledge - YouTube, reddit, official guides,
        forums, wikis. We pulled out the simple ideas from the complexity of
        mechanics. And here it is! Guides for games in the forms of
        straightforward, clean docs.
      </p>

      <div className="text-xl text-center text-light my-12">
        What drives your interest?
      </div>

      <FlexWrapper className="justify-center gap-4 text-lg my-12">
        {ROOT_NAVIGATION_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.name}
          </Link>
        ))}
      </FlexWrapper>

      <p>
        Take a look inside. You’ll find games can be interesting once you
        understand them. We can’t help you with your execution, but we can give
        you the tools to practice. If not, please tell us what we can improve.
      </p>
    </article>
  )
}
