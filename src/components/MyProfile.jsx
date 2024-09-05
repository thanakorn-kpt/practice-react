import React from 'react'

function MyProfile({ data }) {
  return (
    <div>
        <p>From data components </p>
        <p>My Name is {data.firstname} {data.lastname} </p>
    </div>
  )
}

export default MyProfile