import React from 'react'

const Footer = () => {

  let date = new Date();
  let year = date.getFullYear()

 


  return (
    <div className="d-block p-2 text-bg-dark text-center">
      <h5>@ {year} Tip Calculator</h5>
      
    </div>
  )
}

export default Footer