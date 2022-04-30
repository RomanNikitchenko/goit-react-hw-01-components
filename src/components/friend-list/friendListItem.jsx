import PropTypes from 'prop-types';
import s from 'components/friend-list/friend.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={`${s.item}`}>
            <span className={`${s.led} ${isOnline ? s.green : s.red}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
