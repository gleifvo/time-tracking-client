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
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class UsersView extends React.Component {

    componentDidMount() {
        const { fetchUsers } = this.props;
        fetchUsers();
    }

    render() {
        const { users, user, openUserForm, deleteUser } = this.props;

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
                            <TableHeaderColumn />
                            <TableHeaderColumn>Login</TableHeaderColumn>
                            <TableHeaderColumn>Role</TableHeaderColumn>
                            <TableHeaderColumn>First Name</TableHeaderColumn>
                            <TableHeaderColumn>Last Name</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {users.map((user, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{
                                    <IconButton onTouchTap={() => deleteUser(user)}>
                                        <NavigationClose />
                                    </IconButton>
                                }</TableRowColumn>
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