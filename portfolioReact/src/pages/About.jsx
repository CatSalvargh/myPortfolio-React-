import Section from '../components/Section.jsx'
import SectionItem from '../components/SectionItem.jsx'
import JsonServer from '../data/JsonServer.jsx'
import Records from '../../db.json'

export default () => {
  const data = Records;

  return (
    <>
      <Section classN="section-container about-section"> 
        {<SectionItem  
                id={data.about[0].id} 
                name={data.about[0].name}  
                image={true}  
                img='/src/assets/AboutMe2.jpg' 
                subtitle={data.about[0].content.subtitle} 
                text={data.about[0].content.text}  
          />}
      </Section>
    </>
  )
}

