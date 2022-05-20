import React from 'react';
import './Sidebar.css';

// ==============Material Icons===================
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// =============================================
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>

            {/* Header which contains Avatar and 3 other material icons */}
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            {/* Search Bar with search icon and input field */}
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='Search or Start a new chat' />
                </div>
            </div>

            {/* Chat area where recent chats and most recent messages will be shown */}
            <div className="sidebar__chats">
                <SidebarChat />
            </div>

        </div>
    )
}

export default Sidebar