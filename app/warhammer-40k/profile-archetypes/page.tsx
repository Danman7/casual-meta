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
          WH40k has hundreds of{' '}
          <Link href={wh40kHref('datasheets')}>datasheets</Link>, all of which
          may take more than one loadout. Instead of comparing every weapon
          against every possible target, players use archetypes: familiar
          profiles that make those matchups easier to discuss.
        </p>
      </section>

      <section>
        <h2 id="target-profiles">Target Profiles</h2>

        <p>
          Target archetypes are built around common{' '}
          <strong>
            <Link href={wh40kHref('datasheets', 'toughness')}>Toughness</Link>,{' '}
            <Link href={wh40kHref('datasheets', 'save')}>Save</Link> and{' '}
            <Link href={wh40kHref('datasheets', 'wounds')}>Wounds</Link>{' '}
            combinations.
          </strong>{' '}
          A unit is a <em>strong example</em> when it matches the archetype
          closely, and a <em>loose example</em> when it behaves similarly while
          trading one stat up or down.
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
          MEQ, or Marine Equivalent, means a unit with the resilience of a{' '}
          <strong>regular Space Marine</strong>. It is the{' '}
          <strong>baseline infantry</strong> profile, and many armies have units
          that fit it closely.
        </p>

        <p className="example">
          For example, Space Marine Intercessors are pure MEQ. So are T’au
          Stealth Battlesuits and Aeldari Shining Spears. Ork Nobz are MEQ with
          better T5, while Tyranid Barbgaunts are MEQ with worse Sv4+.
        </p>

        <p>
          Because MEQ is common, it turns{' '}
          <strong>
            <Link href={wh40kHref('datasheets', 'damage')}>Damage</Link> 2
            weapons into a benchmark.
          </strong>{' '}
          One failed save from a D2 weapon removes a Marine. D1 needs two failed
          saves, while D3+ often pays for damage the target cannot use.
        </p>

        <p className="example">
          For example, the <strong>Heavy Bolter</strong> (S5 AP-1 D2) is the
          classic anti-MEQ weapon: it wounds on 3+ and degrades the Save to 4+.
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
          TEQ, or Terminator Equivalent, represents{' '}
          <strong>heavy infantry</strong>. These units have higher{' '}
          <Link href={wh40kHref('datasheets', 'toughness')}>Toughness</Link> and
          more <Link href={wh40kHref('datasheets', 'wounds')}>Wounds</Link> than
          MEQ, but the defining feature is their superb{' '}
          <Link href={wh40kHref('datasheets', 'save')}>Saves</Link>: usually a
          2+ Armor Save backed by a 4++ Invulnerable Save. Strong TEQ examples
          are rarer than loose ones.
        </p>

        <p className="example">
          For example, the Chaos Terminator Squad is pure TEQ. Ork Meganobz and
          Space Marine units with Gravis armor are Terminator-like heavy
          infantry with better Toughness but no Invulnerable Save.
        </p>

        <p>
          TEQ teaches <strong>the limits of AP</strong>. Once the 2+ Save is
          pushed to 4+, the Invulnerable Save takes over, so AP beyond -2 stops
          improving the save roll. That pushes you toward weapons with high{' '}
          <Link href={wh40kHref('datasheets', 'strength')}>Strength</Link>,
          enough Damage, and sometimes critical-related keywords, especially{' '}
          <Link href={wh40kHref('keywords', 'devastating-wounds')}>
            Devastating Wounds
          </Link>
          {'.'}
        </p>

        <p className="example">
          For example, the <strong>Autocannon</strong> (A2 S9 AP-1 D3) wounds on
          3+ and degrades the Save to 3+. The <strong>Combi-weapon</strong>{' '}
          (Anti-Infantry 4+ Devastating Wounds) turns every 4+ wound roll into
          guaranteed damage.
        </p>

        <h3 id="geq">GEQ (Guard Equivalent)</h3>

        <Image
          src={guardsmen}
          alt="A squad of Imperial Guard Cadian Shock Troops."
          className="picture profile-img object-[0%_28%]"
        />

        <p className="lead text-center">Toughness 3 | Save 5+ | Wounds 1</p>

        <p>
          GEQ, or Guard Equivalent, describes fragile{' '}
          <strong>light infantry</strong> that usually comes in{' '}
          <strong>large numbers</strong>. The name comes from the humble{' '}
          <em>Imperial Guard</em>, though players often call the same role{' '}
          <em>horde</em> infantry. Strong GEQ examples are fewer than loose
          ones, and the loose examples are useful enough to name as
          subcategories.
        </p>

        <p className="example">
          For example, Astra Militarum battleline units, Tyranid Termagants, and
          Hormagaunts are strong GEQ. Around them sit several common variations:
        </p>

        <ul className="example">
          <li>
            <strong>Armored GEQ</strong> (better Sv): T’au Strike Team, Aeldari
            Guardian Defenders, Astra Militarum Kasrkin.
          </li>
          <li>
            <strong>Heavy GEQ</strong> (Invulnerable Saves): Aeldari Fire
            Dragons and many Adepta Sororitas units.
          </li>
          <li>
            <strong>Squishy GEQ</strong> (worse Sv): T’au Kroot Carnivores,
            Tyranid Gargoyles, Chaos Daemonettes.
          </li>
          <li>
            <strong>Ork GEQ</strong> (better T): Kommandos, Stormboyz.
          </li>
          <li>
            <strong>Mutant GEQ</strong> (same T as Orks, but worse Sv): World
            Eaters Jakhals, Thousand Sons Tzaangors.
          </li>
        </ul>

        <p>
          GEQ matters because it shows why <strong>squad size matters</strong>.
          Individual models fall to almost anything, but a single Lascannon or
          Plasma cannon shot barely changes a 20-model squad. Against GEQ, the
          lesson is simple: volume does the work.
        </p>

        <ul className="example">
          <li>
            The <strong>Flamer</strong> (
            <Link href={wh40kHref('keywords', 'torrent')}>Torrent</Link> A D6 S4
            D1) auto-hits, wounds GEQ on 3+, and can remove as many models as
            its attacks roll allows.
          </li>

          <li>
            The <strong>Storm Bolter</strong> (
            <Link href={wh40kHref('keywords', 'rapid-fire')}>Rapid Fire 2</Link>
            {' A2 S4 D1) reaches 4 attacks at half range.'}
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
          Vehicles and monsters vary more than infantry, so they are harder to
          compress into one neat archetype. Even so, two useful breakpoints are
          the <strong>Meltagun (S9)</strong> and the{' '}
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
            Targets are mostly durability profiles, but weapons are active tools
            with more variables.
          </strong>{' '}
          Range, accuracy, keywords, and critical rolls all change what a weapon
          is good at. That is why two weapons can both be anti-MEQ and still
          feel very different on the table.
        </p>

        <h3 id="ranged">Ranged Weapons</h3>

        <p>
          When a range is not mentioned, assume 24", the standard for most
          rifles.
        </p>

        <ul>
          <li>
            <strong>Chip Rifle</strong> (e.g. Lasgun, Splinter rifle) A1-2 S2-3
            AP0 D1 - bottom-of-the-barrel firepower carried by many GEQ squads.
          </li>

          <li>
            <strong>Basic Bolter</strong> (e.g. Boltgun, shoota, pulse carbine
            variants) A2 S4 AP0 D1 - standard S4 anti-GEQ fire.
          </li>

          <li>
            <strong>Improved rifle</strong> (e.g. Bolt rifle, ion blaster,
            shuriken/craftworld guns) 18–30" A1–2 S4–5 AP-1/-2 D1 - better
            anti-GEQ fire with some AP, but not quite reliable anti-MEQ.
          </li>

          <li>
            <strong>Flamers</strong> 12" D6 S3–6 AP0/-1 D1 Torrent - short-range
            GEQ clearing; S5 AP-1 versions can also threaten MEQ.
          </li>

          <li>
            <strong>Gatling</strong> (e.g. storm bolters, splinter cannons,
            salvo guns) 24–36" A4–6+ S4–6 AP0/-1 D1 - high-volume anti-horde
            shooting.
          </li>

          <li>
            <strong>Anti-MEQ</strong> (e.g. Heavy bolter, heavy bolt rifle,
            disintegrator-style guns) 24–36" A2–4 S5–6 AP-1/-2 D2 - the
            definitive D2 profile.
          </li>

          <li>
            <strong>Plasma</strong> (e.g. Plasma gun, ion/plasma equivalents,
            elite rifles) A1–2 S7–8 AP-2/-3 D1–2 - strong into MEQ, but not
            quite enough to solve TEQ.
          </li>

          <li>
            <strong>Autocannon</strong> 36–48" A2–4 S7–10 AP-1/-2 D2–3 -
            long-range shots with decent volume and Strength, good into TEQ and
            light vehicles that lack excellent saves.
          </li>

          <li>
            <strong>Melta</strong> (e.g. Meltagun, multi-melta, fusion gun){' '}
            12–18" A1–2 S9–10 AP-4 D6 Melta - short-range punch into elite
            infantry and medium vehicles, but not quite true anti-heavy fire.
          </li>

          <li>
            <strong>Las</strong> (e.g. Lascannon, lances, rail weapons) 36–48"
            A1–2 S12+ AP-3/-4 D6+1/+2 - long-range anti-tank and anti-monster
            fire.
          </li>

          <li>
            <strong>Artillery</strong> (e.g. battle cannon, frag/krak missiles,
            indirect guns) - variable profiles that can lean anti-horde,
            anti-vehicle, or both.
          </li>
        </ul>

        <p>
          Where are pistols? The{' '}
          <strong>Pistol keyword tells you when and how it shoots</strong>, not
          what it kills. Pistols are usually paired with a melee weapon and used
          before charging, and{' '}
          <strong>they can be fired within engagement range</strong>. Their
          actual target profile still depends on the weapon stats: one pistol
          can be anti-GEQ while another can be anti-MEQ.
        </p>

        <h3 id="melee">Melee Weapons</h3>

        <ul>
          <li>
            <strong>Trash melee</strong> (e.g. close combat weapon) A1–3 S3–4
            AP0 D1 - a last resort profile.
          </li>
          <li>
            <strong>Horde melee</strong> (e.g. claws, knives, basic choppas){' '}
            many attacks S3–5 AP0/-1 D1 - anti-GEQ through volume.
          </li>
          <li>
            <strong>Chainsword</strong> many attacks S4 AP-1 D1 - more
            consistent anti-GEQ, but still not quite anti-MEQ.
          </li>
          <li>
            <strong>Anti-MEQ</strong> (e.g. power fist, accursed weapon, heavy
            melee weapons) S5–8 AP-2 D2 - melee profiles that can remove a
            Marine with each failed save.
          </li>
          <li>
            <strong>Anti-TEQ</strong> (e.g. thunder hammer, chainfist-ish, heavy
            relic weapons) S6–10 AP-2/-3 D3 - heavier melee built to push
            through Terminator-style bodies.
          </li>
          <li>
            <strong>Heavy melee</strong> (e.g. dreadnought fist, knight melee,
            monster talons) - anti-tank and anti-monster damage in melee.
          </li>
        </ul>
      </section>
    </>
  )
}
