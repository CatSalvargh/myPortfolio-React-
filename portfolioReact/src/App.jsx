import Nav from './Nav.jsx'
import Slider from './Slider.jsx'
import SliderItem from './SliderItem.jsx'

function App() {
  const pageTitles = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT']

  return (
    <>
      <Nav items={pageTitles}/>
      <Slider> 
            <SliderItem name="Home" img='/src/assets/ID-pic-greenbback.png' />
            <SliderItem name="About" img='/src/assets/AboutMe2.jpg'/>
            <SliderItem name="Projects" img='/src/assets/Project-2-cars.jpg'/>
            <SliderItem name="Contact" img='/src/assets/github.png'/>
      </Slider>
    </>
  )
}

export default App

