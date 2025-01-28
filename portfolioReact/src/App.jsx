import Nav from './Nav.jsx'
import Slider from './Slider.jsx'


function App() {
  const pageTitles = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']

  return (
    <>
      <Nav items={pageTitles}/>
      <Slider name="Home" img='/src/assets/ID-pic-greenbback.png'/>
    </>
  )
}

export default App
