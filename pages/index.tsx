import axios from 'axios'
import { GetStaticProps } from 'next/types'
import Button from '../components/Button/Button'
import Htag from '../components/Htag/Htag'
import Raiting from '../components/Raiting/Raiting'
import Tag from '../components/Tag/Tag'
import { IMenuItem } from '../interfaces/menu.interface'
import { withLayout } from '../layout/Layout'

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[]
  firstCategory: number
}
function Home({ menu, firstCategory }: IHomeProps) {
  return (
    <>
      <Htag tag="h1">Test</Htag>
      <Button>click</Button>
      <Tag color="red">smthing</Tag>
      <Tag color="ghost">smthing</Tag>
      <Tag color="green">smthing</Tag>
      <Tag>smthing</Tag>
      <Raiting />
    </>
  )
}
export default withLayout(Home)
export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<IMenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}top-page/find`,
    { firstCategory },
  )
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}
