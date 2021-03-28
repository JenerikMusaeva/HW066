import React, { useState } from "react";
import "./styles.scss";

function SignUp2() {
  let [form, setForm] = useState({});

  let [info, setInfo] = useState('');

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm(() => {
      return { ...form, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setInfo(() => {
      info = alert(
        form.password != form.confirmPassword
          ? "Пароли не совпадают"
          : `
              name: ${form.firstname} ${form.lastname}
              email: ${form.email}
              password: ${form.password}
            `
      );
    });
  };

  return (
    <div className="card">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <p className="form-text">
          Please fill in this form to create an account!
        </p>
      </div>
      <hr />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="First Name"
            type="text"
            name="firstname"
            value={form.firstname || ""}
          />

          <input
            onChange={handleChange}
            placeholder="Last Name"
            type="text"
            name="lastname"
            value={form.lastname || ""}
          />

          <input
            onChange={handleChange}
            placeholder="Email"
            type="text"
            name="email"
            value={form.email || ""}
          />

          <input
            onChange={handleChange}
            placeholder="Password"
            type="password"
            name="password"
            value={form.password || ""}
          />

          <input
            onChange={handleChange}
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword || ""}
          />

          <button className="btn-submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp2;
