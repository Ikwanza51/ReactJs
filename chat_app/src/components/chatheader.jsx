import React from 'react'
import popi from '../img/popi.jpg'
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Chatheader = () => {
  return (
    <div className='chatheader'>
      <div className="profileinfo">
        <img src={popi} alt="DP" />
        <span className='profileName'>Venika</span>
      </div>
      <div className="icons">
        <CallIcon className='icon'></CallIcon>
        <VideocamIcon className='icon'></VideocamIcon>
        <MoreVertIcon className='icon'></MoreVertIcon>
      </div>
    </div>
  )
}

export default Chatheader