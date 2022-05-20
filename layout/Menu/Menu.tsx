import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppContext } from '../../context/app.context'
import styles from './Menu.module.scss'
import { PageItem } from '../../interfaces/menu.interface'
import { firstLevelMenu } from '../../helpers/helpers'

export default function Menu() {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const [secondMenuActive, setSecondMenuActive] = useState<string | null>(null)
  const router = useRouter()
  const handleClickSecondMenu = (id: string) => () => setSecondMenuActive(id)
  useEffect(() => {
    if (menu) {
      menu.forEach((item) => {
        if (item.pages.map((page) => page.alias).includes(router.asPath.split('/')[2])) {
          // eslint-disable-next-line no-underscore-dangle
          setSecondMenuActive(item._id.secondCategory)
        }
      })
    }
  }, [menu])
  const thirdLevelMenuElements = (relativeRoute: string, pages: PageItem[]) => (
    <ul className={styles.menu__third}>
      {pages.map((page) => (
        // eslint-disable-next-line no-underscore-dangle
        <li key={page._id}>
          <Link href={`${relativeRoute}/${page.alias}`}>
            <a>
              <span>{page.title}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
  const secondLevelMenuElements = (relativeRoute: string) => (
    <ul className={styles.menu__second}>
      {menu.map((item) => (
        <li
          aria-hidden="true"
          // eslint-disable-next-line no-underscore-dangle
          key={item._id.secondCategory}
          className={styles.active}
          onClick={handleClickSecondMenu(item._id.secondCategory)}
        >
          {item._id.secondCategory}
          {secondMenuActive === item._id.secondCategory
            && thirdLevelMenuElements(relativeRoute, item.pages)}
        </li>
      ))}
    </ul>
  )
  const firstLevelMenuElements = firstLevelMenu.map((item) => (
    <li key={item.id}>
      <Link href={`/${item.route}`}>
        <a className={item.id === firstCategory ? styles.menu__active : ''}>
          {item.icon}
          <span>{item.name}</span>
        </a>
      </Link>
      {item.id === firstCategory && secondLevelMenuElements(item.route)}
    </li>
  ))

  return (
    <div className={styles.menu}>
      <ul className={styles.menu__first}>{firstLevelMenuElements}</ul>
    </div>
  )
}
