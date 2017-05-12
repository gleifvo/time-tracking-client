import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class UsersView extends React.Component {

    componentDidMount() {
        const { users, fetchUsers } = this.props;
        !users.length && fetchUsers();
    }

    render() {
        const { users } = this.props;

        return (
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
        )
    }

}

export default UsersView;