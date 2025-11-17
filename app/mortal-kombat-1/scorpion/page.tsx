import Image from 'next/image'
import { FaGraduationCap } from 'react-icons/fa6'
import {
  GiBodySwapping,
  GiBrokenAxe,
  GiCrystalBall,
  GiKnockedOutStars,
  GiMagicPalm,
  GiPunchBlast,
  GiSpearHook,
} from 'react-icons/gi'
import { IoPeopleSharp } from 'react-icons/io5'
import {
  MdOutlineSportsKabaddi,
  MdOutlineSportsMartialArts,
} from 'react-icons/md'
import { TiArrowShuffle } from 'react-icons/ti'

import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import { MK1_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 8

export const navTitle = 'Scorpion'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: ${navTitle}`,
  'A breakdown of Scorpion in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>

      <div className="md:flex items-center gap-4">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
        />

        <div className="md:w-1/2">
          <div className="flex gap-2 mt-4 flex-wrap">
            <Badge className="text-success border-success">
              <FaGraduationCap /> Beginner-friendly
            </Badge>

            <Badge className="text-success border-success">
              <GiKnockedOutStars /> Stun
            </Badge>

            <Badge className="text-success border-success">
              <GiBodySwapping /> Teleport
            </Badge>

            <Badge className="text-success border-success">
              <GiMagicPalm /> Anti-zoning
            </Badge>

            <Badge className="text-success border-success">
              <GiSpearHook /> Space Control
            </Badge>

            <Badge className="text-success border-success">
              <GiBrokenAxe /> Good Punish
            </Badge>

            <Badge className="text-success border-success">
              <MdOutlineSportsMartialArts /> Simple Combo Options
            </Badge>

            <Badge className="text-warning border-warning!">
              <GiCrystalBall /> Somewhat Predictable
            </Badge>

            <Badge className="text-error border-error!">
              <TiArrowShuffle /> Poor Mix
            </Badge>

            <Badge className="text-error border-error!">
              <MdOutlineSportsKabaddi /> Difficult Pressure
            </Badge>

            <Badge className="text-error border-error!">
              <GiPunchBlast /> Difficult Damage Buildup
            </Badge>

            <Badge className="text-error border-error!">
              <IoPeopleSharp /> Kameo Dependent
            </Badge>
          </div>

          <p>
            As with previous titles Scorpion in Mortal Kombat 1 is a low
            technical character that is also suitable for new players. He has
            tools for controlling space, counter-zoning, punishing mistakes and
            reverting pressure. Almost all his normals are safe but have a hard
            time providing a meaningful advantage on hit. He lacks grounded
            overheads, and his lows are not chainable, relying on good pairing
            with Kameos to enhance his pressure. His move set seems to promote
            counter play above proactivity, but skilled players have found
            approaches to playing him both ways.
          </p>
        </div>
      </div>

      <p className="text-light">
        MK1's version of Scorpion seems to bring up controversy when discussed
        by the community. Nonetheless, he remains a good choice for novices and
        keeps showing up in tournaments and high ranking matches.
      </p>
    </article>
  )
}
