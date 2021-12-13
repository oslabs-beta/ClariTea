import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import './styles.scss';

//added an index.html instead of creating a div here and calling it root..added path to htmlplugin...
    //logic: i think we'll need script tags for d3?

// Now we can render our application into it
render(<App />, document.getElementById('root'))