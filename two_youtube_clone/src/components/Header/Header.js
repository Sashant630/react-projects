import React from 'react'
import './Header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp'
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp'
import {Avatar} from '@mui/material';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="header__left">
            <MenuSharpIcon/>
            <img className='header__logo' src={logo} alt="youtube-icon" />
        </div>
        <div className="header__input">
            <input type="text" placeholder='Search' id="" />
            <SearchSharpIcon className='header__inputButton' />
        </div>
        <div className="header__icons">
            <VideoCallSharpIcon className='header__icon'/>
            <AppsSharpIcon className='header__icon'/>
            <NotificationsSharpIcon className='header__icon'/>
            <Avatar alt=""
                src=""
            />
        </div>

    </div>
  )
}

export default Header