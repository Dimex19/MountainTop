import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
    return (_jsxs(Container, { children: [_jsx("img", { src: Logo, alt: "" }), _jsxs(Links, { children: [_jsx(Link, { to: "/", id: 'link', children: "Home" }), _jsx(Link, { to: "/collections", id: 'link', children: "Collections" }), _jsx(Link, { to: "/foundation", id: 'link', children: "Foundation" })] }), _jsx(HamContainer, { children: _jsx(GiHamburgerMenu, {}) })] }));
};
export default Header;
const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
    img {
        width: 75px;
        height: 36px;

        @media (max-width: 450px){
            width: 63px;
            height: 24px;
        }

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
    @media (max-width: 450px) {
        display: none;
    }
`;
const HamContainer = styled.div `
    display: none;

    @media (max-width: 450px){
        display: block;
        color: white;
        font-size: 24px;
    }
`;
