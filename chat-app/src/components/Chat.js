import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Chat.css'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed --> ", input);
        setInput("");
    }
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen </p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__msg ${"chat__reciever"}`}>
                    <span className="chat__name">
                        Person 1
                    </span>
                    Person 1 message
                    <span className='chat__timestamp'>12:00</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form action="">
                    <input type="text" placeholder='Message...' value={input} onChange={e => setInput(e.target.value)} />
                    <button type='submit' onClick={sendMessage}>Send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat