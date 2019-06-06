import React from 'react';
import FortniteNewsBR from './FortniteNewsBR'
import FortniteStoreFeatured from './FortniteStore'

const MainContent = () => (

    <div className="main-content">


        <div className="container">
            <div className="row justify-content-between">
                <div className="col-sm-8">
                    <FortniteNewsBR />
                </div>
                <div className="col-sm-4">
                    <FortniteStoreFeatured />
                </div>
            </div>
        </div>
    </div>

);

export default MainContent;