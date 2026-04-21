import Image from 'next/image'

import chameleon from '@/app/assets/mk1/chameleon.webp'
import ferra from '@/app/assets/mk1/ferra.webp'
import Movado from '@/app/assets/mk1/movado.webp'
import scorpAirDB2 from '@/app/assets/mk1/scorp_air_db2.webp'
import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import spear from '@/app/assets/mk1/scorp_spear.webp'
import scorp2 from '@/app/assets/mk1/scorpion_2.webp'
import scorpb3 from '@/app/assets/mk1/scorpion_b3.webp'
import { MK_TITLE } from '@/app/constants'
import { Callout } from '@/app/ui/Callout'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { Pill } from '@/app/ui/Pill'
import { PlayOrSkip } from '@/app/ui/PlayOrSkip'
import { Section } from '@/app/ui/Section'
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

      <section className="md:flex-center md:flex-nowrap">
        <Image
          className="max-h-72 object-cover object-[0%_0%] md:w-1/2 md:max-h-full"
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
          loading="eager"
        />

        <section className="md:w-1/2">
          <p>
            MK1's Scorpion excels at controlling space and punishing mistakes.
            His disjointed normals with good reach, combined with multiple
            full-screen options respect the oponent into minding their step.
          </p>

          <p>
            Lacking a standing low or overhead attack, or good plus frames, on
            his own, he's rather suited for a counter-attacking style.
            Fortunately, his toolbox is modular enough to work with different
            Kameos to fill the gaps in his offense.
          </p>
        </section>
      </section>

      <PlayOrSkip
        pros={
          <>
            <div>
              <div className="font-bold">Rewards good fundamentals</div>
              <div className="text-sm">
                He has no forms to manage. No complex gimicks. He's a natural
                fit, if you're a beginner, or enjoy a straightforward game.
              </div>
            </div>

            <div>
              <div className="font-bold">Reactive play</div>
              <div className="text-sm">
                Numerous options for converting carelessness into solid damage
                at any distance.
              </div>
            </div>

            <div>
              <div className="font-bold">Flexible kit</div>
              <div className="text-sm">
                Works with many Kameos, some allowing for throw and armor
                combos.
              </div>
            </div>

            <div>
              <div className="font-bold">Simple combos</div>
              <div className="text-sm">
                His combo structure is easy to learn and reliable, without the
                need for tight execution to get strong damage.
              </div>
            </div>
          </>
        }
        cons={
          <>
            <div>
              <div className="font-bold">Kameo-dependent offense</div>
              <div className="text-sm">
                On his own, he lacks true mix-ups, or 50/50s, and may feel
                limited. He depends on staggers, conditioning and baiting, all
                requiring patience.
              </div>
            </div>
          </>
        }
      />

      <section>
        <h2 id="key-strings">Key strings</h2>

        <h3 id="normals">Normals</h3>

        <p>
          <span className="input">2</span> - a safe, fast, disjointed high punch
          with good range - is a good starting point. It's your{' '}
          <em>primary poke</em>. Memo it's reach and you'll often surprise
          approaching foes.
        </p>

        <p>
          <span className="input">21</span> is your main <em>hit confirm</em>{' '}
          out of <span className="input">2</span>. If they fail to block
          continue into Spear: <span className="input">21 BF1</span> - the
          easiest way to start a punish. The full string{' '}
          <span className="input">214</span> can be cut short into a stagger{' '}
          <span className="input">21 Throw</span>
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
          opponents that like to crouch near you. It unfolds into
          <span className="input">F32</span> - your principal <em>launcher</em>{' '}
          and optimal <em>combo starter</em>. It can be chained up to three
          times in a row. Starting with it allows you to use the Spear later on
          for better extensions.
        </p>

        <p>
          <span className="input">B2</span> is your chief <em>anti-air</em> -
          fast, safe and shortcut cancellable into any forward special (e.g.{' '}
          <span className="input">B3 F1</span> cancels into Spear). You can get
          a full combo out of a poorly judged jump-in.
        </p>

        <p>
          <span className="input">B3</span> is a very singular move. It controls
          space via a very far reaching, disjointed, slow, unsafe, two hit
          mid-low attack. The first mid is cancellable into any special, and can
          be also shortcut cancelled into forward specials. Used correctly, it
          can condition opponents to anticipate the far low and keep
          pre-blocking low or pre-jumping (into your{' '}
          <span className="input">B2</span>)
        </p>

        <Image
          src={scorpb3}
          alt="Scorpion's back 3 attack."
          className="picture profile-img max-h-68"
        />

        <h3 id="specials">Specials</h3>

        <p>
          <span className="input">BF1</span> - Scorpion's signature move - the
          Spear, is a space controlling high projectile. On hit it stuns, drags
          and restands the opponent next to you for the easiest combo extension
          ever. Hitting with a Spear a second time during the same combo will
          drop them. Be mindful at which point in a combo it's used.
        </p>

        <p>
          Even as predictable as it is, the Spear catches players dashing,
          miss-jumping and attempting slow casts much more often than they
          expect. The enhanced version hits mid, surprising those cheeky foes
          that like to duck under it.
        </p>

        <Image src={spear} alt="Scorpion's spear move." />
      </section>

      <section>
        <h2 id="combos">Combos</h2>

        <div className="flavor">
          This section covers how you can continue after landing a hit.
        </div>

        <p className="font-bold">
          When playing online, consistent execution outweighs maximum damage.
        </p>

        <h3 id="bread-n-butter">Bread and butter combos</h3>

        <p>
          Follow up on what you know. Open with <Pill>12/21/B2</Pill> into
          Spear. The optimal ender is <Pill>33 DB2</Pill>. This maximizes damage
          but isn't always available.
        </p>

        <Callout>
          <div>
            <Pill>21 BF1 33 DB2</Pill>
          </div>
          <div className="flavor mt-2">
            Basic 210 damage starter. Use this for your first online matches.
            Once consistent, move on.
          </div>
        </Callout>

        <p>
          To maximize damage, learn to juggle opponents with <Pill>F32</Pill>.
        </p>

        <Callout>
          <Pill>21 BF1 F32 F32 F32 F34 BF2</Pill>
          <div className="flavor mt-2">
            Meterless 342 damage. The height after the third F32 is low.
            Connecting F34 into Charge can be tight.
          </div>
        </Callout>

        <p>
          Starting with <Pill>F32</Pill> and delaying the Spear lets you use the
          better ender for better results.
        </p>

        <Callout>
          <Pill>F32 F32 F32 4 BF1 33 DB2</Pill>
          <div className="flavor mt-2">
            Meterless 365 damage. Connecting Standing 4 after the last F32 is
            the trickiest part.
          </div>
        </Callout>

        <p>
          The last two can be your bread and butter combos. You can spend meter
          to enhance damage, but it requires <em>enhanced air Kyo Snag</em>.
          This is a Spear-like special used mid-air to grab opponents.
        </p>

        <Callout>
          <ul className="space-y-4">
            <li>
              <Pill>
                21 BF1 F32 F32 J12 airDB2ex{' '}
                <div className="flavor">small pause</div> 111 airDB2
              </Pill>
              <div className="flavor mt-2">
                One bar 377 damage. The pause delays 111 until both fighters are
                lower to the ground, making the final airDB2 connect.
              </div>
            </li>
            <li>
              <Pill>
                F32 F32 J12 airDB2ex <div className="flavor">small pause</div>{' '}
                111 BF1 33 DB2
              </Pill>{' '}
              <div className="flavor mt-2">
                One bar <strong>407</strong> damage. Same pause but this time,
                because you delayed the Spear, you can connect into the familiar
                ender.
              </div>
            </li>
          </ul>
        </Callout>

        <ImageWithCaption
          src={scorpAirDB2}
          alt="Scorpion's air down back 2 special."
          caption="Scorpion's enhanced air Down Back 2 can be chained multiple times in a row, but costs meter each time and has diminishing returns compared to continuing with 111."
        />

        <h3 id="in-the-corner">In the corner</h3>

        <p>
          <Pill>Standing 4</Pill> keeps most of its damage through combo
          scaling. In the corner, knockback isn't a factor and you can chain two
          in a row to spike damage.
        </p>

        <Callout>
          <ul className="space-y-4">
            <li>
              <Pill>
                F32 4 4 BF1 F32 J12 airDB2ex{' '}
                <div className="flavor">small pause</div> J111 JDB2
              </Pill>
              <div className="flavor mt-2">
                One bar <strong>446</strong> damage. If chaining the second{' '}
                <Pill>4</Pill> is difficult, a single one still exceeds 400
                damage.
              </div>
            </li>
            <li>
              <Pill>
                F32 4 4 BF1 F32 J12 airDB2ex{' '}
                <div className="flavor">small pause</div> J111{' '}
                <div className="flavor">land</div> B2 BF4ex
              </Pill>{' '}
              <div className="flavor mt-2">
                Attempt this two bar <strong>502</strong> damage monster if
                you're about to win the round. The enhanced Devouring Flame is
                guaranteed damage, but you can't recover in time to block. If
                they survive, they get a free wakeup punish.
              </div>
            </li>
          </ul>
        </Callout>

        <h3 id="extending-via-flame-port">Extending via Flame Port</h3>

        <p>
          Scorpion's teleport can extend combos, but it's hard and not
          necessarily worth the effort.
        </p>

        <Callout>
          <ul className="space-y-4">
            <li>
              <Pill>
                J3 airDB3 <div className="flavor">land</div> B2 F2
              </Pill>
              <div className="flavor mt-2">
                The jump kick and the teleport must be initiated very close to
                the ground.
              </div>
            </li>

            <li>
              <Pill>
                F32 J12 airDB3ex J13 <div className="flavor">land</div> BF1 33
                DB3
              </Pill>{' '}
              <div className="flavor mt-2">
                One bar 334 damage. Only enhanced air port is fast enough to
                connect. Connecting <Pill>J13</Pill> is awkward. The Port often
                misses. There must be a short delay after J12.
              </div>
            </li>
          </ul>
        </Callout>

        <p>
          Starting a combo out of enhanced air Port is usually best as it's less
          predictable. Players don't expect to get hit from a far jump.
        </p>

        <Callout>
          <ul className="space-y-4">
            <li>
              <Pill>
                airDB3ex J3 <div className="flavor">land</div> BF1 F32 F32 F34
                BF2
              </Pill>
              <div className="flavor mt-2">
                An easier version for one bar 308 damage.
              </div>
            </li>

            <li>
              <Pill>
                airDB3ex J3 DB3 <div className="flavor">land</div> F32 F32 4 BF1
                33 DB2
              </Pill>{' '}
              <div className="flavor mt-2">
                A challenging double-port one bar 411 damage variant.
              </div>
            </li>

            <li>
              <Pill>
                airDB3ex J3 DB3 <div className="flavor">land</div> 4 BF1 F32 J12
                airDB2ex
              </Pill>{' '}
              <div className="flavor mt-2">
                A fancy two meter <strong>449</strong> damage advanced combo.
              </div>
            </li>
          </ul>
        </Callout>
      </section>

      <Section title="Kameos" id="kameos">
        <div className="flavor">
          Pairing a character with a Kameo is a vast topic. In this section, we
          will only discuss a few choices.
        </div>

        <p>
          Scorpion can handle most situations on his own, but discovering his
          offensive potential in MK1 begins with the right Kameo partner.
        </p>

        <h3 id="movado">Movado</h3>

        <Image
          className="max-w-24 float-left mb-0 mr-2"
          src={Movado}
          alt="A portrait of Movado."
        />

        <p>
          Movado is a good pick for beginners and advanced players. He opens
          many routes out of otherwise non-chainable moves. Thanks to{' '}
          <Pill>Forward K</Pill>, knockback strings like <Pill>214</Pill> and{' '}
          <Pill>F34</Pill> become starters. Nindrop <Pill>Up K</Pill> can combo
          out of the Charge (giving armored combos) and keep any{' '}
          <Pill>airDB2ex</Pill> extended combo meterless.
        </p>

        <p>
          After knocking opponents down, jump and press <Pill>Down K</Pill> at
          the same time as <Pill>Jump Kick</Pill>. They must block the low,
          allowing the overhead to connect, though timing requires practice.
        </p>

        <p>
          Trap Drop <Pill>K</Pill> throws a stun bomb next to the opponent that
          detonates after a second. If you time it when Scorpion jumps off his
          foe in the throw animation, you can combo out of it.
        </p>

        <Callout>
          <ul className="space-y-4">
            <li>
              <Pill>
                BF2ex UK <div className="flavor">switch sides</div> dash F32 F32
                4 BF1 33 DB2
              </Pill>
              <div className="flavor mt-2">
                Meterless armored combo for 259 damage.
              </div>
            </li>

            <li>
              <Pill>
                F32 F32 J12 airDB2ex UK <div className="flavor">land</div> BF1
                33 DB2
              </Pill>{' '}
              <div className="flavor mt-2">
                Same juggle-to-air extension as before, but meterless for 375
                damage.
              </div>
            </li>

            <li>
              <Pill>
                Throw <div className="flavor">time during animation</div> K
                (trap) F32 F32 4 BF1 33 DB2
              </Pill>{' '}
              <div className="flavor mt-2">
                220 damage out of a throw (normally 110).
              </div>
            </li>

            <li>
              <Pill>F34 FK F32 4 BF1 33 DB2</Pill>
            </li>
          </ul>
        </Callout>

        <h3 id="ferra">Ferra </h3>

        <Image
          className="max-w-24 float-left mb-0 mr-2"
          src={ferra}
          alt="A portrait of Ferra."
        />

        <p>
          Ferra contributes to mix-ups more directly. She's slightly more
          technical than Movado. On pressing <Pill>K</Pill>, she goes into an
          "attached to your back" stance. From there, pressing a face button
          performs different attacks. Pressing <Pill>2</Pill> does an overhead,
          while <Pill>3</Pill> does a low. This works well with Scorpion's{' '}
          <Pill>B3</Pill> - <Pill>B3 K 2</Pill> or <Pill>B3 K 3</Pill>.
        </p>

        <h3 id="chameleon">Chameleon</h3>

        <Image
          className="max-w-24 float-left mb-0 mr-2"
          src={chameleon}
          alt="A portrait of Chameleon."
        />

        <p>
          Chameleon is an advanced Kameo. Managing her <em>stances</em> (Jade,
          Kitana, Mileena) is problematic for beginners, but she offers great
          utility. Jade's Glow gives projectile immunity, which helps with
          zoners and Spears in mirror matches. Like Movado, she enables armored
          and throw combos.
        </p>

        <Callout>
          <ul className="space-y-4">
            <li>
              <Pill>
                Throw <div className="flavor">time during animation</div> K (fan
                toss) J2 F32 F32 4 BF1 33 DB2
              </Pill>
              <div className="flavor mt-2">
                Must be in Kitana Form. 219 damage throw combo.
              </div>
            </li>

            <li>
              <Pill>
                BF2 FK <div className="flavor">switch sides</div> BF1 F32 F32 4
                BF2
              </Pill>{' '}
              <div className="flavor mt-2">
                Kitana form. Meterles 234 damage armored combo.
              </div>
            </li>
          </ul>
        </Callout>

        <p>
          Chameleon's fan toss enables resets where two otherwise non-chainable
          moves link into a combo.
        </p>
      </Section>

      <Section title="Advanced tech" id="advanced-tech">
        <div className="flavor mb-5">
          This section describes niche techniques that require more practice.
        </div>

        <h3 id="enhanced-flame-port-jail">Enhanced Flame-Port jail</h3>

        <p>
          Ending a corner combo with enhanced air teleport into kick jails your
          opponent. If they press any button other than block during getup, they
          get hit. Do it correctly, and they spin around to face you as you come
          from the corner. You get a free hit and can break armor, though it's
          inconsistent.
        </p>

        <h3 id="air-kyo-snag-bait">Air Kyo Snag bait</h3>

        <p>
          Air DB2 has instant recovery - even the regular version. If you jump
          over your adversary, you can throw this move into empty air, and it
          stops and drops you down. They must be ready for a timely anti-air,
          otherwise you're safe. The idea is to bait a high attack while
          throwing a low Kameo move or Movado's Trap Drop. It's a niche tactic.
        </p>
      </Section>
    </>
  )
}
