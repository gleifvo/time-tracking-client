import { validateProject } from '../../../actions/projectManagement';
import diff from 'object-diff';

export const validator = data => {
    const errors = {};
    if (!data.name) {
        errors.name = 'Required field';
    } else if (data.name.length > 40) {
        errors.name = 'Must be 40 characters or less';
    }

    return errors
}

export const serverSideValidator = (data, dispatch, props) => {
    return new Promise((resolve, reject) => {
        let updatedProps = Object.keys(diff(props.initialValues, data));

        if (!updatedProps.length) {
            resolve();
            return;
        }
        dispatch(validateProject(data, resolve, reject))
    });
}