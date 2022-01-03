import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import './styles.scss';
import { HashRouter, Routes, Route } from "react-router-dom";
import Tree from './components/views/Tree.jsx'
import ConnectForm from './components/SideBar/ConnectForm.jsx';
import MainContainer from './components/Container/MainContainer.jsx'
import RepTree from './components/views/ReplicationFactor.jsx'
import Schema from './components/views/Schema.jsx'

//added an index.html instead of creating a div here and calling it root..added path to htmlplugin...
    //logic: i think we'll need script tags for d3?

// Now we can render our application into it
render(
<HashRouter>
<Routes>
    <Route path="/" element={<MainContainer/>}></Route>
    <Route exact path = "/schema" element={<Schema/>}></Route>
    <Route exact path = "/tree" element={<Tree/>}></Route>
    <Route exact path = "/connect" element={<ConnectForm/>}></Route>
    <Route exact path = "/repTree" element={<RepTree/>}></Route>
</Routes>
</HashRouter>
, document.getElementById('root'))