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
  const [showAddfriend, setShowAddfriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function HandleShowaddFriends() {
    setShowAddfriend((showAddfriend) => !showAddfriend);
  }

  function HandleaddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Friendlist friends={friends} />
          {showAddfriend && <Formaddfriend onAddfriend={HandleaddFriends} />}
          <button className="button" onClick={HandleShowaddFriends}>
            {showAddfriend ? "Tutup" : "Tambah Teman"}
          </button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
