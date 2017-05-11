//@flow
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Logged from './Logged';
import Login from './Login';

class Header extends React.Component {

    render() {
        const { user, triggerDrawer } = this.props;

        const rightElement = user.isLogged
            ? <Logged {...this.props} />
            : <Login {...this.props} />

        return (
            <AppBar
                iconElementRight={rightElement}
                onLeftIconButtonTouchTap={triggerDrawer}
            />
        );
    }

}

export default Header;