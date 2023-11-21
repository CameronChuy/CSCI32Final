import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Card from '../components/Card'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://uctbeefthbopurqnxuvv.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

let { data: JewelryInfo, error } = await supabase
  .from('Jewelry')
  .select('*')

export default async function Jewelry() {
  return ( 
    <div>
      <Navbar />
      <PageTitle title="Jewelry" />
      <PageContent content="My hand-crafted creations"/>
      <div className='flex  justify-between gap-4 w-full my-6 fle-wrap'>
        {JewelryInfo.map((card, index) => (
          <Card key={index} title={card.title} img={card.img} description={card.description} />
        ))}
      </div>
    </div>
    )
}