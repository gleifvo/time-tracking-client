import { validateTask } from '../../../actions/taskManagement';

export const validator = data => {
    const errors = {};

    if (!data.name) {
        errors.name = 'Required field';
    } else if (data.name.length > 40) {
        errors.name = 'Must be 40 characters or less';
    }

    if (!data.description) {
        errors.description = 'Required field';
    } else if (data.description.length > 200) {
        errors.description = 'Must be 200 characters or less';
    }

    return errors
}

export const serverSideValidator = (data, dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(validateTask(data, resolve, reject))
    });
}