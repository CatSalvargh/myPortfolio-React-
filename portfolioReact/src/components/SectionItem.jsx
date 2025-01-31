import PropTypes from 'prop-types'

function SliderItem(props) {
    const pageTitle = props.name
    const pageImage = props.img
    const image = props.image
    const subtitle = props.subtitle
    const text = props.text
    const id = props.id

    return(
            <div id={`${pageTitle.toLowerCase()}-section`} className="section-content">
                     
                <div id={`${pageTitle.toLowerCase()}-image`} className={image ? "section-image" : "no-show"}>
                <img src={pageImage} alt={pageTitle}/>
                </div>
         
            <div className="section-text">
                <h1>{pageTitle}</h1>
                <h2>{subtitle}</h2>
                <p>{text}</p>
            </div>
            </div>
      );
}

SliderItem.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
}

export default SliderItem

// {`"section-image ${pageTitle}-img"` }
// {`"section-content  ${pageTitle}-img"`}
  