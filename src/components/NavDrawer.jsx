//@flow
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionWork from 'material-ui/svg-icons/action/work';


class NavDrawer extends Component {

    render() {
        const { changeView, triggerDrawer, isOpen } = this.props;

        return (
            <div>
                <Drawer
                    docked={false}
                    width={200}
                    open={isOpen}
                    onRequestChange={triggerDrawer}>
                    <MenuItem
                        primaryText="Home"
                        leftIcon={<ActionHome />}
                        onTouchTap={() => changeView('/')} />
                    <MenuItem
                        primaryText="Projects"
                        leftIcon={<ActionWork />}
                        onTouchTap={() => changeView('/projects')} />
                </Drawer>
            </div>
        );
    }

}

export default NavDrawer;