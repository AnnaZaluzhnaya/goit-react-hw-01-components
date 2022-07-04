import styles from './FriendsList.module.css'
import PropTypes from 'prop-types'

export function FriendsListItem({ avatar, name, isOnline}) {
  return (
    <li className={styles.itemFriend}>
      <span className={ isOnline ? styles.online : styles.offline }></span>
      <img
        src={avatar}
        alt="User avatar"
        width="100"
        className={styles.photo}
      />
      <p className={styles.nameFriend}>{name}</p>
    </li>
  )
}

export function FriendList({ friends }) {
    return (
    <ul className={styles.friendList}>
    {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline ={isOnline}
        />
    ))}
    </ul>
    )
}


FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        })
  )
}