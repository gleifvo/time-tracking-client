//@flow
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {

    state = {
        open: false,
        login: '',
        password: ''
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const { loginUser } = this.props;

        const actions = [
            <FlatButton label="Sign in" primary={true} keyboardFocused={true} onTouchTap={() => loginUser(this.state.login, this.state.password)} />,
            <FlatButton label="Cancel" primary={true} keyboardFocused={true} onTouchTap={this.handleClose} />
        ]

        const titleStyle = {
            textAllign: 'center'
        };

        const textInput = "1";
        return (
            <div>
                <Dialog
                    titleStyle={titleStyle}
                    title="Login form"
                    DialogInline={true}
                    actions={actions}
                    open={this.state.open}>
                    <TextField id="login" fullWidth={true} />
                    <TextField id="password" fullWidth={true} type={"password"} />
                </Dialog>
                <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
            </div>

        );
    }

}

export default Login;