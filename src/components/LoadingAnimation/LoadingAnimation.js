import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Zoom } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import './styles.css';

const LoadingAnimation = () => {

    //for when the user wants to go back to the prev page
    const navigate = useNavigate();

    return (
        <div className={'root'}>
            <div className={'backButtonContainer'}>
                <Button onClick={() => navigate('/')}>
                    <ChevronLeft size={'large'} className={'backIcon'}/> 
                    <div className={'backIcon'}>Back to Home</div>
                </Button>
            </div>
            <div className={'loadingContainer'}>
                <Zoom in={true}>
                    <div className={'box'}></div>
                </Zoom>
                <Zoom in={true}>    
                    <div className={'text'}>Loading...</div>
                </Zoom>
            </div>
        </div>
    )
};

export default LoadingAnimation;