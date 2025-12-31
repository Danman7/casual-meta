import { Flavor } from '@/app/ui/Flavor'
import { FlexWrapper } from '@/app/ui/FlexWrapper'

export const Graphic: React.FC<
  React.PropsWithChildren<{ className?: string; description?: string }>
> = ({ children, className, description }) => (
  <>
    <FlexWrapper
      className={`pt-2 justify-around text-neutral-800 bg-neutral-100 shadow-md rounded ${className}`}
    >
      {children}
    </FlexWrapper>

    {description && <Flavor>{description}</Flavor>}
  </>
)
