//@flow
import React, { Component } from 'react';
import Header from '../containers/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loading from '../containers/Loading';
import Notification from '../containers/Notification';
import '../styles/App.css';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Loading />
                    <Header />
                    <Notification />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;