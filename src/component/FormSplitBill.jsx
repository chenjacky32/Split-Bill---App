function FormSplitBill() {
  return (
    <>
      <form action="" className="form-split-bill">
        <h2>Patungan Bareng si X</h2>
        <label htmlFor="">💴Total Tagihan</label>
        <input type="text" name="" id="" />

        <label htmlFor="">💶Tagihan kamu</label>
        <input type="text" name="" id="" />

        <label htmlFor="">💵Tagihan Teman</label>
        <input type="text" name="" id="" disabled />

        <label htmlFor="">👤Ditalangi siapa</label>
        <select name="" id="">
          <option value="user">Kamu</option>
          <option value="friend">X</option>
        </select>

        <button className="button">Tambah</button>
      </form>
    </>
  );
}

export default FormSplitBill;
