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
      <PageContent content='I am a vivid art lover on the West Coast. I am constantly craving adventure, and when I go somewhere, I document it. I love to be on both sides of the lens, I feel like it gives me a better knowledge of how to effectively collaborate with other artists. If I had to choose any quote to be my motto, it would be "We take photos as a return ticket to a moment otherwise gone" by Katie Thurmes'/>
      <CardForm />
    </div>
  )
}
