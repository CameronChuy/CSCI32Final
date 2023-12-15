'use client'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Cart from '../components/Cart'
import Card from '../components/Card'

const itemAttributes = new Map();

export default function Services() {
  return ( 
    <div>
      <Navbar />
      <PageTitle title="Services" />
      <PageContent content='What I can do for you.'/>
      <Cart />
    </div>
    )
}