import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import {mobile} from '../responsive'

const Container = styled.h1`
    width:100%;
    text-align:center;
    background-color:wheat;
    letter-spacing:5px;
    margin:1% 0%;
`
const Title = styled.h1`
    margin: 1% auto;
    width:30%;
    text-align: center;   
`

const FilterContainer = styled.div`
    background-color:black;
    display:flex;
    justify-content: space-between;
    margin-bottom:1%;
    padding: 1% 2%;
`

const Filter = styled.div`
    // border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
`
const FilterText = styled.span`
    font-size:20px;
    font-weight: 600;

    ${mobile({fontSize:'15px'})}
`

const Select = styled.select`
    width:8vw;
    margin-left:4px;
    text-align: center;
    ${mobile({width:'15vw'})}
`

const Option = styled.option`
    ${mobile({fontSize:'12px'})}
`

const ProductList = () => {
  return (
    <div>
        <Navbar/>
        <Announcements/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products :</FilterText>
                <Select name='Color'>
                    <Option selected disabled>Color</Option>
                    <Option value='white'>White</Option>
                    <Option value='black'>Black</Option>
                    <Option value='red'>Red</Option>
                    <Option value='green'>Green</Option>
                    <Option value='olive'>Olive</Option>
                    <Option value='yellow'>Yellow</Option>
                </Select>
                <Select name='Size'>
                    <Option selected disabled>Size</Option>
                    <Option value='XS'>XS</Option>
                    <Option value='S'>S</Option>
                    <Option value='M'>M</Option>
                    <Option value='L'>L</Option>
                    <Option value='XL'>XL</Option>
                    <Option value='XXL'>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products :</FilterText>
                <Select name='Price'>
                    <Option value='newest' selected>Newest</Option>
                    <Option value='asc'>Price (Asc)</Option>
                    <Option value='desc'>Price (Desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Container>All Products</Container>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  );
}

export default ProductList