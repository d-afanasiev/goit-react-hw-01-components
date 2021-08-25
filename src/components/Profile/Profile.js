import PropTypes from "prop-types";
import "./Profile.css";

function Profile({ name, tag, avatar, followers, views, likes }) {
  return (
    <div className="Profile">
      <div className="Profile__description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="Profile__avatar"
        />
        <p className="Profile__name">{name}</p>
        <p className="Profile__tag">@{tag}</p>
        <p className="Profile__location">Salvador, Brasil</p>
      </div>

      <ul className="Profile__stats">
        <li>
          <span className="Profile__label">Followers</span>
          <span className="Profile__quantity">{followers}</span>
        </li>
        <li>
          <span className="Profile__label">Views</span>
          <span className="Profile__quantity">{views}</span>
        </li>
        <li>
          <span className="Profile__label">Likes</span>
          <span className="Profile__quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
