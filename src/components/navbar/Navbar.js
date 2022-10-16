import React from 'react'
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className='wrapper'>
      <div className='search'>
      <input type="text" placeholder="Search..."/>
      <SearchOutlinedIcon/>
      </div>
      <div className="items">
        <div className='item'>
        <LanguageOutlinedIcon className='icon'/>
        English
        </div>
        <div className='item'>
        <DarkModeOutlinedIcon className='icon'/>
        </div>
        <div className='item'>
        <FullscreenExitOutlinedIcon className='icon'/>
        </div>
        <div className='item'>
        <NotificationAddOutlinedIcon className='icon'/>
        <div className='counter'>1</div>
        </div>
        <div className='item'>
        <ChatBubbleOutlineOutlinedIcon className='icon'/>
        <div className='counter'>1</div>
        </div>
        <div className='item'>
        <ListOutlinedIcon className='icon'/>
        </div>
        <div className='item'>
        <img src="https://images.pexels.com/photos/13231218/pexels-photo-13231218.jpeg?cs=srgb&dl=pexels-guilherme-rodrigues-13231218.jpg&fm=jpg" alt='avatar' className='avatar'/>
        </div>
      </div>
      </div> 
    </div>
  )
}

export default Navbar;