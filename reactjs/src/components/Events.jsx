import React from 'react'

const Events = () => {
    const addTwoNumbers = () =>{alert(`Addition ${5+6}`)}
    const addTwoNumbers1 = (a,b) =>{alert(`Addition ${a+b}`)}
  return (
    <div>
      <button type="button" className='btn btn-primary mt-2' onClick={()=>alert('button clicked')}>click</button>
      <button type="button" className='btn btn-primary mt-2' onClick={addTwoNumbers}>Add</button>
      <button type="button" className='btn btn-primary mt-2' onClick={()=>addTwoNumbers1(11, 12)}>Addition</button>
      
    </div>
  )
}

export default Events
