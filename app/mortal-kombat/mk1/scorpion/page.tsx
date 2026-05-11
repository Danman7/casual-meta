import Image from 'next/image'
import Link from 'next/link'
import { TbInnerShadowTopLeftFilled } from 'react-icons/tb'

import chameleon from '@/app/assets/mk1/chameleon.webp'
import ferra from '@/app/assets/mk1/ferra.webp'
import mavado from '@/app/assets/mk1/mavado.webp'
import scorpAirDB2 from '@/app/assets/mk1/scorp_air_db2.webp'
import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import spear from '@/app/assets/mk1/scorp_spear.webp'
import scorp2 from '@/app/assets/mk1/scorpion_2.webp'
import scorpb3 from '@/app/assets/mk1/scorpion_b3.webp'
import { MK_TITLE } from '@/app/constants'
import { mkRoute } from '@/app/mortal-kombat/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 8

export const navTitle = 'Scorpion'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'A breakdown of Scorpion in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <section>
        <div className="relative h-96 w-auto md:h-full md:max-w-1/2 md:float-right">
          <Image
            src={Scorpion}
            alt="Scorpion in Mortal Kombat 1"
            loading="eager"
            className="h-96 w-auto md:h-full mx-auto "
          />

          <div className="absolute bottom-2 left-2 right-2 flex-center">
            <div className="badge">
              {' '}
              <TbInnerShadowTopLeftFilled className="text-green-500" /> Low risk
            </div>

            <div className="badge">
              <TbInnerShadowTopLeftFilled className="text-green-500" /> Strong
              neutral
            </div>

            <div className="badge">
              <TbInnerShadowTopLeftFilled className="text-yellow-500" /> Average
              speed
            </div>

            <div className="badge">
              <TbInnerShadowTopLeftFilled className="text-red-500" /> No mix-up
            </div>
          </div>
        </div>

        <section>
          <p>
            MK1's Scorpion, like in previous titles, is{' '}
            <strong>built around fundamentals</strong>. He has no forms, or
            complex gimmicks to manage. His flexible toolkit works with most
            Kameos, including ones that enable throw or armored combos. All of
            this makes him <strong>approachable for new players</strong>.
          </p>

          <p>
            <strong>
              Most of his normals are{' '}
              <Link href={`${mkRoute('Anatomy of attacks')}#safe-vs-unsafe`}>
                safe
              </Link>
            </strong>
            , and many strings can be{' '}
            <Link href={`${mkRoute('Pressure')}#stagger`}>staggered</Link>.
            However, without chainable{' '}
            <Link href={`${mkRoute('Anatomy of attacks')}#overhead`}>
              overheads
            </Link>{' '}
            or <Link href={`${mkRoute('Anatomy of attacks')}#low`}>lows</Link>,{' '}
            <strong>his offense stays linear and honest</strong>. He can end
            pressure safely, but opening opponents up proactively usually
            depends on strike/throw mind games and Kameo support.
          </p>

          <p>
            Scorpion’s strengths show more clearly in{' '}
            <strong>reactive play</strong>. His disjointed pokes and
            <Link href={`${mkRoute('Anatomy of attacks')}#space-control`}>
              space-controlling
            </Link>{' '}
            specials let him <strong>catch mistakes at all ranges</strong>. This
            plays well with his simple, consistent combo system. Keep in mind,
            his specials are very well-known and predictable, so restraint is
            important.
          </p>

          <p>
            Scorpion shares similarities with Sub-Zero and Reptile in terms of
            spacing and whiff punish, yet they both have better{' '}
            <Link href={`${mkRoute('Pressure')}#mix-up`}>mix-up</Link>. His
            stagger mind games are similar to Johnny's, but less oppressive.
          </p>
        </section>
      </section>

      <section>
        <h2 id="key-strings">Key strings</h2>

        <h3 id="normals">Normals</h3>

        <p>
          <span className="input">1</span> is your <em>fastest</em> (7 frames),
          safe, <Link href={`${mkRoute('Anatomy of attacks')}#high`}>high</Link>{' '}
          jab. It extens into <span className="input">12</span> - a safe
          hit-confirm, combo-starter that can be cancelled into any special. The
          full string, <span className="input">122</span>, ends in an overhead,
          but is best staggered into a throw.
        </p>

        <p>
          <span className="input">2</span> your <em>primary poke</em>. It's
          slower than <span className="input">1</span> (10 frames), but is
          disjointed, deals better damage, and is reachy enough to often
          surprise approaching foes. It rolls into{' '}
          <span className="input">21</span> - your main{' '}
          <Link href={`${mkRoute('Neutral')}#footsies`}>footsie</Link>{' '}
          <em>hit confirm</em>. The full string,{' '}
          <span className="input">214</span>, is also a stagger tool.
        </p>

        <Image
          src={scorp2}
          alt="Scorpion's Standing 2 attack."
          className="picture profile-img object-[0%_18%]"
        />

        <p>
          <span className="input">F3</span> is a key advancing{' '}
          <Link href={`${mkRoute('Anatomy of attacks')}#mid`}>mid</Link> check -
          useful on it's own againts ducking foes. It evolves into{' '}
          <span className="input">F32</span>, your optimal <em>launcher</em> (
          <span className="input">F4</span> is not worth it) and{' '}
          <em>combo starter</em>. It can be chained up to three times in a row.
        </p>

        <p>
          <span className="input">B2</span> is a good <em>anti-air</em> options
          that can be shortcut cancelled into any forward special. For example{' '}
          <span className="input">B3 F1</span> cancels into Spear for a full
          combo out of a poorly timed jump.
        </p>

        <p>
          <span className="input">B3</span> is Scorpion's most unique normal. He
          launches his Kunai, for a very far reaching, disjointed attack that
          hits twice - mid-low. The first mid hit can be cancelled into any
          special. It's respecting and space-controlling, but slow (21 frames)
          and unsafe (-19 on block).
        </p>

        <Image
          src={scorpb3}
          alt="Scorpion's back 3 attack."
          className="picture profile-img max-h-68"
        />

        <h3 id="specials">Specials</h3>

        <p>
          <span className="input">BF1</span>, the signature <em>Spear</em>, is a{' '}
          full-screen, space-controlling, high projectile. It stuns on hit,
          drags and restands the opponent next to you. This makes it{' '}
          <strong>
            one of the best whiff punishes and combo starter/extender
          </strong>{' '}
          in the game, albeit predictable. The <em>enhanced</em> version hits
          mid, mixing it up for foes that like to duck under it.
        </p>

        <Image src={spear} alt="Scorpion's spear move." className="picture" />

        <p>
          <span className="input">DB3</span>, the <em>Flameport</em>, tracks to
          the other side of the opponent, hitting them on arrival. It makes
          zoning unsafe, but should be used with caution as it's not safe itself
          (-21 on block). The <em>enhanced</em> version however, launches much
          faster and skips the hit, making it safe. This enables strike/throw
          mind games. You can surprise with a throw, or a micro-duck into a
          punch.
        </p>

        <p>
          <em>Blazing Charge</em> <span className="input">BF2</span> is a very
          quick (for a special, 13 frames) advancing dash attack that covers
          good distance, switches sides and knocks down the opponent. It's a
          great interruption, but it's short active frames mean you might end up
          giving them a free hit if you don't time it well. The{' '}
          <em>enhanced</em> version is <em>armored</em>, being a proper getup
          breaker and armor combo starter.
        </p>

        <p>
          <em>Twisted Kyo</em> <span className="input">DB2</span> is an unsafe,
          multi-hit combo ender, with strong chip damage, that knocks the
          opponent down. It's advantage over knockback enders is that it keeps
          you opponent next to you.
        </p>

        <p>
          <span className="input">xBF4</span> <em>Enhanced Devouring Flame</em>{' '}
          is an unblockable, low, damage-over-time special that tracks the
          opponent. It's both a anti-zoning and an{' '}
          <Link href={`${mkRoute('Pressure')}#oki`}>oki</Link> option.
        </p>
      </section>

      <section>
        <h2 id="combos">Solo combos</h2>

        <p>
          Don't go for <em>training mode max</em> damage. Go for{' '}
          <em>match-ready consistent</em> damage. Here are some recommendations
          to try out initially.
        </p>

        <h3 id="core">Core</h3>

        <div className="box">
          <p className="font-bold">Starters</p>

          <ul>
            <li>
              <span className="input">12</span> - fastest / swappable.
            </li>

            <li>
              <span className="input">21</span> - reachy / a bit slower / more
              damage / swappable.
            </li>

            <li>
              <span className="input">33</span> - even slower / even more damage
              / swappable.
            </li>

            <li>
              <span className="input">F32</span> - launcher / only for juggle or
              air combos.
            </li>
          </ul>

          <p className="font-bold">Building blocks</p>

          <p>Almost any Scorpion combo includes a form of these.</p>

          <ul>
            <li>
              <span className="input">[starter] BF1 [33 DB2/ 333 BF2]</span> -
              Spear into one of the enders - <em>~210-220 damage</em>.
            </li>
            <li>
              Three <span className="input">F32</span> in a row repeated juggle.
              If you can't pull it off, two are good enough for now.
            </li>
            <li>
              <span className="input">F32 jump 12 xDB2</span> is your air
              extension.
            </li>
          </ul>
        </div>

        <p>
          Let's start simple and <em>meterless</em>. Keep it on the ground and
          naturally progress to optimal. Often, you will feel more comfortable
          starting with string into spear.
        </p>

        <p>
          <span className="input">12 BF1 333 BF2</span> simple <em>217 DMG</em>{' '}
          <span className="font-bold">&rarr;</span>{' '}
          <span className="input">12 BF1 F32 F32 F32 4 BF2</span>{' '}
          <em>318 DMG</em>, incorporates juggles and the trailing{' '}
          <span className="input">4</span> into a special ender{' '}
          <span className="font-bold">&rarr;</span>{' '}
          <span className="input">21 BF1 F32 F32 F32 F34 BF2</span>{' '}
          <em>342 DMG</em>, adds better starter and ender, a very consistent,
          close to optimal meterless <em>bread-and-butter</em> (B&B) route.
        </p>

        <p>
          As you feel more confident, you can delay the spear and go directly
          for a juggle. <span className="input">F32 F32 F32 4 BF1 33 DB2</span>{' '}
          <em>365 DMG, 0 BAR</em> is already optimal for meterless. From here
          you can either extend via Kameos, add damage by enhancing the
          specials, or go for air extensions.
        </p>

        <p>
          <span className="input">
            21 BF1 F32 F32 [jump] 12 xDB2 [111/4 BF2]
          </span>{' '}
          <em>~330-350 DMB, 1 BAR</em>, very sub-optimal, but good starting
          point <span className="font-bold">&rarr;</span>{' '}
          <span className="input">
            21 BF1 F32 F32 [jump] 12 xDB2 [delay] 111 DB2 [land]
          </span>{' '}
          <em>377 DMG, 1 BAR</em>, much better, but bit tricky beginners. Delay
          the <span className="input">111</span> until you almost touch the
          ground, so it can be followed by specials{' '}
          <span className="font-bold">&rarr;</span>{' '}
          <span className="input">
            F32 F32 [jump] 12 xDB2 [delay] 111 [land] BF1 33 DB2
          </span>{' '}
          <em>407 DMG, 1 BAR</em>, optimal B&B for online consistency.
        </p>

        <Image
          src={scorpAirDB2}
          alt="Scorpion's air down back 2 special."
          className="picture profile-img object-[0%_10%]"
        />

        <h3 id="corner">Corner</h3>

        <p>
          <span className="input">4</span> keeps most of its damage through
          damage scaling. In the corner, knockback isn't a factor, so you can
          use it to spike your combos.
        </p>

        <p>
          <span className="input">
            F32 4 4 BF1 F32 [jump] 12 xDB2 [pause] 111 DB2
          </span>{' '}
          <strong>446 DMG</strong>, <em>1 BAR</em>.
        </p>

        <h3 id="maximalist">Maximalist</h3>

        <p>
          These combos are difficult and probably overboard, but they are
          doable.
        </p>

        <p>
          <span className="input">
            21 BF1 F32 F32 [jump] 12 xDB2 4 xDB2 4 xDB2 4 BF2
          </span>{' '}
          - <strong>417 DMG</strong>, <em>3 BAR</em>. This squeezes the max out
          of air extensions, but requires very tight timing and there are easier
          routes to 400.
        </p>

        <p>
          <span className="input">
            F32 4 4 BF1 F32 [jump] 12 xDB2 [delay] 111 [land] B2 xBF4
          </span>{' '}
          - <strong>502 DMG</strong>, <em>2 BAR</em>. Attempt only if you're
          about to win the round. The <span className="input">xBF4</span> is
          guaranteed damage, but you can't recover in time to block. If they
          survive, they get a free wakeup punish.
        </p>
      </section>

      <section>
        <h2 id="kameos">Kameos</h2>

        <h3 id="mavado">Mavado</h3>

        <Image
          className="max-w-24 float-left mr-4"
          src={mavado}
          alt="A portrait of mavado."
        />

        <p>
          Mavado is a top pick for both beginners and advanced players. He gives
          Scorpion a little bit of everything - armored and throw combos,
          meterless air extension, and wakeup pressure - but lacks mix-up.
        </p>

        <p>
          Knockback strings like <span className="input">214</span> and{' '}
          <span className="input">F34</span> become combo starters with{' '}
          <span className="input">FK</span> -{' '}
          <span className="input">F34 FK F32 4 BF1 33 DB2</span>. It triggers
          only in the correct state, so no precise timing is required.
        </p>

        <p>
          <em>Nindrop</em> <span className="input">UK</span> can armor combo out
          of the Charge and keep air extended combo meterless:
        </p>

        <ul>
          <li>
            <span className="input">
              xBF2 UK - switch sides - dash F32 F32 4 BF1 33 DB2
            </span>{' '}
            - <em>259 damage, 0 bars</em>.
          </li>

          <li>
            <span className="input">
              F32 F32 jump 12 xDB2 UK land BF1 33 DB2
            </span>{' '}
            - <em>375 damage, 0 bars</em>, almost the same damage as spending a
            bar.
          </li>
        </ul>

        <p>
          After knocking the opponent down, jump and do{' '}
          <span className="input">Down K</span> at the same time as a Jump Kick.
          Mavado will slide on them if they are still down. They must block the
          low, allowing the overhead to connect, though timing requires
          practice.
        </p>

        <p>
          <em>Trap Drop</em> <span className="input">K</span> throws a stun bomb
          next to the opponent that detonates after a second. If you time it
          when Scorpion jumps off his foe during a throw, you can combo out of
          it - <span className="input">Grab timely K F32 F32 4 BF1 33 DB2</span>{' '}
          - <em>220 damage out of a throw (normally 110)</em>.
        </p>

        <h3 id="ferra">Ferra </h3>

        <Image
          className="max-w-24 float-left mr-4"
          src={ferra}
          alt="A portrait of Ferra."
        />

        <p>
          Ferra on the other hand, helps mostly with the mix-up, but is slightly
          more technical than Mavado with her "latched" mode.
        </p>

        <h3 id="chameleon">Chameleon</h3>

        <Image
          className="max-w-24 float-left mr-4"
          src={chameleon}
          alt="A portrait of Chameleon."
        />

        <p>
          Chameleon is very fun, but more advanced. She allows for strong
          resets, good extensions, and lots of tricks, but her phase management
          makes her less consistent, even for experienced players.
        </p>

        <p>
          Kitana Form -{' '}
          <span className="input">
            Grab time K (fan toss) J2 F32 F32 4 BF1 33 DB2
          </span>{' '}
          - <em>219 damage</em> out of a throw.
        </p>

        <p>
          Kitana Form -{' '}
          <span className="input">BF2 FK switch sides BF1 F32 F32 4 BF2</span> -{' '}
          <em>234 damage</em> armored combo.
        </p>
      </section>
    </>
  )
}
