import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import CardForm from '../components/CardForm'
import MyTable from '../components/MyTable'
import {findCards} from '../utils/supabase-client.js'

export const revalidate = 0

const cardTableColumns = [
  {
      title: 'Title',
      key : 'title',
  },
  {
      title: 'Description',
      key : 'description',
  },
  {
      title: 'Image',
      key : 'img',
  },
]

export default async function About() {
  const cards = await findCards()
  return (
    <div>
      <Navbar />
      <PageTitle title="About" />
      <PageContent content="This project showed me how we can go about templating our pages so we can reduce our time spent typing."/>
      <CardForm />
      <MyTable columns = {cardTableColumns} records = {cards}/>
    </div>
  )
}
