import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color:white;
    font-size: 15px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Announcement = () => {
  return (
    <Container>
        Super deal! Free shipping on orders above $50!
    </Container>
  )
}
