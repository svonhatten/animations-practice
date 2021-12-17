import React from 'react';
import { Button, Grow } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './styles.css';

const Home = () => {
    return (
        <div className={'root'}>
            <div className={'headerContainer'}>
                <h1 className={'headerText'}>S O P H I E    V O N  H A T T E N</h1>
            </div>
            <hr className={'divider'} />
            <div className={'cardsContainer'}>
                <Grow in={true}>
                    <div className={'card upSize'} to="/notification">
                        <div className={'cardGlow'}></div>
                        <div className={'innerCard upSize'}>
                            <Link to="/notification" className={'linkContainer'}>
                                <h3 className={'linkText'}>Notification Demo</h3>
                                <p className={'text'}>Pop-up notifications are a subtle, yet helpful way of letting the user know of any changes in status or information regarding their interactions with the page.</p>
                            </Link>
                        </div>
                    </div>
                </Grow>
                <Grow in={true}>
                    <div className={'card upSize'} to="/loading">
                    <div className={'cardGlow'}></div>
                        <div className={'innerCard upSize'}>
                            <Link to="/loading" className={'linkContainer'}>
                                <h3 className={'linkText'}>Loading Demo</h3>
                                <p className={'text'}>Loading animations can maintain the user's attention and patience while they are being directed to another part of the application.</p>
                            </Link>
                        </div>
                    </div>
                </Grow>
            </div>
        </div>
    )
};

export default Home;