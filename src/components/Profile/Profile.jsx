import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />

      <Stats followers={followers} views={views} likes={likes} />
    </div>
  );
};

const Description = ({ avatar, location, tag, username }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
