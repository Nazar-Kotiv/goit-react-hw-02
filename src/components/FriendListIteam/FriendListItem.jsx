import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";

export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  const statusFriend = clsx(css.status, isOnline ? css.online : css.offline);

  return (
    <div className={css.card}>
      <img
        className={css.avatar_friends}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.friend_name}> {name}</p>
      <p className={statusFriend}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
