import Friend from "./Friend";

function Friendlist({ friends, onSelected, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} onSelected={onSelected} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
}

export default Friendlist;
