//@flow
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionWork from 'material-ui/svg-icons/action/work';
import SocialGroup from 'material-ui/svg-icons/social/group';


class NavDrawer extends React.Component {

    render() {
        const { changeView, triggerDrawer, isOpen, userData } = this.props;
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
                    {userData.isLogged &&
                        <MenuItem
                            primaryText="Projects"
                            leftIcon={<ActionWork />}
                            onTouchTap={() => {
                                changeView('/projects');
                            }} />
                    }
                    {userData.isLogged && userData.userInfo.userType === 'ADMIN' &&
                        <MenuItem
                            primaryText="Users"
                            leftIcon={<SocialGroup />}
                            onTouchTap={() => {
                                changeView('/user-management');
                            }} />
                    }
                </Drawer>
            </div>
        );
    }

}

export default NavDrawer;