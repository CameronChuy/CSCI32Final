import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'

export default function Contact() {
  return ( 
    <div>
      <Navbar />
      <PageTitle title="Contact" />
      <PageContent content="This is how you would contact me:"/>
    </div>
    )
}