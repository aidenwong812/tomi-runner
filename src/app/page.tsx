import React from 'react'
import Hero from './_components/home/hero'
import NavBar from './_components/navbar'
import Info from './_components/home/info'
import Footer from './_components/footer'
import PricingTable from './_components/home/table'

const Github = () => {
  return (
    <div className='bg-bg-100 min-h-screen'>
        <NavBar />
        <Hero />
        <Info />
        <PricingTable />
        <Footer />
        </div>
  )
}

export default Github