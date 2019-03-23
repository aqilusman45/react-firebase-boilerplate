import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import {withAuthentication} from "../Session";

import * as ROUTE from '../../constants/routes';

import { Landing } from "../Landing_Page";
import { SignIn } from "../Sign_In";
import { SignUp } from "../Sign_Up";
import AccountSettings from "../Account_Settings";
import Dashboard from "../Dashboard";
import { Navigation } from '../Navigation';
import {ForgotPassword} from '../Forgot_Password';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="Wrapper">
                    <div>
                    <Navigation />
                    </div>
                    <div>
                    <Route path={ROUTE.LANDING} exact component={Landing} />
                    <Route path={ROUTE.SIGNIN} exact component={SignIn} />
                    <Route path={ROUTE.SIGNUP} exact component={SignUp} />
                    <Route path={ROUTE.DASHBOARD} exact component={Dashboard} />
                    <Route path={ROUTE.ACCOUNT_SETTINGS} exact component={AccountSettings} />
                    <Route path={ROUTE.FORGET_PASSWORD} exact component={ForgotPassword} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default withAuthentication(App);
