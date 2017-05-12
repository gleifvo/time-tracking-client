import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, Form } from 'redux-form';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { validator, serverSideValidator } from './validators';

class UserManagement extends React.Component {

    render() {
        const { createUser, handleSubmit, formData } = this.props;
        return (
            <Form
                style={{
                    width: '600px',
                    margin: 'auto'
                }}
                onSubmit={handleSubmit((data) => createUser(data))}>
                <div className="form-group">
                    <Field fullWidth={true} hintText="Login" name="login" component={TextField} />
                    <Field fullWidth={true} hintText="First Name" name="firstName" component={TextField} />
                    <Field fullWidth={true} hintText="Last Name" name="lastName" component={TextField} />
                    <Field type={'password'} fullWidth={true} hintText="Password" name="password" component={TextField} />
                    <Field type={'password'} fullWidth={true} hintText="Confirm password" name="confirmPassword" component={TextField} />
                    <Field
                        fullWidth={true}
                        hintText="Role"
                        name="userType"
                        component={SelectField} >
                        {
                            ['ADMIN', 'USER'].map((value, index) => (
                                <MenuItem
                                    key={index}
                                    insetChildren={true}
                                    checked={formData && formData.values && formData.values.userType === value}
                                    value={value}
                                    primaryText={value}
                                />
                            ))
                        }
                    </Field>
                </div>
                <RaisedButton type="submit"
                    style={{
                        marginTop: '10px'
                    }}
                    label={'Create'}
                    primary={true} />
            </Form >
        )
    }

}

export default reduxForm({
    form: 'user-form',
    validate: validator,
    asyncValidate: serverSideValidator
})(UserManagement);