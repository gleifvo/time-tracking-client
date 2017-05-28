import React from 'react';
import { Card, CardHeader, CardTitle, CardActions } from 'material-ui/Card';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import FlatButton from 'material-ui/FlatButton';

class UserInfo extends React.Component {

    render() {
        const { userData, showReport } = this.props;
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
                    <CardActions>
                        <FlatButton
                            fullWidth={true}
                            label="Show reports"
                            onTouchTap={() => showReport(userData.userInfo)}
                            icon={<ActionAssignment color="black" />}
                        />
                    </CardActions>
                </Card>
            )
            : (null)

        return body;
    }

}

export default UserInfo;