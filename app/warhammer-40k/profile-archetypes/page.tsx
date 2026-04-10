import Image from 'next/image'
import Link from 'next/link'

import guardsmen from '@/app/assets/wh40k/CadianShockTroops.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import knight from '@/app/assets/wh40k/knight_Castellan.webp'
import rhino from '@/app/assets/wh40k/rhino.webp'
import terminators from '@/app/assets/wh40k/terminators.webp'
import { WH40K_BASE_URL, WH40K_TITLE } from '@/app/constants'
import { Section } from '@/app/ui/Section'
import { generatePageMetadata } from '@/lib/metadata'
import { createRouteLookup } from '@/lib/routeLinks'

export const navOrder = 5

export const navTitle = 'Profile Archetypes'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'Common profile archetypes in Warhammer 40k to help understand unit roles.',
)

const wh40kRoute = createRouteLookup(WH40K_BASE_URL)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <Section>
        <p>
          With hundreds of{' '}
          <Link href={wh40kRoute('Datasheets')}>datasheets</Link> available,
          each with several loadouts, there are thousands of possible
          interactions between a weapon and a target. Are we to analyze each
          individually? Of course not. To simplify discussions around damage and
          balance, the community uses standardized profiles.
        </p>
      </Section>

      <Section title="Target Profiles" id="target-profiles">
        <p>
          Have you heard of <em>MEQ, TEQ or GEQ</em>? They are WH40K shorthands
          that describe very common{' '}
          <Link href={`${wh40kRoute('Datasheets')}#unit-profiles`}>
            profiles
          </Link>
          . Many of the units (especially infantry) across all factions either
          fit or come close to one of these. So, instead of analyzing every unit
          individually, players can ask questions like "Is this weapon efficient
          into MEQ?".
        </p>

        <p>
          Comparing profiles mostly involve the model's durability - Toughness,
          Saves and Wounds. Movement, Leadership and OC are usually less
          relevant when debating archetypes.
        </p>

        <h3 id="meq">MEQ (Marine Equivalent)</h3>
        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="picture profile-img object-[0%_70%]"
        />

        <div className="box lead text-center">T4|Sv3+|W2</div>

        <p>
          MEQ, often just called marines, refers to infantry with resilience
          similar to a <em>standard Space Marine</em>. The defining traits are 4
          toughness, 2 wounds, and a 3+ armor save. It's a widespread profile
          and is frequently used as a benchmark.
        </p>

        <p>
          Units with the exact profile, like the marines battleline, Tau Stealth
          Battlesuits and Eldar Shining, are <em>strong examples</em> or{' '}
          <em>pure MEQ</em>. <em>Loose examples</em> are units that are not pure
          MEQ but can be approximated to it. For example, Necron Lychguard are
          MEQ with better T5, while Tyranid Barbgaunts are MEQ with worse Sv4+
        </p>

        <p>
          Arms that deal 2 damage, with preferrably more strength than 4, are
          ideal against MEQ. For example, the <em>Heavy bolter</em> S5, D2 is a
          principal anti-MEQ weapon.
        </p>

        <h3 id="teq">TEQ (Terminator Equivalent)</h3>
        <Image
          src={terminators}
          alt="A squad of Space Marine Terminators."
          className="picture profile-img object-[0%_57%]"
        />

        <div className="box lead text-center">T5|Sv2+/Inv4+|W3</div>

        <p>
          There's a variety of tougher-than-MEQ infantry profiles. TEQ, or
          terminators, represent <em>heavy elites</em>, that often come with
          invulnerable saves. Because of that high AP has{' '}
          <em>diminishing returns</em> againts them. Weapons with better damage
          and strength (e.g. <em>Autocannon</em> S9, AP-1, D3 and{' '}
          <em>Grav-cannon</em> S6, AP-1, D3) are more appropriate.
        </p>

        <p>
          Strong examples are Space and Chaos Space Marine Terminators, and Grey
          Knight Paladins. Looser examples are Adeptus Custodes units like
          Wardens and Custodian Guard (TEQ with various Toughness) and Tau
          Crisis Battlesuits (more Wounds, worse Saves, but still heavy).
        </p>

        <h3 id="geq">GEQ (Guard Equivalent)</h3>

        <Image
          src={guardsmen}
          alt="A squad of Imperial Guard Cadia Shock Troops."
          className="picture profile-img object-[0%_28%]"
        />

        <div className="box lead text-center">T3|Sv5+|W1</div>

        <p>
          The name comes from the Imperial Guard battleline and depicts{' '}
          <em>light infantry</em>. These are single wound fighters that usually
          come in larger squads (up to 20 models). Examples are Cadian Shock
          Troops, Tyranid Termagant and Hormagaunts, and Chaos Cultists.
        </p>

        <p>
          Large numbers with terrible durability, changes the approach. GEQ win
          through volume. High damage, strength and AP become irrelevant and
          step down to number of attacks. Weapons with the Torrent, Rapid Fire
          or Blast keywords like the <em>Flamer</em>, <em>Storm bolter</em> and{' '}
          <em>Missile Launcher</em> are practical.
        </p>

        <h3 id="vehicles-and-monsters">Vehicles and Monsters</h3>

        <Image
          src={rhino}
          alt="A Space Marine Rhino transport vehicle."
          className="picture profile-img sm:max-h-76 object-[0%_40%]"
        />

        <p>
          Moving away from infantry, the profiles become much more varied. It's
          difficult to pinpoint a specific statline, but one can use the{' '}
          <em>Meltagun's</em> and <em>Lascannon's</em> strength as reference
          points.
        </p>

        <p>
          The Meltagun has S9. Vehicles at T9 and below, like the <em>Rhino</em>{' '}
          T9, W10, Sv3+, are apt to die from 3-4 Meltagun wounds (less at half
          range). They can be considered <em>light vehicles</em>. While anti-GEQ
          arms will struggle hurting them, they are vulnerable to anti-TEQ and
          even MEQ weapons.
        </p>

        <h3 id="keq">KEQ (Knight Equivalent)</h3>

        <Image
          src={knight}
          alt="A Space Marine Knight Castellan."
          className="picture profile-img sm:max-h-76 object-[0%_25%]"
        />

        <p>
          KEQ is not a widely used term, but one can refer to very large, often
          20+ wound models to as knight equivalents. Such are the Knights
          Perceptor and Castellan, Eldar Wraithknight and Tyranid Scythed
          Hierodule. These are welcomed in most WH40K variants, but one should
          inform their opponent beforehand to assure they are properly prepared.
        </p>
      </Section>
    </>
  )
}
