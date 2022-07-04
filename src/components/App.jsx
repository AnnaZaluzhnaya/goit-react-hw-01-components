import { Profile } from "./Profile/Profile";
import user from '../Data/user.json';
import data from '../Data/data.json';
import { Statistics } from "./Statistics/Statistics";
import friends from '../Data/friends.json';
import { FriendList } from "./FriendsList/FriendList";
import transactions from '../Data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


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
