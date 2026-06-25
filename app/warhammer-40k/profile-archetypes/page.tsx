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
          may take several loadouts. It would be difficult to compare any weapon
          against every possible target, so players manage this via archetypes.
          They are familiar benchmarks of effectiveness.
        </p>
      </section>

      <section>
        <h2 id="target-profiles">
          Target archetypes say what needs to be removed
        </h2>

        <p>
          There exist combinations of{' '}
          <strong>
            <Link href={wh40kHref('datasheets', 'toughness')}>Toughness</Link>,{' '}
            <Link href={wh40kHref('datasheets', 'save')}>Save</Link> and{' '}
            <Link href={wh40kHref('datasheets', 'wounds')}>Wounds</Link>
          </strong>
          , so common among units, that they have become benchmarks for how
          durable a model is. A profile can be a <em>strong example</em> when it
          matches an archetype closely, or a <em>loose example</em> if it comes
          close enough.
        </p>

        <h3 id="meq">MEQ (Marine equivalent)</h3>

        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="picture profile-img object-[0%_70%]"
          loading="eager"
        />

        <p className="lead text-center">T4 Sv3+ W2</p>

        <p>
          MEQ, often just called <em>Marines</em>, refers to any unit with the{' '}
          <strong>resilience of a regular Space Marine</strong>. This is your
          anchor in the sea of profiles - the <strong>baseline infantry</strong>
          . It's an archetype with many strong examples.
        </p>

        <p className="example">
          For example, Space Marine Intercessors are pure MEQ. So are T’au
          Stealth Battlesuits and Aeldari Shining Spears. Ork Nobz are MEQ with
          better T5, while Tyranid Barbgaunts are MEQ with worse Sv4+.
        </p>

        <p>
          If you understand how a weapon performs into MEQ, you understand a
          large part of the infantry game. This is why MEQ make{' '}
          <strong>D2 weapons a standard.</strong> A D1 wepon needs two failed
          saves to dispatch a Marine equivalent, while D3+ pays for damage the
          target cannot use.
        </p>

        <p className="example">
          For example, the <strong>Heavy Bolter</strong> (S5 AP-1 D2) is the
          ideal anti-MEQ weapon: it wounds on 3+ and degrades the Save to 4+.
        </p>

        <h3 id="teq">TEQ (Terminator equivalent)</h3>

        <Image
          src={terminators}
          alt="A squad of Space Marine Terminators."
          className="picture profile-img object-[0%_57%]"
        />

        <p className="lead text-center">T5 Sv2+/4++ W3</p>

        <p>
          TEQ, or simply Terminators, represents <strong>heavy infantry</strong>
          . These units have higher Toughness and more Wounds than Marines, but
          they are defined by their superb Saves. Strong examples here are rarer
          than looser ones.
        </p>

        <p className="example">
          For example, the Chaos Terminator Squad is pure TEQ. Ork Meganobz and
          Space Marine units with Gravis armor are Terminator-like heavy
          infantry with better Toughness but no Invulnerable Save.
        </p>

        <p>
          Terminators <strong>require attention from heavier arms</strong>, but
          at the same time{' '}
          <strong>
            show the limitations of{' '}
            <Link href={wh40kHref('datasheets', 'armor-penetration')}>AP</Link>
          </strong>
          . Once the Sv2+ is degraded to 4+, the Invulnerable Save takes over,
          so AP beyond -2 stops being useful. This promotes weapons with more
          <Link href={wh40kHref('datasheets', 'strength')}>Strength</Link>,
          enough Damage, and critical-related keywords, especially{' '}
          <Link href={wh40kHref('keywords', 'devastating-wounds')}>
            Devastating Wounds
          </Link>
          {'.'}
        </p>

        <p className="example">
          For example, the <strong>Autocannon</strong> (A2 S9 AP-1 D3) is
          effective as it wounds on 3+ and degrades the Save to 3+. The{' '}
          <strong>Combi-weapon</strong> (D1 Anti-Infantry 4+ Devastating Wounds)
          deals only 1 damage, but it guarantees the target will eat that damage
          on every 4+ wound roll.
        </p>

        <h3 id="geq">GEQ (Guard Equivalent)</h3>

        <Image
          src={guardsmen}
          alt="A squad of Imperial Guard Cadian Shock Troops."
          className="picture profile-img object-[0%_28%]"
        />

        <p className="lead text-center">T3 Sv5+ W1</p>

        <p>
          GEQ, describes fragile <strong>light infantry</strong>. The name comes
          from the humble <em>Imperial Guardsman</em>, but because they usually
          come in <strong>large numbers</strong> (squads of 20) they are
          habitually called <em>hordes</em>. This archetype leans heavily into
          loose examples. So much so, that there are several sub-categories of
          them.
        </p>

        <p className="example">
          For example, the Astra Militarum battleline, and Tyranid Termagants
          and Hormagaunts, are pure GEQ. Looser examples can be grouped like so:
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
          Light infantry shows why <strong>squad size matters</strong>.
          Individual models fall quickly, yet a 20-man squad needs attack
          volume. High-end single-shot weapons won't make a difference against a
          horde.
        </p>

        <ul className="example">
          <li>
            The <strong>Flamer</strong> (Ad6 S4 D1{' '}
            <Link href={wh40kHref('keywords', 'torrent')}>Torrent</Link>)
            auto-hits, wounds GEQ on 3+, and can remove as many models as its
            attacks roll allows.
          </li>

          <li>
            The <strong>Storm Bolter</strong> (A2 S4 D1{' '}
            <Link href={wh40kHref('keywords', 'rapid-fire')}>Rapid Fire 2</Link>
            ) does 4 attacks at half range.
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
          Vehicle and monster profiles vary much more than infantry ones.
          Instead of neat archetypes, it's better to think in terms of Strength
          breakpoints. The two useful ones are the{' '}
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
            give Meltas trouble and require proper anti-tank gear.
          </li>
          <li>
            <strong>Heavy vehicles at T12+</strong> (e.g. Land Raider) make even
            Lascannons unreliable.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="weapon-profiles">
          Weapon archetypes say how we are trying to dispatch
        </h2>

        <p>
          Weapons have more variables than targets: range, accuracy, keywords,
          critical rolls etc. That is why they can't be closly tied to target
          archetypes. Two anti-MEQ arms can play very differently on the board.
        </p>

        <h3 id="ranged">Ranged Weapons</h3>

        <p>
          If Range is not mentioned, assume 24": the standard for most rifles.
        </p>

        <ul>
          <li>
            <strong>Chip Rifle</strong> (e.g. Lasgun, Splinter rifle) A1-2 S2-3
            AP0 D1 - low strength, no AP, bottom-of-the-barrel firepower. This
            is common on GEQ squads and relies on numbers.
          </li>

          <li>
            <strong>Basic Bolter</strong> (e.g. Boltgun, Shoota, Pulse carbine
            variants) A2 S4 AP0 D1 - better at anti-GEQ, mainly because S4
            wounds on 3+.
          </li>

          <li>
            <strong>Improved rifle</strong> (e.g. Bolt rifle, Ion blaster,
            shuriken/craftworld guns) 18–30" A1–2 S4–5 AP-1/-2 D1 - superior
            anti-GEQ gear with some AP (for armoured GEQ), but not quite enough
            damage for anti-MEQ.
          </li>

          <li>
            <strong>Flamers</strong> 12" D6 S3–6 AP0/-1 D1 Torrent - anihilates
            light infantry at short-range. Variants with better S and AP are
            also OK into MEQ.
          </li>

          <li>
            <strong>Gatling</strong> (e.g. Storm bolters, Splinter cannons,
            Salvo guns) 24–36" A4–6+ S4–6 AP0/-1 D1 - high-volume longer-ranged
            anti-horde guns.
          </li>

          <li>
            <strong>Anti-MEQ</strong> (e.g. Heavy bolter, Heavy bolt rifle,
            Disintegrator-style guns) 24–36" A2–4 S5–6 AP-1/-2 D2 - the
            definitive D2 profile, removing one Marine per failed save.
          </li>

          <li>
            <strong>Plasma</strong> (e.g. Plasma gun, ion/plasma equivalents,
            elite rifles) A1–2 S7–8 AP-2/-3 D1–2 - decent strength and AP,
            strong into MEQ, but not quite enough to solve TEQ.
          </li>

          <li>
            <strong>Autocannon</strong> 36–48" A2–4 S7–10 AP-1/-2 D2–3 -
            long-range shots with excellent volumen and Strength, good into TEQ
            and light vehicles that lack fair saves.
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
          You might be wondering where pistols are. The{' '}
          <strong>
            <Link href={wh40kHref('keywords', 'pistol')}>Pistol</Link> keyword
            tells you when and how it shoots
          </strong>
          , not what it kills. Pistols are usually paired with a melee weapon
          and used before charging, and{' '}
          <strong>can be fired within engagement range</strong>. Their actual
          target profile still depends on the weapon stats: one pistol can be
          anti-GEQ while another can be anti-MEQ.
        </p>

        <h3 id="melee">Melee Weapons</h3>

        <p>
          Melee profiles follow the same idea. The main difference is that range
          is replaced by delivery: the unit has to survive long enough to reach
          combat.
        </p>

        <ul>
          <li>
            <strong>Trash melee</strong> (e.g. close combat weapon) A1–3 S3–4
            AP0 D1 - only a last resort.
          </li>

          <li>
            <strong>Chainsword</strong> A3-4 S4 AP-1 D1 - a consistent anti-GEQ
            weapon, lacks strength and damage to be formidable at anti-MEQ.
          </li>

          <li>
            <strong>Horde melee</strong> (e.g. claws, knives, basic choppas)
            A2-8 S3–7 AP0/-1 D1 - very fluid profile, many attacks, definitive
            into light infantry, but it may or may not have enough S and AP to
            go beyound that.
          </li>

          <li>
            <strong>Anti-MEQ</strong> (e.g. power fist, accursed weapon, heavy
            melee weapons) S5–8 AP-2 D2 - can remove a marine with a failed
            save.
          </li>
          <li>
            <strong>Anti-TEQ</strong> (e.g. thunder hammer, chainfist-ish, heavy
            relic weapons) S6–10 AP-2/-3 D3 - good enought S, AP, and D to
            pierce Terminator-style armor.
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
