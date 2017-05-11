//@flow
import { connect } from 'react-redux';
import UserManagement from '../views/userManagement';
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
)(UserManagement)