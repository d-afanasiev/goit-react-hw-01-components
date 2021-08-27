import FriendListItem from "../FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          idFriend={friend.id}
        />
      ))}
    </ul>
  );
}

export default FriendList;
