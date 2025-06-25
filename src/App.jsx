// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// const { createRef } = require("react");

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import React from 'react'
// function App() {
//   return (
//     <Greeting name="Dharane" message="this is my app"/>
//   );
// }
// function Greeting(props) {
//   return (
//     <h1>Hi,{props.name} {props.message}</h1>
//   );
// }
// export default App

// import React,{use} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import {useState} from 'react'

// function App({name}) {
//   const [/*variable*/data,/*function*/setdata]=useState("")
//   return (
//     <div>
//       <h1>Hello{data}</h1>
//       <button onClick={()=> setdata(" Dharaneesh")}>Clicke here</button>
//       <button onClick={()=> setdata(" ")}>Clear</button>
//       </div>
//   )
// }
// export default App

// import React from 'react'
// function Person(props){
//   return(
//     <div>
//       <h3>Name:{props.name}</h3>
//       <p>Age:{props.age}</p>
//     </div>
//   )
// }
// function App() {
//       const data = [
//         {age: 19,name: 'abc' },
//         {age: 20,name: 'def' },
//         {age: 20,name: 'ghi' },
//       ];
//       return (
//         <div>
//           {data.map((item,index) => (
//             <Person key={index} age={item.age} name={item.name} />
//           ))}
//         </div>
//       );
//     }
// export default App;

import React,{use} from 'react'
import { useState } from 'react'
import ExpenseContainer from './Component/ExpenseContainer'
import History from './Component/History'

import TitleInput from './Component/TitleInput'

function App() {
  return (
    <div>
      <ExpenseContainer />
      <TitleInput />
    </div>
  )
}

export default App