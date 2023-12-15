import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import PolicyCard from '../components/PolicyCard'

export default function Products() {
  return ( 
    <div>
      <Navbar />
      <PageTitle title="Products" />
      <PageContent content='Please review our return policy'/>
      <PolicyCard />
    </div>
    )
}