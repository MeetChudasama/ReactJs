// import React, { Component, useState } from 'react'

//Class Componenet
// export default class State extends Component {
//     constructor(props) {
//       super(props)

//       this.state = { userName: 'Meet', eMail: 'meetchudasama80@gmail.com', address: 'Ahmedabad'}
//     }
//     changeName= ()=>{
//         return (
//             this.setState(alert({userName: 'Majon'}))
//         )
//     }

//   render() {
//     return (
//       <div>
//         <button
//             type="button"
//             className="mt-5 mb-3 btn btn-danger"
//             onClick={this.changeName}
//         >
//             Click for Change
//         </button>

//         <h1>{this.state.userName}</h1>
//         <h3>{this.state.eMail}</h3>
//         <h3>{this.state.address}</h3>
//       </div>
//     );
//   }
// }

//Functional Component

import React, { useState } from "react";

const State = () => {
  let [count, setCount] = useState("");
  const [username, setUsername] = useState("");

  // const handleChange = (e) =>{
  //   setUsername(e.target.value)
  // }
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary mt-4 mb-3"
        onClick={() => setCount(parseInt((count += 1)))}
      >
        Counter
      </button>
      <h4>{count}</h4>

      <div className="form-floating mb-3 col-4">
        <input
          type="text"
          className="form-control mb-4"
          name="username"
          id="formId1"
          placeholder="userName"
          // onChange={handleChange}
          onChange={(e) => setUsername(e.target.value)} //we can also write it like this
          value={username}
        />
        <label htmlFor="formId1">Name</label>
        <h4>Hello, {username} </h4>
      </div>
    </div>
  );
};

export default State;
