import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });


//.simulate(event[, mock]) => ReactWrapper
// Simulates an event on the current node. -- > simulate entering data into the connect form 1) with data 2) without 3) with incorrect data

// Test DOM elements rendering

// Test React router handling

// Test Hash Router handling

// Test D3 elements rendering --> can we test expand and retract?