//@flow
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React, { Component } from 'react';

class Logged extends Component {

    render() {
        const { logOut } = this.props;
        
        return (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
                <MenuItem primaryText="Info" />
                <MenuItem onClick={() => logOut()} primaryText="Sign out" />
            </IconMenu>
        );
    }

}

export default Logged;