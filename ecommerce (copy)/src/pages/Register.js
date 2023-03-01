import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    height:100vh;
    width:99vw;
    border:1px solid black;
    background-image: url(./background.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const Wrapper = styled.div`
    // height:80vh;
    width:30vw;
    // border:1px solid black;
    border-radius:25px;
    margin:4% 0 0% 20%;
    padding-top:1px;
    background-color:wheat;
    padding-bottom:1%;
    ${mobile({width:'70vw',marginLeft:'15%',marginTop:'40%'})}
`

const Title = styled.h1`
    // border:1px solid black;
    text-align:center;
    letter-spacing:5px;
    background-color:grey;
    color:white;
`

const Form = styled.form`
    margin:5%;
    // border:1px solid black;
    display:flex;
    flex-direction:column;
`

const Input = styled.input`
    margin:2% auto;
    width:80%;
    // height:10%;
    padding:3%;
    border:2px solid grey;
`

const Accnowledge = styled.p`
    width:90%;
    margin:1% auto;
    color:red;
`

const Button = styled.button`
    width:40%;
    margin:2% auto;
    font-size:20px;
    letter-spacing:3px;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Register</Title>
            <Form>
                <Input placeholder='Name'></Input>
                <Input placeholder='Phone Number'></Input>
                <Input placeholder='E-mail'></Input>
                <Input placeholder='Password'></Input>
                <Input placeholder='Confirm Password'></Input>
                <Accnowledge>I am Agree to accept all the Terms and Conditions of Harnoor</Accnowledge>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register