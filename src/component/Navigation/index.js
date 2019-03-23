import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { AuthenticatedUser } from '../Session';

import './styles.css';


const NavigationBar = ({ location }) => {
    return (
        <header>
            <a className="logo" href={location.pathname}>{location.pathname}</a>
            <input id="nav" type="checkbox" />
            <label htmlFor="nav"></label>
            <nav>
                <ul>
                    <li>
                        <Link to={ROUTES.LANDING}>Landing</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SIGNIN}>Sign In</Link>
                    </li>
                    <AuthenticatedUser.Consumer>
                        {
                            authUser=> authUser ? <WithAuthNavBar/> : null
                        }
                    </AuthenticatedUser.Consumer>
                </ul>
            </nav>
        </header>
    );
}

const Navigation = withRouter(NavigationBar);

export { Navigation };


const WithAuthNavBar = ()=>{
    return(
        <React.Fragment>
        <li>
            <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT_SETTINGS}>Account</Link>
        </li>
        </React.Fragment>
    );
}