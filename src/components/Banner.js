import React from 'react';

const Banner = ({bannerStyle, children}) => {
    return (
        <div className={bannerStyle} >
             {children}
        </div>
    );
};

export default Banner;