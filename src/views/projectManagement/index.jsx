import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, Form } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import { TextField } from 'redux-form-material-ui';
import { validator, serverSideValidator } from './validators';

class ProjectManagement extends React.Component {

    render() {
        const { projects, user, project, createProject, handleSubmit } = this.props;

        return (
            <Form
                style={{
                    width: '600px',
                    margin: 'auto'
                }}
                onSubmit={handleSubmit((data) => createProject({
                    ...data, user: user.userInfo._links.self.href
                }))}>
                <div className="form-group">
                    <Field fullWidth={true} hintText="Project name" name="name" component={TextField} />
                </div>
                <RaisedButton type="submit"
                    style={{
                        marginTop: '10px'
                    }}
                    label={project.isNew
                        ? 'Create'
                        : 'Update'
                    } primary={true} />
            </Form >
        )
    }

}

export default reduxForm({
    form: 'project-form',
    validate: validator,
    asyncValidate: serverSideValidator
})(ProjectManagement);