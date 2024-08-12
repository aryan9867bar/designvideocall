import React from 'react';
import './MainVideo.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { MdSend } from 'react-icons/md';
import first from "../Images/first.jpg";
import second from "../Images/second.jpg";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";


const MainVideo = () => {
  return (
    <div className="card-container">
      <div className="main-video-container">
      <img src={first} alt="Main Video" className="main-photo" />
      <div className="three-dots-menu">
        <PiDotsThreeOutlineVerticalLight />
      </div>
      <div className="small-photo-container">
        <figure>
            <img src={second} alt="" className="small-photo" />
        </figure>
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

export default MainVideo;