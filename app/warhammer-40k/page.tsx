import { Metadata } from 'next'
import { GiBookCover } from 'react-icons/gi'

export const metadata: Metadata = {
  title: 'Warhammer 40k | Casual Meta',
}

export default async function Books() {
  return (
    <article className="max-w-4xl mx-auto">
      <h1 className="flex gap-4 justify-center items-center text-5xl font-bold font-serif my-16">
        Warhammer 40k
      </h1>
    </article>
  )
}
