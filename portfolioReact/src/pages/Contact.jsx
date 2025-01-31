import Section from '../components/Section.jsx'
import SectionItem from '../components/SectionItem.jsx'
import Records from '../../db.json'

function Contact() {
  const data = Records;

  return (
    <>
    <Section classN="section-container contact-section"> 
        {<SectionItem  
                id={data.contact[0].id} 
                name={data.contact[0].name}  
                image={true}  
                img='/src/assets/github.png'
                subtitle={data.contact[0].content.subtitle} 
                text={data.contact[0].content.text}  
          />}
    </Section>
    </>
  )
}

export default Contact