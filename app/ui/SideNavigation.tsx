'use client'

import { rootNavigationItems } from '@/app/siteMap'
import { Anchor } from '@/app/ui/Anchor'
import { useSectionNav } from '@/app/ui/NavigationProvider'
import { SectionNav } from '@/app/ui/SectionNav'

export const SideNavigation: React.FC<{ isMobile?: boolean }> = ({
  isMobile,
}) => {
  const sectionNav = useSectionNav()
  const rootItems = isMobile
    ? rootNavigationItems.filter((item) => item.href !== sectionNav?.rootUrl)
    : rootNavigationItems

  return (
    <nav
      className={`book-sidebar ${
        isMobile
          ? 'edge-padding blurred-surface h-dvh w-80 max-w-[85vw] overflow-y-auto pt-20'
          : 'sticky-aside max-h-[calc(100dvh-6rem)] w-full overflow-y-auto pr-3'
      }`}
    >
      {rootItems.length > 0 && (
        <div className="mb-6 space-y-2 border-b border-foreground/10 pb-5 font-bold lg:hidden">
          {rootItems.map((item) => (
            <Anchor key={item.href} href={item.href}>
              {item.name}
            </Anchor>
          ))}
        </div>
      )}

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
