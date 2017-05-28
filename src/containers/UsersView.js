//@flow
import { connect } from 'react-redux';
import UsersView from '../views/usersView';
import { fetchUsers, deleteUser, fetchReport } from '../actions/user';
import { push } from 'react-router-redux';
import { showConfirmation } from '../actions/confirmation';


const mapStateToProps = (state) => {
    return {
        users: state.metadata.users,
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers());
        },
        openUserForm: () => {
            dispatch(push('/user-management'));
        },
        deleteUser: (user) => {
            dispatch(showConfirmation(
                { message: 'Are you sure to delete this user?' },
                deleteUser(user)
            ))
        },
        showReport: (user) => {
            dispatch(fetchReport(user));
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersView)