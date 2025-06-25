// rfce
import React, { useState } from 'react'
import "./style.css"
// function Index() {
//   return (
//     <>
//     <div className='btn'>Index</div>
//         <h1>Hi</h1>
//         <h1>hello</h1>
//     </>
//   )
// } 
// export default Index

// pass data from one components to another. props
// managing the data.view state
// ui rerender(managing states).State-Usestate

function UserCard({name}){
  return <p>my name is {name}</p>;
}
function Index(){
  return(
    <>
      <div className='btn'>Index</div>
      <h1>Hello</h1>
      <UserCard name="Hello"/>
      <UserCard name="hi"/>
    </>
  )
}