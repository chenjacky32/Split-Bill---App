import { useState } from "react";

function Formaddfriend({ onAddfriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function HandleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newfriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddfriend(newfriend);
    setName("");
    setImage("");
  }

  return (
    <form action="" className="form-add-friend" onSubmit={HandleSubmit}>
      <label htmlFor="">👤Nama</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="">📸Gambar</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

      <button className="button">Tambah</button>
    </form>
  );
}

export default Formaddfriend;
