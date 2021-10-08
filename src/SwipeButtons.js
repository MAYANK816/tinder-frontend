import React from 'react'
import './SwipeButton.css'
import ReplayButton from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipe_Buttons_repeat">
                <ReplayButton fontSize="large"/>
            </IconButton>
            <IconButton className="swipe_Buttons_left">
                <CloseIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipe_Buttons_star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipe_Buttons_right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipe_Buttons_lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>

        </div>
    )
}

export default SwipeButtons
