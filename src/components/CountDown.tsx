import styled from "styled-components"
import CountDownClock from "./CountDownClock"

const CountDown:React.FC = ()=> {

    const targetDate = new Date("2025-3-31 23:59:59");
    return (
        <Container>
            <CountDownClock targetDate={targetDate}/>
        </Container>
    )
}
export default CountDown

const Container = styled.div`
    
`