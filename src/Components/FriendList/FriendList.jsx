import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import React from "react";
import s from "./FriendList.module.css"
const FriendList = ({friends})=> {
    return (
        <ul >
            {/* Кількість li залежить від кількості об'єктів в масиві */}
            <li className={s.list}>
                {friends.map(({ id, name, avatar, isOnline }) => (
                    <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
                ))}
            </li>
        </ul>
    );

}
export default FriendList