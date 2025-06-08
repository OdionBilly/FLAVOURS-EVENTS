import React from 'react'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { SubNav } from '../components/SubNav'
import { Bottom } from '../layout/Bottom'
import { Cart } from '../layout/Cart'
// import { Product } from '../components/product'

export const Home = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <SubNav/>
        <Bottom/>
        <Cart/>
    </div>
  )
}
