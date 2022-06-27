import styled from "styled-components";
import {MailOutline, FacebookOutlined, Instagram} from '@mui/icons-material'

//https://www.pcclean.io/wp-content/uploads/2020/4/IBnMBz.jpg
//https://www.pixelstalk.net/wp-content/uploads/2016/10/Anime-Landscape-Backgrounds.jpg
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpaper.dog/large/20468918.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 35%;
  border: none;
  padding: 13px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px 0 10px 0;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
text-align: center;
margin-top:65px;
`
const SocialIcon = styled.a`
    text-decoration: none;
    margin:10px;
    color: ${(props) => props.color};
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>Forgot Password?</Link>
          <Link>Create a New Account</Link>
        </Form>
        <SocialIcons>
        <SocialIcon color="#BB001B" href="https://google.com"><MailOutline/></SocialIcon>
        <SocialIcon color="#3b5998" href="https://www.facebook.com/eunoiastore.lk/shop/?ref_code=mini_shop_page_card_cta&ref_surface=mini_shop_product_details"><FacebookOutlined/></SocialIcon>
        <SocialIcon color="#DD2A7B" href="https://www.instagram.com/eunoia.lk/"><Instagram/></SocialIcon>
        </SocialIcons>
      </Wrapper>
    </Container>
  );
};

export default Login;