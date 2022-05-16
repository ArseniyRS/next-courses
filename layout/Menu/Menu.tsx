import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/app.context'
import { ETopLevelCategory, ITopPageModel } from '../../interfaces/page.interface'
import styles from './Menu.module.scss'
import CoursesIcon from './icons/courses.svg'
import ServicesIcon from './icons/services.svg'
import BooksIcon from './icons/books.svg'
import ProductsIcon from './icons/products.svg'
import { PageItem } from '../../interfaces/menu.interface'

interface FirstLevelMenu {
  route: string
  name: string
  icon: React.ReactElement
  id: ETopLevelCategory
}

const firstLevelMenu: FirstLevelMenu[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: ETopLevelCategory.Courses },
  { route: 'services', name: 'Услуги', icon: <ServicesIcon />, id: ETopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: ETopLevelCategory.Books },
  { route: 'books', name: 'Продукты', icon: <ProductsIcon />, id: ETopLevelCategory.Products },
]

export default function Menu() {
  const { menu, firstCategory } = useContext(AppContext)
  const [secondMenuActive, setSecondMenuActive] = useState(null)

  const thirdLevelMenuElements = (relativeRoute: string, pages: PageItem[]) => (
    <ul>
      {pages.map((page) => (
        // eslint-disable-next-line no-underscore-dangle
        <li key={page._id}>
          <a href={`${relativeRoute}/${page.alias}`}>
            <span>{page.title}</span>
          </a>
        </li>
      ))}
    </ul>
  )
  const secondLevelMenuElements = (relativeRoute: string) => (
    <ul>
      {menu.map((item) => (
        // eslint-disable-next-line no-underscore-dangle
        <li key={item._id.secondCategory} className={styles.active}>
          {item._id.secondCategory}
          {secondMenuActive === item._id.secondCategory &&
            thirdLevelMenuElements(relativeRoute, item.pages)}
        </li>
      ))}
    </ul>
  )
  const firstLevelMenuElements = firstLevelMenu.map((item) => (
    <li
      key={item.id}
      // className={active ? styles.active : ''}
    >
      <a href={`/${item.route}`}>
        {item.icon}
        <span>{item.name}</span>
      </a>
      {item.id === firstCategory && secondLevelMenuElements(item.route)}
    </li>
  ))

  return (
    <div>
      <ul>{firstLevelMenuElements}</ul>
    </div>
  )
}
