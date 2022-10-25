import { FriendListItem } from '../FriendListItem';
import PropTypes from 'prop-types';
import css from "./FriendList.module.css"

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
    {friends.map(item => (
      <FriendListItem name={item.name} avatar={item.avatar} isOnline={item.isOnline} key={item.id}/>
    ))}
    </ul>
  )
  
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
