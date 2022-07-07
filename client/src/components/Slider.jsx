import React, {useState} from 'react';
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {sliderItems} from '../data'
import { mobile } from "../responsive";
import style from "styled-theming"

const getSliderBackground = style("mode", {
    dark: "#181B22",
    light: "#f5f1ed",
  })
  const getForeground = style("mode", {
    dark: "#fff",
    light: "#000000",
  })
const getArrowTheme = style("mode",{
  dark:"#7C7C7C",
  light:"#FCFBFB"
})

const Container = styled.div`
    	height: calc(100vh - 90px);
        width: 100%;
        display: flex;
        background-color: ${getSliderBackground};
        position: relative;
        overflow: hidden;
        ${mobile({ display: "none" })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
   // background-color: #FCFBFB;
   background-color: ${getArrowTheme};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    bottom: 0;
    margin: auto;
    z-index: 5;
    cursor: pointer;
    opacity: .7;
    left: ${props => props.direction === "left" && "15px"};
    right: ${props => props.direction === "right" && "15px"}
`

const Wrapper = styled.div`
display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
 // background-color: ${props => props.bg};
 background-color:${getSliderBackground};
  width: 100vw;
  height:  calc(100vh - 90px);
  display: flex;
  align-items: center;
`

const ImgContainer = styled.div`
  height:100%;
  flex:1;
`
const Button = styled.button`
  padding: 8px;
  font-size: 15px;
  letter-spacing: 1.2px;
  font-weight: 600;
  background-color: transparent;
  color:${getForeground};
  border: 2px solid ${getForeground};
  cursor: pointer;
  &:hover{
    background-color: rgba(55,51,51,0.49);
  }
  transition-duration: 0.4s;
`
const Image = styled.img`
height: 100%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 50px;
`
const Desc = styled.p`
  margin: 40px 0;
  max-width: 380px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.2px;
`

export const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) =>{
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    } 
    }

  return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}><ArrowBackIosNewOutlinedIcon/></Arrow>
          <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
          </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}><ArrowForwardIosOutlinedIcon/></Arrow>
    </Container>
  )
}
