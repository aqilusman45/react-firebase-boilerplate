import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTE from '../../constants/routes';

import { Landing } from "../Landing_Page";
import { SignIn } from "../Sign_In";
import { SignUp } from "../Sign_Up";
import { Dashboard } from "../Dashboard";
import { AccountSettings } from "../Account_Settings";
import { Home } from "../Home";
import { Navigation } from '../Navigation';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <Route path={ROUTE.LANDING} exact component={Landing} />
                    <Route path={ROUTE.SIGNIN} exact component={SignIn} />
                    <Route path={ROUTE.SIGNUP} exact component={SignUp} />
                    <Route path={ROUTE.HOME} exact component={Home} />
                    <Route path={ROUTE.DASHBOARD} exact component={Dashboard} />
                    <Route path={ROUTE.ACCOUNT_SETTINGS} exact component={AccountSettings} />
                </div>
            </Router>
        )
    }
}

export default App;
