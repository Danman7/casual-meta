import { GiBolterGun, GiCastle, GiDeathSkull } from 'react-icons/gi'

export const METADATA_SUFFIX = '| Casual Meta'

export const WH40K_BASE_URL = '/warhammer-40k'
export const WH40K_TITLE = 'Warhammer 40k'

export const MK1_BASE_URL = '/mortal-kombat-1'
export const MK1_TITLE = 'Mortal Kombat 1'

export const HOMM3_BASE_URL = '/homm3'
export const HOMM3_TITLE = 'Heroes of Might and Magic 3'

export const ROOT_NAVIGATION_ITEMS = [
  {
    name: HOMM3_TITLE,
    shortTitle: 'HoMM3',
    href: HOMM3_BASE_URL,
    icon: <GiCastle />,
  },
  {
    name: MK1_TITLE,
    shortTitle: 'MK1',
    href: MK1_BASE_URL,
    icon: <GiDeathSkull />,
  },
  {
    name: WH40K_TITLE,
    shortTitle: 'WH40k',
    href: WH40K_BASE_URL,
    icon: <GiBolterGun />,
  },
]
