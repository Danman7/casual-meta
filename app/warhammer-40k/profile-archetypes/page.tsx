import Image from 'next/image'
import Link from 'next/link'

import guardsmen from '@/app/assets/wh40k/CadianShockTroops.webp'
import intercessors from '@/app/assets/wh40k/interfcessors.webp'
import knight from '@/app/assets/wh40k/knight_Castellan.webp'
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
          <Link href={wh40kHref('attackSequence')}>making attacks</Link> the key
          target attribute is it's durability formed by it's{' '}
          <strong>
            <Link href={wh40kHref('datasheets', 'toughness')}>Toughness</Link>,{' '}
            <Link href={wh40kHref('datasheets', 'save')}>Save</Link> and{' '}
            <Link href={wh40kHref('datasheets', 'wounds')}>Wounds</Link>
          </strong>
          . There are <strong>very common combinations of these</strong> across
          all factions, that many units either fit (<em>strong examples</em>) or
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
          <strong>baseline infantry</strong> statline - not heavy, not light.
          It's the profile with the most strong compared to losse examples.
        </p>
        <p className="example">
          For example, most of the Space Marine and Chaos Space Marine infantry
          lines are pure MEQ. So are Tau Stealth Battlesuits, Eldar Shining
          Spears, and some Adeptus Mechanicus units, though they also have
          invulnerable saves. Loose examples can be Ork Nobz (MEQ w\ better T5),
          Tyranid Barbgaunts (MEQ w\ worse Sv4+), and Necron Immortals (MEQ w\
          worse W1).
        </p>
        <p>
          MEQ being common makes{' '}
          <strong>
            D2 a benchmark for{' '}
            <Link href={wh40kHref('datasheets', 'damage')}>Damage</Link>
          </strong>
          . D1 is inefficient (needs two failed saves), while D3+ is wasteful.
          So to kill Marines you want D2, a little bit of AP, and volume.
        </p>
        <p className="example">
          For example, the <strong>Heavy Bolter</strong> (S5, AP-1, D2) is a
          principal anti-MEQ weapon - wounds on 3+ (66%), and degrades the save
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
          Toughness 5 | Save 2+ | Invulnerable 4+ | Wounds 3
        </p>
        <p>
          TEQ, or Terminators, represent <strong>heavy elite infantry</strong>{' '}
          that come with ideal armor, and often invulnerable saves. Here strong
          examples are much less compared to loose examples.
        </p>
        <p className="example">
          For example, pure TEQ is mostly anything that wares the Terminator
          armor: Deathwing Terminator Squad, Chaos Terminator Squad, Relic
          Terminator Squad etc. Loose examples can be Ork Meganobz and Marines
          Gravis profiles (better T, no Inv), Eldar Wraithguard (even better T),
          and Bladeguard Veterans (TEQ with worse T and Sv).
        </p>

        <p>
          Terminators show <strong>the limitations of AP</strong> well. There
          are only 2 values between Sv2+ and Inv4+. Hence, only AP-1 and AP-2 do
          anything. AP-3 or better will be ignored by the Inv save. Good
          anti-TEQ weapons have more Strength, with just a bit of AP. D3 is
          perfect, but may be rare.
        </p>

        <p className="example">
          For example, <strong>Autocannons</strong> (often S7–9, AP-1/-2, D2/3)
          have good volume. <strong>Supercharged Plasma</strong> weapons have
          high S, but may have lower D.
        </p>

        <h3 id="geq">GEQ (Guard Equivalent)</h3>

        <Image
          src={guardsmen}
          alt="A squad of Imperial Guard Cadia Shock Troops."
          className="picture profile-img object-[0%_28%]"
        />
        <div className="paper font-bold text-center">
          Toughness 3 | Save 5+ | Wounds 1
        </div>
        <p>
          The name comes from the <em>Imperial Guard battleline</em> and depicts{' '}
          <em>light infantry</em>. These are fragile single wound fighters,
          usually organized in <em>larger squads</em> (up to 20 models).
          Examples are Cadian Shock Troops, Tyranid Termagants and Hormagaunts,
          and Chaos Cultists.
        </p>
        <p>
          The approach against large numbers of weak models (hordes) is
          different. GEQ wins through volume. High power and penetration become
          irrelevant compared to number of attacks.
        </p>
        <blockquote>
          <p>
            The <em>Flamer</em> (Torrent, A D6, S4, D1) auto-hits and has a 66%
            chance to wound and delete up to 6 guard equivalents.
          </p>

          <p>
            The <em>Storm Bolter</em> (Rapid Fire 2, A2, S4, D1) does 4 attacks
            at half range per activation.
          </p>

          <p>
            Any grenade or missile launcher with{' '}
            <Link href={wh40kHref('keywords', 'blast')}>Blast</Link> deals extra
            attacks against more targets.
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
          <Link href={wh40kHref('keywords', 'melta')}>Melta</Link>). These can
          be our <em>light vehicles</em>. A T10 <em>Redemptor Dreadnought</em>{' '}
          gives the Meltagun a hard time. The Lascannon will do better. Yet,
          against the heavy <em>Land Raider</em> <small>(T12|Sv2+|W16)</small>{' '}
          even the Lascannon struggles.
        </p>
        <h3 id="keq">KEQ (Knight Equivalent)</h3>
        <Image
          src={knight}
          alt="A Space Marine Knight Castellan."
          className="picture profile-img sm:max-h-76 object-[0%_25%]"
        />
        <p>
          KEQ is not a widely used term, but one can refer to very large, often
          20+ wound models as knight equivalents. Examples include the Knights
          Perceptor and Castellan, Eldar Wraithknight and Tyranid Scythed
          Hierodule.
        </p>
        <blockquote>
          <p>
            Knights are welcome in most WH40K variants, but one should inform
            their opponent beforehand to ensure they are properly prepared.
          </p>
        </blockquote>
      </section>
    </>
  )
}
