import React from 'react';
import FortniteNewsBR from './FortniteNewsBR'
import FortniteStore from './FortniteStore'

const MainContent = () => (

    <React.Fragment>


        <div className="container">
            <div className="row justify-content-between">
                <div className="col-sm-9">
                    <FortniteNewsBR />
                </div>
                <div className="col-sm-3">
                    <FortniteStore />
                </div>
            </div>
        </div>
    </React.Fragment>

);

export default MainContent;