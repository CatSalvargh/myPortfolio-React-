import PropTypes from 'prop-types'

function SliderItem(props) {
    const pageTitle = props.name
    const pageImage = props.img

    return(
        <div className="section-content">
            <div className="section-image">
                <img src={pageImage} alt="Profile Picture"/>
            </div>
            <div className="section-text">
                <h1>{pageTitle}</h1>
                <h2>Subtitle</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, veritatis odit. Ipsum quisquam laboriosam tempore velit delectus quis excepturi nam soluta neque amet laudantium, eaque, dolorum, ex accusamus officia quod.
                </p>
            </div>
        </div>
      );
}

SliderItem.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
}

export default SliderItem