function FriendListItem(props) {
  //   console.log(idFriend);
  return (
    <li key={props.idFriend} className="item">
      <span className="status">{props.isOnline}</span>
      <img className="avatar" src={props.avatar} alt={props.name} width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
}

export default FriendListItem;
