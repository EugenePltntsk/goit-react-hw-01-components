import PropTypes from 'prop-types';
import css from "./Profile.module.css"

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="text">{username}</p>
        <p className="text">@{tag}</p>
        <p className="text">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers:</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views:</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes:</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
