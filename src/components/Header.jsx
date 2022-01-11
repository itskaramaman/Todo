import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header({text}) {
    const headerStyle = {
        backgroundColor: '#fff',
        color: "green"
    };

    return (
        <header style={headerStyle}>
            <h1 style={{marginLeft: 'auto', marginRight: 'auto'}}>{text}</h1>
            <br />
            <NavLink style={{marginRight: "5px"}} to="/" activeClassName="active">
                Home
            </NavLink>
            <NavLink style={{marginRight: "5px"}} to="/about" activeClassName="active">
                About
            </NavLink>
        </header>
    )
}

Header.defaultProps = {
    text: 'Todo App'
}

Header.propsType = {
    text: PropTypes.string
}

export default Header;
