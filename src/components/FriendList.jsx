import css from './styled-components/FriendsList-style.css'

export function FriendsListItem({ avatar, name, isOnline}) {
  return (
    <li className="item-friend">
      <span className="status"></span>
      <img
        src={avatar}
        alt="User avatar"
        width="100"
        className='photo'
      />
      <p className="name-friend">{name}</p>
    </li>
  )
}

export function FriendList({ friends }) {
    return (
    <ul className='friendList'>
    {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
        />
    ))}
    </ul>
    )
}