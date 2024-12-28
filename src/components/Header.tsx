import styled from 'styled-components'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Header:React.FC = ()=> {
    return (
        <Container>
            <img src={Logo} alt="" />
            <Links>
                <Link to="/" id='link'>Home</Link>
                <Link to="/collections" id='link'>Collections</Link>
                <Link to="/foundation" id='link'>Foundation</Link>
            </Links>
        </Container>
    )
}
export default Header

const Container = styled.div`
    /* background: linear-gradient(#4646AD, #FF0FCA, #0500E2); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 75px;
        height: 36px;
    }
`
const Links = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    
    #link {
        text-decoration: none;
    color: white;
    }
`