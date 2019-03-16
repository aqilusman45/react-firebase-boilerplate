import React from 'react';
import {SignUpForm} from '../Sign_Up_Form';
import { withFirebase } from "../Firebase";
import { withRouter } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

// import './styles.css'

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(() => {
                this.setState({
                    ...INITIAL_STATE
                });
                this.props.history.push(ROUTES.HOME);
            })
            .catch((error) => {
                this.setState({ error })
            })
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, });
    }

    render() {
        return (
            <div className="SignIn-Page">
                <SignUpForm formInputs={this.state} onChange={this.onChange} onSubmit={this.onSubmit} />
            </div>
        )
    }

}

const SignUp = withRouter(withFirebase(SignUpComponent));

export { SignUp };