import { validateLogin } from '../../../actions/user';

export const validator = data => {
    const errors = {};

    if (!data.firstName) {
        errors.firstName = 'Required field';
    } else if (data.firstName.length > 20) {
        errors.firstName = 'Must be 20 characters or less';
    }

    if (!data.lastName) {
        errors.lastName = 'Required field';
    } else if (data.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!data.login) {
        errors.login = 'Required field';
    } else if (data.login.length > 20) {
        errors.login = 'Must be 20 characters or less';
    }

    if (!data.password) {
        errors.password = 'Required field';
    } else if (data.password.length > 35) {
        errors.password = 'Must be 35 characters or less';
    } else if (data.password !== data.confirmPassword) {
        errors.password = "Password doesn't match"
        errors.confirmPassword = "Password doesn't match"
    }

    if (!data.confirmPassword) {
        errors.confirmPassword = 'Required field';
    } else if (data.confirmPassword.length > 35) {
        errors.confirmPassword = 'Must be 35 characters or less';
    }

    if (!data.userType) {
        errors.userType = 'Required field';
    }

    return errors
}

export const serverSideValidator = (data, dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(validateLogin(data, resolve, reject))
    });
}