export const validator = data => {
    const errors = {};

    if (!data.time) {
        errors.time = 'Fill time';
    } else if (data.time === 0) {
        errors.time = 'Must be greater than 0';
    } else if (data.time < 0) {
        errors.time = 'Must be positive';
    } else if (data.time > 100) {
        errors.time = 'Must be lower than 100'
    }

    if (data.description && data.description.length > 200) {
        errors.description = 'Must be 200 characters or less';
    }

    return errors
}