import React from 'react';
import { Button } from '@material-ui/core';
import './styles.css';

const LineAnimation = () => {

    const buttonClick = () => {
        console.log('you clicked me');

    }

    return (
        <div className={'root'}>
            <div className={'buttonContainer'}>
                <Button variant="contained" color="default" size="large" className={'button'} onClick={() => buttonClick()}>Click Me, See What Happens!</Button>
            </div>
            <div className={'footer'}>
                <div className={'lineContainer'}>
                    <div className={'notif'}>
                        <p className={'notifText'}>Hi! I'm a notification for you to see!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineAnimation;