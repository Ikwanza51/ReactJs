import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Categories from '../components/categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'


const Container = styled.h1`
    width:100%;
    text-align:center;
    background-color:wheat;
    border-top:1px solid black;
    border-bottom:1px solid black;
    letter-spacing:5px;
    margin:1% 0%;
`

const Home = () => {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories />
        <Container>Popular Items</Container>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home