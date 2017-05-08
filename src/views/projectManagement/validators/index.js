import { validateProject } from '../../../actions/projects';

export const validator = data => {
    const errors = {};
    if (!data.name) {
        errors.name = 'Required field';
    } else if (data.name.length > 40) {
        errors.name = 'Must be 40 characters or less';
    }

    return errors
}

export const serverSideValidator = (data, dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(validateProject(data, resolve, reject))
    });
}