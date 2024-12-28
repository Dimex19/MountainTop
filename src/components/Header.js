import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (_jsxs(Container, { children: [_jsx("img", { src: Logo, alt: "" }), _jsxs(Links, { children: [_jsx(Link, { to: "/", id: 'link', children: "Home" }), _jsx(Link, { to: "/collections", id: 'link', children: "Collections" }), _jsx(Link, { to: "/foundation", id: 'link', children: "Foundation" })] })] }));
};
export default Header;
const Container = styled.div `
    /* background: linear-gradient(#4646AD, #FF0FCA, #0500E2); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 75px;
        height: 36px;
    }
`;
const Links = styled.div `
    width: 300px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    
    #link {
        text-decoration: none;
    color: white;
    }
`;
