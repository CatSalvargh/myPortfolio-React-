import PropTypes from 'prop-types'

function Slider(props) {

    const styles = {
        border: "none",
        borderRadius: "15px",
        width: "80vw",
        height: "80vh",
        cursor: "pointer",
        border: "5px solid rgba(23, 85, 8, 0.35)",
        alignSelf: "center",
        justifySelf: "center"
      }
    const pageTitle = props.name
    const pageImage = props.img

    return(
        <div className="slider-container" style={styles}>
            <div className="slider-wrapper">
                <div className="slider-item">
                    <div className="slider-content">
                        <div className="about-image">
                            <img src={pageImage} alt="Profile Picture"/>
                        </div>
                        <div className="about-text">
                            <h1>{pageTitle}</h1>
                            <h2>Subtitle</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, veritatis odit. Ipsum quisquam laboriosam tempore velit delectus quis excepturi nam soluta neque amet laudantium, eaque, dolorum, ex accusamus officia quod.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Slider.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
}

Slider.defaultProps = {
    name:'Home',
    img: '/src/assets/ID-pic-greenbback.png'
}

export default Slider

