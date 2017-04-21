//@flow
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CommunicationVpnKey from 'material-ui/svg-icons/communication/vpn-key';

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
        ]

        const textAlign = {
            'textAlign': 'center'
        }

        return (
            <div>
                <Dialog
                    style={textAlign}
                    title="Login form"
                    DialogInline={true}
                    onRequestClose={this.handleClose}
                    actions={actions}
                    open={this.state.open}>
                    <TextField
                        inputStyle={textAlign}
                        hintText={"Login"}
                        onChange={(event, newValue) => this.setState({ login: newValue })}
                        id="login" fullWidth={true} value={this.state.login} />
                    <TextField
                        inputStyle={textAlign}
                        hintText={"Password"}
                        onChange={(event, newValue) => this.setState({ password: newValue })}
                        id="password" fullWidth={true} type={"password"} value={this.state.password} />
                </Dialog>
                <RaisedButton
                    backgroundColor="#a4c639"
                    icon={<CommunicationVpnKey />}
                    style={{
                        marginTop: 5
                    }}
                    primary={true} onTouchTap={this.handleOpen} />
            </div>
        );
    }

}

export default Login;