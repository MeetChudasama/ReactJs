import React from 'react'
import Salary from './Salary';
import { useState } from 'react';

const Employee = (props) => {

  const [data, setData] = useState({
    simple: props.basic,
    hr: props.hra,
    dd: props.da,
    total: parseInt(props.basic) + parseInt(props.hra) + parseInt(props.da),
  });

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
            <td>{setData.basic}</td>
            <td>{setData.hra}</td>
            <td>{setData.da}</td>
            <td>
              {/* {parseInt(props.basic) + parseInt(props.hra) + parseInt(props.da)} */}
              {setData.total}
            </td>
          </tr>
        </tbody>
      </table>
      <div className='row'>
        <Salary b={props.basic} h={props.hra} d={props.da} />
      </div>
    </>
  );
}

export default Employee
