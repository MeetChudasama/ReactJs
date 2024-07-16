import React, { Component } from "react";
import RegisterImg from "../../src/assets/Register.jpg";

export default class RegisterFormC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { username: "", email: "", password: "", cpassword: "" },
    };
  }
  handleChange= (e) =>{
    console.log(e);
    this.setState({user:{...this.state.user,[e.target.name]: e.target.value}})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state.user))
  };
  render() {
    return (
      <div className="row shadow p-3 mt-5">
        <div className="col-4">
          <img src={RegisterImg} className="img-fluid" />
          {/* <img src={require('../assets/Register.jpg')} /> */}
        </div>
        <div className="col-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="username"
                id="formId1"
                placeholder="username"
                value={this.state.user.username}
                onChange={this.handleChange}
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
                value={this.state.user.email}
                onChange={this.handleChange}
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
                value={this.state.user.password}
                onChange={this.handleChange}
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
                value={this.state.user.cpassword}
                onChange={this.handleChange}
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
  }
}
