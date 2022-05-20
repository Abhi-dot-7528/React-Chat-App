import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src='https://avatars.dicebear.com/api/initials/1.svg' />
            <div className="sidebarChat__info">

            </div>
        </div>
    )
}

export default SidebarChat