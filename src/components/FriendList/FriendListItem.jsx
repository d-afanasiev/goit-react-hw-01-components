import PropTypes from "prop-types";
import css from './FriendListItem.module.css'

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={`${css.item} ${isOnline ? css.itemGreen : css.itemRed}`}>
      <span className={`${css.status} ${isOnline ? css.statusGreen : css.statusRed}`}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
