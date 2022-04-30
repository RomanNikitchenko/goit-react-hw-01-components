import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import s from 'components/friend-list/friend.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.list}>
            {friends.map(friend => (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                        id={friend.id}
                    />
                )
            )}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};

export default FriendList;
