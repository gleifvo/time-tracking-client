//@flow
import { connect } from 'react-redux';
import UserInfo from '../views/userInfo'

const mapStateToProps = (state) => {
    return { userData: state.user }
};

export default connect(
    mapStateToProps,
    null
)(UserInfo)