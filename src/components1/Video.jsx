import React from 'react';
import './Video.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { MdSend } from 'react-icons/md';
import { AiOutlineAudio, AiOutlineVideoCamera, AiOutlineSound, AiOutlinePhone } from 'react-icons/ai';
import first from "../Images/first.jpg";

const Video = () => {
  return (
    <div className="card-container">
      <div className="main-video-container">
        <img src={first} alt="Main Video" className="main-photo" />
        <div className="icons">
          <AiOutlineSound className="icon" />
          <AiOutlineVideoCamera className="icon" />
          <AiOutlineAudio className="icon" />
          <AiOutlinePhone className="icon" />
        </div>
      </div>
      <div className="avatar-container">
        <Stack direction="row" spacing={2}>
          <Avatar alt="Douglas Howard" src={first} />
          <div className="avatar-info">
            <div className='avatar-name'>Douglas Howard</div>
            <button className="follow-button">Follow</button>
          </div>
        </Stack>
      </div>
      <div className="message-section">
        <input type="text" placeholder="Tap to write..." />
        <button><MdSend /></button>
      </div>
    </div>
  );
};

export default Video;
