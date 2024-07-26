import React, { useState } from "react";

const Salary = (props) => {
  const [salary, setSalary] = useState({
    basic:props.b,
    hra: props.h,
    da: props.d,
    // basic:'',
    // hra:'',
    // da:'',
  });

  const updateSalary = (e) => {
    e.preventDefault;
    // alert(JSON.stringify(salary));
    // alert(parseInt(salary.basic) + parseInt(salary.hra) + parseInt(salary.da))
    let t = parseInt(salary.basic) + parseInt(salary.hra) + parseInt(salary.da)

    props.changeSalary(salary.basic, salary.hra, salary.da,t)
  };
  
  return (
    <div className="">
      <h1 id="head">Salary</h1>
      <hr />

      <form onSubmit={updateSalary}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="basic"
            id="basic"
            value={salary.basic}
            // onChange={(e) =>
            //   setSalary({ salary: { ...salary, basic: e.target.value } }) //wrong
            // }

            onChange={(e) => setSalary({ ...salary, basic: e.target.value })}
          />
          <label htmlFor="basic">Basic</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="hra"
            id="hra"
            value={salary.hra}
            onChange={(e) => setSalary({ ...salary, hra: e.target.value })}
          />
          <label htmlFor="hra">Hra</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="da"
            id="da"
            value={salary.da}
            onChange={(e) => setSalary({ ...salary, da: e.target.value })}
          />
          <label htmlFor="da">Da</label>
        </div>

        
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-info"
              id="btn"
              onClick={updateSalary}
            >
              Update Salary
            </button>
          </div>
      </form>
    </div>
  );
};

export default Salary;
