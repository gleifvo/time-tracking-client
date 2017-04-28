//@flow
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React, { Component } from 'react';

class Logged extends Component {

    render() {
        const { logOut, routeToUserInfo } = this.props;

        return (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
                <MenuItem primaryText="User Info" onClick={routeToUserInfo} />
                <MenuItem primaryText="Sign out" onClick={logOut} />
            </IconMenu>
        );
    }

}

export default Logged;