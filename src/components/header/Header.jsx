import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Login from './Login';

class Header extends Component {

    render() {
        return (
            <AppBar
                iconElementRight={<Login />}
            />
        );
    }

}

export default Header;