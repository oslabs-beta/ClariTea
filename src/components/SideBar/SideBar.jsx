import React from 'react';
import styled from 'styled-components';
import NavButton from './Buttons.jsx'
import { Link } from "react-router-dom";

// styling the entire sidebar
const SideBarStyle = styled.div`
  background-color: white;
  grid-area: navSideBar;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.10);
  display: inline-block;
  height: calc(100vh - 20px);
  position: relative;
`;

function SideBar() {
    // connects the application to the context utilizing Link in react router dom 
    // NavButton was brought from the buttons component
    return (
        <SideBarStyle style={{ backgroundColor: 'black' }}>
            <Link to="/connect" style={{ textDecoration: 'none', color: 'black' }}>
                <NavButton
                    key='SideButton0'
                    className='Button'
                    view='Connect'
                />
            </Link>
            <Link to="/schema" style={{ textDecoration: 'none', color: 'black' }}>
                <NavButton
                    key='SideButton1'
                    className='Button'
                    view='Schema'
                />
            </Link>
            <Link to="/tree" style={{ textDecoration: 'none', color: 'black' }}>
                <NavButton
                    key='SideButton2'
                    className='Button'
                    view='Visualize'
                />
            </Link>
            <Link to="/repTree" style={{ textDecoration: 'none', color: 'black' }}>
                <NavButton
                    key='SideButton3'
                    className='Button'
                    view='Replication'
                />
            </Link>
        </SideBarStyle>
    )
}

export default SideBar;