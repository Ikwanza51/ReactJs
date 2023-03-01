import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {mobile} from '../responsive'

const Container = styled.div``;

const Wrapper = styled.div`
  border: 1px solid black;
  width: 97vw;
  display: flex;
  padding: 1%;
  background-color: gainsboro;
  margin: 1% auto;

  ${mobile({flexDirection: 'column'})}
`;

const Image = styled.img`
  flex: 1;
  height:80vh;
`;

const ImageInfo = styled.div`
    flex:1;
    border: 5px solid black;
    margin:1%;
    flex: 1;
`;

const Title = styled.h1`
    background-color:wheat;
    text-align: center;

    ${mobile({fontSize:'24px'})}
`;

const Desc = styled.p`
  margin: 1% 5%;
  font-size:25px;
  border: 1px solid black;
  padding: 5%;
  background-color: purple;
  color:white;
  border-radius:30px;

  ${mobile({fontSize:'16px'})}
`;

const Price = styled.h3`
  margin-left:5%;
  width:50%;

  ${mobile({fontSize:'20px'})}
`;

const FilterContainer = styled.div`
    background-color:black;
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:70%;
    margin:1% auto;
    padding: 1% 2%;
    border-radius:7px;
`

const Filter = styled.div`
    // border: 1px solid white;
    color: white;
    // width:50%;
    display: flex;
    align-items: center;
    
`

const Select = styled.select`
    width:8vw;
    margin-left:4px;
    text-align: center;
    border-radius:20px;
    cursor: pointer;

    ${mobile({width:'20vw'})}
`

const Option = styled.option`
`

const QuantityContainer = styled.div`
  display:flex;
  justify-content:space-around;
  // border: 1px solid black;
  width:40%;
  height:10%;
  margin:1% auto;
  margin-top:3%;

  ${mobile({width:'50%'})}
`

const Quantity = styled.div`
  flex:1;
  // border: 1px solid black;
  display: flex;
  align-items:center;
  justify-content:space-between;
`

const Amount = styled.h3`
  flex:2;
  // font-size:20px;
  text-align:center;
  font-weight:bolder;

  ${mobile({fontSize:'18px'})}
`

const Qbutton = styled.button`
  // flex:1;
  // height:30%;
  width:2vw;
  font-size:20px;
  text-align:center;
  cursor:pointer;
  transition: all 0.5s ease;

  ${mobile({width:'6vw',fontSize:'14px'})}

  &:hover {
    transform: scale(1.1);
  }
`

const ButtonDiv = styled.div`
  flex:1;
  // border: 1px solid black;
  padding-left:10%;
  padding-top:1%;
  display:flex;
  align-items:center;
`

const Button = styled.button`
  cursor:pointer;
  border: 2px solid black;
  text-align:center;
  transition: all 0.5s ease;
  width:8vw;

  ${mobile({width:'20vw'})}


  &:hover {
    transform: scale(1.1);
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Image src="./jackets.jpg"></Image>
        <ImageInfo>
          <Title>Jacket</Title>
          <Desc>
            Dark Brown solid reversible jacket, has a mock
            collar, 4 pockets, zip closure, long sleeves, straight hem, and
            polyester lining
          </Desc>
          <Price>Price : ₹ 5999</Price>

          <FilterContainer>
            <Filter>
                <Select name='Color'>
                  <Option selected disabled>Color</Option>
                  <Option value='white'>White</Option>
                  <Option value='black'>Black</Option>
                  <Option value='red'>Red</Option>
                  <Option value='green'>Green</Option>
                  <Option value='olive'>Olive</Option>
                  <Option value='yellow'>Yellow</Option>
                </Select>
            </Filter>
            <Filter>
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
          </FilterContainer>
          
          <QuantityContainer>
            
            <Quantity>
              <Qbutton> - </Qbutton>
              <Amount>10</Amount>
              <Qbutton> + </Qbutton>
            </Quantity>

            <ButtonDiv>
              <Button>Add to Cart</Button>
            </ButtonDiv>
          </QuantityContainer>
        </ImageInfo>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
