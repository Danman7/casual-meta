import { Metadata } from 'next'
import Image from 'next/image'
import { GiBolterGun, GiDeathSkull } from 'react-icons/gi'

import guardsmen from '@/app/assets/wh40k/CadianShockTroops.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import { Callout } from '@/app/ui/Callout'
import { PageTitle } from '@/app/ui/PageTitle'

export const metadata: Metadata = {
  title: 'Warhammer 40k: Profile Archetypes | Casual Meta',
  description:
    'Common profile archetypes in Warhammer 40k to help understand unit roles.',
}

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <PageTitle title="Profile Archetypes" />

      <p>
        Models and weapons each have six numerical characteristics in their data
        sheets describing their potential performance. To be able to navigate
        the vast array of choices, we can recognize common profiles.
      </p>

      <h2>Damage and Durability</h2>
      <p>
        With hundreds of units available in the current edition of WH40k, there
        are thousands of possible interactions between a weapon and a model. To
        reduce this complexity players have identified several common
        archetypes.
      </p>

      <p>
        <strong>Damage in WH40k is expressed via wounds</strong>. To understand
        how effective a weapon is against a model, we can remove factors like
        positioning, range, accuracy, speed, morale and objectives control.
      </p>

      <p>
        If we accept the weapon will hit its target then that leaves only{' '}
        <strong>Toughness, Save and Wounds</strong> for models, and{' '}
        <strong>Attacks, Strength, Armor Penetration and Damage</strong> for
        weapons.
      </p>

      <h3>The GEQ - Light Infantry</h3>

      <Callout>
        <div className="text-lg text-center font-bold">T3|Sv5+|W1</div>
      </Callout>

      <p>
        <em>Guardsman Equivalent</em> or <strong>GEQ</strong> refers to any unit
        with a profile of <strong>3 Toughness and 1 Wound</strong>, often
        accompanied by weak armor saves like 5+. GEQ describes what can be
        considered <em>light infantry</em>.
      </p>

      <Image
        src={guardsmen}
        alt="Cadian Shock Troops"
        className="h-48 object-cover object-[0%_50%]"
      />

      <p>
        The title comes from the trooper of the standard Imperial Guard Infantry
        Squad being named a Guardsman. This is the traditional designation for
        the weakest human soldier up to 9th codex edition, but it extends to
        many single wound models:
      </p>

      <ul role="list" className="list-disc list-inside">
        <li>
          Imperial Guard infantry like Cadian Shock Troops, Catachan Jungle
          Fighters and Death Korps of Krieg;
        </li>

        <li>
          Tyranid battleline - Termagants, Hormagaunts and Gargoyles (even
          weaker Save at 6+);
        </li>

        <li>Chaos Cultists;</li>

        <li>Eldar Guardian Defenders (better Save at 4+) and many more.</li>
      </ul>

      <p>
        GEQ units are <strong>cheap and expendable</strong>. What they lack in
        resilience, they make up in volume. These are not meant to survive, but
        rather slow down the enemy or take the focus away from your best units.
      </p>

      <p>
        Such troops frequently come in large squads, up to 20 models. This makes
        them vulnerable to weapons that do more attacks, especially{' '}
        <em>Blast</em> weapons that do additional attacks the more models are in
        the targeted unit. At the same time a weapon meant to counter elite
        infantry will perform poorly as even though it will often kill a model
        every time it strikes, a GEQ unit will have the numbers to survive
        trough. And a high profile is wasted on light infantry.
      </p>

      <Callout>
        <div className="text-xl font-bold flex gap-2 items-center">
          <GiBolterGun /> Weapons vs GEQ
        </div>

        <p>
          Most weapons will perform well against light infantry. Even the lowly
          <em>Lasgun</em> A1|S3|AP0|D1 with its Rapid Fire doubling its attacks
          at close range and caried in sizeable units will suffice. Same for the
          standard <em>Boltgun</em> A2|S4|AP0|D1 which hits Toughness 3 models
          on 3+.
        </p>

        <p>
          Weapons that do multiple attacks especially dice rolls to determine
          the amount of attacks will do better. The <em>Flamer</em>{' '}
          AD6|S4|AP0|D1 and <em>Pyreblaster</em> AD6|S5|AP-1|D1 as Torrent
          weapons (guaranteed hits) are terrifying against light infantry. So
          are grenades and a Blast weapon like the{' '}
          <em>Missile launcher in frag mode</em> AD6|S4|AP0|D1. At melee range
          the <em>Chainsaw</em> with 4 attacks also tends to mow GEQ down.
        </p>

        <p>
          Any weapon with more than 1 Damage like the{' '}
          <em>Heavy Bolter, Lascannon, Meltagun</em> etc., is overkill.
        </p>
      </Callout>

      <h3>The MEQ - Marines</h3>

      <Callout>
        <div className="text-lg text-center font-bold">T4|Sv3+|W2</div>
      </Callout>

      <p>
        <em>Marine Equivalent</em> or <strong>MEQ</strong> refers to any unit
        with a profile of{' '}
        <strong>4 Toughness, 3+ Armor Save and 2 Wounds</strong>. It is very
        common among Space Marines infantry, hence the name. You can think about
        this as the standard infantry profile. Sometimes people refer to this
        simply as “Marines”, as in “does well/worse against Marines”.
      </p>

      <Image
        src={intercessors}
        alt="Space Marines Intercessors"
        className="h-48 object-cover object-[0%_65%]"
      />

      <p>
        Any model with T4|Sv3+|W2 on their data sheet is considered{' '}
        <em>Pure MEQ</em>. Examples are:{' '}
      </p>

      <ul role="list" className="list-disc list-inside">
        <li>
          Space Marines in Power Armor like Intercessors, Tactical Marines,
          Bladeguard Veterans, Eliminators, Infernius Squad and many others;
        </li>
        <li>
          Chaos Space Marines, for example Legionaries, Rubric Marines and
          Khorne Berzerkers;
        </li>
        <li>Tau Stealth Battlesuits;</li>
        <li>Eldar Shining Spears.</li>
      </ul>

      <p>
        With many pure MEQ units, there is an even larger number of units that
        are near analogs:
      </p>

      <ul role="list" className="list-disc list-inside">
        <li>Company Heroes are MEQ with 4 wounds instead of 2;</li>
        <li>Tyranid Barbgaunts are MEQ with a Save of 4+ instead of 3+;</li>
        <li>
          Eldar Windriders and Dark Eldar Reavers are MEQ with Save of 4+ and
          Invulnerable Save of 6+;
        </li>
        <li>
          Necron Immortals are MEQ with 1 Wound, but their faction ability
          <em>Reanimation Protocols</em> brings them pretty close to pure MEQ.
        </li>
      </ul>

      <p>
        To stand even odds against Marines with 4 Toughness 2 Wounds you are
        looking for at least a 4 Strength weapon, preferably dealing 2 Damage.
        More is misspent.
      </p>

      <Callout>
        <div className="text-xl font-bold flex gap-2 items-center">
          <GiBolterGun /> Weapons vs MEQ
        </div>

        <p>
          A <em>Lasgun</em> A1|S3|AP0|D1 would struggle to do a dent with 1
          Damage and Strength 3 to Toughness 4 (wounds on 5+).
        </p>

        <p>
          A <em>Boltgun</em> A2|S4|AP0|D1 is still inefficient with 1 Damage but
          will do better with 2 Attacks and 4 Strength (50% chance to wound).
        </p>

        <p>
          The <em>Heavy Bolter</em>’s profile A3|S5|AP-1|D2 is optimal against
          Marine equivalents with Strength 5 (wounds on 3+), some AP to reduce
          the Save to 4+ and 2 wounds.
        </p>

        <p>
          A supercharged <em>Plasma Cannon</em> AD3|S8|AP-3|D2 will decimate a
          MEQ (wounds on 2+, reduces Save to 6+), but is dangerous to the
          operator.
        </p>

        <p>
          At close range, the <em>Power Fist</em> A3|S8|AP-1|D2 is apt to
          perform well against MEQ.
        </p>
      </Callout>

      <h2>Movement</h2>

      <p>With movement things are much simpler.</p>

      <ul role="list" className="text-left">
        <li className="flex items-center gap-4">
          <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
          <span>
            Most <strong>models on foot</strong> will have <strong>M6"</strong>.
            Heavy infantry units may have M5", while Eldar battleline units tend
            to have M7".
          </span>
        </li>

        <li className="flex items-center gap-4">
          <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
          <span>
            Most <strong>vehicles and infantry equipped with jump packs</strong>{' '}
            normally have <strong>M12"</strong>.
          </span>
        </li>

        <li className="flex items-center gap-4">
          <GiDeathSkull aria-hidden className="shrink-0 text-primary" />
          <span>
            Models <strong>hovering</strong> over the ground tend to have{' '}
            <strong>M14"</strong>, while <strong>flying units</strong> –{' '}
            <strong>M20"</strong>.
          </span>
        </li>
      </ul>
    </article>
  )
}
