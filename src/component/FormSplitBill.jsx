import { useState } from "react";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoispay, setWhoispay] = useState("user");

  function HandleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoispay === "user" ? friendBill : -myBill);
  }

  return (
    <>
      <form action="" className="form-split-bill" onSubmit={HandleSubmit}>
        <h2>Patungan Bareng si {selectedFriend.name}</h2>
        <label htmlFor="">💴Total Tagihan</label>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

        <label htmlFor="">💶Tagihan kamu</label>
        <input type="text" value={myBill} onChange={(e) => setMyBill(e.target.value)} />

        <label htmlFor="">💵Tagihan {selectedFriend.name}</label>
        <input type="text" value={friendBill} disabled />

        <label htmlFor="">👤Ditalangi siapa</label>
        <select value={whoispay} onChange={(e) => setWhoispay(e.target.value)}>
          <option value="user">Kamu</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <button className="button">Tambah</button>
      </form>
    </>
  );
}

export default FormSplitBill;
