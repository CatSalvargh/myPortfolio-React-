import PropTypes from 'prop-types'

export default function Nav(props) {

    const navItems = props.items
    let ids = 0
    // const navList = navItems.map(item => 
    //         <li id={`${item}`} className="nav-tab">
    //                     <a href={`#/${item}`}>{item}</a> 
    //         </li>);

    return(
        <>
        <nav className="nav nav-bar">
            <ul className="nav-pages">
                {
                navItems.map(item => 
                <li key={ids++} id={item} className="nav-tab">
                        <a href={`#/${item}`}>{item}</a> 
                </li>)
            }</ul>
        </nav>
        </>
    );
}

Nav.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string)
}
