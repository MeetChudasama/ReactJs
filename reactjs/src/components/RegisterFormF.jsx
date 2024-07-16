import React, { useState } from "react";
import RegisterImg from "/src/assets/Register.jpg";

const RegisterFormF = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    console.log(e);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(user));
  };
  return (
    <div className="row shadow p-3 mt-5">
      <div className="col-4">
        <img src={RegisterImg} className="img-fluid" />
      </div>
      <div className="col-6">
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="username"
              id="formId1"
              placeholder="username"
              value={user.username}
              onChange={handleChange}
            />
            <label htmlFor="formId1">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="email"
              id="formId2"
              placeholder="email"
              value={user.email}
              onChange={handleChange}
            />
            <label htmlFor="formId2">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="password"
              id="formId3"
              placeholder="password"
              value={user.password}
              onChange={handleChange}
            />
            <label htmlFor="formId3">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="cpassword"
              id="formId4"
              placeholder="confirm password"
              value={user.cpassword}
              onChange={handleChange}
            />
            <label htmlFor="formId4">Confirm Password</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterFormF;
