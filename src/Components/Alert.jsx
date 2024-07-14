import React from 'react'

function Alert(props) {
  // captilalize arrow function create kya jo k word le rha tha, pehle hamne ek variable banaya lower k naam se jiski value ko hamne to lowercase ka funtion laga k sabko lower kya phir return me hamne lower variable k first character ko uppercase ka function lagaya or slicing k through baki sare lower me hi rakhdiye 
const capitalize = (word)=> {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
