import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'

export default function Services() {
  return ( 
    <div>
      <Navbar />
      <PageTitle title="Services" />
      <PageContent content='What I can do for you.'/>
    </div>
    )
}