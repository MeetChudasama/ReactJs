import React, { useState } from "react";
import RegisterImg from "/src/assets/Register.jpg";

const FormValidation = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const handleChange = (e) => {
    
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  let validation = (user) =>{
    let formerr = {}
    let pattern =
      /^([a-zA-Z0-9_\!\@\#\$\%\^\&\*\-\.]+)\@([a-zA-Z_0-9]+)\.([a-zA-Z]{3})$/;
    let patternForPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/ //1 uppercase 1 lowercase 1 special char and min 8 max 32 
    if(user.username == ''){
      formerr.unameerr = 'Username is required'
    }
    if(user.email == ''){
      formerr.emailerr = 'Email is required'
    }
    else if(!pattern.test(user.email)){
      formerr.emailerr = "Invalid email";
    }

    if(user.password == ''){
      formerr.password = 'Password is required'
    }
    else if(!patternForPass.test(user.password)){
      formerr.password  = 'Invalid password'
    }
    
    if (user.cpassword == "") {
      formerr.cpassword = "Password is required";
    } 
    else if (user.password !== user.cpassword){
      formerr.cpassword = "Password does not match";
    }
    return formerr
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(user))
    setIsValid(true)
  };
  return (
    <>
      {isValid && Object.keys(errors).length == 0 ? JSON.stringify(user) : null}
      <div className="row shadow p-3 mt-5">
        <h1 className="d-flex justify-content-center mb-4">Form</h1>
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
              {errors.unameerr && (
                <span className="text-danger">{errors.unameerr}</span>
              )}
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
              {errors.emailerr && (
                <span className="text-danger">{errors.emailerr}</span>
              )}
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
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
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
              {errors.cpassword && (
                <span className="text-danger">{errors.cpassword}</span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormValidation;
