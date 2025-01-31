import Section from '../components/Section.jsx'
import SectionItem from '../components/SectionItem.jsx'
import Records from '../../db.json'

export default () => {
  const data = Records;

  return (
    <>
      <Section classN="section-container home-section"> 
           {<SectionItem  
                id={data.home[0].id} 
                name={data.home[0].name}  
                image={true}
                img='/src/assets/ID-pic-greenbback.png' 
                subtitle={data.home[0].content.subtitle} 
                text={data.home[0].content.text}  
          />}
      </Section>
    </>
  )
}
