import { useId } from 'react'

import { Flavor } from '@/app/ui/Flavor'
import { FlexWrapper } from '@/app/ui/FlexWrapper'

export const Diagram: React.FC<
  React.PropsWithChildren<{ className?: string; description?: string }>
> = ({ children, className, description }) => {
  const descriptionId = useId()

  return (
    <div
      role="group"
      aria-describedby={description ? descriptionId : undefined}
    >
      <FlexWrapper
        className={`p-4 justify-around bg-surface shadow-sm rounded ${className}`}
      >
        {children}
      </FlexWrapper>
      {description && <Flavor id={descriptionId}>{description}</Flavor>}
    </div>
  )
}
