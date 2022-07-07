
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";
import {Navbar} from "../components/Navbar";
import {Announcement} from "../components/Announcement";
import {Newsletter} from "../components/Newsletter";
import {Footer} from "../components/Footer";
import TShirt3a from "../Images/tshirts/tshirt3a.png"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { mobile } from "../responsive";
import style from 'styled-theming'

const getNavBackground = style("mode", {
  dark: "#282c34",
  light: "#FCFBFB",
})

const getForeground = style("mode", {
  dark: "#fff",
  light: "#282c34",
})



// const Container = styled.div`
//     height: 60px;
//     background-color:${getNavBackground}; 
//      ${mobile({ height: "50px" })}
// `
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "50vh", marginTop:"10px"})}
`;

const InfoContainer = styled.div`
  margin-top: 100px;
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px", marginTop:"20px" })}
`;

const Title = styled.h1`
  font-weight: 400;
  ${mobile({ fontSize:"25px" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({fontSize:"15px"})}
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
  ${mobile({fontSize:"25px"})}
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  ${mobile({fontSize:"17px"})}
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: transparent;
  color:${getForeground};
  cursor: pointer;
  font-weight: 500;

`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={TShirt3a} />
        </ImgContainer>
        <InfoContainer>
          <Title>Goku & Oozaru -Dragon Ball Z</Title>
          <Desc>
          Make this a Slider with multiple images.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Desc>
          <Price>Rs 1.500,00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#EDEDED" />
              <FilterColor color="#DF5A83" />
              <FilterColor color="#B1B1B1" />
              <FilterColor color="#535F60" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
            <RemoveIcon/>
              <Amount>1</Amount>
              <AddIcon/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;