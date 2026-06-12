import Image from 'next/image'
import Link from 'next/link'

import guardsmen from '@/app/assets/wh40k/CadianShockTroops.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import rhino from '@/app/assets/wh40k/rhino.webp'
import terminators from '@/app/assets/wh40k/terminators.webp'
import { wh40kHref, wh40kMetadata, wh40kPage } from '@/app/siteMap'

const page = wh40kPage('profileArchetypes')

export const metadata = wh40kMetadata('profileArchetypes')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>
          With so many <Link href={wh40kHref('datasheets')}>datasheets</Link>{' '}
          available, each with several loadouts, there are thousands of possible
          interactions between a weapon and a target. To make discussions around
          list choices and balance easier, the community uses standardized
          profiles.
        </p>
      </section>

      <section>
        <h2 id="target-profiles">Target Profiles</h2>
        <p>
          We know that when{' '}
          <Link href={wh40kHref('attackSequence')}>making attacks</Link>, the
          key target attribute is its durability, formed by its{' '}
          <strong>
            <Link href={wh40kHref('datasheets', 'toughness')}>Toughness</Link>,{' '}
            <Link href={wh40kHref('datasheets', 'save')}>Save</Link> and{' '}
            <Link href={wh40kHref('datasheets', 'wounds')}>Wounds</Link>
          </strong>
          {'. '}
          There are <strong>very common combinations of these</strong> across
          all factions that many units either fit (<em>strong examples</em>) or
          come close to (<em>loose examples</em>). This is especially true for
          infantry.
        </p>
        <h3 id="meq">MEQ (Marine Equivalent)</h3>
        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="picture profile-img object-[0%_70%]"
          loading="eager"
        />
        <p className="lead text-center">Toughness 4 | Save 3+ | Wounds 2</p>
        <p>
          MEQ, or Marines, refers to infantry with the resilience of a{' '}
          <strong>regular Space Marine</strong>. Consider it the{' '}
          <strong>baseline infantry</strong> statline: not heavy, not light.
          It's the profile with the most strong examples compared to loose
          examples.
        </p>
        <p className="example">
          For example, most of the Space Marine and Chaos Space Marine infantry
          lines are pure MEQ. So are Tau Stealth Battlesuits, Aeldari Shining
          Spears, and some Adeptus Mechanicus units, though they also have
          invulnerable saves. Loose examples can be Ork Nobz (MEQ with better
          T5), Tyranid Barbgaunts (MEQ with worse Sv4+), and Necron Immortals
          (MEQ with worse W1).
        </p>

        <p>
          MEQ matters because it is common, making{' '}
          <strong>
            D2 a benchmark for{' '}
            <Link href={wh40kHref('datasheets', 'damage')}>Damage</Link>
          </strong>
          {'. '}
          D1 is inefficient (needs two failed saves), while D3+ is wasteful. So,
          to kill Marines, you want D2, a little bit of AP, and volume.
        </p>

        <p className="example">
          For example, the <strong>Heavy Bolter</strong> (S5, AP-1, D2) is a
          principal anti-MEQ weapon: it wounds on 3+ (66%) and degrades the save
          to 4+ (50%). A Lascannon is too much overkill and not enough attacks.
          Bolters and Lasguns have a difficult time dispatching MEQ.
        </p>

        <h3 id="teq">TEQ (Terminator Equivalent)</h3>

        <Image
          src={terminators}
          alt="A squad of Space Marine Terminators."
          className="picture profile-img object-[0%_57%]"
        />
        <p className="lead text-center">
          Toughness 5 | Save 2+ / 4++ | Wounds 3
        </p>

        <p>
          TEQ, or Terminators, represent <strong>heavy elite infantry</strong>{' '}
          that come with ideal armor and often invulnerable saves. Here, strong
          examples are much fewer than loose examples.
        </p>

        <p className="example">
          For example, pure TEQ is mostly anything that wears the Terminator
          armor: Deathwing Terminator Squad, Chaos Terminator Squad, Relic
          Terminator Squad, etc. Loose examples can be Ork Meganobz and Marine
          Gravis profiles (better T, no Inv), Aeldari Wraithguard (even better
          T), and Bladeguard Veterans (TEQ with worse T and Sv).
        </p>

        <p>
          TEQ matters because it shows <strong>the limitations of AP</strong>.
          The Sv2+ can only be reduced to 4+ because of the Inv. Hence, only
          AP-1 and AP-2 do anything. Good weapons have more Strength, with just
          a bit of AP. D3 is perfect, but may be rare. This is called{' '}
          <strong>vertical reach</strong>, or being able to hurt durable
          targets.
        </p>

        <p className="example">
          For example, <strong>Autocannons</strong> (often S7–9, AP-1/-2, D2/3)
          have good volume. <strong>Supercharged Plasma</strong> weapons have
          high S but may have lower D. The same goes for{' '}
          <strong>Thunder Hammers</strong> and <strong>Power Fists</strong> in
          melee.
        </p>

        <h3 id="geq">GEQ (Guard Equivalent)</h3>

        <Image
          src={guardsmen}
          alt="A squad of Imperial Guard Cadian Shock Troops."
          className="picture profile-img object-[0%_28%]"
        />

        <p className="lead text-center">Toughness 3 | Save 5+ | Wounds 1</p>

        <p>
          GEQ depicts fragile <strong>light infantry</strong> that usually comes
          in <strong>large numbers</strong>. The name derives from the humble{' '}
          <em>Imperial Guard</em>, but the archetype is often called{' '}
          <em>horde</em> infantry. Again, strong examples are much fewer than
          loose ones, but the latter form their own subcategories.
        </p>

        <p className="example">
          For example, the Astra Militarum battleline, Tyranid Termagants, and
          Hormagaunts are strong GEQ. Then you have:
        </p>

        <ul className="example">
          <li>
            <strong>Armored GEQ</strong> (better Sv): T’au Strike Team, Aeldari
            Guardian Defenders, Astra Militarum Kasrkin.
          </li>
          <li>
            <strong>Heavy GEQ</strong> (Invs): Aeldari Fire Dragons and many
            Adepta Sororitas units.
          </li>
          <li>
            <strong>Squishy GEQ</strong> (worse Sv): T’au Kroot Carnivores,
            Tyranid Gargoyles, Chaos Daemonettes.
          </li>
          <li>
            <strong>Ork GEQ</strong> (better T): Kommandos, Stormboyz.
          </li>
          <li>
            <strong>Mutant GEQ</strong> (same as Orks, but worse Sv): World
            Eaters Jakhals, Thousand Sons Tzaangors.
          </li>
        </ul>

        <p>
          GEQ matters because it shows that <strong>squad size matters</strong>.
          They fall to anything, but a single attack from a Lascannon or Plasma
          cannon won't accomplish much against a 20-man squad. Volume is the
          key.
        </p>

        <ul className="example">
          <li>
            The <strong>Flamer</strong> (
            <Link href={wh40kHref('keywords', 'torrent')}>Torrent</Link>, A D6,
            S4, D1) auto-hits, has a 2/3 chance to wound, and instantly removes
            as many GEQ models as its attacks roll shows.
          </li>

          <li>
            The <strong>Storm Bolter</strong> (
            <Link href={wh40kHref('keywords', 'rapid-fire')}>Rapid Fire 2</Link>
            , A2, S4, D1) makes 4 attacks at half range.
          </li>

          <li>
            Any grenade or missile launcher with{' '}
            <Link href={wh40kHref('keywords', 'blast')}>Blast</Link> makes more
            attacks the more targets there are.
          </li>
        </ul>

        <h3 id="vehicles-and-monsters">Vehicles and Monsters</h3>

        <Image
          src={rhino}
          alt="A Space Marine Rhino transport vehicle."
          className="picture profile-img object-[0%_40%]"
        />

        <p>
          Moving away from infantry, we encounter a much greater variety of
          profiles. Still, two good breakpoints are the{' '}
          <strong>Meltagun (S9)</strong> and the{' '}
          <strong>Lascannon (S12)</strong>.
        </p>

        <ul>
          <li>
            <strong>Light vehicles at T7-9</strong> (e.g. Rhino) bounce most
            small-arms fire, but can be handled by Melta weapons.
          </li>
          <li>
            <strong>Medium vehicles at T10-11</strong> (e.g. Redemptor, Armiger)
            give even Meltas trouble and require proper anti-tank gear.
          </li>
          <li>
            <strong>Heavy vehicles at T12+</strong> (e.g. Land Raider) make even
            Lascannons unreliable.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="weapon-profiles">Weapon Profiles</h2>

        <p>
          <strong>
            While targets are mostly passive durability groups, weapons are
            active tools with more variables.
          </strong>{' '}
          There are additional considerations like range, accuracy, keywords,
          and critical rolls. So two supposed anti-MEQ weapons can work
          differently.
        </p>

        <h3 id="ranged">Ranged Weapons</h3>

        <p>
          If range isn't mentioned assume 24" - the standard for most rifles.
        </p>

        <ul>
          <li>
            <strong>Chip Rifle</strong> (e.g. Lasgun, Splinter rifle){' '}
            <span className="badge">A1-2 S2-3 AP0 D1</span> for "bottom-of-the
            barrel" ranged weapons, carried by many GEQ squads.
          </li>

          <li>
            <strong>Basic Bolter</strong> (e.g. Boltgun, shoota, pulse carbine
            variants) <span className="badge">A2, S4, AP0, D1</span> - higher S,
            better at anti-GEQ.
          </li>

          <li>
            <strong>Improved rifle</strong> (e.g. Bolt rifle, ion blaster,
            shuriken/craftworld guns){' '}
            <span className="badge">18–30", A1–2, S4–5, AP-1/-2, D1</span> - has
            some AP, much better at anti-GEQ, viable against MEQ.
          </li>
        </ul>

        <p>
          Where are pistols? The{' '}
          <strong>Pistol keyword tells you when and how it shoots</strong>, not
          what it kills. They are usually carried together with a melee weapon
          in the other hand and used before charging. Also,{' '}
          <strong>pistols can be fired within engagement range</strong>. Yet,
          one pistol can be anti-GEQ, while another - anti-MEQ.
        </p>
      </section>
    </>
  )
}
