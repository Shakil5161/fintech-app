import React from 'react';
import Action from './Action/Action';
import RecentActivity from './RecentActivity/RecentActivity';
import './Body.css'
const Body = () => {
    return (
        <section className="container body-height body-bg d-flex">
            <div className="col-md-4">
            <h1>Action</h1>
                <Action/>
            </div>
            <div className="col-md-8">
            <h1>Recent Activity</h1>
                <RecentActivity/>
            </div>
        </section>
    );
};

export default Body;