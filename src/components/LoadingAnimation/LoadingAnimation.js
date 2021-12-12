import React from 'react';
import { Zoom } from '@material-ui/core';
import './styles.css';

//either paint scribble animation, or perhaps a drawn square in
//the shape of a frame for an art piece, make it spin?
const LoadingAnimation = () => {
    return (
        <div className={'root'}>
            <Zoom in={true}>
                <div className={'box'}></div>
            </Zoom>
            <Zoom in={true}>    
                <div className={'text'}>This is for loading...</div>
            </Zoom>
        </div>
    )
};

export default LoadingAnimation;