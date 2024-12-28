import styled from 'styled-components'
import Header from './Header'
import HeroImg from '../assets/images/illustration.png'

const Hero:React.FC = () => {
  return (
    <Container>
      <Header/>
      <Wrapper>
        <h1>Mountain NFT Collectibles</h1>
        <img src={HeroImg} alt="" />
      </Wrapper>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  padding: 20px 50px;
  height: 100vh;
  /* background: linear-gradient(#4646AD, #FF0FCA, #0500E2, #3087C7); */
  background-color: black;

  h1 {
    /* border: 1px solid red; */
    color: white;
    font-size: 64px;
    max-width: 500px;
    margin-top: calc(100vh - 295px);
  }
`
const Wrapper = styled.div`
  display: flex;

  
  img {
    width: 766px;
    height: 766px;
  }
`