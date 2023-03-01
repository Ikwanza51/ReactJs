import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { itemsData } from './Data'
import {mobile} from '../responsive'

const Wraptext =  styled.div`
    width: 99vw;
`

const Items = styled.div`
    // border: 1px solid black;
    // background-color:wheat;
    width:100%;
    margin:1% auto;
    display:flex;
    justify-content:space-around;
    flex-wrap: wrap;
    position: relative;
`

const Icons = styled.div`
    width:60%;
    position: absolute;
    top:45%;
    left:20%;
    z-index:20;
    display:flex;
    justify-content:space-around;
    opacity:0;
`

const Item = styled.div`
    border: 2px solid grey;
    background-color:aliceblue;
    margin:1%;
    height: 300px;
    width: 300px;
    position: relative;

    &:hover ${Icons}{
        opacity: 1;
        z-index:30;
    }

    ${mobile({width:'150px',height:'150px'})}
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
`

const Icon = styled.div`
    color: white;
    background-color:grey;
    transition: all 0.5s ease;
    opacity:1;
    cursor:pointer;
    display:flex;
    justify-content:center;
    border-radius:10px;

    &:hover {
        transform: scale(1.2);
    }
`

const Products = () => {
  return (
    <Wraptext>
        <Items>
            {itemsData.map((item) =>(
                <Item>
                    <Image src={item.img} key={item.id}></Image>
                    <Icons>
                        <Icon><ShoppingCartOutlinedIcon fontSize='large'></ShoppingCartOutlinedIcon></Icon>
                        <Icon><SearchOutlinedIcon fontSize='large'></SearchOutlinedIcon></Icon>
                        <Icon><FavoriteBorderOutlinedIcon fontSize='large'></FavoriteBorderOutlinedIcon></Icon>
                    </Icons>
                </Item>
            ))}
        </Items>
    </Wraptext>
  )
}

export default Products