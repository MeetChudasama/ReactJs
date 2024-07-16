import React, { Component } from "react";

export default class Textbox extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "Meet", count: '' };
  }

//   handleChange = (e) => {
//     this.setState({ username: e.target.value });
//   };
//   handleClick = () => {
    
//   }
  render() {
    return (
    //   <div>
    //     <div className="mb-3 col-4">
    //       <input
    //         type="text"
    //         name="username"
    //         className="form-control mt-5"
    //         placeholder="Username"
    //         value={this.state.username}
    //         onChange={this.handleChange}
    //       />
    //       <button
    //         type="button"
    //         className="btn btn-primary mt-3"
    //         onClick={this.handleClick}
    //       >
    //         Click Me
    //       </button>
    //     </div>
    //     <h4>Hello, {this.state.username} </h4>
    //   </div>
        <div>
            <button
                type="button"
                className="btn btn-primary mt-5"
                onClick={()=>this.setState({count: parseInt(this.state.count+=1)})}
            >
                Counter
            </button>
            <h3>{this.state.count}</h3>
        </div>
    );
  }
}
