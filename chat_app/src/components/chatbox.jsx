import React from 'react'
import Chatheader from './chatheader'
import Messages from './messages'
import Input from './input'


export const Chatbox = () => {
  return (
    <div className='chatbox'>
      <Chatheader />
      <Messages/>
      <Input />
    </div>
  )
}
