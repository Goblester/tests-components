import React from 'react';
import "./Message.module.css";
import s from "./Message.module.css";

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <li className={s.msgLeft}>
            <div className={s.msgLeftSub}>
                <img src={props.avatar} alt=""/>


                <div className={s.msgDesc}>
                    <div className={s.name}>{props.name}</div>
                    {props.message}
                    <small>{props.time}</small>
                </div>
            </div>
        </li>
    )
}


export default Message
