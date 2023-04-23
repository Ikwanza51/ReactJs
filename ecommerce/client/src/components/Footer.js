import React from "react";
import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from '../responsive'

const Container = styled.div`
  width: 100%;
  margin-top:1%;
  display: flex;
  background-color: Black;
`;

const Left = styled.div`
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  margin-bottom: 1%;
  text-align: center;
  color: wheat;
`;

const Desc = styled.p`
  margin-top: 0%;
  font-size: 15px;
  padding:5%;
`

const Social = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom:5%;
`

const Icon = styled.div`
    border: 1px solid White;
    border-radius:20%;
    margin: 2%;
    display: flex;
    justify-content: center;
    background-color:white;
    cursor:pointer;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }

    ${mobile({margin:'1%'})}
`

const Center = styled.div`
    flex: 1;
    padding: 2%;

    ${mobile({display: 'none'})}
`
const CenterTitle = styled.h3`
    color: wheat;
    text-align: center;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width:50%;
    color:white;
    font-size:16px;
    // cursor:pointer;
    text-align: center;
`

const Right = styled.div`
  flex: 1;
  padding:2%;
`

const RightTitle = styled.h3`
    color: wheat;
    text-align: center;
`

const ContentItem = styled.p`
    color:white;
    width:50%;
    margin:2% auto;
    text-align: center;
    font-size:15px;    
    display:flex;
    justify-content: center;
    cursor:pointer;

    ${mobile({width:'75%'})}
`
const Payment =  styled.img`
    margin-top: 1%;
    margin-left:25%;
    width:50%;
    cursor:pointer;
`

const Footer = () => {
  return (
    <Container>
      
      <Left>
        <Logo>Harnoor</Logo>
        <Desc>
          With the trendiest, freshest, and most unique styles from across India
          and the world, HARNOOR invites you to express your personal style
          fearlessly, and with a confidence and optimism that cannot be easily
          shaken.
        </Desc>
        <Social>
            <Icon><InstagramIcon style={{ color: "red" }}/></Icon>
            <Icon><FacebookIcon style={{ color: "blue" }}/></Icon>
            <Icon><YouTubeIcon style={{ color: "red" }}/></Icon>
            <Icon><LinkedInIcon style={{ color: "skyblue" }} /></Icon>
            <Icon><TwitterIcon style={{ color: "skyblue" }} /></Icon>
        </Social>
      </Left>

      <Center>
        <CenterTitle>Useful Links</CenterTitle>
        <List>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      
      <Right>
        <RightTitle>Contact Us</RightTitle>
        <ContentItem><HomeIcon fontSize="small" />New Delhi, India</ContentItem>
        <ContentItem><CallIcon fontSize="small" />+91 60065 XXXXX</ContentItem>
        <ContentItem><EmailIcon fontSize="small" />harnoor@harnoor.com</ContentItem>
        <Payment src='./payment.jpg'></Payment>
      </Right>
    </Container>
  );
};

export default Footer;
