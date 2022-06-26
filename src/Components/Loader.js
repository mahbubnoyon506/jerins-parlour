import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center my-auto ">
            <div className="w-8 h-8 border-b-2 border-primary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;