import Friend from "./Friend";

function Friendlist({ friends }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} />
      ))}
    </ul>
  );
}

export default Friendlist;
