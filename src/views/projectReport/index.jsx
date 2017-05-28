import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableFooter
} from 'material-ui/Table';

class ProjectReport extends React.Component {

    componentWillMount() {
        const { project, changeView } = this.props;

        !project && changeView('/projects');
    }

    render() {
        const { project, tasks, usersTime } = this.props;

        return (
            <span>
                <Card>
                    <CardTitle
                        style={{
                            textAlign: 'center'
                        }}
                        title={project && project.name}
                        subtitle={(project && project.user)
                            ? `${project.user.firstName} ${project.user.lastName} `
                            : ''} />
                </Card>
                <Table
                    selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>Task</TableHeaderColumn>
                            <TableHeaderColumn>Report</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {tasks && tasks.filter(task => task.reports.length)
                            .map((task, index) => (
                                <TableRow key={index}>
                                    <TableRowColumn>{task.name}</TableRowColumn>
                                    <TableRowColumn>
                                        <Table selectable={false}>
                                            <TableBody
                                                stripedRows={true}
                                                displayRowCheckbox={false}
                                                showRowHover={true}>
                                                {task.reports.map((report, index) => (
                                                    <TableRow key={index}>
                                                        <TableRowColumn>{`${report.user.firstName} ${report.user.lastName}`}</TableRowColumn>
                                                        <TableRowColumn>{report.time}</TableRowColumn>
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
                                                    }}
                                                    rowNumber={1}>
                                                    <TableRowColumn>Total time</TableRowColumn>
                                                    <TableRowColumn>{task.reports.reduce((result, report) => result + report.time, 0)}</TableRowColumn>
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

export default ProjectReport;