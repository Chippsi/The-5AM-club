import { Layout } from 'antd'
import { ReactNode } from 'react'
import { Container } from '../../UI/Atoms/Container'
import styles from './styles.module.less'

const { Header, Footer, Content } = Layout

interface HomeTmpProps {
   header: ReactNode
}

export const HomeTmp = ({ header }: HomeTmpProps) => {
   return (
      <Layout className={styles.layout}>
         <Header>
            <Container children={header} />
         </Header>
         <Content>
            <Container children={'Content'} />
         </Content>
      </Layout>
   )
}
