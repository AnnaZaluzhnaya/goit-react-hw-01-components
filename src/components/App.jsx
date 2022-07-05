import FriendList from 'components/FriendsList';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import TransactionHistory from 'components/TransactionHistory';

import user from 'Data/user.json';
import data from 'Data/data.json';
import friends from 'Data/friends.json';
import transactions from 'Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
