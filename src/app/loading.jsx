import React from 'react';

const loading = () => {
    return (
        <div>
            <div>LOADING ............ !</div>
           <div className="d-flex justify-content-center loading">
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