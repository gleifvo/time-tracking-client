import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, Form } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { validator, serverSideValidator } from './validators';

class TaskManagement extends React.Component {

    componentWillMount() {
        const { initialValues, changeView } = this.props;
        !initialValues.project && changeView('/project-tasks');
    }

    render() {
        const { createOrUpdateTask, handleSubmit, initialValues } = this.props;
        return (
            <Form
                style={{
                    width: '600px',
                    margin: 'auto'
                }}
                onSubmit={handleSubmit((data) => createOrUpdateTask(data))}>
                <div className="form-group">
                    <Field fullWidth={true} hintText="Name" name="name" component={TextField} />
                    <Field
                        multiLine={true}
                        rows={1}
                        rowsMax={10}
                        fullWidth={true}
                        hintText="Description"
                        floatingLabelText="Task description"
                        name="description"
                        component={TextField} />
                </div>
                <RaisedButton type="submit"
                    style={{
                        marginTop: '10px'
                    }}
                    label={initialValues.isNew
                        ? 'Create'
                        : 'Update'
                    }
                    primary={true} />
            </Form >
        )
    }

}

export default reduxForm({
    form: 'task-form',
    validate: validator,
    asyncValidate: serverSideValidator
})(TaskManagement);