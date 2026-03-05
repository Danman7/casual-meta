import Link from 'next/link'
import { JSX } from 'react'
import { CgWebsite } from 'react-icons/cg'
import { FaReddit, FaYoutube } from 'react-icons/fa'

type LinkType = 'website' | 'reddit' | 'youtube'

const TypeIconMap: Record<LinkType, JSX.Element> = {
  website: <CgWebsite />,
  reddit: <FaReddit />,
  youtube: <FaYoutube />,
}

export const SourceLink: React.FC<{
  href: string
  text: string
  type?: LinkType
}> = ({ href, text, type = 'website' }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex flex-wrapper"
  >
    {TypeIconMap[type]} {text}
  </Link>
)
