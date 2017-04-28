//@flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Logged from './Logged';
import Login from './Login';

class Header extends Component {

    render() {
        const { user } = this.props;

        const rightElement = user.isLogged
            ? <Logged {...this.props} />
            : <Login {...this.props} />

        return (
            <AppBar
                iconElementRight={rightElement}
                iconElementLeft={<span />}
            />
        );
    }

}

export default Header;