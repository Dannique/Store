import styled from "styled-components";
import {Navbar} from "../components/Navbar";
import {Announcement} from "../components/Announcement"
import {Products} from "../components/Products";
import {Newsletter} from "../components/Newsletter";
import {Footer} from "../components/Footer"
//import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
 
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`;
const Option = styled.option``;


export const ProductList = () => {
    return (
      <Container>
        <Navbar />
        <Announcement />
        <Title>Our Own Designed Shirts!</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option disabled selected>
                Categories
              </Option>
              <Option>New Designs</Option>
              <Option>Popular</Option>
              <Option>Anime</Option>
              <Option>Cartoons</Option>
              <Option>Movies</Option>
              <Option>Games</Option>
              <Option>Other</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Colours
              </Option>
              <Option>Black</Option>
              <Option>White</Option>
              <Option>Dark Gray</Option>
              <Option>Light Gray</Option>
              <Option>Magenta</Option>
              <Option>Beige</Option>
              <Option>Slate Green</Option>
              <Option>Slate Blue</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price high→low</Option>
              <Option>Price low→high</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
      </Container>
    );
  };
  
