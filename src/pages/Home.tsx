import Collectibles from "../components/Collectibles"
import CountDown from "../components/CountDown"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"


const Home = () => {
  return (
    <>
        <Hero/>
        <Marquee/>
        <CountDown/>
        <Collectibles/>
    </>
  )
}

export default Home