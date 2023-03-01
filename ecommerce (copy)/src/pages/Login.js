import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    height:100vh;
    width:100vw;
    border:1px solid black;
    background-image: url(./background.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Wrapper = styled.div`
    width:30vw;
    margin-top:10%;
    margin-left:20%;
    padding-top:1px;
    border-radius:25px;
    background-color:wheat;
    border:1px solid grey;
    ${mobile({width:'70vw',marginLeft:'15%',marginTop:'50%'})}
`

const Title = styled.h1`
    text-align:center;
    letter-spacing:5px;
    background-color:grey;
    color:white;
`

const Form = styled.form`
    margin:5%;
    display:flex;
    flex-direction:column;
`

const Input = styled.input`
    margin:2% auto;
    width:80%;
    padding:3%;
    border:2px solid grey;
`

const Button = styled.button`
    width:40%;
    margin:4% auto;
    font-size:20px;
    letter-spacing:1px;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder='Phone Number Or Email'></Input>
                <Input placeholder='Password'></Input>
                <Button>Sign In</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login