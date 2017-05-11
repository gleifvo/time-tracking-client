import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, Form } from 'redux-form';
import { TextField, SelectField } from 'redux-form-material-ui';
import { validator, serverSideValidator } from './validators';
import MenuItem from 'material-ui/MenuItem';

class ProjectManagement extends React.Component {

    componentDidMount() {
        const { metadata, fetchUsers } = this.props;
        !metadata.users.length && fetchUsers();
    }

    menuItems = (selectedValues) => {
        const { metadata } = this.props;
        return metadata.users.map((user, index) => (
            <MenuItem
                key={index}
                insetChildren={true}
                checked={selectedValues.some((value) => value === user._links.self.href)}
                value={user._links.self.href}
                primaryText={`${user.firstName} ${user.lastName}`}
            />
        ));
    }

    render() {
        const { user, initialValues, createOrUpdateProject, handleSubmit, formData } = this.props;

        return (
            <Form
                style={{
                    width: '600px',
                    margin: 'auto'
                }}
                onSubmit={handleSubmit((data) => createOrUpdateProject({
                    formData: { ...data },
                    initialValues,
                    user: user.userInfo._links.self.href
                }))}>
                <div className="form-group">
                    <Field fullWidth={true} hintText="Project name" name="name" component={TextField} />
                    <Field
                        fullWidth={true}
                        hintText="Users"
                        multiple={true}
                        name="users"
                        component={SelectField} >
                        {formData && this.menuItems(formData.values.users)}
                    </Field>
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
    form: 'project-form',
    validate: validator,
    asyncValidate: serverSideValidator
})(ProjectManagement);