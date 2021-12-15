import React from 'react';
import SideBar from '../SideBar/SideBar.jsx'
import Header from '../header/header.jsx'
import Drag from '../SideBar/DragFile.jsx'

export default function MainContainer() {
    return (
        <div>
            <Header />
            <Drag />
            <SideBar />
        </div>
    )
};