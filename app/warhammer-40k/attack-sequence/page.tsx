import Image from 'next/image'
import Link from 'next/link'
import { IoDiceOutline } from 'react-icons/io5'

import attack from '@/app/assets/wh40k/attack.webp'
import { wh40kHref, wh40kMetadata, wh40kPage } from '@/app/siteMap'
import { OrDivider } from '@/app/ui/OrDivider'
import { Table } from '@/app/ui/Table'
import { woundRollColumns, woundRollRows } from '@/app/warhammer-40k/constants'
import { Paper } from '@/app/ui/Paper'
import { LuDices } from 'react-icons/lu'
import { Strip } from '@/app/ui/Strip'
import { GiRollingDices } from 'react-icons/gi'

const page = wh40kPage('attackSequence')

export const metadata = wh40kMetadata('attackSequence')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>
          Attacks can be made during the{' '}
          <Link href={wh40kHref('battleRound', 'shooting-phase')}>
            Shooting
          </Link>{' '}
          and <Link href={wh40kHref('battleRound', 'fight-phase')}>Fight</Link>{' '}
          phases, following a process called an <em>attack sequence</em> or an{' '}
          <strong>activation</strong> for short. Attacks are declared by units,
          but executed by the weapons they carry. Thus, an activation is a
          series of steps where the{' '}
          <strong>weapon's profile is compared to the target's profile</strong>.
        </p>

        <div className="flex-center">
          <div>
            <div className="font-bold uppercase">Weapon</div>
            <div>Strength</div>
            <div>AP</div>
            <div>Damage</div>
          </div>

          <div>
            <div>&nbsp;</div>
            <div>&harr;</div>
            <div>&harr;</div>
            <div>&harr;</div>
          </div>

          <div>
            <div className="font-bold uppercase">Target</div>
            <div>Toughness</div>
            <div>Saves</div>
            <div>Wounds</div>
          </div>
        </div>

        <p>
          Attacks are the most <em>"dice-intense"</em> moments in the game. Your
          unit <strong>has to be in range of the target</strong> to declare an
          attack - engagement (1") if melee, or within the Range attribute of
          the weapon if ranged. Then the attacking weapon does{' '}
          <strong>as many activations as it's Attacks atrribute</strong> states.
          Both ranged and melee weapons go through the same sequence:
        </p>

        <ol>
          <li>Roll to hit.</li>
          <li>Roll to wound.</li>
          <li>Allocate wounds.</li>
          <li>Roll to save - either armor or invulnerable.</li>
          <li>Inflict damage.</li>
        </ol>

        <h2 id="hit-roll">1. Roll to hit</h2>

        <Paper icon={LuDices}>
          <Strip
            items={[
              {
                label: 'Roll',

                value: (
                  <>
                    <p>
                      D6 for each activation each weapon does{' '}
                      <GiRollingDices className="inline text-2xl" />{' '}
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
                      WS/BS
                    </Link>
                    .
                  </p>
                ),
              },
              {
                label: 'On success',

                value: <p>The attack hits its target.</p>,
              },
              {
                label: 'On fail',

                value: <p>The attack misses its target.</p>,
              },
            ]}
          />
        </Paper>

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

        <h2 id="wound-roll">2. Roll to wound</h2>

        <blockquote>
          <p>
            <IoDiceOutline className="inline" /> Roll a <strong>D6</strong> only
            for the attacks that did connect. The result follows a table based
            on how much higher or lower the weapon's{' '}
            <Link href={wh40kHref('datasheets', 'strength')}>Strength (S)</Link>{' '}
            is compared to the target's{' '}
            <Link href={wh40kHref('datasheets', 'toughness')}>
              Toughness (T)
            </Link>
            .
          </p>
        </blockquote>

        <p>
          An unmodified roll of 6 is a <strong>critical wound</strong>.
        </p>

        <Table columns={woundRollColumns} data={woundRollRows} />

        <h2 id="allocate-wounds">3. Allocate wounds</h2>

        <p>
          If the attack hits and wounds, the{' '}
          <strong>defender allocates which models take the wounds</strong>{' '}
          (unless the attacking weapon has{' '}
          <Link href={wh40kHref('datasheets', 'precision')}>precision</Link>
          ). Models that already lost wounds or had attacks allocated this phase
          must be selected first. Saves represent the target's armor.
        </p>

        <h2 id="save-roll">4. Roll to save</h2>

        <blockquote>
          <p className="font-bold">Armor save</p>

          <p>
            <IoDiceOutline className="inline" /> Roll a <strong>D6</strong> for
            each allocated wound. Modify the roll by the{' '}
            <Link href={wh40kHref('datasheets', 'armor-penetration')}>
              Armor Penetration (AP)
            </Link>{' '}
            of the weapon. If the result is equal to or greater than the
            target's Save (Sv), damage is not inflicted.
          </p>
        </blockquote>

        <OrDivider />

        <blockquote>
          <p className="font-bold">Invulnerable save</p>
          <p>
            <IoDiceOutline className="inline" /> Roll a <strong>D6</strong> for
            each allocated wound. If the result is equal to or greater than the
            target's Invulnerable Save, damage is not inflicted, but you lose
            the ability to roll for a regular save.
          </p>
        </blockquote>

        <p>If you are the defender</p>

        <h2 id="damage">Inflict damage</h2>

        <p>
          After all three rolls are done, if the attack hits, wounds, and the
          armor save fails, damage is inflicted. The target loses wounds equal
          to the{' '}
          <Link href={wh40kHref('datasheets', 'damage')}>Damage (D)</Link> of
          the weapon. If that damage is more than is required to kill the target
          model, the excess cannot be allocated to other targets and is lost.
        </p>

        <Image src={attack} alt="Attack sequence example" className="my-6" />

        <p>
          The attack sequence is a series of independent probability gates. Each
          roll is a chance for the whole attack to fail, so even a theoretically
          perfect attack (2+ to hit, 2+ to wound, no save) only lands roughly
          69% of the time. The system is designed so that no single attack is
          ever guaranteed.
        </p>
      </section>
    </>
  )
}
