import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import Logo from '../assets/images/logo.png';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import Solana from '../assets/images/solana.png';
import Opensea from '../assets/images/opensea.png';
import { Link } from "react-router-dom";
const Footer = () => {
    return (_jsxs(Container, { children: [_jsx(PushIt, { children: _jsxs(IconWrapper, { children: [_jsx(FaInstagram, {}), _jsx(FaGithub, {}), _jsx(FaDiscord, {}), _jsx(FaTwitter, {}), _jsx(FaReddit, {})] }) }), _jsxs(LogosWrapper, { children: [_jsx("img", { src: Logo, alt: "", id: "logo" }), _jsxs(PowerWrapper, { children: [_jsx("p", { children: "Powered by" }), _jsxs(Logos, { children: [_jsx("img", { src: Solana, alt: "", id: "solana" }), _jsx("img", { src: Opensea, alt: "", id: "opensea" })] })] })] }), _jsxs(TextNavWrapper, { children: [_jsx("p", { children: "Copyright \u00A9 2022 MT Foundation Limited. All rights reserved." }), _jsxs(NavWrapper, { children: [_jsx(Link, { to: "", style: { textDecoration: 'none', color: "white" }, children: "About" }), _jsx(Link, { to: "", style: { textDecoration: 'none', color: "white" }, children: "Privacy" }), _jsx(Link, { to: "", style: { textDecoration: 'none', color: "white" }, children: "Contact us" }), _jsx(Link, { to: "", style: { textDecoration: 'none', color: "white" }, children: "Disclaimer" })] })] })] }));
};
export default Footer;
const Container = styled.div `
    /* border: 1px solid red; */
    padding: 50px;
`;
const PushIt = styled.div `
    /* border: 1px solid blue; */
    display: flex;
    justify-content: flex-end;
`;
const IconWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    width: 184px;
    /* border: 1px solid red; */
    color: white;
    font-size: 24px;
    position: relative;
    right: 0px;
    margin-right: 0px;
    margin-bottom: 8px;
`;
const LogosWrapper = styled.div `
    display: flex;
    margin-bottom: 61px;

    #logo {
        width: 106px;
        height: 51px;
        margin-right: 32px;
    }
`;
const PowerWrapper = styled.div `
    display: flex;
    flex-direction: column;
    width: 290px;
    height: 55px;
    /* border: 1px solid red; */
    p {
        color: white;
        font-size: 16px;
    }
`;
const Logos = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    #solana {
        height: 21px;
    }
    #opensea {
        height: 31px;
    }
`;
const TextNavWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    color: white;
`;
const NavWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    width: 321px;

    Link {
        text-decoration: none;
    }
`;
