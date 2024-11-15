import Header from "./components/header"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Nav from "./components/nav";
import Banner from "./components/banner";
import Profile from "./components/profile";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
    useEffect(() => {
        AOS.init()
    }, [])
  return (
    <div>
      <Header />
      <Nav />
      <Banner />
      <Profile />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
