//@flow
import { connect } from 'react-redux';
import UserManagement from '../views/userManagement';


const mapStateToProps = (state) => {
    return {
        formData: state.form['user-form'],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (payload) => {
            console.log(payload);
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserManagement)