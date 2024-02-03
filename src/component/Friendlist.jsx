import Friend from "./Friend";

function Friendlist({ friends, onSelected }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} onSelected={onSelected} />
      ))}
    </ul>
  );
}

export default Friendlist;
