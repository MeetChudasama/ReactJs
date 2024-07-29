import React, { useRef } from 'react'
import '../App.css'

const SalaryChild = (props) => {
    
    const basicRef = useRef()
    const hraRef = useRef()
    const daref = useRef()

  return (
    <>
      <h1 id="head">Salary Children</h1>
      <hr />
      <p className="ms-5">
        Basic: {props.basic} <br />
        Hra: {props.hra} <br />
        Da: {props.da}
      </p>
    </>
  );
}

export default SalaryChild
