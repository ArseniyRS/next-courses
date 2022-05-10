import Button from '../components/Button/Button'
import Htag from '../components/Htag/Htag'
import Raiting from '../components/Raiting/Raiting'
import Tag from '../components/Tag/Tag'

function Home() {
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
export default Home
