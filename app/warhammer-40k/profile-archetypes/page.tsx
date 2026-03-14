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
      <h1 className="page-title">{navTitle}</h1>

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
          Have you heard of <strong>MEQ, TEQ or GEQ</strong>? These are
          Warhammer 40,000 shorthands that describe combinations of attributes
          very common among infantry across many factions. So, instead of
          analyzing every unit individually, players can ask questions like "Is
          this weapon efficient into MEQ?".
        </p>

        <p>
          These are{' '}
          <strong>
            durability profiles of units. Strength, Saves and Wounds are
            relevant
          </strong>
          . Movement, Leadership and OC are less critical.
        </p>

        <h3 id="meq">MEQ (Marine Equivalent)</h3>
        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="profile-img object-[0%_70%]"
        />

        <div className="box text-lg font-bold text-center">T4|Sv3+|W2</div>

        <p>
          MEQ refers to infantry with{' '}
          <strong>resilience similar to a standard Space Marine</strong>. The
          defining traits are{' '}
          <strong>Toughness 4, two Wounds, and a 3+ armor save</strong>. It's a
          very common profile and is frequently used as a benchmark.
        </p>

        <p>
          Units with the exact same profile are <strong>strong examples</strong>{' '}
          or <strong>pure MEQ</strong>. This goes for most of the Space Marines
          and Chaos Space Marines infantry lines, Tau Stealth Battlesuits, Eldar
          Shining Spears and many more. <strong>Loose examples</strong> are
          units that are not pure MEQ but can be approximated to it. For
          example, Necron Lychguard are MEQ with T5.
        </p>

        <p>
          Looking at the durability of the profile we can say that{' '}
          <strong>S5, D2 weapons</strong> like the Heavy Bolter will be{' '}
          <strong>the principal anti-MEQ gear</strong>. S4, D1 arms like the
          regular Bolter or the Chainsword are still adequate in large enough
          volumes (3-4 attacks per weapon).
        </p>

        <h3 id="teq">TEQ (Terminator Equivalent)</h3>
        <Image
          src={terminators}
          alt="A squad of Space Marine Terminators."
          className="profile-img object-[0%_75%]"
        />

        <div className="box text-lg font-bold text-center">T5|Sv2+/4++|W3</div>

        <p>
          <strong>TEQ</strong> stands for <em>Terminator Equivalent</em>,
          representing <strong>elite heavy infantry</strong>. These are tougher
          profiles with more wounds, but the defining trait is the{' '}
          <strong>excellent saves, often including an invulnerable save</strong>
          . This is important, as between MEQ and TEQ there's a variety of
          profiles that are more resilient than Marines, but not quite
          Terminators.
        </p>

        <p>
          Strong examples are Space and Chaos Space Marine Terminators, and Grey
          Knight Paladins. Looser examples are Adeptus Custodes units like
          Wardens and Custodian Guard (TEQ with various Toughness) and Tau
          Crisis Battlesuits (more Wounds, worse Saves, but still TEQ).
        </p>

        <p>
          Terminators are <strong>anchors</strong> that stop advances and draw
          fire. <strong>High AP has diminishing returns</strong> because of the
          Invulnerable saves. AP of -1-2 is optimal.{' '}
          <strong>
            Multi-damage weapons with higher strength become more important
          </strong>
          . The Autocannon with S9, AP-1, D3 is an ample counter.
        </p>

        <h3 id="geq">GEQ (Guard Equivalent)</h3>

        <Image
          src={guardsmen}
          alt="A squad of Imperial Guard Cadia Shock Troops."
          className="profile-img object-[0%_25%]"
        />

        <div className="box text-lg font-bold text-center">T3|Sv5+|W1</div>

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
