import { createContext, PropsWithChildren, useMemo, useState } from 'react'
import { MenuItem } from '../interfaces/menu.interface'
import { ETopLevelCategory } from '../interfaces/page.interface'

export interface IAppContext {
  menu: MenuItem[]
  firstCategory: ETopLevelCategory
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
  const [menuState, setMenuState] = useState<MenuItem[]>(menu)
  function setMenu(newMenu: MenuItem[]) {
    setMenuState(newMenu)
  }
  const memoValues = useMemo(() => ({ menu: menuState, firstCategory, setMenu }), [])
  return <AppContext.Provider value={memoValues}>{children}</AppContext.Provider>
}
