import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Zoom } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';

const useStyles = makeStyles({
    button: {
        order: 0,
        flex: '0 1 auto',
        alignSelf: 'center',
        backgroundColor: '#1c1b1b',
        border: '2px solid transparent',
        borderImage: 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
        borderImageSlice: 1,
        color: 'white',
        fontWeight: 'bold',
    }
})

const LineAnimation = () => {

    const classes = useStyles();

    //for when the user wants to go back to the prev page
    const navigate = useNavigate();

    // state tracking for animation
    const [animate, setAnimate] = React.useState(false);

    // handler for when the button is clicked to show the notification
    const buttonClick = () => {
        setAnimate(true);
        document.getElementById('notif').className = 'notif';

    };

    return (
        <div className={'root'}>
            <div className={'backButtonContainer'}>
                <Button onClick={() => navigate('/')}>
                    <ChevronLeft size={'large'} className={'backIcon'}/> 
                    <div className={'backIcon'}>Back to Home</div>
                </Button>
            </div>
            <Zoom in={true}>
                <div className={'buttonContainer'}>
                    <Button size="large" className={classes.button} onClick={() => buttonClick()}>Click Me, See What Happens!</Button>
                </div>
            </Zoom>
            <div className={'footer'}>
                <div className={'lineContainer'}>
                    <div id="notif" className={animate ? 'notif' : null}>
                        {animate ? <p className={animate ? 'notifText' : null}> Submission Successful </p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineAnimation;