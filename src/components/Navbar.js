import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary p-3">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <i className={this.props.icon}></i> {this.props.title}
                    </a>
                </div>
            </nav>
        )
    }
}

// tr.reactjs.org/docs/typechecking-with-proptypes.html
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

//added it for solving proptypes is not defined- npm install --save prop-types
Navbar.propTypes = {
    title: PropTypes.string.isRequired
};
export default Navbar