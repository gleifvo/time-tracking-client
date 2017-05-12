import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';

class UsersView extends React.Component {

    componentDidMount() {
        const { users, fetchUsers } = this.props;
        !users.length && fetchUsers();
    }

    render() {
        const { users, user, openUserForm } = this.props;

        return (
            <div>
                {user.userInfo.userType === 'ADMIN' &&
                    <RaisedButton
                        style={{
                            marginTop: '3px'
                        }}
                        primary={true}
                        icon={<ContentAdd />}
                        onTouchTap={openUserForm}
                    />
                }
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Login</TableHeaderColumn>
                            <TableHeaderColumn>Role</TableHeaderColumn>
                            <TableHeaderColumn>First Name</TableHeaderColumn>
                            <TableHeaderColumn>Last Name</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {users.map((user, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{user.login}</TableRowColumn>
                                <TableRowColumn>{user.userType}</TableRowColumn>
                                <TableRowColumn>{user.firstName}</TableRowColumn>
                                <TableRowColumn>{user.lastName}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }

}

export default UsersView;