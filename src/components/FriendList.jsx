export function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li class="item">
      <span class="status"></span>
      <img
        src={avatar}
        alt="User avatar"
        width="100"
      />
      <p class="name">{name}</p>
    </li>
  );
};

export function FriendList({ friends }) {
    return (
<ul class='friendList'>
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
};