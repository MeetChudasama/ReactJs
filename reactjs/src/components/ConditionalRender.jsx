import React from "react";
import Props from "./Props";

const ConditionalRender = (props) => {
  // if (props.isLoggedIn===true) {
  //   return (
  //     <div>
  //       <h1>Welcome Meet Chudasama</h1>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>Welcome Majon Don</h1>
  //     </div>
  //   );
  // }

  //This is new method in this we declare variable called result and than we put our conditions into result and at last we call the result into the return.
  // let result = "";
  // if (props.isLoggedIn === true) {
  //   result = (
  //     <>
  //       <h1>Welcome Meet Chudasama</h1>
  //     </>
  //   );
  // } else {
  //   result = (
  //     <>
  //       <h1>Welcome Majon Don</h1>
  //     </>
  //   );
  // }
  // return <>{result}</>;

        //Ternary Operator
  return (
    <>
      {props.isLoggedIn 
      ? 
        <><h1>Welcome Meet Chudasama</h1></>
      : 
        <><h1>Welcome Majon Don</h1></>
      }
    </>
  );

        //only use if we have to print true value
  // return( 
  //   <>
  //   {props.isLoggedIn && 
  //     <>
  //       <h1>Welcome Meet Chudasama</h1>
  //     </>

  //   }
  //   </>
  // )
  }

export default ConditionalRender;
