import PropTypes from 'prop-types'

function Nav(props) {

    let ids = 0
    const navItems = props.items
    const navList = navItems.map(item => 
            <li id={`${ids++}-${item}`} className="slider-tab">
                        <a href={item}>{item}</a> 
            </li>);

    return(
        <>
        <nav className="nav slider-controls">
            <ul className="slider-pages">{navList}</ul>
        </nav>
        </>
    );
}

Nav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
}

Nav.defaultProps = {
     items: ['Home']
}
export default Nav

