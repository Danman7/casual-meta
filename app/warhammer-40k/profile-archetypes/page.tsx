import Image from 'next/image'
import Link from 'next/link'

import guardsmen from '@/app/assets/wh40k/CadianShockTroops.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import knight from '@/app/assets/wh40k/knight_Castellan.webp'
import rhino from '@/app/assets/wh40k/rhino.webp'
import terminators from '@/app/assets/wh40k/terminators.webp'
import wound from '@/app/assets/wh40k/wound.webp'
import { WH40K_TITLE } from '@/app/constants'
import { Section } from '@/app/ui/Section'
import { wh40kRoute } from '@/app/warhammer-40k/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 5

export const navTitle = 'Profile Archetypes'

export const metadata = generatePageMetadata(
  `${WH40K_TITLE}: ${navTitle}`,
  'Common profile archetypes in Warhammer 40k to help understand unit roles.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <Section>
        <p>
          With so many datasheets available, with several loadouts each, there
          are hundreds of possible interactions between a weapon and a target.
          To make the discussion around list choices and balance easier, the
          community uses standardized profiles.
        </p>
      </Section>

      <Section title="Target Profiles" id="target-profiles">
        <p>
          What is imperative when it comes to{' '}
          <Link href={`${wh40kRoute('The Battle Round')}#attack-sequence`}>
            making attacks
          </Link>{' '}
          is the durability of the given{' '}
          <Link href={`${wh40kRoute('Datasheets')}#unit-profiles`}>
            target profile
          </Link>
          . We can take Move, Leadership and OC aside for a moment. This leaves
          only Toughness, Saves and Wounds to work with.
        </p>

        <p>
          The following are WH40K shorthands that describe profiles with very
          common combinations of durability characteristics. Many units across
          multiple factions either fit or come close to one of these. So,
          instead of analyzing every unit individually, players can ask
          questions like "Is this weapon efficient into marines (MEQ)?".
        </p>

        <h3 id="meq">MEQ (Marine Equivalent)</h3>
        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="picture profile-img object-[0%_70%]"
        />

        <div className="box font-bold text-center">
          Toughness 4 | Save 3+ | Wounds 2
        </div>

        <p>
          MEQ, or marines, refers to infantry with resilience similar to a{' '}
          <em>standard Space Marine</em>. It's a very widespread profile,
          frequently used as a benchmark. <em>Strong examples</em> are marines
          in Tacticus and Phobos armor, Tau Stealth Battlesuits and Eldar
          Shining Spears. There are a lot of <em>looser examples</em>, like
          Necron Lychguard are MEQ with T5, while Tyranid Barbgaunts are MEQ
          with Sv4+.
        </p>

        <Image src={wound} alt="Wound roll probabilities" />

        <p>
          Against this profile, you want S4 and above, D2 weapons with a bit of
          penetration.
        </p>

        <blockquote>
          <p>
            The <em>Heavy bolter</em> (S5, AP-1, D2) is a principal anti-MEQ
            weapon, that deals the right amount of damage, wounds on 3+ (66%
            chance), and degrades the save to 4+ (50% chance).
          </p>
        </blockquote>

        <h3 id="teq">TEQ (Terminator Equivalent)</h3>
        <Image
          src={terminators}
          alt="A squad of Space Marine Terminators."
          className="picture profile-img object-[0%_57%]"
        />

        <div className="box font-bold text-center">
          Toughness 5 | Save 2+ | Invulnerable 4+ | Wounds 3
        </div>

        <p>
          TEQ, or terminators, represent <em>heavy elites</em>, that come with
          ideal 2+ armor saves, and often an invulnerable save. Because of that,
          weapons with high penetration have <em>diminishing returns</em>. What
          you're looking for instead is more strength and damage, better with a
          crit effect.
        </p>

        <blockquote>
          <p>
            Both the <em>Autocannon</em> (S9, AP-1, D3) and <em>Grav-cannon</em>{' '}
            (S6, same) deal the correct damage, wound on 3+ (66% chance), and
            degrade the save to 3+ (66% chance).
          </p>

          <p>
            Eventhough the <em>Plasma gun in standard mode</em> (Rapid Fire 1,
            S7, AP-2, D1) deals only 1 damage, it can be effective.
          </p>
        </blockquote>

        <p>
          Strong TEQ examples are Space and Chaos Space Marine Terminators, and
          Grey Knight Paladins. Looser examples are Adeptus Custodes units like
          Wardens and Custodian Guard (TEQ with various Toughness) and Tau
          Crisis Battlesuits (more Wounds, worse Saves).
        </p>

        <h3 id="geq">GEQ (Guard Equivalent)</h3>

        <Image
          src={guardsmen}
          alt="A squad of Imperial Guard Cadia Shock Troops."
          className="picture profile-img object-[0%_28%]"
        />

        <div className="box font-bold text-center">
          Toughness 3 | Save 5+ | Wounds 1
        </div>

        <p>
          The name comes from the <em>Imperial Guard battleline</em> and depicts{' '}
          <em>light infantry</em>. These are fragile single wound fighters,
          usually organized in <em>larger squads</em> (up to 20 models).
          Examples are Cadian Shock Troops, Tyranid Termagant and Hormagaunts,
          and Chaos Cultists.
        </p>

        <p>
          The approach against large numbers of weak models (hordes) is
          different. GEQ wins through volume. High power and penetration become
          irrelevant compared to number of attacks.
        </p>

        <blockquote>
          <p>
            The <em>Flamer</em> (Torrent, Ad6, S4, D1) auto-hits, and has a 66%
            chance to wound and delete up to 6 guard equivalents.
          </p>

          <p>
            The <em>Storm Bolter</em> (Rapid Fire 2, A2, S4, D1) does 4 attacks
            at half range per activation.
          </p>

          <p>
            Any grenade or missile launcher with{' '}
            <Link href={`${wh40kRoute('Datasheets')}#blast`}>Blast</Link> deals
            extra attacks against more targets.
          </p>
        </blockquote>

        <h3 id="vehicles-and-monsters">Vehicles and Monsters</h3>

        <Image
          src={rhino}
          alt="A Space Marine Rhino transport vehicle."
          className="picture profile-img sm:max-h-76 object-[0%_40%]"
        />

        <p>
          Profiles become more varied when we move away from infantry. One can
          use the <em>Meltagun's</em> S9 and <em>Lascannon's</em> S12 as
          reference points.
        </p>

        <p>
          Models at T9 and below, like the <em>Rhino</em>, are apt to die from
          3-4 Meltagun wounds (less at half range because of{' '}
          <Link href={`${wh40kRoute('Datasheets')}#melta`}>Melta</Link>). These
          can be our <em>light vehicles</em>. A T10{' '}
          <em>Redemptor Dreadnought</em> gives the Meltagun a hard time. The
          Lascannon will do better. Yet, against the heavy <em>Land Raider</em>{' '}
          <small>(T12|Sv2+|W16)</small> even the Lascannon struggles.
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
          Hierodule.
        </p>

        <blockquote>
          <p>
            Knights are welcomed in most WH40K variants, but one should inform
            their opponent beforehand to assure they are properly prepared.
          </p>
        </blockquote>
      </Section>
    </>
  )
}
