import React from "react";
import Salary from "./Salary";
import { useState } from "react";

const Employee = (props) => {
  const [data, setData] = useState({
    basic: props.basic,
    hra: props.hra,
    da: props.da,
    total: parseInt(props.basic) + parseInt(props.hra) + parseInt(props.da),
  });

  const changeSalary = (b, h, d, t) =>{
    setData({basic:b, hra:h, da:d, total:t})
  }

  return (
    <>
      <h1 id="heading">Employee data </h1>
      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <td>EmpId</td>
            <td>Ename</td>
            <td>Basic</td>
            <td>Hra</td>
            <td>Da</td>
            <td>Total Salary</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.empid}</td>
            <td>{props.ename}</td>
            <td>{data.basic}</td>
            <td>{data.hra}</td>
            <td>{data.da}</td>
            {/* use data not setData */}
            {/* <td>{props.basic}</td>
            <td>{props.hra}</td>
            <td>{props.da}</td> */}
            <td>
              {/* {parseInt(props.basic) + parseInt(props.hra) + parseInt(props.da)} */}
              {data.total}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <Salary b={props.basic} h={props.hra} d={props.da} changeSalary={changeSalary} />
        {/* in this changeSalary we are sending function as a prop to the Salary */}
        {/* <Salary/> */}
      </div>
    </>
  );
};

export default Employee;
