import SliderItem from "./SliderItem";

function Slider(props) {

    return(
        <div className="slider-container">
            <div className="slider-wrapper">
                {props.children}
            </div>
        </div>
    );
}
export default Slider

