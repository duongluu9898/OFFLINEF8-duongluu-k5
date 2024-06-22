import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(form);
    const errorObj = {};
    const { name, email } = form;
    if (!name) {
      errorObj.name = "Please enter your name";
    }

    if (!email) {
      errorObj.email = "Please enter your email";
    }
    setErrors(errorObj);

    if (!Object.keys(errorObj).length) {
      const user = { name, email };
      setUsers([user, ...users]);
    }
    setForm({}); // reset input enter
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleRemove = (index) => {
    if (window.confirm("Are you sure")) {
      setUsers(users.filter((user, _index) => _index !== index));
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name..."
              onChange={handleChange}
              value={form.name ?? ""}
            />
            {errors.name}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email..."
              onChange={handleChange}
              value={form.email ?? ""}
            />
            {errors.email}
          </div>

          <button>Sumbit</button>
        </form>
      </div>

      <hr />

      {users.map(({ name, email }, index) => (
        <div key={index} style={{ borderBottom: "1px solid red" }}>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <button onClick={() => handleRemove(index)}>Remove me</button>
        </div>
      ))}
    </div>
  );
}
