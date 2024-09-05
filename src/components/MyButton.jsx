import React from 'react'

function MyButton() {

    function handleClick(){
        alert("OH HII");
    }
  return (
    <button onClick={handleClick}>MyButton</button>
  )
}

export default MyButton