import Friendlist from "./component/Friendlist";
import Formaddfriend from "./component/Formaddfriend";
import FormSplitBill from "./component/FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddfriend, setShowAddfriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function HandleShowaddFriends() {
    setShowAddfriend((showAddfriend) => !showAddfriend);
    setSelectedFriend(null);
  }

  function HandleaddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function HandleSelectedFriend(friend) {
    setSelectedFriend((selected) => (selected?.id === friend.id ? null : friend));
    setShowAddfriend(false);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Friendlist friends={friends} onSelected={HandleSelectedFriend} selectedFriend={selectedFriend} />
          {showAddfriend && <Formaddfriend onAddfriend={HandleaddFriends} />}
          <button className="button" onClick={HandleShowaddFriends}>
            {showAddfriend ? "Tutup" : "Tambah Teman"}
          </button>
        </div>
        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
      </div>
    </>
  );
}

export default App;
