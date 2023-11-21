import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'
import Footer from './components/Footer'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://uctbeefthbopurqnxuvv.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0
export default async function Home() {
  
const { data: Cards, error } = await supabase
.from('Cards')
.select("*")
        
  return (
  <div>
    <Navbar />
    <PageTitle title="Home" />
    <PageContent />
    <div className='flex  justify-between gap-4 w-full my-6 fle-wrap'>
      {Cards.map((card, index) => (
        <Card key={index} title={card.title} img={card.img} description={card.description} />
      ))}
    </div>
    <Footer />
  </div>
  )
}
