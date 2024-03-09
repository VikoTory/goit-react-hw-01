
import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      {" "}
      <div>
        <img
          className={css.profileImage}
          src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
          alt="User avatar"
        />
        <p className={css.name}>{name}</p> <p className={css.info}>@{tag}</p>{" "}
        <p className={css.info}>{location}</p>{" "}
      </div>{" "}
      <ul className={css.profileList}>
        {" "}
        <li className={css.profileItem}>
          <span className={css.statsName}>Followers</span>{" "}
          <span className={css.statsInfo}>{stats.followers}</span>{" "}
        </li>
        <li className={css.profileItem}>
          <span className={css.statsName}>Views</span>{" "}
          <span className={css.statsInfo}>{stats.views}</span>{" "}
        </li>
        <li className={css.profileItem}>
          <span className={css.statsName}>Likes</span>{" "}
          <span className={css.statsInfo}>{stats.likes}</span>{" "}
        </li>{" "}
      </ul>
    </div>
  );
};
export default Profile;