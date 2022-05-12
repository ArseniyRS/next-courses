import axios from 'axios'
import Button from '../components/Button/Button'
import Htag from '../components/Htag/Htag'
import Raiting from '../components/Raiting/Raiting'
import Tag from '../components/Tag/Tag'
import { MenuItem } from '../interfaces/menu.interface'
import { withLayout } from '../layout/Layout'

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
function Home({ menu, firstCategory }: HomeProps) {
  return (
    <>
      <Htag tag="h1">Test</Htag>
      <Button>click</Button>
      <Tag color="red">smthing</Tag>
      <Tag color="ghost">smthing</Tag>
      <Tag color="green">smthing</Tag>
      <Tag>smthing</Tag>
      <Raiting />
      {menu.map((item) => (
        // eslint-disable-next-line no-underscore-dangle
        <span key={item._id.secondCategory}>{item._id.secondCategory}</span>
      ))}
    </>
  )
}
export default withLayout(Home)
export async function getStaticProps() {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
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
