//@flow
import { connect } from 'react-redux';
import UsersView from '../views/usersView';
import { fetchUsers } from '../actions/user';
import { push } from 'react-router-redux';

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
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersView)