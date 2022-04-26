import Profile from './social-profile/profile';
import user from './social-profile/user.json';

import FriendList from './friend-list/friendList';
import friends from './friend-list/friends.json';

import Statistics from './statistics/statisticsProps'
import data from './statistics/data.json'



export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   textTransform: 'uppercase',
      //   color: '#010101',
      // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList
        friends={friends}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      React homework template
    </div>
  );
};
