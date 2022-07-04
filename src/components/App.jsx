import { Profile } from "./Profile/Profile";
import user from '../dataFiles/user.json';
import data from '../dataFiles/data.json';
import { Statistics } from "./Statistics/Statistics";
import friends from '../dataFiles/friends.json';
import { FriendList } from "./FriendsList/FriendList";
import transactions from '../dataFiles/transactions.json';
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
