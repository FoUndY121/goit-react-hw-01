import s from "./FriendListItem.module.css"
const FriendListItem =({name,avatar,isOnline})=>{
return (
    <div className={s.list}>
        <img src={avatar} alt="Avatar" width="48" className={s.friendsImg}/>
        <p className={s.name}>{name}</p>
        <p>
            {isOnline ? (
                <span className={s.spanOnline}>Online</span>
            ) : (
                <span className={s.spanOfline}>Offline</span>
            )}
        </p>
    </div>

);
}
export default FriendListItem