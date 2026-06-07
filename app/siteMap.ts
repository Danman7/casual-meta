import {
  HOMM3_BASE_URL,
  HOMM3_TITLE,
  MK_BASE_URL,
  MK_TITLE,
  SHORT_HOMM3_TITLE,
  SHORT_MK_TITLE,
  SHORT_WH40K_TITLE,
  WH40K_BASE_URL,
  WH40K_TITLE,
} from '@/app/constants'
import { generatePageMetadata } from '@/lib/metadata'

export type NavItem = {
  id: string
  title: string
  href: string
  description: string
  shortTitle?: string
  metadataTitle?: string
  children?: readonly NavItem[]
}

export type SectionNavData = {
  title: string
  shortTitle: string
  rootUrl: string
  description: string
  items: readonly NavItem[]
}

type PageId<Items extends readonly NavItem[]> =
  | Items[number]['id']
  | (Items[number] extends infer Item
      ? Item extends { children: infer Children extends readonly NavItem[] }
        ? PageId<Children>
        : never
      : never)

const defineSection = <const Section extends SectionNavData>(
  section: Section,
) => section

const findPage = <const Items extends readonly NavItem[]>(
  items: Items,
  id: PageId<Items>,
): NavItem => {
  for (const item of items) {
    if (item.id === id) return item

    if (item.children) {
      const child = findPage(item.children, id as PageId<typeof item.children>)
      if (child) return child
    }
  }

  throw new Error(`Unknown page id: ${id}`)
}

const normalizeHash = (hash?: string) => {
  const normalized = hash?.replace(/^#/, '')
  return normalized ? `#${normalized}` : ''
}

const pageHref = (page: NavItem, hash?: string) =>
  `${page.href}${normalizeHash(hash)}`

const pageMetadata = (section: SectionNavData, page?: NavItem) => {
  if (!page) {
    return generatePageMetadata(section.title, section.description)
  }

  return generatePageMetadata(
    page.metadataTitle ?? `${section.title}: ${page.title}`,
    page.description,
  )
}

export const homm3Section = defineSection({
  title: HOMM3_TITLE,
  shortTitle: SHORT_HOMM3_TITLE,
  rootUrl: HOMM3_BASE_URL,
  description:
    'A repository of guides for Heroes of Might and Magic 3 and its expansions.',
  items: [
    {
      id: 'castle',
      title: 'Castle',
      href: `${HOMM3_BASE_URL}/castle`,
      description:
        'An overview of the Castle faction in Heroes of Might and Magic 3.',
    },
    {
      id: 'creatureCompendium',
      title: 'Creature Compendium',
      href: `${HOMM3_BASE_URL}/creature-compendium`,
      description:
        'A repository of guides for Heroes of Might and Magic 3 and its expansions.',
    },
  ],
} as const)

export const mkSection = defineSection({
  title: MK_TITLE,
  shortTitle: SHORT_MK_TITLE,
  rootUrl: MK_BASE_URL,
  description:
    'Mortal Kombat 1 (MK1) is the latest chapter in the long-running, celebrated fighting game series.',
  items: [
    {
      id: 'movement',
      title: 'Movement',
      href: `${MK_BASE_URL}/movement`,
      description: 'How to move around the arenas in Mortal Kombat.',
    },
    {
      id: 'anatomyOfAttacks',
      title: 'Anatomy of attacks',
      href: `${MK_BASE_URL}/anatomy-of-an-attack`,
      description: 'How moves work in Mortal Kombat.',
    },
    {
      id: 'cancelling',
      title: 'Cancelling',
      href: `${MK_BASE_URL}/cancelling`,
      description: 'How chaining moves into strings works.',
    },
    {
      id: 'momentum',
      title: 'Momentum',
      href: `${MK_BASE_URL}/momentum`,
      description: 'How momentum and okizeme work in MK.',
    },
    {
      id: 'neutral',
      title: 'Neutral',
      href: `${MK_BASE_URL}/neutral`,
      description:
        'Understanding the Neutral state in Mortal Kombat 1 and its significance in gameplay.',
    },
    {
      id: 'pressure',
      title: 'Pressure',
      href: `${MK_BASE_URL}/pressure`,
      description: 'Mind games and conditioning in Mortal Kombat.',
    },
    {
      id: 'mk1',
      title: 'Mortal Kombat 1',
      href: `${MK_BASE_URL}/mk1`,
      metadataTitle: 'Mortal Kombat 1',
      description:
        'Mortal Kombat 1 or MK1 is the latest chapter in the long-running, celebrated fighting game series.',
      children: [
        {
          id: 'scorpion',
          title: 'Scorpion',
          href: `${MK_BASE_URL}/mk1/scorpion`,
          description: 'A breakdown of Scorpion in Mortal Kombat 1.',
        },
        {
          id: 'generalShao',
          title: 'General Shao',
          href: `${MK_BASE_URL}/mk1/general-shao`,
          description: 'A breakdown of General Shao in Mortal Kombat 1.',
        },
        {
          id: 'sektor',
          title: 'Sektor',
          href: `${MK_BASE_URL}/mk1/sector`,
          description: 'A breakdown of Sektor in Mortal Kombat 1.',
        },
      ],
    },
  ],
} as const)

export const wh40kSection = defineSection({
  title: WH40K_TITLE,
  shortTitle: SHORT_WH40K_TITLE,
  rootUrl: WH40K_BASE_URL,
  description: 'In the grim darkness of the far future, there is only war.',
  items: [
    {
      id: 'battleRound',
      title: 'The Battle Round',
      href: `${WH40K_BASE_URL}/battle-round`,
      description: 'Understand the sequence of turns in Warhammer 40k.',
    },
    {
      id: 'attackSequence',
      title: 'Attack sequence (Activation)',
      shortTitle: 'Attack sequence',
      href: `${WH40K_BASE_URL}/attack-sequence`,
      description:
        'Understand hit rolls, wound rolls, saves, and damage in Warhammer 40k.',
    },
    {
      id: 'datasheets',
      title: 'Datasheets',
      href: `${WH40K_BASE_URL}/datasheets`,
      description:
        'How to read datasheets in Warhammer 40k, including unit profiles and weapon stats.',
    },
    {
      id: 'profileArchetypes',
      title: 'Profile Archetypes',
      href: `${WH40K_BASE_URL}/profile-archetypes`,
      description:
        'Common profile archetypes in Warhammer 40k to help understand unit roles.',
    },
    {
      id: 'spaceMarines',
      title: 'Space Marines',
      href: `${WH40K_BASE_URL}/space-marines`,
      description: 'An overview of the Space Marines faction in Warhammer 40k.',
      children: [
        {
          id: 'coreSpaceMarineUnits',
          title: 'Core Space Marine units',
          shortTitle: 'Core units',
          href: `${WH40K_BASE_URL}/space-marines/units`,
          description: 'An overview of the Core Space Marine units.',
        },
        {
          id: 'spaceMarineChapterUnits',
          title: 'Space Marine chapter units',
          shortTitle: 'Chapter units',
          href: `${WH40K_BASE_URL}/space-marines/chapter-units`,
          description: 'An overview of the Space Marine chapter units.',
        },
        {
          id: 'spaceMarineDetachments',
          title: 'Space Marine detachments',
          shortTitle: 'Detachments',
          href: `${WH40K_BASE_URL}/space-marines/detachments`,
          description: 'An overview of the Space Marine detachments.',
        },
      ],
    },
  ],
} as const)

export const siteSections = [homm3Section, mkSection, wh40kSection] as const

export const rootNavigationItems = siteSections.map((section) => ({
  name: section.title,
  shortName: section.shortTitle,
  href: section.rootUrl,
}))

export type Homm3PageId = PageId<typeof homm3Section.items>
export type MkPageId = PageId<typeof mkSection.items>
export type Wh40kPageId = PageId<typeof wh40kSection.items>

export const homm3Page = (id: Homm3PageId) => findPage(homm3Section.items, id)
export const mkPage = (id: MkPageId) => findPage(mkSection.items, id)
export const wh40kPage = (id: Wh40kPageId) => findPage(wh40kSection.items, id)

export const homm3Href = (id: Homm3PageId, hash?: string) =>
  pageHref(homm3Page(id), hash)
export const mkHref = (id: MkPageId, hash?: string) =>
  pageHref(mkPage(id), hash)
export const wh40kHref = (id: Wh40kPageId, hash?: string) =>
  pageHref(wh40kPage(id), hash)

export const homm3Metadata = (id?: Homm3PageId) =>
  pageMetadata(homm3Section, id ? homm3Page(id) : undefined)
export const mkMetadata = (id?: MkPageId) =>
  pageMetadata(mkSection, id ? mkPage(id) : undefined)
export const wh40kMetadata = (id?: Wh40kPageId) =>
  pageMetadata(wh40kSection, id ? wh40kPage(id) : undefined)
