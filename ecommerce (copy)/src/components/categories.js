import React from 'react'
import styled from 'styled-components'
import { containerData } from './Data'
import {mobile} from '../responsive'

const Categories_block = styled.div`
    // height:50vh;
    // width:100vw;
    margin: 1%;
    display:flex;
    justify-content: space-between;
    position: relative;
    ${mobile({flexDirection: 'column'})}
`
const Category = styled.div`
    flex:1;
    margin: 1%;
    border:1px solid grey;
    position:relative;
`
const Image = styled.img`
    height:100%;
    width:100%;
`

const Info = styled.div`
    position:absolute;
    top:40%;
    width:60%;
    height:50%;
    z-index:20;
    left:17%;
`
const Title = styled.h2`
    margin:2% auto;
    background-color:transparent;
    color:white;
    text-align:center;
    font-weight:1000;
    letter-spacing:5px;
    width:50%;
`
const Button = styled.button`
    border:1px solid black;
    display:block;
    margin:auto;
    font-weight:bold;
    cursor:pointer;
    transition:all 0.5s ease;

    &:hover {
        transform:scale(1.1);
        letter-spacing:2px;
    }
`

const Categories = () => {
  return (
        <Categories_block>
            { containerData.map((data) => (
            <Category>
                <Image src={data.img_url}></Image>
                <Info>
                    <Title>{data.title}</Title>
                    <Button>Shop Now</Button>
                </Info>
            </Category>
            ))}
        </Categories_block>        
  )
}

export default Categories