import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../responsive";
import style from "styled-theming"

const getNewsBackground = style("mode", {
  dark: "#393e47",
  light: "#fcf5f5",
})

const Container = styled.div`
  height: 60vh;
  background-color: ${getNewsBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h2`
  font-size: 60px;
  margin-bottom: 20px;
  ${mobile({fontSize: "38px"})}
`

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "16px"})}
`

const InputContainer = styled.div`
  width: 42%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 2px solid #000000;
  ${mobile({ width: "80%" })}
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  &:focus{
    outline: none;
  }
`

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}
