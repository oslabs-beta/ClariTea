import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import {useSelector} from 'react-redux';
import Tree from './components/views/Tree.jsx'
import ConnectForm from './components/SideBar/ConnectForm.jsx';
import MainContainer from './components/Container/MainContainer.jsx'
import RepTree from './components/views/ReplicationFactor.jsx';


function App() {
  return (
    <div>
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainContainer/>}></Route>
        <Route exact path = "/tree" element={<Tree/>}></Route>
        <Route exact path = "/connect" element={<ConnectForm/>}></Route>
        <Route exact path = "/repTree" element={<RepTree/>}></Route>
      </Routes>
    </HashRouter>
</div>
  )
};

export default App;