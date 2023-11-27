import React from 'react';

const DashboardHeader = ({ heading }) => {
    return (
        <div>
            <div className="text-center p-14 justify-evenly bg-gradient-to-r from-blue-500 to-cyan-500">

                <h2 className="text-3xl text-white">{heading}</h2>
            </div>
        </div>
    );
};

export default DashboardHeader;