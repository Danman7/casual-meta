import Image from 'next/image'
import Link from 'next/link'
import { TbArrowBigUpLines, TbRulerMeasure } from 'react-icons/tb'

import anti from '@/app/assets/wh40k/anti.webp'
import assault from '@/app/assets/wh40k/assault.webp'
import devastatingWounds from '@/app/assets/wh40k/devastating-wounds.webp'
import precision from '@/app/assets/wh40k/precision.webp'
import rapidFire from '@/app/assets/wh40k/rapid-fire.webp'
import sustainedHits from '@/app/assets/wh40k/sustained-hits.webp'
import torrent from '@/app/assets/wh40k/torrent.webp'
import { wh40kHref, wh40kMetadata, wh40kPage } from '@/app/siteMap'
import { BsFillDice5Fill } from 'react-icons/bs'
import { GiInvertedDice6 } from 'react-icons/gi'
import { IoIosSkipForward } from 'react-icons/io'

const page = wh40kPage('keywords')

export const metadata = wh40kMetadata('keywords')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>
          <em>Keywords</em> are tags attached to datasheets or separate weapons,
          that <strong>handle common open interactions</strong>. They may govern
          army composition, what stratagems affect the unit, or what rules can
          be broken.
        </p>

        <p className="example">
          For example, a squad being <strong>Infantry</strong> means it can move
          faster trough certain battlefield elements, is more vulnerable to
          ANTI-INFANTRY X+ weapons, is buffed by a nearby Dreadnought if Space
          Marines, can be supported by Resurrection Orb if Necron, and can get
          additional defensive traits from Go to Ground stratagem. And many
          more, all of which just from having this single keyword.
        </p>

        <p>
          Because one keyword can affect units from different factions in the
          same way, you may encounter the term <em>Universal Special Rules</em>{' '}
          (USRs).
        </p>
      </section>

      <section>
        <h2 id="weapon-keywords">Weapon keywords</h2>

        <h3 id="assault">Assault</h3>

        <div className="badge">
          <TbArrowBigUpLines /> Mobility
        </div>

        <p>
          <strong>
            The weapon can be fired, even after the wielder has{' '}
            <Link href={wh40kHref('battleRound', 'movement-phase')}>
              advanced
            </Link>{' '}
            this turn.
          </strong>{' '}
          This promotes mobile, aggressive play, as you do not have to choose
          between speed and shooting. Useful on short-to-mid ranged weapons that
          need movement to be in range, used by skirmish or high OC squads.
        </p>

        <Image src={assault} alt="Boltgun vs Bolt rifle with assault keyword" />

        <h3 id="heavy">Heavy</h3>

        <div className="flex-center">
          <div className="badge">
            <TbArrowBigUpLines /> Mobility
          </div>

          <div className="badge">
            <BsFillDice5Fill /> Hit roll
          </div>
        </div>

        <p>
          <strong>
            The weapon gets +1 to{' '}
            <Link href={wh40kHref('attackSequence', 'hit-roll')}>
              hit rolls
            </Link>{' '}
            if the unit <em>remained stationary</em> this turn.
          </strong>{' '}
          Skipping a move is rewarded with better accuracy. Naturally fits (but
          not limited to) long-ranged heavy weapons that promote more static,
          defensive play.
        </p>

        <p className="example">
          For example, the Space Marine Bolt sniper rifle is{' '}
          <span className="badge">BS3+ HEAVY</span>, which means it hits on 2+
          if the unit remained stationary.
        </p>

        <h3 id="rapid-fire">Rapid Fire X</h3>

        <div className="flex-center">
          <div className="badge">
            <TbRulerMeasure /> Range
          </div>

          <div className="badge">+ Attacks</div>
        </div>

        <p>
          <strong>Weapon gets +X attacks if target is within half-range</strong>{' '}
          (of the weapon's maximum range). Trade safety for volume. It's one of
          the most common weapon keywords.
        </p>

        <Image src={rapidFire} alt="Ork Loota with a Rapid Fire 1 Deffgun" />

        <p className="example">
          For example, the Ork Deffgun is{' '}
          <span className="badge">48" RAPID FIRE 1</span> which means it gets 1
          extra attack within 24".
        </p>

        <h3 id="melta">Melta X</h3>

        <div className="flex-center">
          <div className="badge">
            <TbRulerMeasure /> Range
          </div>

          <div className="badge">+ Damage</div>
        </div>

        <p>
          <strong>Weapon deals +X damage if target is within half-range</strong>{' '}
          (of the weapon's maximum range). Trade safety for more damage. It's
          better against tougher targets than Rapid Fire (and rarer).
        </p>

        <h3 id="pistol">Pistol</h3>

        <div className="badge">
          <TbRulerMeasure /> Range
        </div>

        <p>Pistols are low-reach weapons with two distinct rules:</p>

        <ul>
          <li>Can be shot even within Engagement range.</li>

          <li>One can only shoot their pistols or all other weapons.</li>
        </ul>

        <p>
          They are not a primary damage dealer, but are appropriate for good
          melee units that chip their enemies before charging in. It's the most
          common weapon keyword in WH40k.
        </p>

        <h3 id="torrent">Torrent</h3>

        <div className="flex-center">
          <div className="badge">
            <BsFillDice5Fill /> Hit roll
          </div>

          <div className="badge">
            <IoIosSkipForward /> Skip roll
          </div>
        </div>

        <p>
          <strong>Valid attacks from this weapon automatically hit</strong>,
          skipping the{' '}
          <Link href={wh40kHref('attackSequence', 'hit-roll')}>hit roll</Link>.
          This is not only anti-horde, but with the core Overwatch stratagem
          also works well against fast melee threats.
        </p>

        <Image
          src={torrent}
          alt="Pyreblaster's fire arc with Torrent keyword"
        />

        <h3 id="devastating-wounds">Devastating Wounds</h3>

        <div className="flex-center">
          <div className="badge">
            <BsFillDice5Fill /> Wound roll
          </div>

          <div className="badge">
            <GiInvertedDice6 /> Critical effect
          </div>

          <div className="badge">
            <IoIosSkipForward /> Skip roll
          </div>
        </div>

        <p>
          <strong>
            A critical wound (roll of 6) deals <em>mortal wounds</em>
          </strong>
          , bypassing all saving throws, (including invulnerable). This is how
          you crack elite armor on durable targets. Works really good with
          re-roll access. Even better wtih Anti-KEYWORD X+.
        </p>

        <p className="example">
          For example, a <strong>Combi-weapon</strong>{' '}
          <span className="badge">ANTI-INFANTRY 4+ DEVASTATING WOUNDS</span>{' '}
          makes every 4+ wound roll into infantry, guaranteed damage.
        </p>

        <Image
          src={devastatingWounds}
          alt="Eliminator's special rule Mark the Target gives Devastating Wounds"
        />

        <h3 id="lethal-hits">Lethal Hits</h3>

        <div className="flex-center">
          <div className="badge">
            <BsFillDice5Fill /> Hit roll
          </div>

          <div className="badge">
            <GiInvertedDice6 /> Critical effect
          </div>

          <div className="badge">
            <IoIosSkipForward /> Skip roll
          </div>
        </div>

        <p>
          <strong>A critical hit (roll of 6) automatically wounds.</strong> This
          skips the hardest part of damaging more durable targes. Therefore,
          Lethal Hits work better when you wound badly: usually 5+ or worse.
          It's a rare keyword that pairs nicely with re-roll access.
        </p>

        <p>
          Note, this does not count as a critical wound, so it doesn't trigger
          Devastating Wounds.
        </p>

        <h3 id="sustained-hits">Sustained Hits X</h3>

        <div className="flex-center">
          <div className="badge">
            <BsFillDice5Fill /> Hit roll
          </div>

          <div className="badge">
            <GiInvertedDice6 /> Critical effect
          </div>

          <div className="badge">+ Hits</div>
        </div>

        <p>
          <strong>A critical hit (roll of 6) generates X extra hits.</strong>{' '}
          While Lethal Hits skip the hit gate, Sustained Hits don't. So
          Sustained Hits work better when you already wound well: usually 4+ or
          better. A much more common keyword than Lethal Hits, that also pairs
          nicely with re-roll access.
        </p>

        <Image
          src={sustainedHits}
          alt="A Heavy bolter with Sustained Hits 1 scores a 6"
        />

        <h3 id="anti-keyword">Anti-KEYWORD X+</h3>

        <div className="flex-center">
          <div className="badge">Wound roll</div>

          <div className="badge">
            <GiInvertedDice6 /> Critical effect
          </div>
        </div>

        <p>
          Against a target with the listed keyword, a wound roll of X+ counts as
          a <em>Critical Wound</em>. For example, Anti-Infantry 4+ means that
          when you roll to wound against infantry, rolls of 4 and above are
          crits. This combines exceptionally well with Devastating Wounds,
          melting the target's saves.
        </p>

        <Image src={anti} alt="Grav-gun firing at a vehicle." />

        <h3 id="twin-linked">Twin-linked</h3>

        <div className="badge">Wound roll</div>

        <p>
          The operator can re-roll wound rolls. This works very well in
          combination with Devastating Wounds. This is part of{' '}
          <Link href={wh40kHref('datasheets', 'crit-fishing')}>
            crit fishing
          </Link>{' '}
          patterns.
        </p>

        <h3 id="blast">Blast</h3>

        <div className="flex-center">
          <div className="badge">Target interaction</div>

          <div className="badge">+ Attacks</div>
        </div>

        <p>
          <strong>
            The weapon gains +1 attack for every 5 models in the target unit
          </strong>
          . This means +1 attack against a 5-man squad, and +4 attacks against a
          20-man squad. Consequently, Blast weapons are anti-horde tools. They
          cannot be fired if <em>friendly units are within engagement range</em>{' '}
          of the target, however. Be mindful of this when charging your own
          units into the enemy.
        </p>

        <h3 id="precision">Precision</h3>

        <div className="badge">Target interaction</div>

        <p>
          The attacker can choose to allocate wounds from a successful attack
          against a unit with an attached character to that character (if
          visible to the shooter). The normal activation rules state that the
          defender allocates their wounds. Thus attaching a high-value leader to
          a squad (a.k.a. bodyguards) protects them from heavy fire. Precision
          weapons negate that.
        </p>

        <Image
          src={precision}
          alt="Bolt sniper rifle hitting precise target."
        />

        <h3 id="hazardous">Hazardous</h3>

        <div className="badge">Operational risk</div>

        <p>
          After attacking, roll a D6 per hazardous weapon used (not per attack).
          Each roll of 1 causes 3 mortal wounds. They are allocated to any model
          from that squad equipped with a hazardous weapon. This is frequently
          used to balance powerful guns.
        </p>
      </section>
    </>
  )
}
