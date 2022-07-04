import styles from './FriendsList.module.css'

export function FriendsListItem({ avatar, name}) {
  return (
    <li className={styles.itemFriend}>
      <span className={styles.status}></span>
      <img
        src={avatar}
        alt="User avatar"
        width="100"
        className='photo'
      />
      <p className={styles.nameFriend}>{name}</p>
    </li>
  )
}

export function FriendList({ friends }) {
    return (
    <ul className={styles.friendList}>
    {friends.map(({ avatar, name, id }) => (
        <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            
        />
    ))}
    </ul>
    )
}

