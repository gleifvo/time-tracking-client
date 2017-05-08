//@flow
import React, { Component } from 'react';
import Header from '../containers/Header';
import Loading from '../containers/Loading';
import Notification from '../containers/Notification';
import Confirmation from '../containers/Confirmation';
import '../styles/App.css';
import NavDrawer from '../containers/NavDrawer';

class App extends Component {

    render() {
        return (
            <div>
                <Loading />
                <Header />
                <NavDrawer />
                {this.props.children}
                <Notification />
                <Confirmation />
            </div>
        );
    }
}

export default App;