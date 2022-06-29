import React from 'react'
import styled from 'styled-components'
import {MailOutline, FacebookOutlined, Phone, Pinterest, Twitter, Room, Instagram} from '@mui/icons-material'
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`
font-family: 'satisfy';
${mobile({textAlign: "center"})}
`

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({textAlign: "center", fontSize:"15px"})}
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({fontSize:"15px"})}
`

const Payment = styled.img`
    width: 50%;
`

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Eunoia</Logo>
        <Desc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis viverra nisl,
        rhoncus tincidunt lorem molestie semper. Curabitur volutpat dolor libero, nec cursus sem eleifend non.
        In bibendum felis nunc, non.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlined />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 221B Baker Street, London
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +31 12 34 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@brandname.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}
