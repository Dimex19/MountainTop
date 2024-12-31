import styled from "styled-components"

const Newsletter:React.FC =()=> {
    return (
        <Container>
            <h2>WE DON'T WANT TO LET YOU DOWN</h2>
            <p id="para">Get notified to our public mint sale event, make sure you didn’t miss it.<br/>
            Enter your email below, so we can invite you to join the party.</p>
            <Wrapper>
                <input type="email" name="email" id="email" placeholder="Enter email address" />
                <Button>
                    <button>SUBSCRIBE</button>
                    {/* <p id="btnPara">SUBSCRIBE</p> */}
                </Button>
            </Wrapper>
        </Container>
    )
}
export default Newsletter

const Container = styled.div`
    background-color: black;
    color: white;
    max-width: 600px;
    margin: auto;

    h2 {
        /* border: 1px solid red; */
        text-align: center;
        margin-bottom: 30px;
    }
    #para {
        text-align: center;
        font-size: 14px;
        opacity: 40%;
        margin-bottom: 40px;
    }
    input {
        padding: 10px;
        width: 450px;
        height: 50px;
        background-color: black;
        color: white;
        border: 1px solid white;
        border-radius: 5px;
        margin-bottom: 50px;

    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const Button = styled.div`

    button {
        width: 140px;
        height: 50px;
        background-color: white;
        border-radius: 5px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        :hover {
            width: 150px;
            height: 55px;
        }
    }
    #btnPara {
        color: black;
        text-align: center;
        font-weight: 600;
    }
`