'use client'

import { ROOT_NAVIGATION_ITEMS } from '@/app/constants'
import { Anchor } from '@/app/ui/Anchor'
import { useSectionNav } from '@/app/ui/NavigationProvider'
import { SectionNav } from '@/app/ui/SectionNav'

export const SideNavigation: React.FC<{ isMobile?: boolean }> = ({
  isMobile,
}) => {
  const sectionNav = useSectionNav()

  return (
    <nav
      className={`edge-padding blurred-surface w-72 divide-y divide-foreground/10 ${
        isMobile
          ? 'h-dvh overflow-y-auto pt-20'
          : 'sticky-aside max-h-[calc(100dvh-6rem)] overflow-y-auto'
      }`}
    >
      <div className="lg:hidden font-bold pb-4 mb-4 space-y-2">
        {ROOT_NAVIGATION_ITEMS.map((item) => (
          <Anchor key={item.href} href={item.href}>
            {' '}
            {item.name}
          </Anchor>
        ))}
      </div>

      {sectionNav ? (
        <SectionNav
          items={sectionNav.items}
          title={sectionNav.title}
          rootUrl={sectionNav.rootUrl}
        />
      ) : null}
    </nav>
  )
}
