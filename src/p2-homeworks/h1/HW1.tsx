import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import "./Message.module.css";
import s from "./Message.module.css";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}


function HW1() {
    return (
        <div>
            <hr/>
            <ul>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />


            </ul>
            <hr/>
        </div>
    )
}

export default HW1
