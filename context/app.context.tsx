import { createContext, PropsWithChildren, useMemo, useState } from 'react'
import { IMenuItem } from '../interfaces/menu.interface'
import { ETopLevelCategory } from '../interfaces/page.interface'

export interface IAppContext {
  menu: IMenuItem[]
  firstCategory: ETopLevelCategory
  setMenu?: (newMenu: IMenuItem[]) => void
}
export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: ETopLevelCategory.Courses,
})
export default function AppContextProvider({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>) {
  const [menuState, setMenuState] = useState<IMenuItem[]>(menu)

  const setMenu = (newMenu: IMenuItem[]) => {
    setMenuState(newMenu)
  }

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  )
}
