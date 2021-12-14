import React from 'react';
import styled from 'styled-components';
import NavButton from './Buttons.jsx'

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
            <NavButton
                key='SideButton0'
                className='upload'
                view='Upload'
                click={(e) => {

                }}
            />
            <NavButton
                key='SideButton1'
                className='visualize'
                view='Visualize'
                click={(e) => {

                }}
            />
            <NavButton
                key='SideButton2'
                className='customize'
                view='Customize'
                click={(e) => {

                }}
            />
        </SideBarStyle>
    )
}

export default SideBar;