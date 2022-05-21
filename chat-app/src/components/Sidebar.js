import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import db from './firebase';

// ==============Material Icons===================
import { Avatar, IconButton, recomposeColor } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// =============================================


function Sidebar() {

    const [room, setRoom] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setRoom(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
    }, [])

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
                <SidebarChat addNewChat />
                {room.map(r => (
                    <SidebarChat key={r.id} id={r.id} name={r.data.name} />
                ))}
            </div>

        </div>
    )
}

export default Sidebar