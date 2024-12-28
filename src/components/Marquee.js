import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
const Marquee = () => {
    return (_jsx(MainContainer, { children: _jsxs(Container, { children: [_jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] }), _jsxs(Wrapper, { children: [_jsx("strong", { children: "AUCTION IS COMING SOON" }), _jsx("p", { children: "Our public sale event will be held on March 31, 2025." })] })] }) }));
};
export default Marquee;
const MainContainer = styled.div `
    max-width: 100vw;
    overflow: hidden;
    flex-wrap: wrap;

    @keyframes scroll {
        0% {transform: translateX(0)};
        100% {transform: translateX(-100%)}
    }
`;
const Container = styled.div `
    display: inline-flex;
    margin-top: 40px;
    margin-bottom: 40px;
    

    /* transition: opacity .3s; */
    animation: scroll 180s linear infinite;
    /* transform: translate3d(); */
`;
const Wrapper = styled.div `
    color: black;
    /* border: 1px solid red; */
    width: 350px;

    p {
        font-size: 12px;
    }
`;
