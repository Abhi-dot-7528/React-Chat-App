import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

function SidebarChat({ id, name, addNewChat }) {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Enter name for Chat: ");

        if (roomName) {
            // Database work here...
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            {/* Using --> https://avatars.dicebear.com/api/:sprites/:seed.svg <-- free api to generate Avatars */}
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h3>{name}</h3>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div className="sidebarChat" onClick={createChat}>
            <h3>Add new chat</h3>
        </div>
    )
}

export default SidebarChat