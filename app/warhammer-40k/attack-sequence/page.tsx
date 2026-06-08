import Image from 'next/image'
import Link from 'next/link'

import attack from '@/app/assets/wh40k/attack.webp'
import { wh40kHref, wh40kMetadata, wh40kPage } from '@/app/siteMap'
import { OrDivider } from '@/app/ui/OrDivider'
import { Strip } from '@/app/ui/Strip'
import { Table } from '@/app/ui/Table'
import { woundRollColumns, woundRollRows } from '@/app/warhammer-40k/constants'
import { BsFillDice5Fill } from 'react-icons/bs'

const page = wh40kPage('attackSequence')

export const metadata = wh40kMetadata('attackSequence')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>
          We know how to declare ranged attacks during the{' '}
          <Link href={wh40kHref('battleRound', 'shooting-phase')}>
            Shooting Phase
          </Link>{' '}
          or melee attacks during the{' '}
          <Link href={wh40kHref('battleRound', 'fight-phase')}>
            Fight Phase
          </Link>{' '}
          against eligible targets. Attacks are declared by units, but executed
          by weapons. Each weapon has an{' '}
          <Link href={wh40kHref('datasheets', 'attacks')}>Attacks (A)</Link>{' '}
          attribute, dictating how many times it activates during an attack.
        </p>

        <p>
          To determine the outcome, players go through a <strong>5-step</strong>{' '}
          <em>attack sequence</em>, called an <strong>activation</strong> for
          short, for each attack a weapon makes against a target. It's the same
          for both melee and ranged.
        </p>

        <ol>
          <li>Roll to hit.</li>
          <li>Roll to wound.</li>
          <li>Allocate wounds.</li>
          <li>Roll to save, either armor or invulnerable.</li>
          <li>Inflict damage.</li>
        </ol>

        <p>
          An activation involves{' '}
          <strong>comparing the weapon's and target's profiles</strong>.
        </p>

        <div className="flex-list">
          <div>
            <div className="lead">Weapon</div>
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
            <div className="lead">Target</div>
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

        <p>
          Three of the steps are dice rolls. To speed up this dice-intense
          process, you are encouraged to roll all dice at once whenever multiple
          weapons of the same type are attacking the same targets.
        </p>
      </section>

      <section>
        <h2 id="hit-roll">1. Roll to hit</h2>

        <Strip
          items={[
            {
              label: 'Roll',
              value: (
                <p>
                  D6 <BsFillDice5Fill className="inline" /> for each activation
                  a weapon makes.
                </p>
              ),
            },
            {
              label: 'Check if',
              value: (
                <p>
                  The result is equal to or higher than the weapon's{' '}
                  <Link
                    href={wh40kHref(
                      'datasheets',
                      'ballistic-skill-weapon-skill',
                    )}
                  >
                    BS/WS
                  </Link>
                  .
                </p>
              ),
            },
            {
              label: 'On success',
              value: 'The attack hits the target.',
            },
            {
              label: 'On fail',
              value: 'The attack misses and goes no further.',
            },
          ]}
        />

        <p>
          An{' '}
          <strong>
            unmodified roll of 6 is a <em>critical hit</em>.
          </strong>{' '}
          This plays a role in{' '}
          <Link href={wh40kHref('datasheets', 'weapon-keywords')}>
            weapon keywords
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 id="wound-roll">2. Roll to wound</h2>

        <Strip
          items={[
            {
              label: 'Roll',
              value: (
                <p>
                  D6 <BsFillDice5Fill className="inline" /> for each attack that
                  hit during the previous step.
                </p>
              ),
            },
            {
              label: 'Compare',
              value:
                "Compare the weapon's S against the target's T using the following table. Then check the result.",
            },
            {
              label: 'On success',
              value: 'The attack wounds the target.',
            },
            {
              label: 'On fail',
              value: 'The attack fails and goes no further.',
            },
          ]}
        />

        <Table columns={woundRollColumns} data={woundRollRows} />

        <p>
          <strong>
            An unmodified roll of 6 is a <em>critical wound</em>.
          </strong>
        </p>
      </section>

      <section>
        <h2 id="allocate-wounds">3. Allocate wounds</h2>

        <p>
          The{' '}
          <strong>
            defender allocates which target models will receive the attacks
          </strong>{' '}
          that have both hit and wounded the target (unless the weapons have{' '}
          <Link href={wh40kHref('datasheets', 'precision')}>Precision</Link>).
          They <em>must</em> first select models that have already lost wounds.
        </p>
      </section>

      <section>
        <h2 id="save-roll">4. Roll to save</h2>

        <p className="lead">Armor save (Sv)</p>

        <Strip
          items={[
            {
              label: 'Roll',
              value: (
                <p>
                  D6 <BsFillDice5Fill className="inline" /> for each allocated
                  attack that wounds.
                </p>
              ),
            },
            {
              label: 'Modify',
              value:
                "Add the weapon's AP to the roll (usually a negative number that reduces the result).",
            },
            {
              label: 'Check if',
              value:
                "Modified result is equal to or greater than the target's Sv.",
            },
            {
              label: 'On success',
              value: 'Damage is averted.',
            },
          ]}
        />

        <OrDivider />

        <p className="lead">Invulnerable save (Inv) if target has one</p>

        <Strip
          items={[
            {
              label: 'Roll',
              value: 'D6 for each allocated attack that wounds.',
            },
            {
              label: 'Check if',
              value: "Result is equal to or greater than the target's Inv.",
            },
            {
              label: 'On success',
              value: 'Damage is averted.',
            },
          ]}
        />

        <p>
          Some units have an additional Invulnerable save that ignores the
          weapon's AP. You can choose to roll for Inv instead of Sv when facing
          high-AP attacks, but <strong>not for both</strong>.
        </p>

        <p className="example">
          For example, the Terminators already have an optimal Sv2+, so they're
          pretty safe from most weapons. But an attack from an AP-4 Meltagun
          will reduce the Sv to 6+. In that case, the Terminators would fare
          better if they used their Inv4+ instead.
        </p>
      </section>

      <section>
        <h2 id="preventing-damage">Feel no Pain (FNP)</h2>

        <p>
          A very small number of units have an additional, uncommon damage
          prevention ability called Feel No Pain x+. It's usually activated
          conditionally.
        </p>

        <Strip
          items={[
            {
              label: 'Roll',
              value: (
                <p>
                  D6 <BsFillDice5Fill className="inline" />
                </p>
              ),
            },
            {
              label: 'Check if',
              value: "Result is equal to or greater than the FNP's x+.",
            },
            {
              label: 'On success',
              value: 'Damage is averted.',
            },
          ]}
        />
      </section>

      <section>
        <h2 id="damage">5. Inflict damage</h2>

        <p>
          After all rolls are done, only the attacks that hit, wound, and aren't
          prevented by any saves inflict damage. For each successful activation,
          a{' '}
          <strong>
            selected model loses wounds equal to the weapon's damage.
          </strong>{' '}
          An attack always goes to a single model.{' '}
          <strong>
            Excess damage from one attack cannot be allocated to another target,
            so it's lost.
          </strong>
        </p>
      </section>

      <section>
        <h2 id="probability">Probability</h2>

        <p>
          An attack is a series of independent probability gates: hit, wound,
          save, and potentially FNP. Each roll risks the failure of the whole
          activation. The system guarantees that no attack is guaranteed.{' '}
          <strong>
            Even perfect attacks (2+ to hit, 2+ to wound, no save) have a 69.4%
            success chance.
          </strong>{' '}
        </p>

        <Image src={attack} alt="Attack sequence example" className="my-6" />

        <p className="example">
          For example, a 5-man Intercessor Squad declares ranged attacks against
          some Ork Boyz. A Bolt Rifle makes 2 attacks, but Intercessors have a
          focus fire ability that doubles that to 4 attacks each. That's{' '}
          <strong>20 attacks</strong> or 20 initial dice rolls. The Bolt Rifle
          has BS3+ (2/3 chance to hit), so let's say 13 dice roll 3 or higher.
        </p>

        <p className="example">
          Next, the 13 attacks that hit roll to wound. The Boyz are T5 while the
          Bolt Rifles are S4, so the attacks wound on 5+ (1/3 chance, or 4-5
          attacks on average out of 13). Let's say 5 attacks wound. The Boyz
          have an already poor Sv of 5+, reduced to 6+ by the Bolt Rifle's AP-1.
          The defender throws 5 dice and gets 1 save.
        </p>

        <p className="example">
          In the end, out of 20 attacks, only 4 deal damage. The Bolt Rifle is
          D2, while the Boyz are W1. So, 4 Boyz are removed from play. The
          excess damage is lost.
        </p>

        <p>
          <strong>Volume flattens variance.</strong> A single high-damage
          "all-or-nothing" attack can threaten durable elite targets, but it is
          inconsistent. More dice make activations more reliable.
        </p>

        <ul>
          <li>
            A single attack with a 50% chance to succeed will either work or do
            nothing.
          </li>

          <li>6 attacks at 50% usually produce 2-4 successes.</li>
        </ul>

        <p>
          <strong>Re-rolls + critical effects = big damage</strong>. Weapons
          with{' '}
          <Link href={wh40kHref('datasheets', 'sustained-hits')}>
            Sustained Hits
          </Link>
          ,{' '}
          <Link href={wh40kHref('datasheets', 'lethal-hits')}>Lethal Hits</Link>
          , or{' '}
          <Link href={wh40kHref('datasheets', 'devastating-wounds')}>
            Devastating Wounds
          </Link>
          , wielded by units with re-roll rules, become primary damage dealers.
          If a regular roll has a 16.7% chance to crit, the re-roll makes it
          30.6%. This becomes explosive with{' '}
          <Link href={wh40kHref('datasheets', 'anti-keyword')}>
            Anti-KEYWORD X+
          </Link>
          . An Anti-Infantry 5+ weapon has a 33.3% chance to crit. With
          re-rolls, it becomes 55.6%. This is known as{' '}
          <strong>crit fishing</strong>.
        </p>
      </section>
    </>
  )
}
