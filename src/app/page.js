
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'
import Footer from './components/Footer'
import { findCards } from './utils/supabase-client'

export const revalidate = 0
export default async function Home() {
  
  const Cards = await findCards()
        
  return (
  <div>
    <Navbar />
    <PageTitle title="Home" />
    <PageContent content='This is the DrippyHippy by Nikki storefront website!'  />
    <div className='flex gap-4 w-full my-6 p-6 flex-wrap'>
      {Cards.map((card, index) => (
        <Card key={index} title={card.title} img={card.img} description={card.description} />
      ))}
    </div>
    <Footer />
  </div>
  )
}
