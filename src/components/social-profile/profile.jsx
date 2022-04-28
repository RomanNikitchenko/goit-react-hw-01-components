import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats, followers, views, likes }) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">Petra Marica</p>
                <p className="tag">@pmarica</p>
                <p className="location">Salvador, Brasil</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">1000</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">2000</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">3000</span>
                </li>
            </ul>
        </div>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

export default Profile;
