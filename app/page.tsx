import Link from 'next/link'
import { FaAsterisk } from 'react-icons/fa'
import { Gi3dStairs } from 'react-icons/gi'
import { ImConfused } from 'react-icons/im'
import { RiBookShelfLine } from 'react-icons/ri'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'

export default function Page() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="edge-padding py-12 md:py-0"
    >
      <section className="max-w-3xl mx-auto space-y-20 h-dvh flex flex-col justify-around">
        <div className="space-y-2 md:space-y-4 font-bold text-center">
          <div className="text-4xl md:text-6xl animate-slide-left">
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
            {ROOT_NAVIGATION_ITEMS.map((item, index) => (
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

        <div
          className="box animate-fade-in-scale"
          style={{ animationDelay: '1.2s' }}
        >
          <p className="text-xl pb-4">
            <sup className="text-xs">
              <FaAsterisk className="inline text-primary mr-2" />
            </sup>
            Games can be <em>fun</em>. They can be <em>hard</em>. They can be{' '}
            <strong>both</strong> as well.
          </p>

          <div className="space-y-4">
            <div className="space-y-4 md:flex md:gap-4">
              <div className="flex flex-col items-center text-center">
                <ImConfused className="text-2xl" />
                <div>Want to get into a game, but feel intimidated?</div>
              </div>

              <div className="flex flex-col items-center text-center">
                <Gi3dStairs className="text-2xl" />
                <div>
                  Are playing, but feel a lack of progress or connection?
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <RiBookShelfLine className="text-2xl" />
                <div>
                  Like to explore, but are overwhelmed by the amount of
                  information?
                </div>
              </div>
            </div>

            <p>
              The Casual Meta consolidates community knowledge from multiple
              sources as simple ideas.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
