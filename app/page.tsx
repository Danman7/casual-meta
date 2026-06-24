import Link from 'next/link'
import { FaAsterisk } from 'react-icons/fa'

import { rootNavigationItems } from '@/app/siteMap'

export default function Page() {
  return (
    <main tabIndex={-1} className="edge-padding">
      <section className="max-w-3xl mx-auto space-y-20 min-h-dvh mt-0! flex flex-col justify-around">
        <div className="space-y-2 md:space-y-4 font-bold text-center text-shadow-md">
          <div className="text-4xl md:text-7xl animate-slide-left">
            The <span className="text-primary">Casual Meta</span>
          </div>

          <div
            className="text-2xl md:text-4xl animate-slide-right"
            style={{ animationDelay: '0.3s' }}
          >
            Docs for <span className="italic border-b">casual</span>{' '}
            <sup>
              <FaAsterisk className="inline text-primary" />
            </sup>{' '}
            players
          </div>
        </div>

        <div className="space-y-4">
          <div
            style={{ animationDelay: '0.6s' }}
            className="animate-fade-in-scale text-xl font-bold text-center"
          >
            What drives your interest?
          </div>

          <div className="flex-list text-lg justify-center">
            {rootNavigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ animationDelay: `${0.9 + index * 0.3}s` }}
                className="animate-fade-in-scale"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <p
          className="animate-fade-in-scale text-xl"
          style={{ animationDelay: '1.2s' }}
        >
          <sup className="text-xs">
            <FaAsterisk className="inline text-primary mr-2" />
          </sup>
          Games can be <em>fun</em>. They can be <em>hard</em>. They can be{' '}
          <strong>both</strong> as well.
        </p>
      </section>
    </main>
  )
}
