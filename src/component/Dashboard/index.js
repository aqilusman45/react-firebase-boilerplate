import React from 'react';
import {SignOut} from '../SignOut';
import { withAuthorization } from "../Session";

const Dashboard = () =>(
    <div>
        <h1>Dashboard</h1>
        <SignOut/>
    </div>
)

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Dashboard);