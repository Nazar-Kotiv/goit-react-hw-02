import css from "./Profile.module.css";

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.border_img}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.p}>{name}</p>
        <p className={css.p}>@{tag}</p>
        <p className={css.p}>{location}</p>
      </div>

      <ul className={css.ul}>
        <li className={css.li}>
          <span className={css.span}>Followers</span>
          <span className={css.span}>{followers}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Views</span>
          <span className={css.span}>{views}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Likes</span>
          <span className={css.span}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
