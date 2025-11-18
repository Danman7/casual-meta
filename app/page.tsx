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

      <FlexWrapper className="justify-center gap-4 text-lg mb-12">
        {ROOT_NAVIGATION_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.name}
          </Link>
        ))}
      </FlexWrapper>
    </article>
  )
}
