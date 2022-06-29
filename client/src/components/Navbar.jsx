import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60px;
    background-color:#FCFBFB; 
     ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding:10px 20px;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    ${mobile({ fontSize: "24px" })}
`
const Laguage = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left:35px;
    padding:5px;
    ${mobile({marginLeft: "4px"})}
`
const Input = styled.input`
    border: none;
    background-color: #FCFBFB;
    outline: none;
    ${mobile({ width: "50px"})}
`

const Center = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Logo = styled.a`
    text-decoration:none;
    font-family: 'Satisfy', cursive;
    /* letter-spacing: 1px; */
    /* font-weight: 500; */
    font-size: 2.2em;
    color:black;
    ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 26px;
    ${mobile({ fontSize: "12px", marginLeft: "3px" })}
`

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Laguage>EN</Laguage>
        <SearchContainer>
          <Input placeholder='Search'/>
          <SearchIcon style={{color:"gray", fontSize:"22px"}} />
        </SearchContainer>
      </Left>
      <Center>
        <Logo href='#home'>Eunoia</Logo>
      </Center>
      <Right>
        <MenuItems>
            REGISTER
        </MenuItems>
        <MenuItems>
            SIGN IN
        </MenuItems>
        <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
        </MenuItems>
      </Right>
      </Wrapper>
    </Container>
  )
}
