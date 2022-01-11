import PropTypes from 'prop-types';

function Header({text}) {

    const headerStyle = {
        backgroundColor: '#fff',
        color: "green"
    };

    return (
        <header style={headerStyle}>
            <h1 style={{marginLeft: 'auto', marginRight: 'auto'}}>{text}</h1>
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
