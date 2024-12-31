import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Collectibles from "../components/Collectibles";
import CountDown from "../components/CountDown";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Home = () => {
    return (_jsxs(Container, { children: [_jsx(Hero, {}), _jsx(Marquee, {}), _jsx(CountDown, {}), _jsx(Collectibles, {}), _jsx(Newsletter, {}), _jsx("hr", {}), _jsx(Footer, {})] }));
};
export default Home;
const Container = styled.div `
  max-width: 1440px;
  margin: auto;
  background-color: black;
`;
