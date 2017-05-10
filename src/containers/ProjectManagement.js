//@flow
import { connect } from 'react-redux';
import ProjectManagement from '../views/projectManagement';
import { createOrUpdateProject } from '../actions/projectManagement';
import diff from 'object-diff';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        initialValues: state.projectManagement
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createOrUpdateProject: (payload) => {
            payload.initialValues.isNew
                ? payload.formData.user = payload.user
                : payload.href = payload.formData._links.self.href

            dispatch(createOrUpdateProject({
                formData: {
                    ...diff(payload.initialValues, payload.formData)
                },
                isNew: payload.initialValues.isNew,
                href: payload.href
            }));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectManagement)