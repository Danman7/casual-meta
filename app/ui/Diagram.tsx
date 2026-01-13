import { Flavor } from '@/app/ui/Flavor'
import { FlexWrapper } from '@/app/ui/FlexWrapper'

export const Diagram: React.FC<
  React.PropsWithChildren<{ className?: string; description?: string }>
> = ({ children, className, description }) => (
  <div>
    <FlexWrapper
      className={`p-4 justify-around text-neutral-800 bg-neutral-100 shadow-sm rounded ${className}`}
    >
      {children}
    </FlexWrapper>
    {description && <Flavor>{description}</Flavor>}
  </div>
)
