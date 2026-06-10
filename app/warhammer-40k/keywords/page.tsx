import Image from 'next/image'
import Link from 'next/link'
import { PiDiceSix } from 'react-icons/pi'
import { TbArrowBigUpLines, TbRulerMeasure } from 'react-icons/tb'

import anti from '@/app/assets/wh40k/anti.webp'
import assault from '@/app/assets/wh40k/assault.webp'
import devastatingWounds from '@/app/assets/wh40k/devastating-wounds.webp'
import keywords from '@/app/assets/wh40k/keywords.webp'
import precision from '@/app/assets/wh40k/precision.webp'
import rapidFire from '@/app/assets/wh40k/rapid-fire.webp'
import sustainedHits from '@/app/assets/wh40k/sustained-hits.webp'
import torrent from '@/app/assets/wh40k/torrent.webp'
import { wh40kHref, wh40kMetadata, wh40kPage } from '@/app/siteMap'

const page = wh40kPage('keywords')

export const metadata = wh40kMetadata('keywords')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <h2 id="keywords-and-special-rules">Keywords</h2>

        <p>
          Keywords are <em>tags</em> attached to either a datasheet or a weapon.
          They don't do anything on their own, but <em>handle interactions</em>{' '}
          with other rules. The relationships between units, weapons,
          stratagems, factions and turn phases are numerous. So, verifying a
          rule with a simple keyword simplifies the process.
        </p>

        <Image
          src={keywords}
          alt="Example of keywords listed on a datasheet."
        />

        <blockquote>
          <p>
            Certain rules apply only to <em>Infantry</em> units, others only to{' '}
            <em>Vehicles</em>. Models with the <em>Fly</em> keyword can be moved
            over obstacles and other units. Some units with the{' '}
            <em>Imperium</em> keyword can be mixed together in an army, even if
            they belong to different factions.
          </p>
        </blockquote>

        <p>
          A datasheet always has at least one <em>faction</em> keyword, which
          governs army composition, but some may have more.
        </p>
      </section>

      <section>
        <h2 id="weapon-keywords">Common weapon keywords</h2>

        <p>
          Also called <em>Universal Special Rules</em> (USRs), weapon keywords
          are shared between many of WH40K's weapons. They work best when
          layered with other faction or unit abilities that enhance them further
          or fill the gaps. Here is a not-so-small list of the common ones.
        </p>

        <h3 id="assault">Assault</h3>

        <div className="badge">
          <TbArrowBigUpLines /> Mobility
        </div>

        <p>
          The weapon can be fired, even after the wielder has{' '}
          <Link href={wh40kHref('battleRound', 'movement-phase')}>
            advanced
          </Link>{' '}
          this turn. Arms without this keyword cannot be used after advancing.
          Assault weapons naturally fit a more mobile, aggressive play.
        </p>

        <Image src={assault} alt="Boltgun vs Bolt rifle with assault keyword" />

        <h3 id="heavy">Heavy</h3>

        <div className="badge">
          {' '}
          <TbArrowBigUpLines /> Mobility
        </div>

        <p>
          Add +1 to hit rolls if the unit remained stationary this turn. This
          rewards the opposite of assault - staying put - with better accuracy.
          The playstyle is to hold a position rather than gaining ground. Long
          range weapons pair nicely with this keyword.
        </p>

        <h3 id="rapid-fire">Rapid Fire X</h3>

        <div className="badge">
          <TbRulerMeasure /> Range
        </div>

        <p>
          If the target is within half of the weapon's maximum range, add +X to
          the attacks. The longer the range of the weapon, the better the
          coverage of the bonus. This supports situations where volume of fire
          is important, e.g. fighting hordes.
        </p>

        <Image src={rapidFire} alt="Ork Loota with a Rapid Fire 1 Deffgun" />

        <h3 id="melta">Melta X</h3>

        <div className="badge">
          <TbRulerMeasure /> Range
        </div>

        <p>
          If the target is within half of the weapon's maximum range, attacks
          deal +X damage on top. Melta weapons, which are high damage to begin
          with, use a dice roll to determine normal damage. This only makes them
          more powerful at close range.
        </p>

        <h3 id="pistol">Pistol</h3>

        <div className="badge">
          <TbRulerMeasure /> Range
        </div>

        <p>
          There are two distinct rules about pistols that start with a short
          range anyway.
        </p>

        <ul>
          <li>
            One can only shoot their pistols or all other weapons during the
            Shooting Phase.
          </li>

          <li>Pistols can be shot even within Engagement range.</li>
        </ul>

        <h3 id="torrent">Torrent</h3>

        <div className="badge">Hit roll</div>

        <p>
          Attacks with such gear automatically hit their target, effectively
          skipping one of the 3 activation gates - the roll to hit. This is
          frequently balanced with rolling a D6 for number of attacks, as is
          visible with the Pyreblaster example. Torrent improves output
          primarily against targets the given weapon already easily wounds.
        </p>

        <Image
          src={torrent}
          alt="Pyreblaster's fire arc with Torrent keyword"
        />

        <h3 id="sustained-hits">Sustained Hits X</h3>

        <div className="flex-center">
          <div className="badge">Hit roll</div>

          <div className="badge">
            <PiDiceSix /> Critical effect
          </div>
        </div>

        <p>A critical hit (roll of 6 to hit) generates X extra hits.</p>

        <p>
          Purely mathematically, BS 4+ with Sustained Hits 1 matches the
          expected hit output of BS3+, without any other modifiers. With
          additional re-rolls and crit bonuses, they can push even beyond BS3+.
          Nonetheless, a better BS is always more consistent, while Sustained
          Hits tend to occasionally spike.
        </p>

        <Image
          src={sustainedHits}
          alt="A Heavy bolter with Sustained Hits 1 scores a 6"
        />

        <p>
          More hits are better against more targets. Again, like with Torrent,
          Sustained Hits is better when you already have a good chance to wound
          - wound on 4+ (equal strength to toughness) or better.
        </p>

        <p>
          Pairs nicely with re-roll to hit abilities, allowing to <em>fish</em>{' '}
          for crits.
        </p>

        <h3 id="lethal-hits">Lethal Hits</h3>

        <div className="flex-center">
          <div className="badge">Hit roll</div>

          <div className="badge">
            <PiDiceSix /> Critical effect
          </div>
        </div>

        <p>
          A critical hit (roll of 6 to hit) automatically wounds, bypassing
          another activation gate. Compared to Sustained Hits this keyword is
          better when wounding is more difficult - 5+ to wound or worse. Lethal
          Hits help with hunting tougher targets.
        </p>

        <p>Again, pairs nicely with re-roll to hit abilities.</p>

        <h3 id="devastating-wounds">Devastating Wounds</h3>

        <div className="flex-center">
          <div className="badge">Wound roll</div>

          <div className="badge">
            <PiDiceSix /> Critical effect
          </div>
        </div>

        <p>
          A critical wound (roll of 6 to wound) deals <em>mortal wounds</em>{' '}
          equal to the weapon's Damage. Mortal wounds bypass all saving throws,
          including invulnerable, giving better chances against targets with
          good saves.
        </p>

        <Image
          src={devastatingWounds}
          alt="Eliminator's special rule Mark the Target gives Devastating Wounds"
        />

        <p>Works really well with re-roll to wound abilities.</p>

        <h3 id="anti-keyword">Anti-KEYWORD X+</h3>

        <div className="flex-center">
          <div className="badge">Wound roll</div>

          <div className="badge">
            <PiDiceSix /> Critical effect
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

        <div className="badge">Target interaction</div>

        <p>
          Blast weapons gain +1 attack for every 5 models in the target unit,
          provided <em>no friendly units are within engagement range</em> of the
          target. This is clearly an anti-horde ability. Be mindful of limiting
          allies with blast weapons by charging into hordes.
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
