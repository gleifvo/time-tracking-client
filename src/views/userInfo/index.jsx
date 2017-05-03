import React from 'react';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';

import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';


class UserInfo extends React.Component {

    render() {
        const { userData } = this.props;
        let body = userData.isLogged
            ? (
                <Card>
                    <CardHeader
                        avatar={
                            <ActionAccountCircle style={{ height: 80, width: 80, display: 'block', margin: 'auto' }} />
                        }
                        style={{ paddingBottom: 0 }}
                    />
                    <CardTitle
                        style={{ textAlign: 'center' }}
                        title={`${userData.userInfo.firstName} ${userData.userInfo.lastName}`}
                        subtitle={`${userData.userInfo.userType}`} />
                </Card>
            )
            : (null)

        return body;
    }

}

export default UserInfo;