
import { Profile } from "./Profile"
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";
import { TransactionHistory } from "./TransactionHistory"

import userData from "../data/user.json"
import stat from "../data/stat.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"


export const App = () => {

const { username, tag, location, avatar, stats } = userData;  

  return (
    <div
      style={{
        
        width: "1200px",
        margin: "0 auto",
        
      
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats}/>
      <Statistics title="Upload Stat" stat={stat}/> 
      <Statistics stat={stat}/>

      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
      
    </div>
  );
};


// export const App = () => {
//   const array = ["one", "two", "three"];

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       {array.length > 3 ? <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats}/> :  <span>555555</span>}
//       {array.map(item => (
//        <span key={item}>{item}</span>
//       )
        
//       )}
//     </div>
//   );
// };