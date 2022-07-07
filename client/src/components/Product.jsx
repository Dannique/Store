import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import {productItems }from '../data';
import style from "styled-theming"

const getProductBackground = style("mode", {
    dark: "#22252C",
    light: "#f5fbfd",
  })
  
  const getProductCircleBackground = style("mode", {
    dark: "#333741",
    light: "#fff",
  })

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 270px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${getProductBackground};
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${getProductCircleBackground};
  position: absolute;
`

const Image = styled.img`
 // height: 75%;
 width: 100%;
  height: 100%;
  object-fit:contain;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color:black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color:#b4f0f0;
    transform: scale(1.1);
  }
`
const PriceContainer = styled.div`
z-index: 30;
position: absolute;
top: 0px;
background-color: rgba(0, 0, 0, 0);
min-width: 280px;

`
const Name = styled.p`
text-align: center;
font-size: 15px;
//color:#5e5e5e;
font-weight: 600;
letter-spacing: .5px;
`

const Price = styled.p`
text-align: center;
  font-size: 15px;
  color: teal;
  font-weight: 400;
`


export const Product = ({item}) => {
  return (
  
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon/>
        </Icon>
        <Icon>
          <SearchIcon/>
        </Icon>
        <Icon>
        <FavoriteBorderIcon/>
        </Icon>
      </Info>
      <PriceContainer>
      <Name>
        {item.title}
      </Name>
        <Price>
         Rs. {item.price}
        </Price>
      </PriceContainer>
      </Container>

  )
}
