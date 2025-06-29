import About from './Components/About'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import './index.css'

function App() {

  return (
    <body className='bg-[#ECF5FF]'>
      <navbar>
        <Navbar/>
      </navbar>
      <main>
        <Hero/>
        <About/>
        <Skills/>
      </main>
    </body>
  )
}

export default App
