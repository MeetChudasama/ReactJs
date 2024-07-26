import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RegisterImg from "/src/assets/Register.jpg";

const ReactHookForm = () => {
  const {
    register, //is like state
    handleSubmit, //is for onsubmit button
    trigger, //is for onblur
    getValues, //for fetch the values from any object
    formState: { errors },
  } = useForm(); //just like useState
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <>
      <div className="row shadow p-3 mt-5">
        <h1 className="d-flex justify-content-center mb-4">useForm</h1>
        <div className="col-4">
          <img src={RegisterImg} className="img-fluid" />
        </div>
        <div className="col-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="username"
                id="formId1"
                placeholder="username"
                {...register("username", { required: "Username is required" })}
                onBlur={() => trigger("username")}
              />
              <label htmlFor="formId1">Username</label>
              {errors.username && (
                <span className="text-danger">{errors.username.message}</span>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="email"
                id="formId2"
                placeholder="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^([a-zA-Z0-9_\!\@\#\$\%\^\&\*\-\.]+)\@([a-zA-Z_0-9]+)\.([a-zA-Z]{3})$/,
                    message: "Invalid Email",
                  },
                })}
                onBlur={() => trigger("email")}
              />
              <label htmlFor="formId2">Email</label>
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="passwordld"
                className="form-control"
                name="password"
                id="formId3"
                placeholder="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
                    message: "Invalid Password",
                  },
                })}
                onBlur={() => trigger("password")}
              />
              <label htmlFor="formId3">Password</label>
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                name="cpassword"
                id="formId4"
                placeholder="confirm password"
                {...register("cpassword", {
                  required: "Confirm password is required",
                  validate: (cpassword) => {
                    const { password } = getValues();
                    return password === cpassword || "passwords should match";
                  },
                })}
                onBlur={() => trigger("cpassword")}
              />
              <label htmlFor="formId4">Confirm Password</label>
              {errors.cpassword && (
                <span className="text-danger">{errors.cpassword.message}</span>
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

export default ReactHookForm;
