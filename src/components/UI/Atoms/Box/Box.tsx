import { HTMLAttributes, ReactNode } from 'react'

interface BoxProps extends HTMLAttributes<HTMLOrSVGElement> {
   selector?: 'div' | 'section' | 'article'
   children?: ReactNode
}

export const Box = ({ children, selector: Tag = 'div', ...rest }: BoxProps) => {
   return <Tag {...rest}>{children}</Tag>
}
