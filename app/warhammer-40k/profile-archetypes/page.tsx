import Image from 'next/image'
import Link from 'next/link'

import guardsmen from '@/app/assets/wh40k/CadianShockTroops.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
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
          <em>diminishing returns</em> and steps down to weapons with better
          damage and strength. Good examples of anti-TEQ gear are the{' '}
          <em>Autocannon</em> S9, AP-1, D3; <em>Grav-cannon</em> S6, AP-1, D3;
          and <em>Bolt sniper rifle</em> S5, AP-2, D3.
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
          <strong>GEQ</strong> means <em>Guardsman Equivalent</em>, representing{' '}
          <strong>light infantry</strong> like the Imperial Guard battleline.
          Any unit where the default count is 10-20 models, e.g. Cadian Shock
          Troops, Catachan Jungle Fighters, Tyranid Termagant and Hormagaunts,
          Chaos Cultists, is usually GEQ.
        </p>

        <p>
          Most any weapon can deal with light infantry as they're{' '}
          <strong>not durable</strong>. That's not the point. They{' '}
          <strong>win through numbers</strong> instead. High strength and damage
          weapons are overkill and not necessarily effective at removing a lot
          of models at once. Ergo, <strong>large volumes of D1 attacks</strong>{' '}
          is superior. Bolters, lasguns, flamers, and blast weapons are
          particularly successful against GEQ.
        </p>

        <h3 id="vehicles-and-monsters">Vehicles and Monsters</h3>

        <Image
          src={rhino}
          alt="A Space Marine Rhino transport vehicle."
          className="profile-img sm:max-h-76 object-[0%_0%]"
        />

        <p>
          Non-infantry units have a{' '}
          <strong>much higher variety in statlines</strong>, but one can still
          identify a light, medium and heavy archetypes around the Melta and
          Lascannon strength. These weapons have high AP to begin with, so{' '}
          <strong>units with invulnerable saves fare better</strong> on the
          field.
        </p>

        <p>
          A profile <strong>similar to T9, W10 and Sv3+</strong>, like the
          Rhino, Storm Speeder, regular Dreadnought or even flyers like the
          Stormhawk Interceptor can be considered a{' '}
          <strong>
            light vehicle. Melta weapons at half range and grenade/missile
            launchers in krak mode
          </strong>{' '}
          (both S9) tend to deal with them qu ickly, depending on the dice.
        </p>

        <p>
          A step further, <strong>T10, W12</strong> would be a{' '}
          <strong>medium vehicle</strong>. A Redemptor Dreadnought, or a W14
          Chaos Knight Executioner with an Invulnerable save will give the
          Meltas a hard time. The Lascannon is right at home here.
        </p>

        <p>
          And then there is the ultimate "answer me or die" category - the{' '}
          <strong>heavy vehicle</strong>. Even a Lasscannon needs a good roll to
          fight a Land Raider, at <strong>T12, W16, Sv2+</strong>. These units
          require supported focus fire.
        </p>
      </Section>
    </>
  )
}
