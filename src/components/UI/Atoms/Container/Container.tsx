import { ReactNode } from 'react'
import { Box } from '../Box'
import styles from './styles.module.less'

interface ContainerProps {
   children?: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
   return <Box className={styles.container}>{children}</Box>
}
