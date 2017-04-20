//@flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Logged from './Logged';
import Login from './Login';

class Header extends Component {

    render() {
        const { user, loginUser, logOut } = this.props;

        const rightElement = user.isLogged
            ? <Logged logOut={logOut} />
            : <Login loginUser={loginUser} />

        return (
            <AppBar
                iconElementRight={rightElement}
                iconElementLeft={<span />}
            />
        );
    }

}

export default Header;