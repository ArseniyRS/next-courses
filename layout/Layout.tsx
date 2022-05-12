import React, { PropsWithChildren } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import styles from './Layout.module.scss'

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />

      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>

      <Footer className={styles.footer} />
    </div>
  )
}

export default Layout

export function withLayout<T extends Record<string, unknown>>(Component: React.FC<T>) {
  return function WrappedComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
