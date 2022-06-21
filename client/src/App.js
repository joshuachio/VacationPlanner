// import React, { useEffect, useState } from 'react'

// function App() {

//   const [backendData, setBackendData] = useState( [{}])

//   useEffect(() => {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])

//   return (
//     <div>    

//       {(typeof backendData.users === 'undefined') ? (
//         <p>Loading...</p>
//       ) : (
//         backendData.users.map((user, i) => (
//           <p key={i}>{user}</p>
//         ))
//       )}

//     </div>
//   )
// }



// export default App


import React from 'react';
import MyForm from './MyForm'
import Employee from './Employee';
 
function App() {

  const employeeInfo = [
    {
      firstName: "Jack",
      lastName: "Black",
      key: 1
    },
    {
      firstName: "Joshua",
      lastName: "C",
      key: 2
    },
    {
      firstName: "Seonc",
      lastName: "B",
      key: 3
    },
    {
      firstName: "fwef",
      lastName: "ffwe",
      key: 4
    },
  ];
     
  return (  
    <div className="App"> 
      <header className='App-header'>
        <h1>
          Company Directory 
        </h1>
        {employeeInfo.map(employee => {
          return <Employee key={ employee.key } {...employee} />;
        })};
      </header>
    </div>  
  );  
}  
 
export default App;