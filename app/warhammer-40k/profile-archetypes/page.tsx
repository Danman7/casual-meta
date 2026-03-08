import Image from 'next/image'
import Link from 'next/link'

import guardsmen from '@/app/assets/wh40k/CadianShockTroops.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
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
          <Link href={wh40kRoute('Datasheets')}>Datasheets</Link> explain the
          performance of a weapon or model(s) using numerical characteristics.
          With hundreds of units available, each with several loadouts, there
          are thousands of possible interactions between a weapon and a target.
        </p>

        <p>
          <strong>MEQ, GEQ, and TEQ</strong> are community shorthands used in
          Warhammer 40,000 to describe common profiles. Using standardized
          target profiles simplifies discussion about damage and weapon balance.
          Instead of analyzing every unit individually, players can ask
          questions like "Is this weapon efficient into MEQ?" or "Can it
          reliably kill TEQ or vehicles?"
        </p>
      </Section>

      <Section title="MEQ (Marine Equivalent)" id="meq">
        <Image
          src={intercessors}
          alt="A squad of Space Marine Intercessors."
          className="profile-img object-[0%_70%]"
        />

        <div className="box text-lg font-bold text-center">T4|Sv3+|W2</div>

        <p>
          MEQ refers to infantry with{' '}
          <strong>durability similar to a standard Space Marine</strong>, hence
          it can be called <em>standard infantry</em>. The defining traits are{' '}
          <strong>Toughness 4, two Wounds, and a 3+ armor save</strong>. This
          profile is very common across many of the factions in the game, and
          it's often used as a benchmark.
        </p>

        <p>
          Because MEQ is one of the most frequent infantry profiles, many
          weapons are specifically designed to counter it. The Heavy Bolter with
          2 Damage, 5 Strength is a good example.
        </p>

        <p>
          Units with this exact profile are <strong>strong examples</strong>,
          a.k.a <em>pure MEQ</em>.
        </p>

        <ul role="list">
          <li>
            Space Marines in Power Armor like Intercessors, Tactical Marines,
            Bladeguard Veterans, Eliminators, Devastators, Infernius Squad and
            many others;
          </li>
          <li>
            Chaos Space Marines like Legionaries, Rubric Marines and Khorne
            Berzerkers;
          </li>
          <li>Tau Stealth Battlesuits;</li>
          <li>Eldar Shining Spears.</li>
        </ul>

        <p>
          <strong>Loose examples</strong> are units that resemble Marines but
          differ in durability or saves.
        </p>

        <ul>
          <li>Company Heroes are MEQ with double the wounds;</li>

          <li>Necron Lychguard are MEQ with better Toughness;</li>

          <li>
            Tyranid Genestealers and Barbgaunts are MEQ with weaker armor saves.
          </li>
          <li>
            Necron Immortals are MEQ with 1 Wound, but their faction ability
            <em>Reanimation Protocols</em> brings them pretty close to pure MEQ.
          </li>
          <li>
            Eldar Windriders and Dark Eldar Reavers are MEQ with Sv4+/6++;
          </li>

          <li>Ork Nobz are Marines with better toughness, but worse armor.</li>
        </ul>
      </Section>

      <Section title="TEQ (Terminator Equivalent)" id="teq">
        <Image
          src={terminators}
          alt="A squad of Space Marine Terminators."
          className="profile-img object-[0%_55%]"
        />

        <div className="box text-lg font-bold text-center">T5|Sv2+/4++|W3</div>

        <p>
          <strong>TEQ</strong> stands for <strong>Terminator Equivalent</strong>
          . These units represent <strong>elite heavy infantry</strong>, tougher
          than Marines due to better armor, more wounds, or invulnerable saves.
          This means{' '}
          <strong>
            high AP weapons have diminishing returns, and multi-damage weapons
            become more important
          </strong>
          . Heavy infantry is tougher, but fills a similar battlefield role.
        </p>

        <p>Strong examples:</p>

        <ul>
          <li>Space Marine and Chaos Terminators;</li>

          <li>Grey Knight Paladins;</li>
        </ul>

        <p>Loose examples:</p>

        <ul>
          <li>
            Adeptus Custodes units (e.g. Wardens, Allarus Custodians and
            Custodian Guard) are TEQ with various Toughness;
          </li>

          <li>
            Tau Crisis Battlesuits are TEQ with worse Saves, but more Wounds;
          </li>

          <li>
            Imperial Guard Bullgryns are TEQ with better Toughness but worse
            Saves.
          </li>

          <li>Eldar Wraithguard are TEQ with T6 and no invulnerable save.</li>
        </ul>
      </Section>

      <Section title="GEQ (Guard Equivalent)" id="geq">
        <Image
          src={guardsmen}
          alt="A squad of Imperial Guard Cadia Shock Troops."
          className="profile-img object-[0%_25%]"
        />

        <div className="box text-lg font-bold text-center">T3|Sv5+|W1</div>

        <p>
          <strong>GEQ</strong> means <strong>Guard Equivalent</strong>,
          representing <em>light infantry</em> similar to Imperial Guardsmen.
          These units rely on <strong>numbers over durability</strong>.
        </p>

        <p>
          High damage, high strength weapons step down in effectiveness to{' '}
          <strong>large volumes of attacks</strong>. Bolters, lasguns, flamers,
          and blast weapons are particularly successful against GEQ. Prefer D1
          weapons. Extra Damage per hit is wasted.
        </p>

        <p>Strong examples:</p>

        <ul>
          <li>
            Typical Astra Militarum units like Cadian Shock Troops, Catachan
            Jungle Fighters and Death Korps Of Krieg.
          </li>

          <li>
            Tyranid battleline like Termagants, Hormagaunts and Hormagaunts
            (worse Save).
          </li>

          <li>Chaos Cultist Mob are GEQ with worse Saves.</li>
        </ul>

        <p>All of the following are GEQ with slightly better Saves:</p>

        <ul>
          <li>Adeptus Mechanicus Skitarii Rangers and Vanguard.</li>

          <li>
            Eldar battleline, e.g. Storm Guardians and Guardian Defenders.
          </li>

          <li>Tau battleline like Breacher and Strike Teams.</li>

          <li>Battle Sisters Squad.</li>
        </ul>

        <p>Lose examples:</p>

        <ul>
          <li>
            Chaos Daemons like Bloodletters or Daemonettes have worse Armor
            Save, but also an Invulnerable Save. Generally behave like GEQ on
            board.
          </li>
          <li>Ork Boyz are GEQ with better Toughness.</li>
        </ul>
      </Section>
    </>
  )
}
