import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableFooter
} from 'material-ui/Table';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';

import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';

class UserReport extends React.Component {

    componentWillMount() {
        const { reports, changeView } = this.props;

        !reports && changeView('/');
    }

    render() {
        const { reports, user } = this.props;

        return (
            <span>
                <Card>
                    <CardHeader
                        style={{ paddingBottom: 0 }}
                    />
                    <CardTitle
                        style={{ textAlign: 'center' }}
                        title={user && `${user.firstName} ${user.lastName}`} />
                </Card>
                <Table
                    selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Project</TableHeaderColumn>
                            <TableHeaderColumn>Reports</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {reports && Object.keys(reports).map((projectName, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{projectName}</TableRowColumn>
                                <TableRowColumn>
                                    <Table selectable={false}>
                                        <TableBody
                                            stripedRows={true}
                                            displayRowCheckbox={false}
                                            showRowHover={true}>
                                            {reports[projectName].map((report, index) => (
                                                <TableRow key={index}>
                                                    <TableRowColumn>{`${report.task.name}`}</TableRowColumn>
                                                    <TableRowColumn>{report.time}</TableRowColumn>
                                                    <TableRowColumn>{report.date}</TableRowColumn>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                        <TableFooter adjustForCheckbox={false}>
                                            <TableRow
                                                style={{
                                                    borderTopColor: 'black',
                                                    lineHeight: '60px',
                                                    textAlign: 'center',
                                                    backgroundColor: '#f1ecec'
                                                }}>
                                                <TableRowColumn>Total time</TableRowColumn>
                                                <TableRowColumn>{reports[projectName].reduce((result, report) => result + report.time, 0)}</TableRowColumn>
                                                <TableRowColumn></TableRowColumn>
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </span>
        )
    }

}

export default UserReport;