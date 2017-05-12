//@flow
import { connect } from 'react-redux';
import UserManagement from '../views/userManagement';
import { createUser } from '../actions/user'


const mapStateToProps = (state) => {
    return {
        formData: state.form['user-form'],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (payload) => {
            dispatch(createUser(payload));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserManagement)