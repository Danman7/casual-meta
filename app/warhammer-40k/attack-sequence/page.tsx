import Image from 'next/image'
import Link from 'next/link'

import attack from '@/app/assets/wh40k/attack.webp'
import { wh40kHref, wh40kMetadata, wh40kPage } from '@/app/siteMap'
import { OrDivider } from '@/app/ui/OrDivider'
import { Strip } from '@/app/ui/Strip'
import { Table } from '@/app/ui/Table'
import { woundRollColumns, woundRollRows } from '@/app/warhammer-40k/constants'
import { GiPerspectiveDiceSixFacesFive } from 'react-icons/gi'
import { BsFillDice5Fill } from 'react-icons/bs'

const page = wh40kPage('attackSequence')

export const metadata = wh40kMetadata('attackSequence')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>
          We know how to declare ranges attacks during the{' '}
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
          Players go through a <strong>5-step</strong> <em>attack sequence</em>{' '}
          called an <strong>activation</strong> for short, for each attack the
          weapon does to a target to deremine the outcome. It's the same for
          both melee and ranged.
        </p>

        <ol>
          <li>Roll to hit.</li>
          <li>Roll to wound.</li>
          <li>Allocate wounds.</li>
          <li>Roll to save - either armor or invulnerable.</li>
          <li>Inflict damage.</li>
        </ol>

        <p>
          It's basically{' '}
          <strong>comparing the weapon's and target's profiles</strong> to
          determine the outcome.
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
          Three of the steps are dice rolls. To speed up this "dice-intense"
          process you are allowed (even encouraged) to roll the dice for the
          same weapons against the same targets all at once.
        </p>
      </section>

      <section>
        <h2 id="hit-roll">1. Roll to hit</h2>

        <Strip
          items={[
            {
              label: 'Roll',
              value: (
                <>
                  <p>
                    D6 <BsFillDice5Fill className="inline" /> for each
                    activation each weapon does.
                  </p>
                </>
              ),
            },
            {
              label: 'Check if',
              value: (
                <p>
                  Result is higher than weapon's{' '}
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
              value: <p>The attack hits the target.</p>,
            },
            {
              label: 'On fail',
              value: <p>The attack misses and goes no further.</p>,
            },
          ]}
        />

        <p>
          An{' '}
          <strong>
            unmodified roll of 6 is a <em>critical hit</em>
          </strong>
          . This plays a role with{' '}
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
                <>
                  <p>
                    D6 <BsFillDice5Fill className="inline" /> for each attack
                    that hit during the previous step.
                  </p>
                </>
              ),
            },
            {
              label: 'Compare',
              value: (
                <p>
                  Weapon's S against the target's T using the following table.
                  Then check the result.
                </p>
              ),
            },
            {
              label: 'On success',
              value: <p>The attack wounds the target.</p>,
            },
            {
              label: 'On fail',
              value: <p>The attack fails and goes no further.</p>,
            },
          ]}
        />

        <Table columns={woundRollColumns} data={woundRollRows} />

        <p>
          <strong>
            An unmodified roll of 6 is a <em>critical wound</em>
          </strong>
          .
        </p>
      </section>

      <section>
        <h2 id="allocate-wounds">3. Allocate wounds</h2>

        <p>
          The <strong>defender allocates which models</strong> take the attacks
          that both hit and wounded (unless the attacking weapon has the{' '}
          <Link href={wh40kHref('datasheets', 'precision')}>Precision</Link>{' '}
          keyword). They must first select models that already lost wounds or
          had attacks allocated this phase.
        </p>
      </section>

      <section>
        <h2 id="save-roll">4. Roll to save</h2>

        <p>
          Saves represent the target's armor. They are the third and final gate
          against taking damage. Once wounds are allocated, the selected models
          roll for saves. Some units have <em>Invulnerable saves</em> in
          addition to their regular save. The defender chooses which one to roll
          for. They can't roll for both.
        </p>

        <p className="lead">Armor save (Sv)</p>

        <Strip
          items={[
            {
              label: 'Roll',
              value: (
                <>
                  <p>D6 for each allocated attack that wounds.</p>
                </>
              ),
            },
            {
              label: 'Modify',
              value: (
                <p>
                  Add the weapon's{' '}
                  <Link href={wh40kHref('datasheets', 'armor-penetration')}>
                    AP
                  </Link>{' '}
                  to the roll. It's usually a negative number, so it reduces the
                  result.
                </p>
              ),
            },
            {
              label: 'Check if',
              value:
                "Modified result is equal to or greater than the target's Save (Sv).",
            },
            {
              label: 'On success',
              value: 'Damage is averted.',
            },
            {
              label: 'On fail',
              value: 'Target eats the damage.',
            },
          ]}
        />

        <OrDivider />

        <p className="lead">Invulnerable save (Inv)</p>

        <Strip
          items={[
            {
              label: 'Roll',
              value: 'D6 for each allocated attack that wounds.',
            },
            {
              label: 'Check if',
              value:
                "Result is equal to or greater than the target's Invulnerable Save (Sv).",
            },
            {
              label: 'On success',
              value: 'Damage is averted.',
            },
            {
              label: 'On fail',
              value: 'Target eats the damage.',
            },
          ]}
        />

        <p>
          Invulnerable saves are better than regular saves when facing high-AP
          weapons.
        </p>

        <p className="example">
          For example, the Terminators already have an optimal Sv2+, so they're
          pretty safe from most weapons. But an attack from an AP-4 Meltagun,
          will reduce the Sv to 6+. In that case, the Terminators would fare
          better if they use their Inv4+ instead.
        </p>
      </section>

      <section>
        <h2 id="preventing-damage">Feel no Pain (FNP)</h2>

        <p>
          A small amount of units have an additional gate called Feel No Pain
          x+, that involves yet another dice roll.
        </p>

        <Strip
          items={[
            {
              label: 'Roll',
              value: (
                <p>
                  D6{' '}
                  <GiPerspectiveDiceSixFacesFive className="inline text-2xl" />
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

        <p>
          Less than 6% of all datasheets mention FNP in some way, and most of
          the units that can use it, activate it conditionally. It's rare.
        </p>
      </section>

      <section>
        <h2 id="damage">5. Inflict damage</h2>

        <p>
          After all three rolls are done, only the attacks that hit, wound, and
          aren't prevented by any saves, inflict damage. The target loses Wounds
          (W) equal to the weapon's{' '}
          <Link href={wh40kHref('datasheets', 'damage')}>Damage (D)</Link>. If
          that damage is more than is required to kill the target, the{' '}
          <strong>
            excess cannot be allocated to other targets and is lost
          </strong>
          .
        </p>
      </section>

      <section>
        <h2 id="probability">Probability</h2>

        <p>
          The attack sequence is a series of independent probability gates -
          hit, wound, save, and potentially FNP. Each roll risks the failure of
          the whole activation.{' '}
          <strong>
            Even theoretically perfect attacks (2+ to hit, 2+ to wound, no save)
            land roughly 69% of the time.
          </strong>{' '}
          The system guarantees that no single attack is ever guaranteed.
        </p>

        <Image src={attack} alt="Attack sequence example" className="my-6" />

        <p className="example">
          For example, a 5-man Intercessor squad declares ranged attacks with
          their Bolt Rifles againts a squad of Ork Boyz. The Bolt Rifles do 2
          attacks each, but Intercessors have a focus fire ability that doubles
          the attacks. That is <strong>20 attacks</strong> in total. The
          attacker rolls 20 dice.
        </p>

        <p className="example">
          Bolt Rifle has BS3+. That's a 2/3 chance, so let's say the attacker
          scores 13 hits (about as expected) in this particular roll.
        </p>

        <p className="example">
          Next, is ther roll to wound. The Boyz are a tough nut (T5) for the
          Bolt Rifle (S4). Attacks wound on 5+ (1/3 chance). Let's say, the
          attacker rolls 13 dice and scores above the average with 5 wounding
          attacks.
        </p>

        <p className="example">
          The good news is that Boyz have an already poor Sv of 5+, reduced to
          6+ by the Bolt Rifle's AP-1. The defender thows 5 dice and gets 1
          save.
        </p>

        <p className="example">
          In the end, out of 20 attacks, 4 deal damage. The Bolt Rifle is D2,
          while the Boyz are W1. So, 4 Boyz are removed from play. The excess 1
          damage is lost.
        </p>
      </section>
    </>
  )
}
