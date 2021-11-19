import React from 'react';
import './styles.css';

//either paint scribble animation, or perhaps a drawn square in
//the shape of a frame for an art piece, make it spin?
const LoadingAnimation = () => {
    return (
        <div className={'root'}>
            <div className={'box'}></div>
            <div className={'text'}>This is for loading...</div>
        </div>
    )
};

export default LoadingAnimation;