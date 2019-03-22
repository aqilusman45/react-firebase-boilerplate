import React from 'react';
import { ChangePassword } from "../Change_Password";
import { SignOut } from '../SignOut';

export const Dashboard = () => (
    <div className="SignIn-Page">
        <div className="SignIn-Form-Wrapper">
            <div className="SignIn-Form">
                <h1>Dashboard</h1>
                <ChangePassword />
                <SignOut />
            </div>
        </div>
    </div>
)