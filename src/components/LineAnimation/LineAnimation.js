import React from 'react';
import { Button } from '@material-ui/core';
import './styles.css';

const LineAnimation = () => {

    const [animate, setAnimate] = React.useState(false);

    const buttonClick = () => {
        console.log('you clicked me');
        setAnimate(true);
        document.getElementById('notif').className = 'notif';

    };

    return (
        <div className={'root'}>
            <div className={'buttonContainer'}>
                <Button variant="contained" color="default" size="large" className={'button'} onClick={() => buttonClick()}>Click Me, See What Happens!</Button>
            </div>
            <div className={'footer'}>
                <div className={'lineContainer'}>
                    <div id="notif" className={animate ? 'notif' : null}>
                        {animate ? <p className={animate ? 'notifText' : null}>Hi! I'm a notification for you to see!</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineAnimation;