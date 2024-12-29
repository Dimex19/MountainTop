import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
const Card = ({ image, srn }) => {
    return (_jsxs(Container, { children: [_jsx("img", { src: image, alt: "" }), _jsx("div", {}), _jsxs("div", { className: "details", children: [_jsx("p", { children: "Collectible" }), _jsxs("h2", { children: ["MNFT-", srn] })] })] }));
};
export default Card;
const Container = styled.div `
    position: relative;
    width: 323px;
    height: 433px;
    background-color: white;
    margin-bottom: 30px;


    img {
        width: 323px;
        height: 363px;
    }
    div {
        border: 1px solid black;
        width: 283px;
        height: 393px;
        position: absolute;
        top: 20px;
        left: 20px;
    }
    .details {
        position: absolute;
        top: 363px;
        left: 15px;
        background-color: white;
        width: 180px;
        height: 70px;
        border: none;
        padding: 5px;

        P {
            color: #C2C2C6;
            font-size: 14px;
        }
    }
`;