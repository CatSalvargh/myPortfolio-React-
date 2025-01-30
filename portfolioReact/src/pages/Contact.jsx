import Section from '../components/Section.jsx'
import SectionItem from '../components/SectionItem.jsx'

function Contact() {

  return (
    <>
    <Section classN="section-container contact-section"> 
    <SectionItem name="Contact" image={true} img='/src/assets/github.png' />
    </Section>
    </>
  )
}

export default Contact