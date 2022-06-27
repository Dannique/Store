import styled from "styled-components";
import {MailOutline, FacebookOutlined, Instagram} from '@mui/icons-material'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.pcclean.io/wp-content/uploads/2020/4/IBnMBz.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  text-align: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const LoginText = styled.p`
  font-size: 12px;
  margin: 20px 0px;
  text-align: center;
`
const LoginLink = styled.a`
text-decoration: underline;
font-size: 14px;
cursor: pointer;
`

const SocialIcons = styled.div`
text-align: center;
margin-top:45px;
`
const SocialIcon = styled.a`
    text-decoration: none;
    margin:10px;
    color: ${(props) => props.color};
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
        <LoginText>
            Already have an account? <LoginLink>Login</LoginLink>
        </LoginText>
        <SocialIcons>
        <SocialIcon color="#BB001B" href="https://google.com"><MailOutline/></SocialIcon>
        <SocialIcon color="#3b5998" href="https://www.facebook.com/eunoiastore.lk/shop/?ref_code=mini_shop_page_card_cta&ref_surface=mini_shop_product_details"><FacebookOutlined/></SocialIcon>
        <SocialIcon color="#DD2A7B" href="https://www.instagram.com/eunoia.lk/"><Instagram/></SocialIcon>
        </SocialIcons>
      </Wrapper>
    </Container>
  );
};

export default Register;