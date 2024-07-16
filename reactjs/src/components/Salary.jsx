import React, { useState } from 'react'

const [salary, setSalary] = useState({
  basic:'',
  hra:'',
  da:''
})

const updateSalary = (e) =>{
  e.preventDefault
  alert(JSON.stringify(salary))
}

const Salary = () => {
  return (
    <div className="">
      <h1 id="head">Salary</h1>
      <hr />

      <form onSubmit={updateSalary}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="basic" id="basic" value={salary.basic} onChange={handleChange('basic')} />
          <label htmlFor="basic">Basic</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="hra" id="hra" value={salary.hra} onChange={handleChange('hra')}/>
          <label htmlFor="hra">Hra</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="da" id="da" value={salary.da} onChange={handleChange('da')} />
          <label htmlFor="da">Da</label>
        </div>

        <div className='d-flex justify-content-end'>
          <button type="button" className="btn btn-info" id='btn'> Update </button>
        </div>
      </form>
    </div>
  );
}

export default Salary
