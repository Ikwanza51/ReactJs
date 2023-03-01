import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile} from '../responsive'

const Container = styled.div`
  width: 100vw;
`;

const Navigation = styled.div`
  width: 99vw;
  margin-top:1%;
  background-color:wheat;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Shopping = styled.button`
  border: 2px solid black;
  font-size:25px;
  background-color:Black;
  color:white;
  padding:0.25%;
  cursor:pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${mobile({fontSize:'15px'})}
`

const Wrapper = styled.div`
  margin: 4%;
  padding: 2% 3%;
  background-color: wheat;

  ${mobile({margin:'2%',padding:'1% 2%'})}
`;

const Title = styled.h1`
  margin: 0.5%;
  ${mobile({fontSize:'24px'})}
`;

const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({flexDirection:'column'})}
`;

const Bag = styled.div`
  flex: 2;

  ${mobile({width:'94vw'})}
`;

const SubContainer = styled.div`
  background-color: aliceblue;
  border-radius: 20px;
  padding-bottom: 1%;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  height: 22vh;
  padding: 1%;

  ${mobile({height:'16vh'})}
`;

const Image = styled.img`
  border: 3px solid black;
  flex: 1;
  heights: 100%;
  padding: 1%;

  ${mobile({padding:'0.5%'})}
`;

const Details = styled.div`
  background-color: black;
  flex: 3;
  padding: 0.7%;
  display: flex;
`;
const IDetail = styled.div`
  flex: 2;
  border-right: 3px solid black;
  background-color: white;
`
const Name = styled.h2`
    margin:1% 4%;
    letter-spacing:5px;
    color:brown;
    // border: 1px solid black;

    ${mobile({fontSize:'20px'})}
`

const IDesc = styled.p`
    margin:1% 2%;
    // border:1px solid black;
    font-size:0.8rem;
    word-spacing:5px;

    ${mobile({fontSize:'0.7rem'})}
`

const Quantity = styled.div`
  flex: 1;
  background-color: white;
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% auto;
`;
const Price = styled.h4`
  margin: 2% auto;
  background-color: black;
  color: white;
  padding-left: 3%;

  ${mobile({fontSize:'18px'})}
`;

const Quantity1 = styled.div`
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({height:'4vh'})}
`;

const Amount = styled.h3`
  font-size: 18px;
  margin-left: 4%;
  margin-right: 4%;
  text-align: center;
  font-weight: bolder;

  ${mobile({fontSize:'14px'})}
`;

const Qbutton = styled.button`
  width: 1vw;
  height: 2.5vh;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({fontSize:'16px',height:'2vh'})}

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonDiv = styled.div`
  flex: 1;
  padding: 2% 1%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 15px;
  background-color: black;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-align: center;
  transition: all 0.5s ease;
  margin-left:4%;

  ${mobile({marginLeft:'0.5%'})}

  &:hover {
    transform: scale(1.1);
  }
`;

const PTitle = styled.h4`
  margin-top: 1%;
  text-align: center;
  margin-bottom: 0px;

  ${mobile({fontSize:'15px'})}
`;

const Summary = styled.div`
  flex: 1;
  padding: 1% 2%;

  ${mobile({width:'75vw'})}
`;

const SOTitle = styled.h3`
  text-align: center;
  margin-bottom: 0.5%;
  ${mobile({fontSize:'20px'})}
`
const SDetail = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  font-size: 15px;
  margin-bottom: 3%;
`;

const Data = styled.div`
  flex: 3;
  padding-left: 5%;
  word-spacing: 1px;
`;

const Dprice = styled.div`
  flex: 1;
  text-align: center;
`;

const STotal = styled.div`
  display: flex;
  justify-content: center;
  background-color: Black;
  color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Total = styled.div`
  margin-right: 4%;
  letter-spacing: 3px;
`;

const TPrice = styled.div`
  font-weight: bolder;
`;

const Cart = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Navigation>
          <Shopping>Continue Shopping</Shopping>
          <Shopping>Proceed Checkout</Shopping>
        </Navigation>
        <Wrapper>
          <Title>Shopping Cart</Title>
          <ShoppingContainer>
            <Bag>
              <SubContainer>
                <SOTitle>BAG</SOTitle>
                <Item>
                  <Image src="./shoes.jpg"></Image>
                  <Details>
                    <IDetail>
                        <Name>Shoes</Name>
                        <IDesc>Color : Black</IDesc>
                        <IDesc>Size : 8 UK</IDesc>
                        <IDesc>Each : ₹500</IDesc>
                    </IDetail>

                    <Quantity>
                      <PTitle>------ Price ------</PTitle>
                      <Price>₹ 499</Price>
                      <QuantityContainer>
                        <Quantity1>
                          <Qbutton> - </Qbutton>
                          <Amount>2</Amount>
                          <Qbutton> + </Qbutton>
                        </Quantity1>

                        <ButtonDiv>
                            <Button>Edit</Button>
                            <Button>Remove</Button>
                        </ButtonDiv>
                      </QuantityContainer>
                    </Quantity>
                  </Details>
                </Item>
                <Item>
                  <Image src="./shirt.jpg"></Image>
                  <Details>
                    <IDetail>
                        <Name>Shirt</Name>
                        <IDesc>Color : Blue</IDesc>
                        <IDesc>Size : L</IDesc>
                        <IDesc>Each : ₹500</IDesc>
                    </IDetail>
                    <Quantity>
                      <PTitle>------ Price ------</PTitle>
                      <Price>₹ 799</Price>
                      <QuantityContainer>
                        <Quantity1>
                          <Qbutton> - </Qbutton>
                          <Amount>1</Amount>
                          <Qbutton> + </Qbutton>
                        </Quantity1>

                        <ButtonDiv>
                            <Button>Edit</Button>
                            <Button>Remove</Button>
                        </ButtonDiv>
                      </QuantityContainer>
                    </Quantity>
                  </Details>
                </Item>
                <Item>
                  <Image src="./rainjacket.jpg"></Image>
                  <Details>
                    <IDetail>
                        <Name>Rain Coat</Name>
                        <IDesc>Color : Sky Blue</IDesc>
                        <IDesc>Size : XL</IDesc>
                        <IDesc>Each : ₹500</IDesc>
                    </IDetail>
                    <Quantity>
                      <PTitle>------ Price ------</PTitle>
                      <Price>₹ 999</Price>
                      <QuantityContainer>
                        <Quantity1>
                          <Qbutton> - </Qbutton>
                          <Amount>1</Amount>
                          <Qbutton> + </Qbutton>
                        </Quantity1>

                        <ButtonDiv>
                            <Button>Edit</Button>
                            <Button>Remove</Button>
                        </ButtonDiv>
                      </QuantityContainer>
                    </Quantity>
                  </Details>
                </Item>
              </SubContainer>
            </Bag>
            <Summary>
              <SubContainer>
                <SOTitle>SUMMARY</SOTitle>
                <SDetail>
                  <Data>Sub Total:</Data>
                  <Dprice>₹ 1000</Dprice>
                </SDetail>
                <SDetail>
                  <Data>Delivery:</Data>
                  <Dprice>₹ 40</Dprice>
                </SDetail>
                <SDetail>
                  <Data>Discount:</Data>
                  <Dprice>- ₹ 40</Dprice>
                </SDetail>

                <STotal>
                  <Total>Total :</Total>
                  <TPrice>₹ 1000</TPrice>
                </STotal>
              </SubContainer>
            </Summary>
          </ShoppingContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
