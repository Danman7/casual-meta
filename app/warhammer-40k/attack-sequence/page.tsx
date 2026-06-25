import Image from 'next/image'
import Link from 'next/link'

import attack from '@/app/assets/wh40k/attack.webp'
import { wh40kHref, wh40kMetadata, wh40kPage } from '@/app/siteMap'
import { OrDivider } from '@/app/ui/OrDivider'
import { Table } from '@/app/ui/Table'
import { woundRollColumns, woundRollRows } from '@/app/warhammer-40k/constants'
import { BsFillDice6Fill } from 'react-icons/bs'
import { GiBolterGun, GiHumanTarget, GiRollingDices } from 'react-icons/gi'

const page = wh40kPage('attackSequence')

export const metadata = wh40kMetadata('attackSequence')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>
          Ranged attacks are declared during the{' '}
          <Link href={wh40kHref('battleRound', 'shooting-phase')}>
            Shooting Phase
          </Link>{' '}
          of the player's turn. Then, melee attacks are declared later, in the{' '}
          <Link href={wh40kHref('battleRound', 'fight-phase')}>
            Fight Phase
          </Link>
          . But, how are attacks actually resolved?
        </p>
      </section>

      <section>
        <h2 id="compare">Attacks compare the weapon to the target</h2>

        <p>
          Attacks are declared by units, but executed by weapons. Once your unit
          has an eligible targed, you match their weapons' attributes with those
          of the target.
        </p>

        <div className="flex-list justify-between">
          <div>
            <div className="lead">
              Weapon <GiBolterGun />
            </div>
            <div>
              <Link href={wh40kHref('datasheets', 'strength')}>
                Strength (S)
              </Link>
            </div>
            <div>
              <Link href={wh40kHref('datasheets', 'armor-penetration')}>
                Armor Penetration (AP)
              </Link>
            </div>
            <div>
              <Link href={wh40kHref('datasheets', 'damage')}>Damage (D)</Link>
            </div>
          </div>

          <div>
            <div>&nbsp;</div>
            <div>&harr;</div>
            <div>&harr;</div>
            <div>&harr;</div>
          </div>

          <div>
            <div className="lead">
              Target <GiHumanTarget />
            </div>
            <div>
              <Link href={wh40kHref('datasheets', 'toughness')}>
                Toughness (T)
              </Link>
            </div>
            <div>
              <Link href={wh40kHref('datasheets', 'save')}>Saves (Sv)</Link>
            </div>
            <div>
              <Link href={wh40kHref('datasheets', 'wounds')}>Wounds (W)</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 id="sequence">Attacks are a sequence of steps</h2>

        <p>
          Every attack follows the same{' '}
          <strong>5-step sequence to turn declaration into damage</strong>.
        </p>

        <ol>
          <li>
            Roll to hit <BsFillDice6Fill />
          </li>
          <li>
            Roll to wound <BsFillDice6Fill />
          </li>
          <li>Allocate wounds</li>
          <li>
            Roll to save, either armor or invulnerable <BsFillDice6Fill />
          </li>
          <li>Inflict damage</li>
        </ol>

        <p>
          The attack sequence is called an <strong>activation</strong> for
          short. Three of the steps are dice rolls. The failure of one roll
          shuts down the whole activation. Thus, the rolls are often called{' '}
          <strong>gates</strong>. Each activation must pass 3 gates to score
          damage.
        </p>

        <h3 id="hit-roll">1. Roll to hit</h3>

        <ol>
          <li>
            Roll a D6 <BsFillDice6Fill /> for each attack the weapon makes.
          </li>

          <li>
            Check if the result is equal to or higher than the weapon's{' '}
            <Link
              href={wh40kHref('datasheets', 'ballistic-skill-weapon-skill')}
            >
              BS/WS
            </Link>
            .
          </li>

          <li>
            On success, the attack hits the target. On fail, the activation
            stops there.
          </li>
        </ol>

        <p>
          An{' '}
          <strong>
            unmodified roll of 6 is a <em>critical hit</em>.
          </strong>{' '}
          Some{' '}
          <Link href={wh40kHref('keywords', 'weapon-keywords')}>
            weapon keywords
          </Link>{' '}
          care about critical hits.
        </p>

        <h3 id="wound-roll">2. Roll to wound</h3>

        <ol>
          <li>
            Roll a D6 <BsFillDice6Fill /> for each attack that hit during the
            previous step.
          </li>

          <li>
            Compare the weapon's S against the target's T using the table below.
          </li>

          <li>Based on the table, check if the result is a success.</li>

          <li>
            On success, the attack wounds the target. On fail, the activation
            stops there.
          </li>
        </ol>

        <Table columns={woundRollColumns} data={woundRollRows} />

        <p>
          <strong>
            An unmodified roll of 6 is a <em>critical wound</em>.
          </strong>
        </p>

        <h3 id="allocate-wounds">3. Allocate wounds</h3>

        <p>
          After attacks wound, the{' '}
          <strong>
            defender chooses which target models will receive them
          </strong>{' '}
          (unless the weapons have{' '}
          <Link href={wh40kHref('keywords', 'precision')}>Precision</Link>).
          They <em>must</em> choose models that have already lost wounds first.
        </p>

        <h3 id="save-roll">4. Roll to save</h3>

        <p>
          Every <Link href={wh40kHref('datasheets')}>datasheet</Link> has an{' '}
          <em>Armor Save</em>, but some have an additional{' '}
          <em>Invulnerable save</em>. If you are the defender, and the unit has
          an Invulnerable save, you can choose to roll for one of them, but not
          both.
        </p>

        <p className="lead">Armor save (Sv)</p>

        <ol>
          <li>
            Roll a D6 <BsFillDice6Fill /> for each attack that wounded.
          </li>

          <li>
            Add the weapon's AP to the roll (usually a negative number that
            reduces the result).
          </li>

          <li>
            Check if the modified result is equal to or greater than the
            target's Sv.
          </li>

          <li>
            On success, damage is averted. On fail, the target takes the damage.
          </li>
        </ol>

        <OrDivider />

        <p className="lead">Invulnerable save (Inv/++) if target has one</p>

        <ol>
          <li>
            Roll a D6 <BsFillDice6Fill /> for each attack that wounded.
          </li>

          <li>
            Check if the result is equal to or greater than the target's Inv.
          </li>

          <li>
            On success, damage is averted. On fail, the target takes the damage.
          </li>
        </ol>

        <p>
          Invulnerable saves ingnore armor and are preferable against high AP
          attacks.
        </p>

        <p className="example">
          For example, the Terminator Squad's excellent Sv2+ often bounces low
          or no AP attack. Against a Meltagun (AP-4), which reduces the save to
          6+, however, they will fare better if they use thier 4+ invulnerable
          save.
        </p>

        <h3 id="preventing-damage">4.1 Feel no Pain (FNP)</h3>

        <p>
          Some units have an uncommon Feel No Pain X+ ability. It's simply a
          rare extra gate.
        </p>

        <ol>
          <li>
            Roll a D6 <BsFillDice6Fill />
          </li>

          <li>Check if the result is equal to or greater than the FNP's X+.</li>

          <li>On success, damage is averted.</li>
        </ol>

        <h3 id="damage">5. Inflict damage</h3>

        <p>
          After all rolls are done, only attacks that passed all gates inflict
          damage. For each successful activation, a{' '}
          <strong>
            selected model loses wounds equal to the weapon's damage.
          </strong>{' '}
          An attack always damages a single model.{' '}
          <strong>
            Excess damage from one attack cannot be allocated to another target,
            so it's lost.
          </strong>
        </p>
      </section>

      <section>
        <h2 id="fast-dice">
          Fast dice rolling <GiRollingDices />
        </h2>

        <p>
          Activations are probably the most dice intense moment of the game. If
          the same weapons declare attacks against the same targets, you are
          allowed, even encouraged, to roll for all activations at the same
          time.
        </p>

        <p>
          Number of{' '}
          <Link href={wh40kHref('datasheets', 'attacks')}>Attacks</Link> per
          weapon multiplied by the number of models using it, give you the
          number of dice to roll.
        </p>

        <p className="example">
          For example, a 5-man Intercessor Squad declares ranged attacks against
          some Ork Boyz. A Bolt Rifle makes 2 attacks, but the Intercessors have
          a focus fire ability that doubles that to 4 attacks each. That's{' '}
          <strong>20 attacks</strong> or 20 initial dice rolls. The Bolt Rifle
          has BS3+ (2/3 chance to hit), so let's say 13 dice roll 3 or higher.
        </p>

        <p className="example">
          Next, the 13 attacks that hit roll to wound. The Boyz are T5 while the
          Bolt Rifles are S4, so the attacks wound on 5+ (1/3 chance, or 4-5
          attacks on average out of 13). Let's say 5 attacks wound. The Boyz
          have Sv5+, reduced to 6+ by the Bolt Rifle's AP-1. The defender rolls
          5 save dice and passes 1.
        </p>

        <p className="example">
          In the end, only 4 of the original 20 attacks deal damage. The Bolt
          Rifle is D2, while the Boyz are W1, so 4 Boyz are removed from play.
          The excess damage is lost.
        </p>
      </section>

      <section>
        <h2 id="probability">Probability</h2>

        <p>
          An attack is a chain of probability gates: hit, wound, save, and
          sometimes FNP. Each gate can stop the whole activation.{' '}
          <strong>
            Even perfect attacks (2+ to hit, 2+ to wound, no save) have a 69.4%
            success chance.
          </strong>{' '}
          The system is designed so no attack is ever guaranteed.
        </p>

        <Image src={attack} alt="Attack sequence example" className="my-6" />

        <p>
          <strong>Volume flattens variance.</strong> A single high-damage attack
          can threaten a durable elite target, but it is inconsistent. More dice
          make the result more reliable because some attacks can fail while
          others still get through.
        </p>

        <ul>
          <li>
            A single attack with a 50% chance to succeed will either work or do
            nothing.
          </li>

          <li>6 attacks at 50% usually produce 2-4 successes.</li>
        </ul>

        <p>
          <strong>Re-rolls + critical effects = big damage.</strong> Weapons
          with{' '}
          <Link href={wh40kHref('keywords', 'sustained-hits')}>
            Sustained Hits
          </Link>
          {', '}
          <Link href={wh40kHref('keywords', 'lethal-hits')}>Lethal Hits</Link>,
          or{' '}
          <Link href={wh40kHref('keywords', 'devastating-wounds')}>
            Devastating Wounds
          </Link>
          {', '}
          wielded by units with re-roll access, become primary damage dealers.
          They get even better with{' '}
          <Link href={wh40kHref('keywords', 'anti-keyword')}>
            Anti-KEYWORD X+
          </Link>{' '}
          because it lowers the roll needed for a critical wound. This is known
          as <strong>crit fishing</strong>.
        </p>

        <p className="example">
          For example, a regular roll has a 16.7% chance to crit. A re-roll
          raises that to 30.6%. An Anti-Infantry 5+ weapon attacking infantry
          has a 33.3% chance to crit. With re-rolls, it becomes 55.6%.
        </p>

        <ul>
          <li>Sustained Hits are better when you wound well (4+ or better).</li>

          <li>Lethal Hits are better when you wound badly (5+ or worse).</li>
        </ul>

        <p>
          <strong>
            <Link href={wh40kHref('keywords', 'torrent')}>Torrent</Link>, Lethal
            Hits and Devastating Wounds skip certain gates
          </strong>{' '}
          and increase the success chance. The practical question is which gate
          your weapon is weak into: hitting, wounding, saving throws, or damage
          prevention.
        </p>
      </section>
    </>
  )
}
