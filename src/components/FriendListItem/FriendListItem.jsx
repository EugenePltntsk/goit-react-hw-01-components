import PropTypes from 'prop-types';
import css from "./FriendListItem.module.css"

export function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
    <span className={`${css.status} ${isOnline ? css.isOnline : ""}`}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
  )
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
}