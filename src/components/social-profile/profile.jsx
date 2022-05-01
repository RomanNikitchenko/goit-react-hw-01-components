import PropTypes from 'prop-types';
import s from 'components/social-profile/profile.module.css'

const Profile = ({ username, tag, location, avatar, stats, followers, views, likes }) => {
    return (
        <div className={`${s.profile}`}>
            <div className={`${s.description}`}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={`${s.avatar}`}
                />
                <p className={`${s.name}`}>{username}</p>
                <p className={`${s.tag}`}>@{tag}</p>
                <p className={`${s.location}`}>{location}</p>
            </div>

            <ul className={`${s.stats}`}>
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
