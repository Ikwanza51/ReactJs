import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Input = () => {
  return (
    <div className='input'>
      <input className='inputtext' type="text" placeholder='Type Message To Send......' />
      
      <div className='icons'>
        <input style={{display:'none'}} type="file" id='file'/>
        <label htmlFor='file'>
          <AttachFileIcon className='icon'></AttachFileIcon>
        </label>
        <input style={{display:'none'}} type="file" id='photo'/>
        <label htmlFor='photo'>
          <AddPhotoAlternateIcon className='icon'></AddPhotoAlternateIcon>
        </label>
        <SendIcon className='icon'></SendIcon>
      </div>
    </div>
  )
}

export default Input