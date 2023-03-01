import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { slideData } from './Data';
import {mobile} from '../responsive'

const Container = styled.div`
    // border: 1px solid black;
    height:90vh;
    width: 99vw;
    position:relative;

    ${mobile({display:'none'})}
`
const Arrow = styled.div`
    position:absolute;
    background-color:white;
    border:1px solid black;
    border-radius:50%;
    top:50%;
    left:${(props) => props.direction === 'left' && '20px'};
    right:${(props) => props.direction === 'right' && '20px'};
    display:flex;
    cursor:pointer;
    z-index:10;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.2);
    }
`
const Wrapper = styled.div`
    // position:absolute;
    display:flex;
    height:90vh;
    width: 99vw;
    // border:1px solid black;
    overflow: hidden;

`

const ImgContainer = styled.div`
    // flex:1;
    display:flex;
    height:90vh;
    min-width: 100vw;
    transition: all 1.5s ease;
    transform:translateX(${(props) => props.current * -100}vw);

`

const Img = styled.img`
    flex:1;
    // height:90vh;
    // width:50%;
`
const Imginfo = styled.div`
    background-color:wheat;
    flex:1;
    // width:50%;
`
const Title = styled.h1`
    font-size:80px;
    margin:auto;
    padding-top:20%;
    padding-bottom:1%;
    text-align:center;
`
const Desc = styled.p`
    letter-spacing:3px;
    margin-top:10px;
    text-align:center;
    font-size:24px;
    border:1px solid black;
`
const Button = styled.button`
    border:2px solid black;
    border-radius:5px;
    margin-left:42%;
    // letter-spacing:3px;
    cursor:pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: scale(1.2);
        letter-spacing:3px;
    }
`

const Slider = () => {
    const [current,setCurrent] = useState(0);

    const changeSlides = (direction) => {
        if(direction ==='left'){
            current > 0 ? setCurrent(current-1) : setCurrent(2);
        }
        else if(direction === 'right'){
            current < 2 ? setCurrent(current + 1) : setCurrent(0);
        }
    }

  return (
    <Container>
        <Arrow direction='left' onClick={()=> changeSlides('left')}><ArrowBackIcon fontSize='large'></ArrowBackIcon></Arrow>
        <Wrapper>
            { slideData.map( (slide) => (
                <ImgContainer current={current}>
                    <Img src={slide.img_url}></Img>
                    <Imginfo>
                        <Title>{slide.title}</Title>
                        <Desc>{slide.desc}</Desc>
                        <Button>SHOW ON</Button>
                    </Imginfo>
                </ImgContainer>
            ))}
        </Wrapper>  
        <Arrow direction='right' onClick={()=> changeSlides('right')}><ArrowForwardIcon fontSize='large'></ArrowForwardIcon></Arrow>
    </Container>
  )
}

export default Slider