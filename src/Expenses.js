import React, { useState } from 'react';

import './Expenses.css';
const Expenses = (props) => {

    const [data, setData] = useState({
        title:"",
        amount:"",
        date:""
    });

    const submitHandler = (event)=>{
        event.preventDefault();
        // console.log(data);
         props.savedata(data);
         setData({
           title:"",
           amount:"",
           date:""
    });
        //  setEnterAmount('');
        //  setEnterDate(''); 
        
        
    };



    return (
      <>
              <form onSubmit={submitHandler}>

            <div className='container'>
                <label>Title</label>
                <input className='title' placeholder=' Enter Title' type='text' value={data.title} onChange={(e)=>setData(e.target.value)} ></input>
                <label>Amount</label>
                <input className='amount' placeholder='Enter Amount' type='number' value={data.amount} onChange={(e)=>setData(e.target.value)} ></input>
                <label>Date</label>
                <input className='date' placeholder='Select Date' type='date' value={data.date} onChange={(e)=>setData(e.target.value)} ></input>
                <div className='add'>
                    <button type='submit'>Add Expense</button>
                </div>


            </div>
        </form>
      </>

    );

}
export default Expenses;