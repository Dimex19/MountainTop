import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import CountDownClock from "./CountDownClock";
const CountDown = () => {
    const targetDate = new Date("2025-3-31 23:59:59");
    return (_jsx(Container, { children: _jsx(CountDownClock, { targetDate: targetDate }) }));
};
export default CountDown;
const Container = styled.div `
    
`;
