import React from 'react'
import Salary from './Salary';

const Employee = (props) => {
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
            <td>{props.basic}</td>
            <td>{props.hra}</td>
            <td>{props.da}</td>
            <td>
              {parseInt(props.basic) + parseInt(props.hra) + parseInt(props.da)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className='row'>
        <Salary />
      </div>
    </>
  );
}

export default Employee
