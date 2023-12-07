import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Card from '../components/Card'
import { findJewelry } from '../utils/supabase-client'



export const revalidate = 0

const JewelryInfo = await findJewelry()

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