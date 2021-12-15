import React from 'react';
import MainContainer from './Container/MainContainer.jsx'
import Tree from './views/Tree.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <MainContainer />
//     </div>
//   )
// };

// import React, {useState}  from 'react';
// import Tree from '../view/Tree.jsx'
// import MainContainer from './Container/MainContainer.jsx'

// const initialData = {
//   name: "😐",
//   children: [
//     {
//       name: "🙂",
//       children: [
//         {
//           name: "😀"
//         },
//         {
//           name: "😁"
//         },
//         {
//           name: "🤣"
//         }
//       ]
//     },
//     {
//       name: "😔"
//     }
//   ]
// };
// function App() {
//   const [data, setData] = useState(initialData);
//   return (
//     <React.Fragment>
//       <h1>Cassandra Visualizer</h1>
//       <Tree data={data} />
//       <button onClick={() => setData(initialData.children[0])}>
//         Update data
//       </button>
//     </React.Fragment>
//   );
// }


export default function App() {
  return (
    <div>
      <MainContainer />
    </div>
  )
};