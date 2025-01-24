import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
const Card = ({ image, srn }) => {
    return (_jsxs(Container, { children: [_jsx("img", { src: image, alt: "" }), _jsx(Viewer, { children: _jsx("p", {}) }), _jsx("div", {}), _jsxs("div", { className: "details", children: [_jsx("p", { children: "Collectible" }), _jsxs("h2", { children: ["MNFT-", srn] })] })] }));
};
export default Card;
const Viewer = styled.div ``;
const Container = styled.div `
    position: relative;
    width: 323px;
    height: 443px;
    background-color: white;
    margin-bottom: 30px;

    &:hover {
        width: 343px;
        height: 483px;
        transition: 0.5s ease-in;
        /* box-shadow: rgb(232, 229, 229) 0px 8px 8px; */
    }
    img {
        width: 100%;
        height: 82%;
    }
    div {
        border: 1px solid black;
        width: 90%;
        height: 90%;
        position: absolute;
        top: 5%;
        left: 5%;
    }
    .details {
        position: absolute;
        top: 82%;
        left: 15px;
        background-color: white;
        width: 180px;
        height: 70px;
        border: none;
        padding: 5px;

        p {
            color: #C2C2C6;
            font-size: 14px;
        }
    }
    /* &:hover{
        background-color: green;
    } */
`;
