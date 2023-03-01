import React from 'react'
import styled from 'styled-components'
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { mobile } from '../responsive';

const Container = styled.div`
    // height:35vh;
    padding-bottom:2%;
    border: 1px solid antiquewhite;
    background-color:antiquewhite;
`

const Title = styled.h1`
    border: 3px solid black;
    width: 25%;
    margin: 1% auto;
    margin-top:2%;
    text-align:center;
    color: black;
    letter-spacing:5px;
    ${mobile({ width:'50%',fontSize:'25px'})}
`

const Desc = styled.p`
    color: darkslategray;
    margin: 1%;
    margin-bottom:3%;
    font-size:24px;
    text-align:center;
    letter-spacing:5px;
    ${mobile({ fontSize:'15px'})}
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
const Search = styled.input`
    border: 1px solid slategrey;
    width:20vw;
    text-align:center;
    ${mobile({ width:'40%'})}
`
const Send = styled.div`
    padding:0px 5px;
    display: flex;
    justify-content: center;
    color: white;
    background-color:teal;
    border: 1px solid slategrey;
    cursor:pointer;

    &:hover {
        background-color:navy;
    }
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>To Get Latest Updates About Products. SUBSCRIBE!</Desc>
        <Wrapper>
            <Search></Search>
            <Send><SendSharpIcon></SendSharpIcon></Send>
        </Wrapper>
    </Container>
  )
}

export default Newsletter