import s from "./Profile.module.css"

const Profile = ({name,tag,location,stats, image})=>{
    return (
        <div className={s.container}>
            <div className={s.vasy}>
                <img className={s.photo}
                    src={image}
                    alt="User avatar"
                />
                <p className={s.name}>{name}</p>
                <p > @{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={s.list}>
                <li className={s.item}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={s.item}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={s.item}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
}
export default Profile