import React, {useState}  from 'react';
import Tree from '../view/Tree.jsx'

const initialData = {
  name: "😐",
  children: [
    {
      name: "🙂",
      children: [
        {
          name: "😀"
        },
        {
          name: "😁"
        },
        {
          name: "🤣"
        }
      ]
    },
    {
      name: "😔"
    }
  ]
};
function App() {
  const [data, setData] = useState(initialData);
  return (
    <React.Fragment>
      <h1>Cassandra Visualizer</h1>
      <Tree data={data} />
      <button onClick={() => setData(initialData.children[0])}>
        Update data
      </button>
    </React.Fragment>
  );
}

export default App;