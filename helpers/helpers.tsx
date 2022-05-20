import React from 'react'
import { ETopLevelCategory } from '../interfaces/page.interface'
import CoursesIcon from '../layout/Menu/icons/courses.svg'
import ServicesIcon from '../layout/Menu/icons/services.svg'
import BooksIcon from '../layout/Menu/icons/books.svg'
import ProductsIcon from '../layout/Menu/icons/products.svg'

interface FirstLevelMenu {
  route: string
  name: string
  icon: React.ReactElement
  id: ETopLevelCategory
}
export const firstLevelMenu: FirstLevelMenu[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: ETopLevelCategory.Courses },
  { route: 'services', name: 'Услуги', icon: <ServicesIcon />, id: ETopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: ETopLevelCategory.Books },
  { route: 'books', name: 'Продукты', icon: <ProductsIcon />, id: ETopLevelCategory.Products },
]
