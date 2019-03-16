import React from 'react';

import { Link } from 'react-router-dom';

import * as ROUTES from "../../constants/routes";

export const Navigation = () => (
    <div>
        <header>
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
        <hr />
    </div>
)