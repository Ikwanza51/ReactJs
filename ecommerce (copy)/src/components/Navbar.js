import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import {mobile} from '../responsive'

const Container = styled.div`
    background-color: black;
    color: white;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;

    ${mobile({padding: '2px'})}
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Languages = styled.div`
    margin-left: 15px;
    cursor:pointer;

    ${mobile({ display:'none'})}
`
const SearchInput = styled.div`
    border-radius: 2px;
    margin-left: 15px;
    display:flex;
    align-items: center;
    justify-content: center;

    ${mobile({ marginLeft:'2px'})}

`
const InputTextarea = styled.input`
    padding-top: 1px;
    padding-left: 10px;

    ${mobile({ width:'50%',paddingLeft:'3px'})}
`
const SearchButton = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    cursor:pointer;
    display:flex;
    align-items: center;
`

const Center = styled.div`
    text-align: center;
    flex:1;
    font-weight:1000;
    font-size:23px;
    display:flex;
    align-items:center;
    justify-content: center;

    ${mobile({ fontSize:'20px'})}
`
const Right = styled.div`
    font-align: right;
    flex:1;
    display: flex;
    flex-direction: row-reverse;
    padding: 0px 5px;
`
const MenuItem1 = styled.div`
    margin-right: 15px;
    cursor:pointer;
    display:none;

    ${mobile({ display:'flex'})}
`

const MenuItem = styled.div`
    margin-right: 15px;
    cursor:pointer;

    ${mobile({ display:'none'})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Languages>ENG</Languages>
                <SearchInput>
                    <InputTextarea placeholder='Search'></InputTextarea>
                    <SearchButton>
                        <SearchOutlinedIcon fontSize='small'></SearchOutlinedIcon>
                    </SearchButton>
                </SearchInput>
            </Left>
            <Center>HARNOOR</Center>
            <Right>
                <MenuItem1>
                    <MenuIcon></MenuIcon>
                </MenuItem1>
                <MenuItem>Register</MenuItem>
                <MenuItem>
                    <PersonIcon></PersonIcon>
                </MenuItem>
                <MenuItem>
                    <ShoppingCartIcon></ShoppingCartIcon>
                </MenuItem>
                
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar