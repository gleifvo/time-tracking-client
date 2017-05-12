//@flow
import { connect } from 'react-redux';
import UsersView from '../views/usersView';
import { fetchUsers } from '../actions/user';

const mapStateToProps = (state) => {
    return {
        users: state.metadata.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => {
            dispatch(fetchUsers());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersView)