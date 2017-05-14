import React from 'react';
import '../../../styles/ReportsView.css';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import { TextField as ReduxTextField } from 'redux-form-material-ui';
import { Field, reduxForm, Form } from 'redux-form';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { validator } from './validators';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

class ReportsView extends React.Component {

    render() {
        const { task, user, handleSubmit, userReport } = this.props;
        const hasReports = task.reports;

        const reports = !!hasReports && userReport
            ? [userReport, ...task.reports.filter(report => user.login !== report.user.login)]
            : [{ user, time: 0 }, ...task.reports || []]

        return (
            hasReports
                ? <List className="reports-block">
                    {reports.map((report, index) => {
                        return <ListItem className="report"
                            secondaryText={`${report.user.firstName} ${report.user.lastName}`}
                            key={index}
                            disabled={true}>
                            {report.user.login === user.login
                                ? <Form onSubmit={handleSubmit(data => console.log(data))}>
                                    <span>
                                        <Field
                                            hintText="Hours"
                                            name="time"
                                            type="number"
                                            component={ReduxTextField} />
                                        <IconButton type="submit" >
                                            {!userReport
                                                ? <ContentAdd color="black" />
                                                : <EditorModeEdit color="black" />
                                            }
                                        </IconButton>
                                    </span>
                                </Form >
                                : <TextField
                                    disabled={true}
                                    hintText="Hours"
                                    defaultValue={report.time} />
                            }
                        </ListItem>
                    })
                    }
                </List>
                : <div className='loading-block'>
                    <LinearProgress mode="indeterminate" />
                </div>
        )
    }

}

export default reduxForm({
    form: 'report-form',
    validate: validator,
})(ReportsView);