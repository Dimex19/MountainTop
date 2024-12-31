import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import styled from "styled-components";
const CountDownClock = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = targetDate.getTime() - new Date().getTime();
        console.log(difference);
        console.log(targetDate);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000 % 60));
        return { days, hours, minutes, seconds };
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        // Update the countdown every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Cleanup timer on component unmount
        return () => clearInterval(timer);
    }, []);
    if (!timeLeft) {
        return _jsx("p", { children: "The countdown has ended!" });
    }
    return (_jsx(Container, { children: _jsxs("h2", { children: [_jsxs("span", { children: [isNaN(timeLeft.days) ? 0 : timeLeft.days, _jsx("p", { children: "Days" })] }), ":", _jsxs("span", { children: [isNaN(timeLeft.hours) ? 0 : timeLeft.hours, _jsx("p", { children: "Hours" })] }), ":", _jsxs("span", { children: [isNaN(timeLeft.minutes) ? 0 : timeLeft.minutes, _jsx("p", { children: "Minutes" })] }), ":", _jsxs("span", { children: [isNaN(timeLeft.seconds) ? 0 : timeLeft.seconds, _jsx("p", { children: "seconds" })] })] }) }));
};
export default CountDownClock;
const Container = styled.div `
    background-color: black;
    h2{
        display: flex;
        justify-content: center;
        font-size: 60px;
        text-align: center;
        color: white;
        padding: 20px;

        span {
            display: flex;
            flex-direction: column;

            p {
                color: white;
                font-size: 12px;
            }
        }
    }

`;
