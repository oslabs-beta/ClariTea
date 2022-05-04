import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import MainContainer from '../src/components/Container/MainContainer';
import SideBar from './../src/components/SideBar/SideBar';
import ConnectForm from './../src/components/SideBar/ConnectForm';
import Header from './../src/components/header/header';
import App from './../src/components/App';


Enzyme.configure({ adapter: new Adapter() });

describe('Test the MainContainer component', () => {
    const target = shallow(<MainContainer />);
    xit('Matches snapshot', () => {
      expect(target).toMatchSnapshot();
    });
  });
  
describe('Test the MainContainer component', () => {
    const target = shallow(<SideBar />);
    // test it Sidebar is rendered
    xit('Contains Sidebar component', () => {
      expect(target.contains(<SideBar />)).toBeBe(true);
    });
    // test if Header is rendered
    xit('Contains Header component', () => {
      expect(target.contains(<Header />)).toBe(true);
    });
  });

describe('Test SideBar component', () => {
    // testing for 4 generic buttons in NavBar
    it('Should render 4 Buttons "Connect", "Schema", "Tree"', () => {
      expect(target.find('.Sidebar')).toHaveLength(4);
      expect(
        target
          .find('.NavButton')
          .at(0)
          .text(),
      ).toEqual('Connect');
        expect(
        target
          .find('.NavButton')
          .at(1)
          .text(),
      ).toEqual('Schema');
      expect(
        target
          .find('.NavButton')
          .at(2)
          .text(),
      ).toEqual('Visualize');
        expect(
        target
          .find('.NavButton')
          .at(3)
          .text(),
      ).toEqual('Replication');
    });
});