import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'

export default function About() {
  return (
    <div>
      <Navbar />
      <PageTitle title="About" />
      <PageContent content="This project showed me how we can go about templating our pages so we can reduce our time spent typing."/>
    </div>
  )
}
