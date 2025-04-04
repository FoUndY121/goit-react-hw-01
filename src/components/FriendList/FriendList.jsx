import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import React from "react";
import s from "./FriendList.module.css"
const FriendList = ({friends})=> {
    return (
        <ul className={s.list}>
            {/* Кількість li залежить від кількості об'єктів в масиві */}

                {friends.map(({ id, name, avatar, isOnline }) => (
                    <li >

                        <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline}/>
                    </li>
                        ))}


                    </ul>
                    );

                }
export default FriendList