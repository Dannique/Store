import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  //transition: transform 1s;
  ${mobile({ height: "60vh" })}
`
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative; 

  &:hover ${Image}{
    -webkit-filter: brightness(.5);
   filter: brightness(.5);
  }
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`;

const Title = styled.h1`
    color:#FFF;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:#000000;
    cursor: pointer;
    font-weight: 700;
    border: 2px solid #000000
`;

export const CategoryItem = ({item}) => {
  return (
    <Container>
          <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}
