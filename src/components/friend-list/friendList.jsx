import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list" key={friends.id}>
            {friends.map(friend => (
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    id={friend.id}
                />
            ))}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};

export default FriendList;
