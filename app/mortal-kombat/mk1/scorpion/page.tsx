import Image from 'next/image'
import Link from 'next/link'

import ferra from '@/app/assets/mk1/ferra.webp'
import mavado from '@/app/assets/mk1/mavado.webp'
import motaro from '@/app/assets/mk1/motaro.webp'
import scorpAirDB2 from '@/app/assets/mk1/scorp_air_db2.webp'
import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import spear from '@/app/assets/mk1/scorp_spear.webp'
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
        <Image
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
          loading="eager"
          className="relative h-96 w-auto md:h-full md:max-w-1/2 md:float-right"
        />

        <section>
          <p>
            MK1's Scorpion is a{' '}
            <Link href={`${mkRoute('Anatomy of attacks')}#safe-vs-unsafe`}>
              safe
            </Link>{' '}
            mid-range fighter with strong{' '}
            <Link href={`${mkRoute('Neutral')}#whiff-punish`}>
              whiff punishment
            </Link>{' '}
            and <Link href={`${mkRoute('Pressure')}#stagger`}>stagger</Link>{' '}
            offense. Like in previous titles, he is{' '}
            <strong>built around fundamentals</strong>. He has no forms or
            complex gimmicks to manage, making him{' '}
            <strong>approachable for new players</strong>.
          </p>

          <p>
            Lacking any real{' '}
            <Link href={`${mkRoute('Pressure')}#mix-up`}>mix-up</Link> on his
            own, <strong>his offense stays linear and honest</strong>.
            Fortunately, his moves are modular enough to{' '}
            <strong>work well with many Kameos</strong>, which can fill the gaps
            for him.
          </p>

          <p>
            Scorpion’s strengths show more clearly in{' '}
            <strong>reactive play</strong>. His{' '}
            <Link href={`${mkRoute('Anatomy of attacks')}#disjointed`}>
              disjointed
            </Link>{' '}
            pokes and{' '}
            <Link href={`${mkRoute('Anatomy of attacks')}#space-control`}>
              space-controlling
            </Link>{' '}
            specials let him <strong>catch mistakes at all ranges</strong>. This
            plays well with his simple, consistent combo system, converting
            whiffs into solid damage relatively easily.
          </p>

          <p>
            On the <em>spectrums of archetypes</em>, he lies in the middle of
            most. Not a full rushdown, not a full scrambler, not exceptional at
            defense, far from a zoner. He probably sits between Johnny (stagger
            and mind games, but less oppressive) and Sub-Zero (space control and
            whiff punish, but no mix-up), sharing some traits with Reptile
            (mid-range interrupts, but less complex and again no mix-up).
          </p>
        </section>
      </section>

      <section>
        <h2 id="key-strings">Key strings</h2>

        <h3 id="normals">Normals</h3>

        <p>
          <span className="input">1</span> is a fast (7 frames), safe and short{' '}
          <Link href={`${mkRoute('Anatomy of attacks')}#high`}>high</Link> jab -
          your <em>fastest</em> standing attack.
        </p>

        <p>
          <span className="input">12</span> is a fast and safe high-high string
          that can be cancelled into any special - your{' '}
          <em>fastest hit-confirm and combo-starter</em>.
        </p>

        <p>
          <span className="input">122</span> is a safe, high-high-overhead
          string - part of your stagger arsenal -{' '}
          <span className="input">12 Throw</span>.
        </p>

        <hr />

        <p>
          <span className="input">2</span> is a safe, a bit slower (10 frames),
          high, disjointed punch with very decent reach and better damage than{' '}
          <span className="input">1</span>. It's your{' '}
          <em>
            primary{' '}
            <Link href={`${mkRoute('Anatomy of attacks')}#pokes`}>poke</Link>
          </em>
          .
        </p>

        <p>
          <span className="input">21</span> is a safe, more damaging, high-
          <Link href={`${mkRoute('Anatomy of attacks')}#mid`}>mid</Link> string
          - better hit-confirm for when the space allows it, plus a duck check.
        </p>

        <p>
          <span className="input">214</span> is another stagger tool - a barely
          safe, high-mid-mid sequence.
        </p>

        <hr />

        <p>
          <span className="input">F3</span> is a slower (12 frames), safe,{' '}
          <Link href={`${mkRoute('Anatomy of attacks')}#advancing`}>
            advancing
          </Link>{' '}
          mid kick - a good check against crouching foes.
        </p>

        <p>
          <span className="input">F32</span>, your optimal <em>launcher</em> (
          <span className="input">F4</span> is not worth it) and{' '}
          <em>combo starter</em>. It can be chained up to three times in a row.
        </p>

        <hr />

        <p>
          <span className="input">B2</span> is similar to, even faster and more
          damaging than <span className="input">2</span>, but its hitbox is
          geared towards an <em>anti-air</em> attack. It can be shortcut-
          cancelled into any forward special (e.g.{' '}
          <span className="input">B3 F1</span> cancels into Spear) for a full
          combo.
        </p>

        <p>
          <span className="input">B3</span> is Scorpion's most unique normal. He
          launches his kunai for a very far-reaching, slow (21 frames), unsafe
          (-19 on block), disjointed attack that hits twice - mid-
          <Link href={`${mkRoute('Anatomy of attacks')}#low`}>low</Link>. The
          first mid hit can be cancelled into any special. It's a
          space-controlling move the opponent has to respect.
        </p>

        <Image
          src={scorpb3}
          alt="Scorpion's back 3 attack."
          className="picture profile-img max-h-68"
        />

        <h3 id="specials">Specials</h3>

        <p>
          The signature <em>Spear</em> <span className="input">BF1</span> is a{' '}
          full-screen, space-controlling, high{' '}
          <Link href={`${mkRoute('Anatomy of attacks')}#projectile`}>
            projectile
          </Link>{' '}
          that stuns on hit, drags and restands the opponent next to you. It's
          one of the best whiff punishes and combo starters/extenders in the
          game. The <em>enhanced</em> version hits mid, mixing it up for foes
          that like to duck under it.
        </p>

        <Image src={spear} alt="Scorpion's spear move." className="picture" />

        <p>
          <em>Flameport</em> <span className="input">DB3</span> is a teleport
          that tracks to the other side of the opponent, hitting them on arrival
          (unsafe; -21 on block) - an anti-zoning tool by design. The{' '}
          <em>enhanced</em> version launches much faster and skips the hit,
          making it safe. This enables strike/throw mind games and combo
          extension.
        </p>

        <p>
          <em>Blazing Charge</em> <span className="input">BF2</span> is a very
          quick (for a special; 13 frames) advancing dash attack that covers
          good distance, switches sides and knocks down the opponent. It's a
          great interruption, but has short active frames and should be timed
          well. The <em>enhanced</em> version is <em>armored</em>, being a
          proper getup breaker and armor combo starter.
        </p>

        <p>
          <em>Twisted Kyo</em> <span className="input">DB2</span> is an unsafe,
          multi-hit combo ender, with strong chip damage, that knocks the
          opponent down. Its advantage over knockback enders is that it keeps
          your opponent next to you.
        </p>

        <p>
          <em>Enhanced Devouring Flame</em> <span className="input">xBF4</span>{' '}
          is an unblockable, low, damage-over-time special that tracks the
          opponent. It's both an anti-zoning and an{' '}
          <Link href={`${mkRoute('Momentum')}#oki`}>oki</Link> option.
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
              <span className="input">F32</span> - launcher / only for juggle
              combos.
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
          <span className="input">12 BF1 333 BF2</span> basic <em>217 DMG</em>
        </p>

        <p>
          <span className="input">12 BF1 F32 F32 F32 4 BF2</span>{' '}
          <em>318 DMG</em> - adds the juggles. If the trailing{' '}
          <span className="input">4</span> into a Charge is difficult, reduce
          juggles to two.
        </p>

        <p>
          <span className="input">21 BF1 F32 F32 F32 F34 BF2</span>{' '}
          <em>342 DMG</em> - swaps in a better starter and ender. It's a very
          consistent, close to optimal, meterless <em>bread-and-butter</em>{' '}
          (B&B) route.
        </p>

        <p>From here you can use air extension and/or meter to upgrade.</p>

        <p>
          <span className="input">
            21 BF1 F32 F32 [jump] 12 xDB2 [111/4 BF2]
          </span>{' '}
          <em>~330-350 DMG, 1 BAR</em> - a very suboptimal route, but a good
          starting point for air extension.
        </p>

        <p>
          <span className="input">
            21 BF1 F32 F32 [jump] 12 xDB2 [delay] 111 DB2 [land]
          </span>{' '}
          <em>377 DMG, 1 BAR</em> is an optimal route out of the Spear, but a
          bit tricky for beginners. Delay the <span className="input">111</span>{' '}
          until you're almost touching the ground.
        </p>

        <hr />

        <p>
          Delaying the Spear and going directly for a juggle is better, but may
          be trickier to initiate.
        </p>

        <p>
          <span className="input">F32 F32 F32 4 BF1 33 DB2</span>{' '}
          <em>365 DMG</em>
        </p>

        <p>
          <span className="input">
            F32 F32 [jump] 12 xDB2 [delay] 111 [land] BF1 33 DB2
          </span>{' '}
          <strong>407 DMG</strong>, <em>1 BAR</em>, optimal B&B for online
          consistency.
        </p>

        <Image
          src={scorpAirDB2}
          alt="Scorpion's air down back 2 special."
          className="picture profile-img object-[0%_10%]"
        />

        <h3 id="corner">Corner</h3>

        <p>
          You can keep it simple in the corner, much like you can in the middle.
          But if you wish to spike and are willing to train some timings, you
          can chain two <span className="input">4</span> in a row, which keeps
          most of their damage through scaling.
        </p>

        <p>
          <span className="input">F32 F32 J13 4 BF1 33 DB2</span>{' '}
          <em>369 DMG</em>
        </p>

        <p>
          <span className="input">
            F32 4 4 BF1 F32 [jump] 12 xDB2 [pause] 111 DB2
          </span>{' '}
          <strong>446 DMG</strong>, <em>1 BAR</em> - very tight timing on the
          two <span className="input">4</span> but even with one you can do over
          400.
        </p>

        <h3 id="other-routes">Other routes</h3>

        <p>
          If they jump in: <span className="input">B2 F1 333 BF2</span>{' '}
          <em>210 DMG</em> is a basic anti-air punish.
        </p>

        <p>
          Or if you know they will jump in:{' '}
          <span className="input">[jump] 111 BF1 [land] F32 4 BF2</span>{' '}
          <em>291 DMG</em> is a decent air-to-air interrupt.
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
          - <em>417 DMG, 3 BAR</em>. This squeezes the max out of air
          extensions, but requires very tight timing and there are easier routes
          to 400.
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
          Mavado is an all-around safe pick for Scorpion. He teaches proper
          Kameo play (not single-button spam) and gives a little bit of
          everything, primarily armored and throw combos, and preserving meter.
        </p>

        <p>
          <span className="input">Throw [delay] K F32 F32 4 BF1 33 DB2</span> -{' '}
          <em>220 DMG</em> out of a throw (normally 110).
        </p>

        <p>
          <span className="input">F34 FK F32 4 BF1 33 DB2</span>{' '}
          <em>332 DMG</em> - knockback strings like{' '}
          <span className="input">214</span> and{' '}
          <span className="input">F34</span> become combo starters with{' '}
          <span className="input">FK</span>.
        </p>

        <p>
          <span className="input">
            xBF2 UK - switch sides - dash F32 F32 4 BF1 33 DB2
          </span>{' '}
          - <em>259 DMG</em> armored combo using Mavado's <em>Nindrop</em>.
        </p>

        <p>
          <span className="input">F32 F32 jump 12 xDB2 UK land BF1 33 DB2</span>{' '}
          <em>375 DMG</em> - using Mavado out of juggles deals almost the same
          damage as spending a bar.
        </p>

        <p>
          <span className="input">Down K</span> gives you some oki on a knocked
          back opponent if combined with a jump-in.
        </p>

        <p>
          You can chip with <span className="input">[12/21] BK</span>. If it
          hits, you gain plus frames.
        </p>

        <h3 id="ferra">Ferra</h3>

        <Image
          className="max-w-24 float-left mr-4"
          src={ferra}
          alt="A portrait of Ferra."
        />

        <p>
          Ferra gives Scorpion mix-up and{' '}
          <Link href={`${mkRoute('Momentum')}#vortex`}>vortex</Link> options,
          and a{' '}
          <Link href={`${mkRoute('Anatomy of attacks')}#command-grabs`}>
            command grab
          </Link>
          , so your offense can become more proactive.
        </p>

        <p>
          On confirming that they block, you can go for{' '}
          <span className="input">[12/21] K Throw</span> <em>100 DMG</em> -
          doesn't lead to anything, but many foes eat the damage.
        </p>

        <p>
          Your <span className="input">B3</span> canceled plays very well with
          her overhead <span className="input">K 2</span> and low{' '}
          <span className="input">K 3</span>. Since{' '}
          <span className="input">B3</span> is mid-low, usually the overhead
          catches them more often so you can do{' '}
          <span className="input">B3 K [2/3] F32 4 BF1 333 BF2</span>{' '}
          <em>352 DMG</em>.
        </p>

        <p>
          <span className="input">
            B3 K [2/3] 1 4 BF1 F32 [jump] 12 xDB2 [delay] 111 DB2
          </span>{' '}
          <em>424 DMG, 1 BAR</em> is a more complex alternative of the above.
        </p>

        <p>
          Trying to do this up close with <span className="input">12 K 2</span>{' '}
          will work most of the time, but it's jab punishable.
        </p>

        <p>
          <span className="input">
            Throw [time it] UK 2 F32 F32 4 BF1 F32 4 BF2
          </span>{' '}
          <em>264 DMG</em> - one of Scorpion's highest damage throw combos.
        </p>

        <p>
          Ending a combo with <span className="input">33 K</span> is a vortex
          opportunity. It drops the combo, but forces the opponent to guess
          overhead/low again. It will not work if you press the next button
          again immediately. You need to time a micro forward button press to
          make sure scaling is reset.
        </p>

        <h3 id="motaro">Motaro</h3>

        <Image
          className="max-w-24 float-left mr-4"
          src={motaro}
          alt="A portrait of Motaro."
        />

        <p>Motaro gives resets, plus frames, and some hit-confirm safety.</p>

        <p>
          <span className="input">[any string] BF4</span> is a sort-of low
          mix-up. The opponent has to guess to block low, but even if you hit
          you can't combo out of it. You can do something like{' '}
          <span className="input">
            B3 F4 K [switch sides] F32 F32 4 BF1 33 DB3
          </span>{' '}
          <em>361 DMG</em>. You can end any combo with{' '}
          <span className="input">BF4</span> and if they didn't guess low, you
          can do another one. Or if they did, you can hold back after switching
          sides to end far away (MK11-style Scorpion teleport).
        </p>

        <p>
          <em>Tail Shot</em> <span className="input">FK</span> is a +13 on block
          low attack that allows you to steal your turn back{' '}
          <span className="input">
            12 [failed hit confirm] FK 12 [your turn again]
          </span>
          . You can also do some mix-up with it{' '}
          <span className="input">21 FK [low] 122 [overhead]</span>.
        </p>

        <h3 id="chameleon">Other considerations</h3>

        <p>
          <em>Khameleon</em> is very fun and comprehensive, but more advanced
          and perhaps less consistent. She extends and combos out of throw and
          armor, but what is probably more interesting are her resets. Just like
          with Motaro, Kitana form's <em>Fan Lift</em>{' '}
          <span className="input">FK</span> bridges{' '}
          <span className="input">21 BF4</span> into a new combo. And to give
          you some idea of corner damage you can do{' '}
          <span className="input">
            F32 4 4 K [Kitana, hold to switch] [jump] 12 xDB2 3 [land] BF1 F32
            FK [Mileena] 4 BF2
          </span>{' '}
          <strong>458 DMG</strong> <em>1 BAR</em>, 2 Kameo uses. She expands
          routes in too many ways to list here.
        </p>

        <p>
          <em>Janet's</em> key positive is great combos with exceptional
          resource efficiency. But similar to Khameleon she's more difficult.
          This time it's not managing stances as much as tight timings -{' '}
          <span className="input">
            F32 F32 [jump] 12 DB2 FK [3 times] 4 BF1 33 DB2
          </span>{' '}
          <em>386 DMG</em> meterless.
        </p>

        <p>
          <em>Jax</em> gives corner and armor routes -{' '}
          <span className="input">
            xBF2 [switch sides] FK BF1 F32 F32 F34 BF2
          </span>{' '}
          <em>252 DMG, 1 BAR</em>. His <em>Ground Pound</em>{' '}
          <span className="input">K</span> provides some oki. Otherwise, he's a
          bit awkward.
        </p>
      </section>
    </>
  )
}
