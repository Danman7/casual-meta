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
          There are hundreds of{' '}
          <Link href={wh40kHref('datasheets')}>datasheets</Link> in WH40k, each
          with several loadouts. The community uses standardized profiles to
          simplify discussions around the thousands of possible interactions
          between a weapon and a target,
        </p>
      </section>

      <section>
        <h2 id="target-profiles">Target Profiles</h2>

        <p>
          There are{' '}
          <strong>
            common{' '}
            <Link href={wh40kHref('datasheets', 'toughness')}>Toughness</Link>,{' '}
            <Link href={wh40kHref('datasheets', 'save')}>Save</Link> and{' '}
            <Link href={wh40kHref('datasheets', 'wounds')}>Wounds</Link>{' '}
            attributes
          </strong>{' '}
          . Many units across all factions either fit (<em>strong examples</em>)
          or come close to these (<em>loose examples</em>).
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
          MEQ, or Marines, are units with the resilience of a{' '}
          <strong>regular Space Marine</strong>. It's the{' '}
          <strong>baseline infantry</strong> profile - an archetype with lots of
          strong examples.
        </p>

        <p className="example">
          For example, the Space Marine Intercessors are pure MEQ. So are Tau
          Stealth Battlesuits and Aeldari Shining Spears. Ork Nobz are MEQ with
          better T5, while Tyranid Barbgaunts are MEQ with worse Sv4+.
        </p>

        <p>
          Because it's so common, MEQ makes{' '}
          <strong>
            <Link href={wh40kHref('datasheets', 'damage')}>Damage</Link> 2
            weapons a benchmark
          </strong>
          . D1 needs two failed saves to dispatch Marines, while D3+ is
          wasteful.
        </p>

        <p className="example">
          For example, the <strong>Heavy Bolter</strong> (S5 AP-1 D2) is the
          principal anti-MEQ weapon: wounds on 3+ and degrades the save to 4+.
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
          TEQ, or Terminators, represent <strong>heavy infantry</strong>. They
          come with higher{' '}
          <Link href={wh40kHref('datasheets', 'toughness')}>Toughness</Link> and
          more <Link href={wh40kHref('datasheets', 'wounds')}>Wounds</Link>, but
          most importantly superb{' '}
          <Link href={wh40kHref('datasheets', 'save')}>Saves</Link>. Strong TEQ
          examples are less than looser ones.
        </p>

        <p className="example">
          For example, the Chaos Terminator Squad is pure TEQ. Ork Meganobz and
          Space Marine units with Gravis armor are heavy infantry with better
          Toughness but no Invulnerable Save.
        </p>

        <p>
          TEQ shows <strong>the limitations of AP</strong>. Because of the
          Invulnerable, the 2+ Save can only be reduced to 4+. Hence, only AP-1
          and AP-2 do anything. Terminators demand apt attention: weapons with
          high <Link href={wh40kHref('datasheets', 'strength')}>Strength</Link>,
          Damage and possibly critical-related keywords, especially{' '}
          <Link href={wh40kHref('keywords', 'devastating-wounds')}>
            Devastating Wounds
          </Link>
          .
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
            {', A2, S4, D1) makes 4 attacks at half range.'}
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
          If range isn't mentioned, assume 24" - the standard for most rifles.
        </p>

        <ul>
          <li>
            <strong>Chip Rifle</strong> (e.g. Lasgun, Splinter rifle){' '}
            <span className="badge">A1-2 S2-3 AP0 D1</span> - "bottom-of-the
            barrel", carried by many GEQ squads.
          </li>

          <li>
            <strong>Basic Bolter</strong> (e.g. Boltgun, shoota, pulse carbine
            variants) <span className="badge">A2, S4, AP0, D1</span> - S4
            anti-GEQ.
          </li>

          <li>
            <strong>Improved rifle</strong> (e.g. Bolt rifle, ion blaster,
            shuriken/craftworld guns){' '}
            <span className="badge">18–30", A1–2, S4–5, AP-1/-2, D1</span> -
            some AP, better anti-GEQ, not quite anti-MEQ.
          </li>

          <li>
            <strong>Flamers</strong>{' '}
            <span className="badge">12", D6, S3–6, AP0/-1, D1, Torrent</span> -
            short-range annihilation for GEQs; if S5 AP-1, also viable against
            MEQs.
          </li>

          <li>
            <strong>Gatling</strong> (e.g. storm bolters, splinter cannons,
            salvo guns){' '}
            <span className="badge">24–36", A4–6+, S4–6, AP0/-1, D1</span> -
            high-volume anti-horde.
          </li>

          <li>
            <strong>Anti-MEQ</strong> (e.g. Heavy bolter, heavy bolt rifle,
            disintegrator-style guns){' '}
            <span className="badge">24–36", A2–4, S5–6, AP-1/-2, D2</span> - the
            definitive D2 weapons.
          </li>

          <li>
            <strong>Plasma</strong> (e.g. Plasma gun, ion/plasma equivalents,
            elite rifles){' '}
            <span className="badge">A1–2, S7–8, AP-2/-3, D1–2</span> - anti-MEQ,
            not quite anti-TEQ.
          </li>

          <li>
            <strong>Autocannon</strong>{' '}
            <span className="badge">36–48", A2–4, S7–10, AP-1/-2, D2–3</span> -
            long-range, decent volume and S, anti-TEQ and light vehicles without
            excellent saves.
          </li>

          <li>
            <strong>Melta</strong> (e.g. Meltagun, multi-melta, fusion gun){' '}
            <span className="badge">12–18", A1–2, S9–10, AP-4, D6 Melta</span> -
            short-range against elite infantry and medium vehicles, not quite
            anti-heavy.
          </li>

          <li>
            <strong>Las</strong> (e.g. Lascannon, lances, rail weapons){' '}
            <span className="badge">36–48", A1–2, S12+, AP-3/-4, D6+1/+2</span>{' '}
            - long-range anti-tank and monsters.
          </li>

          <li>
            <strong>Artillery</strong> (e.g. battle cannon, frag/krak missiles,
            indirect guns) - variable, anti-horde and sometimes vehicles.
          </li>
        </ul>

        <p>
          Where are pistols? The{' '}
          <strong>Pistol keyword tells you when and how it shoots</strong>, not
          what it kills. They are usually carried together with a melee weapon
          in the other hand and used before charging. Also,{' '}
          <strong>pistols can be fired within engagement range</strong>. Yet,
          one pistol can be anti-GEQ, while another can be anti-MEQ.
        </p>

        <h3 id="melee">Melee Weapons</h3>

        <ul>
          <li>
            <strong>Trash melee</strong> (e.g. close combat weapon){' '}
            <span className="badge">A1–3, S3–4, AP0, D1</span> - last resort.
          </li>
          <li>
            <strong>Horde melee</strong> (e.g. claws, knives, basic choppas){' '}
            <span className="badge">many attacks, S3–5, AP0/-1, D1</span> -
            anti-GEQ.
          </li>
          <li>
            <strong>Chainsword</strong>{' '}
            <span className="badge">many attacks, S4, AP-1, D1</span> - more
            consistent anti-GEQ, not quite anti-MEQ.
          </li>
          <li>
            <strong>Anti-MEQ</strong> (e.g. power fist, accursed weapon, heavy
            melee weapons) <span className="badge">S5–8, AP-2, D2</span>
          </li>
          <li>
            <strong>Anti-TEQ</strong> (e.g. thunder hammer, chainfist-ish, heavy
            relic weapons) <span className="badge">S6–10, AP-2/-3, D3</span>
          </li>
          <li>
            <strong>Heavy melee</strong> (e.g. dreadnought fist, knight melee,
            monster talons) - anti-tank and anti-monster.
          </li>
        </ul>
      </section>
    </>
  )
}
