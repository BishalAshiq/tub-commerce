import React from 'react';

const loading = () => {
    return (
        <div className="loading-pages">
            <div className="loading-text">LOADING</div>
           <div className="d-flex justify-content-center ">
                <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default loading;