import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import Header from './Header';
import HeroImg from '../assets/images/illustration.png';
const Hero = () => {
    return (_jsxs(Container, { children: [_jsx(Header, {}), _jsxs(Wrapper, { children: [_jsx("h1", { children: "Mountain NFT Collectibles" }), _jsx("img", { src: HeroImg, alt: "" })] })] }));
};
export default Hero;
const Container = styled.div `
  position: relative;
  padding: 20px 50px;
  height: 100vh;
  background-color: black;
  

  h1 {
    /* border: 1px solid red; */
    color: white;
    font-size: 64px;
    max-width: 500px;
    margin-top: calc(100vh - 295px);

    @media (max-width: 450px) {
      font-size: 48px;
      order: 2;
    }
    /* margin-top: 50px; */
    

  }
`;
const Wrapper = styled.div `
  display: flex;
  @media (max-width: 450px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

  }
  
  img {
    width: 766px;
    height: 766px;
    z-index: 100;

    @media (max-width: 450px) {
    width: 300px;
    height: 420px;
    order: 1;
    /* display: none; */
    }
  }

  
`;
