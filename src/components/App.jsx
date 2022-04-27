import Profile from 'components/social-profile/profile';
import user from 'components/social-profile/user.json';

import FriendList from 'components/friend-list/friendList';
import friends from 'components/friend-list/friends.json';

import Statistics from 'components/statistics/statisticsProps';
import data from 'components/statistics/data.json';



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Profile
        user={user}
      />

      <FriendList
        friends={friends}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> 

      Reac homework template
    </div>
  );
};
