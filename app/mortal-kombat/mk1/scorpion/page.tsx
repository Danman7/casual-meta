import Image from 'next/image'

import chameleon from '@/app/assets/mk1/chameleon.webp'
import ferra from '@/app/assets/mk1/ferra.webp'
import mavado from '@/app/assets/mk1/mavado.webp'
import scorpAirDB2 from '@/app/assets/mk1/scorp_air_db2.webp'
import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import spear from '@/app/assets/mk1/scorp_spear.webp'
import scorp2 from '@/app/assets/mk1/scorpion_2.webp'
import scorpb3 from '@/app/assets/mk1/scorpion_b3.webp'
import { MK_TITLE } from '@/app/constants'
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
          className="mx-auto h-96 w-auto md:h-full md:max-w-1/2 md:float-right"
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
          loading="eager"
        />

        <section>
          <div>
            <div className="font-bold">Rewards good fundamentals.</div>
            <div>
              He has no forms to manage. No complex gimmicks. He's a natural
              fit, if you're a beginner, or enjoy a more direct playstyle.
            </div>
          </div>

          <div>
            <div className="font-bold">Plays well reactively.</div>
            <div>
              He has numerous options for converting the opponent's mistakes
              into solid damage at any distance.
            </div>
          </div>

          <div>
            <div className="font-bold">Has a flexible kit.</div>
            <div>
              Works with many Kameos, some allowing for throw and armor combos,
              others for mix-ups.
            </div>
          </div>

          <div>
            <div className="font-bold">Simple combo structure.</div>
            <div>
              It's approachable for beginners while still allowing harder
              optimal routes for advanced players.
            </div>
          </div>

          <div>
            <div className="font-bold">Somewhat Kameo-dependent.</div>
            <div>
              On his own, he lacks true mix-ups, or 50/50s, or an invincible
              wake-up, and may feel limited.
            </div>
          </div>
        </section>
      </section>

      <section>
        <h2 id="key-strings">Key strings</h2>

        <h3 id="normals">Normals</h3>

        <p>
          <span className="input">2</span> your <em>primary poke</em>. It's a
          safe, fast, 9 frames, disjointed high punch with good range. Memo it's
          reach and you'll often surprise approaching foes.
        </p>

        <p>
          <span className="input">21</span> is your main <em>hit confirm</em>{' '}
          out of <span className="input">2</span>. If they fail to block
          continue into Spear: <span className="input">21 BF1</span> - the
          easiest way to start a punish.
        </p>

        <Image
          src={scorp2}
          alt="Scorpion's Standing 2 attack."
          className="picture profile-img object-[0%_18%]"
        />

        <p>
          <span className="input">12</span> at 7 frames is your <em>fastest</em>{' '}
          hit confirm, for when they get straight in your face and it's too late
          for <span className="input">21</span>. It can be continued in the same
          fashion into a Spear.
        </p>

        <p>
          <span className="input">F3</span> is a useful advancing mid check for
          opponents that like to crouch near you.
        </p>

        <p>
          <span className="input">F32</span> is your principal <em>launcher</em>{' '}
          out of <span className="input">F3</span> (
          <span className="input">F4</span> is not worth it) and optimal{' '}
          <em>combo starter</em>. It can be chained up to three times in a row.
        </p>

        <p>
          <span className="input">B2</span> is your chief <em>anti-air</em> -
          fast, safe and shortcut cancellable into any forward special (e.g.{' '}
          <span className="input">B3 F1</span> cancels into Spear). You can get
          a full combo out of a poorly judged jump-in.
        </p>

        <p>
          <span className="input">B3</span> controls a lot of space via a far
          reaching, disjointed, slow, unsafe, two hit mid-low attack. The first
          mid is cancellable into any special, and can be also shortcut
          cancelled into forward specials.
        </p>

        <Image
          src={scorpb3}
          alt="Scorpion's back 3 attack."
          className="picture profile-img max-h-68"
        />

        <h3 id="specials">Specials</h3>

        <p>
          <span className="input">BF1</span> - Scorpion's signature move - the{' '}
          <em>Spear</em>, is a <em>space controlling</em> high projectile. On
          hit it stuns, drags and restands the opponent next to you. Hitting
          with a Spear a second time during the same combo drops them.
        </p>

        <Image src={spear} alt="Scorpion's spear move." className="picture" />

        <p>
          <span className="input">xBF1</span> hits mid, surprising those cheeky
          foes that like to duck under it.
        </p>

        <p>
          <span className="input">DB3</span> is the <em>Flameport</em>. It
          tracks to the other side of the opponent, hitting them on arrival. On
          the surface, it's an anti-zoning tool, but the enhanced version starts
          up in a flash and skips the hit, making it safe.
        </p>

        <p>
          <span className="input">xDB3</span> launches much faster and skips the
          hit, making it safe. Conditioning the opponent into blocking your
          Flameports can open them up for a surprise throw. If they tend to
          respond to ports with a counter-attack, try ducking, or a micro-duck
          into a chainable attack.
        </p>

        <p>
          <span className="input">DB2</span> <em>Twisted Kyo</em> is an unsafe,
          multi-hit combo ender, with strong chip damage, that knocks the
          opponent down. It works with standing foes, thus best placed after a
          Spear.
        </p>

        <p>
          <span className="input">xBF4</span> <em>Devouring Flame</em> is an
          unblockable, low, damage-over-time special that tracks the opponent.
          It's reasonable for waking up players that like to stay away and
          block, yet can be used as an ender to chip post-combo.
        </p>

        <p>
          <em>Blazing Charge</em> <span className="input">BF2</span>, or simply
          the Charge, is a very quick (for a special) advancing interruption
          that covers good distance and knocks down the opponent. A quirk it has
          is the short active frames. You might end up pressing against them if
          you don't polish the move.
        </p>

        <p>
          <span className="input">xBF2</span> adds armor. It's your go-to getup
          breaker and can start armor combos, but only with a Kameo.
        </p>
      </section>

      <section>
        <h2 id="combos">Solo combos</h2>

        <h3 id="core">Core</h3>

        <p>
          Scorpion does enough damage. Don't go for <em>training mode max</em>{' '}
          damage. Go for <em>match-ready consistent</em> damage.
        </p>

        <div className="box">
          <p className="font-bold">Building blocks</p>

          <ul>
            <li>
              <span className="input">21 BF1 33 DB2</span> - Spear into Twisted
              Kyo <em>210 damage</em> basic.
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
          It's simplest to start on the ground and best to reserve the spear for
          later on. Let's try to bridge our first two building blocks together.
          Then we can extend with meter in the air.
        </p>

        <p>
          <span className="input">F32 F32 F32 4 BF1 33 DB2</span> -{' '}
          <em>365 damage</em>. This is the top bread-and-butter, meterless,
          ground-only combo. Optimal, but connecting with{' '}
          <span className="input">F32</span> might be trickier than with{' '}
          <span className="input">12/21</span>.
        </p>

        <p>
          <span className="input">21 BF1 F32 F32 F32 F34 BF2</span> -{' '}
          <em>342 damage, 0 bars</em>. Less damage and the height after the
          third <span className="input">F32</span> will be low, so connecting
          the <span className="input">F34</span> into the Charge should be
          practiced.
        </p>

        <p>
          <span className="input">
            21 BF1 F32 F32 jump 12 xDB2 pause 111 DB2 land
          </span>{' '}
          - <em>377 damage, 1 bar</em> - same as the first, but extended in the
          air with meter. The delayed <span className="input">111</span> gets
          the fighters closer to the ground, so the final non-enhanced{' '}
          <span className="input">DB2</span> can connect.
        </p>

        <p>
          <span className="input">
            F32 F32 jump 12 xDB2 pause 111 land BF1 33 DB2
          </span>{' '}
          - <em>407 damage, 1 bar</em>. This is the peak, one bar combo, that
          uses all building blocks and you can pull off consistently in a match.
        </p>

        <Image
          src={scorpAirDB2}
          alt="Scorpion's air down back 2 special."
          className="picture profile-img object-[0%_10%]"
        />

        <h3 id="corner">Corner</h3>

        <p>
          <span className="input">4</span> keeps most of its damage through
          combo scaling. In the corner, knockback isn't a factor and you can
          chain two in a row to spike your combos.
        </p>

        <p>
          <span className="input">
            F32 4 4 BF1 F32 jump 12 xDB2 pause 111 DB2 land
          </span>{' '}
          - familiar sequence, but this one is <strong>446</strong> damage. If
          the second <span className="input">4</span> keeps slipping away, you
          can do above 400 even with one.
        </p>

        <p>
          <span className="input">
            F32 4 4 BF1 F32 jump 12 xDB2 pause 111 land B2 xBF4
          </span>{' '}
          - <strong>502</strong> damage, <em>2 bars</em>. This is apex damage,
          but very tight. Attempt only if you're about to win the round. The{' '}
          <span className="input">xBF4</span> is guaranteed damage, but you
          can't recover in time to block. If they survive, they get a free
          wakeup punish.
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
