import './App.css'
import Introduction from './layouts/Introduction'
import Techtools from './layouts/Techtools'
import Myprojects from './layouts/Myprojects'
import Footer from './layouts/Footer'
import Contact from './layouts/Contact'
import Navbar from './components/Navbar'
import Headroom from 'react-headroom'
import { useScroll, motion, useSpring, useTransform } from 'framer-motion';

function App() {
  return (
    <>
      <div>
        <Headroom>
          <Navbar />
        </Headroom>
        <Introduction />
        <Techtools />
        <Myprojects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
