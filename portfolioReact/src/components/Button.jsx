import PropTypes from 'prop-types'


export default function Button(props) {
    const text = props.text
    const classN = props.classN
    const handleClick = () => props.action

    return(
        <button onClick={handleClick()} className={classN} >
            {text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    classN: PropTypes.string,
}
