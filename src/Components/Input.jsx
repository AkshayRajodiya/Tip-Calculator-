import React, { useState } from 'react'
import Output from './Output';

const Input = () => {
  const [bill, setBill] = useState();
  const [tipvalue, settipvalue] = useState();
  const [customername, setcustomername] = useState();
  const [customerData, setcustomerData] = useState([]);
  const [allTips, setAllTips] = useState([])


  const billamount = (e) => {
    setBill(e.target.value);
  }
  const tipPercentage = (e) => {
    settipvalue(e.target.value)
  }
  const customerName = (e) => {
    setcustomername(e.target.value);
  }

  const addCustomer = () => {

    let tip = bill * tipvalue;
    setAllTips([...allTips, tip]);

    let customerDatas = customername + " " + "offereing a tip of" + " " + tip
    setcustomerData([customerDatas, ...customerData])


  }


  return (
    <div className='text-center'>
      <br /><br />
      <h4>Enter your bill amount</h4>
      <input className='input-group' onChange={billamount}></input>
      <br />

      <div>
        <span>How was the service :    </span>
        <select value={tipvalue} onChange={tipPercentage}>
          <option >select value</option>
          <option value=".2">Excellent</option>
          <option value=".1">Moderate</option>
          <option value=".05">Bad</option>
        </select>
        <input placeholder='Customer Name' onChange={customerName} />
        <button type="button" className="btn btn-primary" onClick={addCustomer}>Add customer</button>
      </div>
      <br /><br />
      <Output customerDatas={customerData} allTips={allTips} />

    </div>

  )
}

export default Input