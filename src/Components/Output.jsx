import React from 'react'

const Output = (props) => {

  const tips = props.allTips;
  const customerDatas = props.customerDatas;
  console.log(tips, props.customerDatas);

  function myFunc(total, num) {
  return total + num;
}
  
  return (
    <div className='text-center'>

      {props.customerDatas.map((e) => {
        return <ul>
          <li> {e} </li>
        </ul>
      })}

      <button type="button" className="btn btn-success">Calculate Tip & Customer</button><br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Total Customer </th>
            <th scope="col">Tip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{(customerDatas || []).length}</td>
            <td>{(tips || []).reduce(myFunc, 0)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Output