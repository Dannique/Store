import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const Container = styled.div`
    height: 60px;
    background-color:#FCFBFB;
`

const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding:10px 20px;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Laguage = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left:35px;
    padding:5px;
`
const Input = styled.input`
    border: none;
    background-color: #FCFBFB;
    outline: none;
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
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 26px;
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
