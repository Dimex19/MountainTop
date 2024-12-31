import styled from "styled-components"

interface CardProps {
    image?: string;
    srn?: string;
  }
const Card: React.FC<CardProps> = ({image, srn}) => {
  return (
    <Container>
        <img src={image} alt="" />
        <div></div>
        <div className="details">
            <p>Collectible</p>
            <h2>MNFT-{srn}</h2>
        </div>
    </Container>
  )
}

export default Card

const Container = styled.div`
    position: relative;
    width: 323px;
    height: 433px;
    background-color: white;
    margin-bottom: 30px;

    /* :hover {
        width: 343px;
        height: 453px;
        transition: 2s ease-in;
    } */
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
`