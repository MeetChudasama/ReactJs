import React from 'react'

const Props = (props) => {
  return (
    <div>
      <h1>Majon</h1>
      <h2>{props.fname}</h2>
    </div>
  )
}

export default Props

// The difference in class and fun comp are that we have to write this keyword in class and in fun we have to pass the value props.

// import React, { Component } from 'react'

// export default class Props extends Component {
//   render() {
//     return (
//       <div>
//         <h2>{this.props.fname}</h2>
//       </div>
//     );
//   }
// }
