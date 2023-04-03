import Header from "@src/components/Header"
import Home from "@src/pages/Home"
import Skillset from "./Skillset"
import Contact from "./Contact"
import Projects from "./Projects"
import Head from 'next/head';

const App = () => {
    return(      
      <>
        <Head>
          <title>Lucas Paschoalick</title>
        </Head>
        <Header />
        <Home />
        <Skillset />
        <Projects />
        <Contact />        
      </>      
    )
}

export default App