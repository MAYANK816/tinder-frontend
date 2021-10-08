import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
const Header = () => {
    return (
        <div className="Header">
           
           <IconButton>
           <PersonIcon fontSize="large" className="header_icon"/>
           </IconButton>
           <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG1.png" alt="logo" className="header_logo"></img>
           <IconButton>
           <ForumIcon fontSize="large" className="header_icon"/>
           </IconButton>
        </div>
    )
}

export default Header
