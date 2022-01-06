import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

// import SideBar from './../src/components/SideBar/SideBar';
// import ConnectForm from './../src/components/SideBar/ConnectForm';
// import header from './../src/components/header/header';
// import App from './../src/components/App';


Enzyme.configure({ adapter: new Adapter() });


//.simulate(event[, mock]) => ReactWrapper
// Simulates an event on the current node. -- > simulate entering data into the connect form 1) with data 2) without 3) with incorrect data

// Test DOM elements rendering

// Test React router handling

// Test Hash Router handling

// Test D3 elements rendering --> can we test expand and retract?