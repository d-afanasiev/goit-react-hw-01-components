function Profile(props) {
  return (
    <div class="profile">
      <div class="description">
        <img src={props.src} alt="Аватар пользователя" class="avatar" />
        <p class="name">{props.name}</p>
        <p class="tag">@{props.tag}</p>
        <p class="location">Salvador, Brasil</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{props.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{props.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{props.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
