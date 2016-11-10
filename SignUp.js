import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button, Alert} from "react-bootstrap";
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyBKAraQB1qiQa5_QBWKb1ZyQaUeiEMf0fE",
    authDomain: "technicaltest-66a28.firebaseapp.com",
    databaseURL: "https://technicaltest-66a28.firebaseio.com",
    storageBucket: "technicaltest-66a28.appspot.com",
};
firebase.initializeApp(config);

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }
    updateEmail(e) {
        this.setState({email: e.target.value});
    }
    signUpUser(event) {
        if (this.state.email != "" && this.state.email.indexOf("@") != -1) {
            var storageRef = firebase.database().ref("SignedUpUsers").push(this.state.email);
            this.setState({email: ""});
        }
    }
    render() {
        return (
            <div>
                <div className="BorderSeparator"></div>
                <div id="sign-up" className="PagePadding"></div> 
                <div className="SignUpStyle">
                    <h1>Sign Up</h1> 
                    <div className="FormAlign">
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="text" placeholder="Enter email" value={this.state.email} onChange={this.updateEmail.bind(this)} ref={(input) => this.textInput = input}/>
                        </FormGroup>
                        <div className="ButtonAlign">
                            <Button type="button" onClick={this.signUpUser.bind(this)}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}