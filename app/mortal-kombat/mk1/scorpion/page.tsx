import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { GiPunchBlast } from 'react-icons/gi'

import scorpAirDB2 from '@/app/assets/mk1/scorp_air_db2.webp'
import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import scorpMovado from '@/app/assets/mk1/scorp_movado.webp'
import spear from '@/app/assets/mk1/scorp_spear.webp'
import scorp2 from '@/app/assets/mk1/scorpion_2.webp'
import scorpb3 from '@/app/assets/mk1/scorpion_b3.webp'
import { MK_TITLE } from '@/app/constants'
import { Badge } from '@/app/ui/Badge'
import { Callout } from '@/app/ui/Callout'
import { FlexWrapper } from '@/app/ui/FlexWrapper'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 8

export const navTitle = 'Scorpion'

export const metadata = generatePageMetadata(
  `${MK_TITLE}: ${navTitle}`,
  'A breakdown of Scorpion in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <>
      <h1>{navTitle}</h1>

      <p>
        In this page we will take a look at Mortal Kombat 1's returning
        character Scorpion.
      </p>
      <div className="md:flex items-center gap-4">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
        />

        <div className="md:w-1/2">
          <p>
            Scorpion is a beginner-friendly character yet he is frequently
            played at all levels. His strength is to reliably convert unsafe
            actions into damage anywhere on the screen. His combos are easy and
            modular. He has tools for fighting at any range, but lacks efficient
            offense on his own. For that one will need an appropriate Kameo
            pair. New players will find him easier when reacting to their
            opponents rather than initiating pressure.
          </p>
        </div>
      </div>

      <Callout>
        <h2 id="should-play-or-skip" className="border-t-0! pt-0! mt-0!">
          Should I play or skip Scorpion?
        </h2>

        <div className="md:flex gap-6 mt-6">
          <div className="md:w-1/2">
            <FlexWrapper className="font-bold">
              <FaPlus className="text-success" /> Positives
            </FlexWrapper>

            <ul>
              <li>He has no stances or forms to manage.</li>

              <li>
                The Spear special is superb at controlling space and setting up
                combos.
              </li>

              <li>
                Simple ways to start a combo and extend it up to 350 - 400
                damage.
              </li>

              <li>He has multiple specials that cover the whole screen.</li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <FlexWrapper className="font-bold">
              <FaMinus className="text-error" /> Negatives
            </FlexWrapper>
            <ul>
              <li>
                Poor mix-up. No chainable standing overhead or low attacks.
              </li>

              <li>Few and low advantage on block attacks.</li>

              <li>
                Low difficulty may lead to higher predictability. You will have
                to learn harder sequences with a Kameo to catch up to a skilled
                foe.
              </li>
            </ul>
          </div>
        </div>
      </Callout>

      <h2 id="main-buttons">Main buttons</h2>

      <p>
        In case you've never played Scorpion in MK1 you should first get a
        feeling for his moves in practice mode. Here is a list of the ones that
        will be useful frequently.
      </p>

      <ul>
        <li>
          <Badge>Standing 21</Badge> is your main hit-confirm string. It is a
          fast, safe, and starts with a disjointed high attack with surprising
          reach.
        </li>

        <li>
          <Badge>Back 3</Badge> is a very far reaching, albeit slow and unsafe,
          mid-low attack. The first hit can be cancelled (e.g. try Back 1
          Forward 1).
        </li>

        <li>
          <Badge>Back Forward 1</Badge> is Scorpion's signature Spear. It's an
          excellent full screen check and combo extender, but slow and unsafe.
        </li>

        <li>
          <Badge>Forward 32</Badge> is your optimal combo starter. It launches
          the opponent into the air, yet has a shorter reach than Standing 2.
        </li>

        <li>
          <Badge>Standing 12</Badge> is the fastest hit-confirm. Prefer it to
          Forward 32 or Standing 21 only if you are touching your foe.
        </li>

        <li>
          <Badge>Back Forward 2</Badge> is the Charge. It's a fast mid special
          that covers good distance. It can start a combo only with the proper
          Kameos. Enhanced version has armor for a wakeup reversal.
        </li>

        <li>
          <Badge>Back 2</Badge> is Scorpion's best anti-air. It can be canceled
          into the Charge or Spear for full combo.
        </li>

        <li>
          <Badge>Down Back 2</Badge> is the Twisted Kyo - your foremost combo
          ender (e.g. try <Badge>33 DB2</Badge>).
        </li>

        <li>
          <Badge>Down Back 3</Badge> is the versatile Flame Port. It can
          initiate combos, punish zoning, or simply play mind game with your
          adversary. The enhanced version skips the hit and resets Scorpion.
        </li>

        <li>
          <Badge>Back Forward 4</Badge> is the Devouring Flame. It is a final
          full-screen measure against players who like to block and keep their
          distance.
        </li>

        <li>
          <Badge>Air Down Back 2 Enhanced</Badge> is a key aerial combo
          extender. It has application only when the opponent is already
          launched (e.g. try <Badge>F32 J12 airDB2ex 111</Badge>).
        </li>
      </ul>

      <h2 id="neutral">Playing Neutral</h2>

      <p>
        In this section we will look at ways to gain the upper hand in{' '}
        <em>Neutral</em> engagements.
      </p>

      <p className="text-lg font-semibold">
        Scorpion lacks a true mix-up or frame advantage. Instead, he has
        straightforward moves available for each distance and scenario.
      </p>

      <p>
        As a novice your first goal should be to learn <Badge>2</Badge>'s range.
        Keeping Scorpion at around that distance from the other fighter is a
        good starting point. When they approach aim to hit them at the attack's
        maximum range. Confirm your hits with <Badge>21</Badge>. If you see them
        being hit, continue into Spear - <Badge>21 BF1</Badge>. If they block
        it, stop or you may get punished.
      </p>

      <ImageWithCaption
        src={scorp2}
        alt="Scorpion's Standing 2 attack."
        caption="Scorpion's Standing 2 catches advancing Sub-Zero off-guard."
      />

      <p>
        If they stay out of reach, skip Standing 2 and check them with Spear.
        Many players get comfortable at mid-range and won't anticipate it.
      </p>

      <ImageWithCaption
        src={spear}
        alt="Scorpion's spear move."
        className="shadow-md"
        caption="The Spear can catch the other party all the way across the screen."
      />

      <p>
        Expect opponents to block, jump, or even teleport around your Spear. But
        because it is a high attack, some players will also attempt to duck
        under it.{' '}
        <strong>The enhanced spear consumes a meter, but hits mid</strong>,
        which will catch a ducking foe. If you see this habit in your rival,
        throw an occasional enhanced spear.
      </p>

      <p>
        Supposing they come up close and knock you down. If you keep getting
        persistently knocked down, don’t you can reset the pressure and gain
        some distance with an armored enhanced BF2 just as you are getting up.
      </p>

      <p>
        Don’t be alarmed if you need to keep blocking for an extended period.
        Eventually they will throw an unsafe attack - one which takes a long
        time to recover from. This is your queue. After blocking such an attack
        initiate counter-pressure with 12 or F32. Prefer the latter as it will
        give you more options to extend the offense.
      </p>

      <p>
        <strong>
          The Back 2 shortcut cancels into the Spear without the need to press
          back twice - B2 F1.
        </strong>{' '}
        Thus, if you spot a jump-in attempt, you can react with B2 into Spear
        for a full combo punish. Timing is a bit strict, so practice it in
        training mode.
      </p>

      <h3>Anti-zoning</h3>

      <p>
        On condition that you are facing a character that has good full-screen
        pressure (e.g. Sindel, Shang Tsung, Liu Kang) you have the Flame Port.
        It is unsafe and predictable. The trick is to time it with their
        projectiles. To practice record a Liu Kang backing away, throwing BF1
        and blocking afterwards. He can’t block while moving or throwing a
        fireball. If you time the teleport right, he will get hit and you will
        end up next to him.
      </p>

      <p>
        Provided they do block your teleports regularly, mix them up with the{' '}
        <strong>enhanced version into a throw.</strong> This is a simple way to
        mess up their defense. They predict they will get punched, but get
        grabbed instead. Such is the nature of conditioning, however, that they
        will learn to look for your enhanced teleport and counter punch it. It
        may be a bit exacting, but you can micro-duck (press down briefly)
        underneath their fist, just as you come out the other side and hit a
        quick 1 to counter-punch.
      </p>

      <p>
        When you don’t feel confident with your teleport play, switch to
        checking them with the BF4 Devouring Flame. Many forget Scorpion even
        has that move. It is especially slow and unsafe, but a good way to flush
        them out of hiding and remind them - yes, I can get you there. The
        enhanced version is guaranteed damage.
      </p>

      <h3>Conditioning and baiting whiffs</h3>

      <p>
        Scorpion’s Back 3 is a very singular move. He launches his Kunai for a
        mid-low disjointed attack. It is slow and unsafe but reaches very far.
        The threat of a low hit at such a distance makes your rival constantly
        expect either to low block or jump over it. You can condition them to
        jump forward expecting a Back 3 where you didn’t execute one. Then you
        can punish them with your Back 2.
      </p>

      <ImageWithCaption
        src={scorpb3}
        alt="Scorpion's back 3 attack."
        className="shadow-md max-h-80 object-cover object-[0%_50%]"
        caption="Back 3 catches Sub-Zero at the distance of a jump plus a dash."
      />

      <Callout className="mt-4">
        <div className="tracking-widest">Back 3 Cancels</div>

        <p>
          <strong>B3 F1</strong> cancels into Spear.
        </p>
        <p>
          <strong>B3 F2</strong> cancels into Dash.
        </p>

        <p>
          <strong>B3 exF4</strong> cancels into enhanced Devouring Flame -
          guaranteed damage chip resource, but unsafe.
        </p>

        <p>
          <strong>B3 exDB3</strong> cancels into Enhanced Teleport. This is a
          very good way to force them into blocking, giving your teleport more
          freedom.
        </p>

        <p>
          As mentioned, Scorpion has a poor mix-up without Kameos. The B3 cancel
          is a good candidate for Kameo synergy.
        </p>
      </Callout>

      <p>
        You can also promote your opponent to dash forward if you throw a punch
        into empty air at medium distance. Often when they see a whiff they
        spring into action. You can use that to land a Spear. Just promptly tap
        1 (quickest recovery) into BF1 at jump distance away. This is cheap but
        legit tech.
      </p>

      <p>
        A more consistent close-range approach is to derail one of your normal
        strings. Standing 122 ends in an overhead that can be punished with an
        up block. Cut it short - 12 into a throw. Same thing with Forward 34. It
        is a decent mid-mid poke that doesn’t chain outside a dash or some Kameo
        moves. But if they keep expecting it you can do F3 into a throw.
      </p>

      <p>
        Speaking of Forward 3, it is also your best shimmy. You might want to
        keep walking forward into your foe after you knock them down. Normally,
        this indicates an attempt to throw. They may decide to duck under it as
        they get up and punish. Given that they do, you can launch a Forward 3
        instead which hits mid.
      </p>

      <h2>What combos should I learn first?</h2>

      <p>
        As modular as Scorpion’s move set is, when playing online, execution
        will overcome damage. You already have the basics of footsie into punish
        from the neutral section. Let's put that together:
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> 21 BF1 33 DB2{' '}
        <span className="text-light">- meterless 21% </span>
      </p>

      <p>
        This is a fair beginners combo. For the best damage-for-consistency,
        however, you will have to learn to juggle the opponent three times.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> F32 F32 F32 4 BF1 33 DB2{' '}
        <span className="text-light">- resourceless 36.5% damage </span>
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> F32 F32 J12 airDB2ex{' '}
        <span className="text-sm italic">small pause</span> 111 BF1 33 DB2{' '}
        <span className="text-light">- one bar 40.7% damage</span>
      </p>

      <p>
        These are your bread-and-butter routes. 36-40% damage is more than
        enough. The difficulty with the latter one is to delay the 111 until
        both of you are closer to the ground. If executed correctly they will
        bounce off the ground allowing for the follow up spear.
      </p>

      <p>
        Now if you do land a spear early you still have the three F32s. Your
        combo ender though must modify as you don't have the re-stand anymore.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> 21 BF1 F32 F32 F32 F34 BF2{' '}
        <span className="text-light">- resourceless 34.2% damage </span>
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> 21 BF1 F32 F32 J12 airDB2ex{' '}
        <span className="text-sm italic">small pause</span> 111 airDB2{' '}
        <span className="text-light"> - one bar 37.7% damage</span>
      </p>

      <h3>Extending via air Flame-Port</h3>

      <p>
        You can expand combos with Scorpion’s teleport. Nevertheless, it is much
        harder and isn't necessarily worth the effort.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> J3 airDB3{' '}
        <span className="text-sm italic">land</span> B2 F2{' '}
        <span className="text-light"> - resourceless 21.7% damage</span>
      </p>

      <p>
        If your rival is standing, the teleport must be very close to the
        ground.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> F32 J12 airDB3ex J13{' '}
        <span className="text-sm italic">land</span> BF1 33 DB3{' '}
        <span className="text-light"> - one bar 33.4% damage</span>
      </p>

      <p>
        The timing with the enhanced teleport into the 13 is awkward. Often the
        teleport will miss.
      </p>

      <p>
        What can be effective is an enhanced air teleport from a distance. Most
        players don’t expect to be hit by a foe jumping away from them. To make
        the damage notable, however, you will need to work harder.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> airDB3ex J3{' '}
        <span className="text-sm italic">land</span> BF1 F32 F32 F34 BF2{' '}
        <span className="text-light"> - one bar 30.8% damage</span>
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" /> airDB3ex J3 DB3{' '}
        <span className="text-sm italic">land</span> F32 F32 4 BF1 33 DB2{' '}
        <span className="text-light">for 41.1% one meter damage</span>
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" /> airDB3ex J3 DB3{' '}
        <span className="text-sm italic">land</span> 4 BF1 F32 J12 airDB2ex{' '}
        <span className="text-sm italic">small pause</span> J111 JDB2{' '}
        <span className="text-light">for 44.9% two meter damage</span>
      </p>

      <ImageWithCaption
        src={scorpAirDB2}
        alt="Scorpion's air down back 2 special."
        caption="Scorpion's enhanced air Down Back 2 can be chained multiple times in a row, but costs meter each time and has diminishing returns compared to continuing with 111."
      />

      <h3>Corner combos</h3>

      <p>
        You can really spike the damage in the corner. Standing 4 is not
        impressive, but its damage scales down very well. Moreover, in the
        corner its knockback is not a factor. You can chain two Standing 4 kicks
        in row.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        F32 4 4 BF1 F32 J12 airDB2ex{' '}
        <span className="text-sm italic">small pause</span> J111 JDB2
        <span className="text-light"> - one bar 44.6% damage</span>
      </p>

      <p>
        Even a single Standing 4 in this sequence will lead to 40% damage. If
        you are about to win the round, however, and you feel confident, you can
        spice the above further with some tight timings.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        F32 4 4 BF1 F32 J12 airDB2ex{' '}
        <span className="text-sm italic">small pause</span> J111{' '}
        <span className="text-light">land</span> B2 BF4ex
        <span className="text-light">
          {' '}
          for a whooping 50.2% one meter damage
        </span>
      </p>

      <p>
        The enhanced Devouring Flame is guaranteed damage, <em>but</em> if they
        survive, they also get a guaranteed wakeup punish.
      </p>

      <h2>Kameos</h2>

      <p>
        If you have a grip on Scorpion’s flow, we can look at how to optimize
        his offense. Start by experimenting with these in practice mode before
        choosing which one seems the best fit for you.
      </p>

      <h3>
        Movado - <span className="bg-alt-surface p-1">solves problems</span>
      </h3>

      <p>
        Movado is the one we recommend for new players. He helps Scorpion out
        with many things. He is simple yet teaches good practices instead of
        single button spams.
      </p>

      <p>
        Movado’s Nindrop (UK) enables Scorpion to start combos out of his
        Charge. This gives you armored combo options.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        BF2ex UK <span className="text-light">switch sides</span> dash F32 F32 4
        BF1 33 DB2
        <span className="text-light"> - meterless 25.9% damage </span>
      </p>

      <p>
        The same Kameo move allows you to keep your air extension meterless.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        F32 F32 J12 airDB2ex UK <span className="text-sm italic">land</span> 1
        BF1 33 DB2
        <span className="text-light"> - meterless 37.5% damage </span>
      </p>

      <p>The Trap Drop (K) allows you to combo out of a throw.</p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        Throw <span className="text-light">small pause</span> K (trap) F32 F32 4
        BF1 33 DB2
        <span className="text-light"> - 22% damage out of a throw</span>
      </p>

      <p>
        Forward 34 and 214 are now also combo starters. You can try the same
        patterns with Best Feet Forward (FK) and one of the two moves mentioned.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        F34 FK F32 4 BF1 33 DB2
      </p>

      <ImageWithCaption
        src={scorpMovado}
        alt="Movado extending a Scorpion combo."
        caption="Here movado steps in with his Forward Kameo move to extend the otherwise non-extendable Scorpion Forward 34 string."
      />

      <p>
        The decisive positive with everything above is that{' '}
        <strong>
          you don’t have to time these moves or wait for a specific form
        </strong>{' '}
        to be available. They will only execute in the correct spot if your
        previous attacks have connected.
      </p>

      <p>
        On top of that you also have tricky wakeup setups with Slding Home (DK)
        which is a low attack. On knocking them down you can jump and press DK
        at the same time. They will have to block the low, giving you an
        opportunity to hit them with an overhead. Timing it perfectly takes some
        practice.
      </p>

      <h3>
        Ferra -{' '}
        <span className="bg-alt-surface p-1">mix-up and corner damage</span>
      </h3>

      <p>
        Ferra’s plays great with the B3 move and the conditioning we mentioned
        earlier. You can do B3 K 2 for an overhead mix or B3 K 3 for a low
        follow up that can be continued with a combo (unlike the regular B3 low
        which knocks down). The other player will get tired of getting into the
        mix and they will try to preemptively jump forward at which point you B2
        them.
      </p>

      <p>Ferra can extend corner combos as well.</p>

      <h3>
        Chameleon -{' '}
        <span className="bg-alt-surface p-1">difficult but fun</span>
      </h3>

      <p>
        Chameleon with her forms is usually problematic for beginners. At the
        same time no one else gives as much freedom in pressure and setups.
      </p>

      <p>For starters she also enables throw combos.</p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        Throw <span className="text-light">small pause</span> K (fan toss) J2
        F32 F32 4 BF1 33 DB2
        <span className="text-light"> - 21.9% damage</span>
      </p>

      <p>
        Mileena’s Sai (FK) like Movado's Nindrop makes your Charge a combo
        starter. The difference is that unlike Movado, Chameleon can only extend
        with a spear.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        BF2 FK{' '}
        <span className="text-light">(the Charge will switch sides)</span> BF1
        F32 F32 4 BF2
        <span className="text-light"> - 23.4% damage </span>
      </p>

      <p>
        Jade’s Glow gives projectile immunity for a brief time. It is not only
        additional help with zoners but also alleviates mirror match spears.
      </p>

      <p>
        These are some simple ways to start off with her. You will grasp her
        true might, however, once you start using her resets.
      </p>

      <h2>Advanced Tech</h2>

      <h3>Enhanced Flame-Port jail</h3>

      <p>
        Ending a corner combo with an enhanced air teleport into a kick will
        jail your opponent. If they press any button other than block during
        getup, they will get hit. Do it correctly, and they will spin around to
        face you as you come from the corner. You will get a free hit, even
        break armor. It’s inconsistent. Don’t expect it to work every time.
      </p>

      <h3>Air Kyo Snag bait</h3>

      <p>
        Air DB2 has instant recovery. Even the regular version. Assuming you
        jump over your adversary you can throw this move into empty air, and it
        will stop and drop you down. They must be ready for a timely anti-air
        otherwise you are safe. The idea is to bait a high attack from them
        while throwing a low Kameo move or Movado’s Trap Drop. It’s a niche
        tactic.
      </p>
    </>
  )
}
