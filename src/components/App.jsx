import { Profile } from "../components/Profile";
import user from '../dataFiles/user.json';
import data from '../dataFiles/data.json';
import { Statistics } from "../components/Statistics";
import friends from '../dataFiles/friends.json';
import { FriendList } from "../components/FriendList";
import transactions from '../dataFiles/transactions.json';
import { TransactionHistory } from '../components/TransactionHistory';


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
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
