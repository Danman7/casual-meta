import Link from 'next/link'

import { MK1_BASE_URL } from '@/app/mortal-kombat-1/constants'
import { WH40K_BASE_URL } from '@/app/warhammer-40k/constants'

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="text-5xl space-y-4 text-center py-20">
        <div className="text-primary">Docs</div>
        <div className="text-4xl">for casual players</div>
      </div>

      <div className="flex justify-center items-center gap-4 text-lg mb-12">
        <Link href={WH40K_BASE_URL} className="underline underline-offset-2">
          Warhammer 40k
        </Link>
        |
        <Link href={MK1_BASE_URL} className="underline underline-offset-2">
          Mortal Kombat 1
        </Link>
      </div>
    </article>
  )
}
