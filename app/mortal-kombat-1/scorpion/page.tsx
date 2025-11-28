import Image from 'next/image'
import { GiPunchBlast } from 'react-icons/gi'

import Scorpion from '@/app/assets/mk1/scorp_mk1.webp'
import spear from '@/app/assets/mk1/scorp_spear.webp'
import scorp2 from '@/app/assets/mk1/scorpion_2.webp'
import scorpb3 from '@/app/assets/mk1/scorpion_b3.webp'
import { MK1_TITLE } from '@/app/constants'
import { BulletList } from '@/app/ui/BulletList'
import { Callout } from '@/app/ui/Callout'
import { ImageWithCaption } from '@/app/ui/ImageWithCaption'
import { generatePageMetadata } from '@/lib/metadata'

export const navOrder = 8

export const navTitle = 'Scorpion'

export const metadata = generatePageMetadata(
  `${MK1_TITLE}: ${navTitle}`,
  'A breakdown of Scorpion in Mortal Kombat 1.',
)

export default async function Page() {
  return (
    <article className="max-w-3xl mx-auto">
      <h1>{navTitle}</h1>

      <div className="md:flex items-center gap-4">
        <Image
          className="max-h-72 object-cover object-[0%_0%]  md:w-1/2 md:max-h-full"
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
        />

        <p className="md:w-1/2">
          Mortal Kombat 1’s version of Scorpion has a polarizing effect on the
          community, being either praised or found flat/boring/weak.
          Nevertheless, he remains a straightforward character with mostly safe,
          easy-to-chain moves, frequently played at all levels. He has tools for
          fighting both up close and against zoning players who prefer distance.
          On his own, he tends to perform best when reacting to the opponent -
          punishing and interrupting. Optimal offense needs help from an
          appropriate Kameo partner.
        </p>
      </div>

      <h2>Why play or skip Scorpion?</h2>
      <BulletList
        className="text-success"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>No safe spot for your foe</strong>. Between the Spear,
            Flame-Port, Back 3 and Devouring Flame there is no shelter on the
            screen.
          </>,
          <>
            <strong>Novice approved</strong>. No stances or forms, a full
            toolkit for every basic scenario, normals are largely safe on block,
            the Spear remains a reliable stun that pulls enemies in, easy combo
            options.
          </>,
          <>
            <strong>Good interruptions and punishes</strong>. His dash, B3 and
            Spear have superb space control. Flame-Port can interrupt projectile
            spam. B2 is a decent anti-air.
          </>,
          <>
            <strong>Kameo Synergy</strong>. His moves and cancelable throw
            animation make him accessible to a lot of Kameos.
          </>,
        ]}
      />

      <BulletList
        className="text-warning"
        icon="GiDeathSkull"
        items={[
          <>
            <strong>Needs a good Kameo for optimal offense</strong>. Scorpion
            has no true grounded mix-up or frame advantage on block. If you are
            to catch up with a skilled adversary, you will have to chose a Kameo
            wisely.
          </>,
          'Low technicality can mean higher predictability.',
        ]}
      />

      <h2>Neutral and Pressure</h2>

      <p>
        Scorpion lacks a standing overhead, relying on jump-ins. None of his
        grounded lows are chainable. Only his standing 1 punch is +2 on block,
        so there are no big frame traps here. Instead, he survives with a
        combination of key normals and special moves.
      </p>

      <h3>An approach to close combat</h3>

      <p>
        <strong>Standing 2 is your primary, most consistent challenge.</strong>{' '}
        It's a safe, reasonably fast (10 frames), disjointed high attack with
        surprising reach - about two steps away.
      </p>

      <ImageWithCaption
        src={scorp2}
        alt="Scorpion's standing 2 attack."
        caption="Scorpion's standing 2 reach can catch advancing foes off-guard."
      />

      <p>
        A decent first step for new players is to find standing 2’s sweet spot
        and keep your rival at that distance. When they are in range press{' '}
        <strong>21 - your main hit-confirm and combo starter</strong>. If they
        block, stop there and block yourself. If you connect, continue into
        spear – 21 BF1. If you commit to a spear after 21 has been blocked they
        will have time to punish you.
      </p>

      <p>
        This is the essence of footsie into hit-confirm. If you do it
        consistently well enough that most of your attacks connect, end it with
        33 DB2 after the spear.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> 21 BF1 33 DB2{' '}
        <span className="text-light">- a fair 21% beginners combo </span>
      </p>

      <p>
        If the other player stays out of reach you can skip standing 2 and check
        them the spear. Many will get so comfortable doing footsies at mid-range
        that they won't expect to get checked.
      </p>

      <ImageWithCaption
        src={spear}
        alt="Scorpion's spear move."
        className="shadow-md"
        caption="Scorpion's spear should not be abused. At 17 frames start, -28 on block, it is slow and
        unsafe."
      />

      <p>
        Expect adversaries to frequently block and jump (or teleport if they
        can) around your spears. For those that keep ducking underneath do a
        routine enhanced BF1. <strong>The enhanced version hits mid</strong>,
        which will connect with a crouching fighter.
      </p>

      <p>
        Only if they get on your face, and speed is of the essence, should you
        go for the fast 12 (7 frames).
      </p>

      <p>
        Now, if they err with an unsafe attack your optimal combo starter is
        tour F32. This is your primary launch (better than F4). If it hits you
        can chain, it up to three times or do it only twice and continue with an
        aerial extension.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> F32 F32 J12 airDB2ex 111{' '}
        <span className="text-light"></span>
      </p>

      <p>
        If they keep knocking you down, don’t forget that your enhanced BF2 is
        armored. You can use it as a wakeup reversal or event as a mid-range
        interruption alternative to the spear. But do it with caution. It is
        faster than the spear, but the active frames are few, meaning you might
        slide into them instead of hitting them and give them a full combo.
      </p>

      <h3>Air play</h3>

      <p>
        If they like to jump-in a lot, check out your back 2. It is another fast
        (9 frames), disjointed high attack with fair reach that is also an
        anti-air defense. Practice against a forward jumping dummy, and when you
        get a hold of it, record a jump-in kick, which will be harder to
        counter.
      </p>

      <p>
        If they jump over you, the standing 1 is probably top to catch them as
        they land. But the back 2 is a shortcut cancel into any forward move.
        With the dummy set to jump forward try B2 F1 - it cancels into a spear
        without you pressing back twice. This is a superb full combo punish out
        of an anti-air move.
      </p>

      <p>
        On the flip side, Scorpion has good air options of his own, so don’t
        hesitate to do air-to-air jump-ins as well. Apart from the already
        mentioned aerial extension a{' '}
        <strong>
          jump 13 will bounce the foe off the ground enough for you to connect a
          spear
        </strong>
        .
      </p>

      <p>
        If they don’t jump but stay put and you land a jump kick you can also
        connect a spear. Or, if you jump over them, you can do a weird air DB2
        (not enhanced).
      </p>

      <p>
        It will freeze your forward move and drop you to the ground. What is
        cool about JDB2 is that it recovers almost instantly. They will expect
        you to land on their other side and will have to do a very quick
        pinpoint anti-air to catch you. It is a good way to throw off their
        game.
      </p>

      <h3>The back 3</h3>

      <p>
        Scorpion’s back 3 is a very singular move. He uses his Kunai for a
        disjointed two-part mid-low attack. It can hit a foe at about jump
        distance plus one dash, making it one of the furthest reaching normals
        in the game. At 21 frames start, -19 on block it is definitely not among
        the fastest or safest moves. Don't abuse it.
      </p>

      <Image
        src={scorpb3}
        alt="Scorpion's back 3 attack."
        className="shadow-md max-h-80 object-cover object-[0%_50%]"
      />

      <p>
        There are two major traits of this move. First, the second hit is low.
        Even as predictable as B3 is, the threat of a low attack at such a
        distance is often more dangerous than its actual use. The opponent will
        adjust to constantly expect to either block low or jump over. If they
        begin to jump over it often, instead of doing the B3 you can wait for
        them to predict-jump and do a B2 instead. Secondly, the first hit is
        cancellable into any special or Kameo move. This opens doors to new
        pressure possibilities.
      </p>

      <Callout>
        <div className="text-base font-bold flex items-center gap-2">
          Back 3 Cancels
        </div>

        <p>
          Same as B2 the B3 can also be shortcut cancelled into a forward move.
        </p>

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
          <strong>B3 exDB3</strong> cancels into Enhanced Teleport. This is an
          excellent way to force them into blocking, giving your teleport more
          freedom.
        </p>

        <p>
          As mentioned, Scorpion has a poor mix-up without Kameos. The B3 cancel
          is a good candidate for Kameo synergy.
        </p>
      </Callout>

      <h3>At a distance</h3>

      <p>
        Scorpion has dedicated anti-zoning/anti-turtle tools. His teleport{' '}
        <strong>
          DB3 is a magnificent, albeit predictable and unsafe, projectile spam
          counter
        </strong>
        . Record a dummy of a zoning character (e.g. Liu Kang BF1) doing
        projectile block projectile and try to time your port with them
        launching a projectile.
      </p>

      <p>
        Of course, they will start to successfully block and counter your
        teleports at some point. This is where the DB3ex comes in handy. It
        still teleports Scorpion but skips the hit and just re-stands him next
        to them. Now, while they are blocking in anticipation of your teleport’s
        hit, you do a surprise throw. Don’t abuse this, but practice doing a
        routine teleport into a throw check on them from time to time.
      </p>

      <p>
        If they keep predicting your teleports or if they just keep blocking and
        staying away, use the Devouring Flame. BF4 is a very slow (31 frames),
        very unsafe (-38 on block), low attack that guarantees a hit if they
        don’t jump over it. This is your final "force them to face you" gadget
        that makes Scorpion a true all-ranges character.
      </p>

      <p>
        The enhanced version is unblockable and deals damage over time. If you
        knock them down with DB2 or F34 into BF4ex - that is guaranteed damage.
        But whether it’s enhanced or not, it is very punishable, so use it if
        the situation requires at some distance.
      </p>

      <h3>Baiting Whiffs</h3>

      <p>
        A whiff from one side often motivates the other side into action – a
        dash, jump or attack. At medium distance you can{' '}
        <em>
          deliberately throw a punch into empty air followed immediately by a
          spear
        </em>
        . Even at higher ranks, if not abused, you will find that many opponents
        will dash forward into the spear. This is easy/cheap but legit tech. Be
        mindful - it is punishable.
      </p>

      <p>
        Scorpion like any character also has string derail options to keep the
        other player guessing. The complete 12 string - <strong>122</strong> -
        ends in an overhead that can be punished with an up block. Condition
        your foe with the full string then next time{' '}
        <em>cut it short - 12 into a throw</em>.
      </p>

      <p>
        We didn't mention <strong>forward 34</strong> above, but it is a mid-mid
        that chains into dash and many Kameo moves. It is less valuable than the
        other normals, but you can use it from time to time as a respect check.
        If they block it consistently, you can try F3 into a throw.
      </p>

      <p>
        We already know the value of the enhanced teleport, but there are
        further mind games we can play with it. People expect you to teleport
        from some distance, not from a blocked string up close. If you enhance
        teleport after the opponent blocked your attack you can prompt them to
        counter punch. Use that to <em>micro-duck</em> into 12/21.
      </p>

      <h2>Punish routes</h2>

      <p>
        As modular as Scorpion’s move set is, when playing online, consistency
        will defeat damage. In this regard we like to first suggest two
        Kameo-agnostic routes for you to begin with.
      </p>

      <h3>Spear Late</h3>

      <p>
        This gives the best damage-for-consistency. You can only profit if you
        learn to delay the spear.
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
        These are your bread-and-butter combos. In general, 36-40% damage is
        more than enough.{' '}
      </p>

      <p>
        The trick with the latter one is to delay the 111 until both of you are
        closer to the ground. If executed correctly they will bounce off the
        ground allowing for the follow up spear to connect. You end both with
        the familiar 33 DB2.
      </p>

      <h3>Spear early</h3>

      <p>
        OK, you landed a spear without a launch. Now what? The 3x F32 is still
        there, but the combo ender must modify as you don't have the re-stand
        anymore.
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

      <p>For the latter only an air DB2 will connect.</p>

      <h3>Extending via air Flame-Port</h3>

      <p>
        Yes, you can also expand combos with Scorpion’s teleport. However, it is
        much harder, requires tight execution and doesn’t necessarily cause more
        damage than your other tools to make it worth the effort.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> J3 airDB3{' '}
        <span className="text-sm italic">land</span> B2 F2{' '}
        <span className="text-light"> - resourceless 21.7% damage</span>
      </p>

      <p>
        The above combo is from the challenges. It appears simple but the
        teleport must be at the level of the opponent. If they are on the
        ground, it must be close to the ground. So, the timing of the first jump
        kick and the land into a B2 or anything for that matter is hard. Most of
        the time you will find that a regular air teleport will not hit. To
        properly chain it must be an augmented teleport followed by an attack.
        Here is one example.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> F32 J12 airDB3ex J13{' '}
        <span className="text-sm italic">land</span> BF1 33 DB3{' '}
        <span className="text-light"> - one bar 33.4% damage</span>
      </p>

      <p>
        If you try it, you will see that there is some weir timing with the
        enhanced teleport into the 13 - the teleport will often miss the target
        or will not connect with the following hits. It is difficult and not
        that rewarding.
      </p>

      <p>
        What might be more effective however is an enhanced teleport from some
        distance. Most players don’t expect to be hit from a jump far away from
        them. Even if you execute the teleport higher than necessary, you can
        wait a bit to fall down for a proper attack.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mb-1 inline" /> airDB3ex J3{' '}
        <span className="text-sm italic">land</span> BF1 F32 F32 F34 BF2{' '}
        <span className="text-light"> - one bar 30.8% damage</span>
      </p>

      <p>
        This makes sense from a surprise prespective. If you wish to optimize
        you may (but should not in the begining) spend some time on these.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" /> exJDB3 J3 DB3{' '}
        <span className="text-sm italic">land</span> F32 F32 4 BF1 33 DB2{' '}
        <span className="text-light">for 41.1% one meter damage</span>
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" /> exJDB3 J3 DB3{' '}
        <span className="text-sm italic">land</span> 4 BF1 F32 J12 exJDB2{' '}
        <span className="text-sm italic">small pause</span> J111 JDB2{' '}
        <span className="text-light">for 44.9% two meter damage</span>
      </p>

      <h2>Corner combos</h2>

      <p>
        This is where you can spike the damage. The regular standing 4 kick is
        not very impressive, but it scales wonderfully. If you practice
        launching an opponent in the corner with a single F32 and hitting them
        as high as possible with 4, you can chain two of these for some very
        good damage.
      </p>

      <p className="font-bold">
        <GiPunchBlast className="mr-1 mb-1 inline" />
        F32 4 4 BF1 F32 J12 airDB2ex{' '}
        <span className="text-sm italic">small pause</span> J111 JDB2
        <span className="text-light"> - one bar 44.6% damage</span>
      </p>

      <p>
        The second 4 is kind of demanding, so don’t worry if you do only one -
        the same combo will still do over 40% damage.
      </p>

      <p>
        If you are about to win the round, and you feel confident, you can spice
        the above further with some tight timings.
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
        Yes, the enhanced Devouring Flame is guaranteed damage, but if they
        survive, they also get a guaranteed wakeup punish. You cannot recover in
        time.
      </p>

      <h2>Advanced Tech</h2>

      <h3>Enhanced Flame-Port jail</h3>

      <p>
        This is not beginner level tech. A lot of the corner combos end in J111
        into something else. If you end it with an enhanced air teleport into a
        kick you will jail your opponent. If they get up and press any button
        other than block, they will get hit. If done correctly, they will spin
        around trying to attack you as you come from the corner and you will get
        a free hit, even break armor. This is a bit flaky, and it doesn’t happen
        100% of the time, but
      </p>
    </article>
  )
}
