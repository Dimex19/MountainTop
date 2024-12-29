import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import Card from "./Card";
import NFTOne from '../assets/images/nft1.png';
import NFTTwo from '../assets/images/nft2.png';
import NFTThree from '../assets/images/nft3.png';
import NFTFour from '../assets/images/nft4.png';
import NFTFive from '../assets/images/nft5.png';
import NFTSix from '../assets/images/nft6.png';
const Collectibles = () => {
    return (_jsxs(Container, { children: [_jsx(Card, { image: NFTOne, srn: "01" }), _jsx(Card, { image: NFTTwo, srn: "02" }), _jsx(Card, { image: NFTThree, srn: "03" }), _jsx(Card, { image: NFTFour, srn: "04" }), _jsx(Card, { image: NFTFive, srn: "05" }), _jsx(Card, { image: NFTSix, srn: "06" })] }));
};
export default Collectibles;
const Container = styled.div `
    background-color: black;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 50px;
`;
