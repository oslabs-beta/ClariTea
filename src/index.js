import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import './styles.scss';
import { HashRouter, Routes, Route } from "react-router-dom";
import Tree from './components/views/Tree.jsx'
import MainContainer from './components/Container/MainContainer.jsx'


//added an index.html instead of creating a div here and calling it root..added path to htmlplugin...
    //logic: i think we'll need script tags for d3?

// Now we can render our application into it
render(
<HashRouter>
<Routes>
    <Route path="/" element={<MainContainer/>}></Route>
    <Route exact path = "/tree" element={<Tree/>}></Route>
</Routes>
</HashRouter>
, document.getElementById('root'))