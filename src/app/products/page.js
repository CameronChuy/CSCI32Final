import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'

export default function Products() {
  return ( 
    <div>
      <Navbar />
      <PageTitle title="Products" />
      <PageContent content='This is what I got. Buy my stuff.'/>
    </div>
    )
}