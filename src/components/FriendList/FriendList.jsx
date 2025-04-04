import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import React from "react";
import s from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    return (
        <ul className={s.list}>
            {friends.map(({ id, name, avatar, isOnline }) => (
                <li key={id}>
                    <FriendListItem
                        name={name}
                        avatar={avatar}
                        isOnline={isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}

export default FriendList;
