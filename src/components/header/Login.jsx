//@flow
import React, { Component } from 'react';

class Login extends Component {

    render() {
        const { loginUser } = this.props;

        return (
            <span onClick={() => loginUser('string', 'string')}>Login element</span>
        );
    }

}

export default Login;
