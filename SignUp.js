import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from "react-bootstrap";

export default class Home extends React.Component {
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
                            <FormControl type="text" placeholder="Enter email"/>
                        </FormGroup>
                        <div className="ButtonAlign">
                            <Button type="button">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}