import React from 'react';
import styled from 'styled-components';
import NavButton from './Buttons.jsx'
import { Link } from "react-router-dom";

// whole sidebar
const SideBarStyle = styled.div`
  background-color: white;
  grid-area: navSideBar;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.10);
  display: inline-block;
  height: calc(100vh - 64px);
  position: relative;
`;


function SideBar() {
    return (
        <SideBarStyle>
            <Link to="/connect" style={{ textDecoration: 'none', color: 'black' }}>
                <NavButton
                    key='SideButton0'
                    className='connect'
                    view='Connect'
                />
            </Link>
            <Link to="/schema" style={{ textDecoration: 'none', color: 'black' }}>
                <NavButton
                    key='SideButton1'
                    className='datamodel'
                    view='Data Modeling'
                />
            </Link>
            <Link to="/tree" style={{ textDecoration: 'none', color: 'black' }}>
                <NavButton
                    key='SideButton2'
                    className='visualize'
                    view='Visualize'
                />
            </Link>
            <Link to="/repTree" style={{ textDecoration: 'none', color: 'black' }}>
                <NavButton
                    key='SideButton3'
                    className='Replication Factor'
                    view='Replication Factor'ß
                />
            </Link>
        </SideBarStyle>
    )
}

export default SideBar;