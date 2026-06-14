import Image from 'next/image'
import Link from 'next/link'

import attackNumber from '@/app/assets/wh40k/attacks_number.webp'
import datasheet from '@/app/assets/wh40k/datasheet.webp'
import durability from '@/app/assets/wh40k/durability.webp'
import movediff from '@/app/assets/wh40k/move_diff.webp'
import multipleProfiles from '@/app/assets/wh40k/multiple_profiles.webp'
import saves from '@/app/assets/wh40k/saves.webp'
import wound from '@/app/assets/wh40k/wound.webp'
import { wh40kHref, wh40kMetadata, wh40kPage } from '@/app/siteMap'
import { Strip } from '@/app/ui/Strip'

const page = wh40kPage('datasheets')

export const metadata = wh40kMetadata('datasheets')

export default async function Page() {
  return (
    <>
      <h1>{page.title}</h1>

      <section>
        <p>
          Every WH40k unit comes with a datasheet. It's a card that describes
          its profile, composition, loadouts, special rules, and{' '}
          <Link href={wh40kHref('keywords')}>keywords</Link>. Think of it as a
          small rulebook just for that unit.
        </p>

        <Image
          src={datasheet}
          alt="Space Marine Terminators Datasheet"
          loading="eager"
        />
      </section>

      <section>
        <h2 id="unit-profiles">Profile</h2>

        <p>
          At the top, below the datasheet's name, is the unit's profile - six
          attributes that form its performance in different scenarios.
        </p>

        <Strip
          items={[
            {
              label: 'Durability',
              value: 'Toguhness (T), Save (Sv), Wounds (W)',
            },
            {
              label: 'Utility',
              value: 'Move (M), Objectives Control (OC)',
            },
            {
              label: 'Morale',
              value: 'Leadership (Ld)',
            },
          ]}
        />

        <p>
          Numbers with <strong>a plus at the end</strong> (Sv, Ld) are{' '}
          <strong>dice throws - lower is better</strong>. For the rest,{' '}
          <em>higher is better</em>. All characteristics deal in probability.
          Better stats can mean better consistency, not certainty.
        </p>

        <p>
          A datasheet may have more than one profiles if it's composed of
          multipe types of models.
        </p>

        <Image
          src={multipleProfiles}
          alt="Multiple profiles on an Ork Boyz datasheet"
          className="picture"
        />

        <h3 id="move">Move (M)</h3>

        <p>
          Or <strong>how fast</strong> the unit is. Movement in WH40k is
          measured in <em>inches</em>. A higher number means more opportunities
          to reposition and engage. This comes into play primarily during the{' '}
          <Link href={wh40kHref('battleRound', 'movement-phase')}>
            Movement Phase
          </Link>
          . <strong>M can never be 0</strong>.
        </p>

        <Image
          src={movediff}
          alt="Movement difference between an Assault Intercessor and one with a jump pack."
        />

        <p className="example">
          For reference, most infantry have M6", &#177;1 (5 is considered slow).
          Assault troops and skirmish vehicles are usually around M12", while
          flyers are around M20".
        </p>

        <h3 id="toughness">Toughness (T)</h3>

        <p>
          Or{' '}
          <strong>
            how strong a weapon must be, to be more likely to wound
          </strong>{' '}
          the unit when it's time to{' '}
          <Link href={wh40kHref('attackSequence', 'wound-roll')}>
            roll to wound
          </Link>
          . Even the weakest weapon has a 1/6 chance to wound the toughest foe,
          but tougher models require the proper tools to dispatch efficiently.
        </p>

        <Image src={wound} alt="Wound roll probabilities" />

        <p className="example">
          For reference, T4 is considerend standard infantry. T3 is light, T5 is
          heavy infantry. Light vehicles tend to be around T7-9. T12 and above
          are heavy vehicles.
        </p>

        <p>
          <strong>Toughness only matters at breakpoints</strong> - when it
          changes the wound roll. T6 vs T7 is important into S6/S7/S12, but not
          into S9.
        </p>

        <p className="example">
          For example, the S5 Heavy Bolter changes T4{' '}
          <Link href={wh40kHref('profileArchetypes', 'meq')}>
            MEQ-style profiles'
          </Link>{' '}
          rolls to 3+, but does nothing for a T6 Gravis armor, where an S9 Melta
          is more appropriate.
        </p>

        <h3 id="save">Save (Sv)</h3>

        <p>
          Or{' '}
          <strong>
            how likely is the model's armor to save it after the attack has
            wounded
          </strong>{' '}
          when it's time to{' '}
          <Link href={wh40kHref('attackSequence', 'save-roll')}>
            roll to save
          </Link>
          . All datasheets have at least an <strong>Armor Save (Sv)</strong>,
          which is{' '}
          <strong>affected by the weapon's Armor Penetration (AP)</strong>. If
          AP brings the save <strong>above 6+, no armor save</strong> is
          allowed. <strong>Sv can't be better than 2+.</strong>
        </p>

        <Image
          src={saves}
          alt="Example in how different AP affects armor saves"
        />

        <p>
          Some models have an additional{' '}
          <strong>Invulnerable Save (Inv/++)</strong> which{' '}
          <strong>ignores AP</strong>. These are better against high-AP attacks.
          The defender can only use either Sv or Inv against a single attack.
        </p>

        <h3 id="wounds">Wounds (W)</h3>

        <p>
          Or{' '}
          <strong>
            how much damage can the model take before being removed from play
          </strong>
          . A model starts with X Wounds. On reaching 0, it is destroyed. A
          model with a lot of Wounds will require combined effort to remove no
          matter the S or AP of the weapons.
        </p>

        <Image
          src={durability}
          alt="Difference in durability between an Intercessor and a Defiler"
        />

        <p className="example">
          For reference, most infantry are W1-3, elites and characters - W4-6,
          light vehicles - W7-9. A W14 and above model is a centerpiece.
        </p>

        <h3 id="leadership">Leadership (Ld)</h3>

        <p>
          Or{' '}
          <strong>
            how likely is for the whole unit to route when at less than half
            strenght
          </strong>{' '}
          following the{' '}
          <Link href={wh40kHref('battleRound', 'battle-shock-tests')}>
            battle-shock tests
          </Link>{' '}
          rules. Ld can never be 4+ (or better), or 9+ (or worse). This means it
          can only go between Ld5+ (83% chance to succeed) and Ld8+ (42% chance
          to succeed).
        </p>

        <h3 id="objective-control">Objective Control (OC)</h3>

        <p>
          Or{' '}
          <strong>
            how much control every model in the unit exerts over an objective
          </strong>{' '}
          when within 3" of its marker. Units with higher OC are more efficient
          at controlling objectives. You'll need fewer models on top of the
          marker to score points from it.
        </p>

        <p className="example">
          4 Intercessors (OC2) compete for an objective with 7 Chaos Cultists
          (OC1). The cultists are more, but the marines control the objective -
          4 x 2 &gt; 7 x 1.
        </p>

        <p>
          Units with higher OC are more efficient at pushing objectives as fewer
          models are required to control them.
        </p>

        <p className="example">
          For reference, most have OC1. Many battleline infantry have OC2.
          Larger models may have more.
        </p>

        <h3 id="read-profiles">How to read unit profiles</h3>

        <p>
          Let's take a look at the Cadian Shock Troops datasheet. It says Move
          6" | Toghness 3 | Save 5+ | Wounds 1 | Leadership 7+ | Objective
          Control 2. That's too long. Instead, we can have it{' '}
          <span className="badge">M6" T3 Sv5+ W1 Ld7+ OC2</span>. If we agree
          that the first number is always the Move as it's the only one in
          inches we can shorten it a bit more to{' '}
          <span className="badge">6" T3 Sv5+ W1 Ld7+ OC2</span>.
        </p>

        <p>
          If you understand the above, I can describe a Terminator for you with{' '}
          <span className="badge">5" T5 Sv2+/4++ W3 Ld6+ OC1</span>. But what's
          all that next to it's Sv? Well, we know Terminators have a 4+
          Invulnerable save. So <span className="badge">SvX+/Y++</span> is X
          armor save and Y Inv save.
        </p>

        <p>
          Most of the time, not all of the stats are important for context. So
          if we only discuss the durability of Terminators we can say{' '}
          <span className="badge">T5 Sv2+/4++ W3</span>. This can be shortened
          even further once we get to{' '}
          <Link href={wh40kHref('profileArchetypes')}>archetypes</Link>.
        </p>
      </section>

      <section>
        <h2 id="weapons">Weapons</h2>

        <p>
          Weapons have separate performance profiles with six different metrics
          - Range, Ballistic/Weapon Skill ,Attacks, Strength, AP, Damage.
        </p>

        <p>
          This symbol <span className="wh-pointer" /> indicates the weapon has
          multiple firing modes - one must be chosen prior to attacking. Again,
          numbers with a trailing plus (WS/BS) indicate dice rolls, so lower is
          better.
        </p>

        <p>
          Units come with default loadouts, but some members may often use
          specialized options. Individuals can carry more than one weapon. It's
          all controlled by the datasheet.
        </p>

        <h3 id="range">Range</h3>

        <p>
          Or <strong>how far attacks can be declared</strong> in inches
          following the{' '}
          <Link href={wh40kHref('battleRound', 'shooting-phase')}>
            shooting phase
          </Link>{' '}
          rules. Longer reach signifies engagement priority - the unit needs to
          reposition less and normally attacks first. Hand-to-hand weapons have
          MELEE listed here instead.
        </p>

        <p className="example">
          For reference, almost 70% of the weapons in WH40k are ranged. The
          average reach of pistols, flamers and meltas is 12". Most arms that
          have the words gun, bolt or rifle in their name are at 24". Sniper
          rifles are 36". Tanks and artillery can reach up to 72".
        </p>

        <h3 id="attacks">Attacks (A)</h3>

        <p>
          Or{' '}
          <strong>
            how many <Link href={wh40kHref('attackSequence')}>activations</Link>
          </strong>{' '}
          the weapon has per declared attack. More attacks, means more dice,
          thus{' '}
          <Link href={wh40kHref('attackSequence', 'probability')}>
            better average success
          </Link>
          . Also{' '}
          <strong>multipe attacks can be allocated to multiple models</strong>.
        </p>

        <Image
          src={attackNumber}
          alt="Example of difference in attacks per activation"
        />

        <p>
          Around 14% of weapons have variable attacks - dice roll instead of a
          fixed number. If you see D6, roll a die to determine the amount of
          attacks. D6+1 means roll a die, then add 1, so it can never be less
          than 2.
        </p>

        <p className="example">
          For reference, most range weapons have 1-3 attacks, while melee
          weapons have 3-6 attacks.
        </p>

        <p>
          A weapon having <strong>more attacks means horizontal reach</strong>,
          or being able to hit more targets.
        </p>

        <h3 id="ballistic-skill-weapon-skill">
          Ballistic/Weapon Skill (BS/WS)
        </h3>

        <p>
          Or <strong>how likely is for the weapon to hit the target</strong>{' '}
          when its time to{' '}
          <Link href={wh40kHref('attackSequence', 'hit-roll')}>
            roll to hit
          </Link>
          . Ballistic is obviously for ranged weapons, while Weapon is for melee
          arms. Both mean the same thing. If the weapon autohits (e.g. Torrent
          weapons), this lists N/A.{' '}
          <strong>WS/BS can never be better than 2+</strong>.
        </p>

        <p className="example">
          For reference, most weapons, both ranged and melee, have a BS/WS of
          3+.
        </p>

        <h3 id="strength">Strength (S)</h3>

        <p>
          Or <strong>how tough a target can this weapon easily wound</strong>{' '}
          when it's time to roll to wound. As described above, this attribute is
          tightly related to the Toughness of the target.
        </p>

        <p>
          A weapon having <strong>more strength means vertical reach</strong>,
          or being able to wound more durable targets.
        </p>

        <h3 id="armor-penetration">Armor Penetration (AP)</h3>

        <p>
          Or <strong>how well this weapon negates armor</strong> when it's time
          to roll to save. It's usually a negative number as it decreases the
          quality of an armor save. AP is powerful but capped by two common
          ceilings. It cannot push past invulnerable saves, and is wasted on
          weak saves (5+ or worse).
        </p>

        <p className="example">
          For example, an AP-4 Meltagun into a Sv6+ wastes most of the AP. You
          are paying for penetration that the target cannot meaningfully benefit
          from. AP is most efficient when it meaningfully shifts a save bracket
          (e.g. pushing a Sv3+ to a 5+).
        </p>

        <p className="example">
          As a reference, most weapons have AP 0 to -2. AP-4 is considered a
          dedicated anti-armor weapon.
        </p>

        <h3 id="damage">Damage (D)</h3>

        <p>
          Or{' '}
          <strong>
            how many wounds the target looses per succesful activation
          </strong>{' '}
          after all rolls and saves are done. Damage is split by attacks,
          meaning excess from a single attack is lost.
        </p>

        <p className="example">
          For example, D2 weapons are best against W2 targets. A D1 weapon needs
          two failed saves, while a D3+ weapon is wasteful.
        </p>

        <h3 id="read-weapons">How to read weapon profiles</h3>

        <p>
          Because of keywords, writing weapon profiles without a shortform is
          even longer than unit profiles. The Bolt rifle would be Assault Heavy
          Range 24" Attacks 2 Ballistic Skill 3+ Strength 4 Armor Penetration -1
          Damage 1, compared to{' '}
          <span className="badge">24" A2 BS3+ S4 AP-1 D1 Assault Heavy </span>.
        </p>

        <p>
          The Meltagun's profile is{' '}
          <span className="badge">12" A1 BS3+ S9 AP-4 DD6 Melta 2</span> meaning
          it has the Melta keyword with 2 as a modifier, and roll a D6 to
          determine Damage.
        </p>

        <p>
          The Flamer is{' '}
          <span className="badge">12" AD6 S4 AP0 D1 Ignore Cover Torrent</span>,
          which means throw a D6 for number of attacks. It also lacks Ballistic
          Skill as the Torrent keyword means it hits autoimatically.
        </p>
      </section>
    </>
  )
}
