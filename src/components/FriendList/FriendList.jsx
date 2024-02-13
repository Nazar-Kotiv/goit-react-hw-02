import { FriendListItem } from "../FriendListIteam/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list_container}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem data={friend} />
        </li>
      ))}
    </ul>
  );
};
