import { FlexWrapper } from '@/app/ui/FlexWrapper'

export const Graphic: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <FlexWrapper
    className={`justify-around bg-neutral-100 shadow-md rounded ${className}`}
  >
    {children}
  </FlexWrapper>
)
