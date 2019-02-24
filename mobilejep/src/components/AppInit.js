import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyBvl4TWh4Wy0_BT9PXfP4oYcG_pMg55tQU",
    authDomain: "mobilejep-c5040.firebaseapp.com",
    databaseURL: "https://mobilejep-c5040.firebaseio.com",
    projectId: "mobilejep-c5040",
    storageBucket: "mobilejep-c5040.appspot.com",
    messagingSenderId: "27950471810"
    };
    
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.alreadyLogin(user);
        } else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return (
        <Main />
    );
  }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);