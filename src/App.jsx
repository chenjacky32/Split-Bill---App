import Friendlist from "./component/Friendlist";
import Formaddfriend from "./component/Formaddfriend";
import FormSplitBill from "./component/FormSplitBill";

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
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Friendlist friends={initialFriends} />
          <Formaddfriend />
          <button className="button">Tambah teman</button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
