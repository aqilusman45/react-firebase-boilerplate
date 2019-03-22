import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import './styles.css';


const Navigation1 = (props) => {
    return (


        <header>

            <a className="logo" href={props.location.pathname}>{props.location.pathname }</a>

            <input id="nav" type="checkbox" />
            <label htmlFor="nav"></label>

            <nav>
                <ul>
                    <li>
                        <Link to={ROUTES.LANDING}>Landing</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SIGNUP}>Sign Up</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SIGNIN}>Sign In</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.FORGET_PASSWORD}>Forgot Password?</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

const Navigation = withRouter(Navigation1);

export { Navigation };
