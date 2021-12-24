import React from 'react';
import SideBar from '../SideBar/SideBar.jsx'
import Header from '../header/header.jsx'
import Upload from '../SideBar/Upload.jsx'

export default function MainContainer() {
    return (
        <div>
            <Header />
            <Upload />
            <SideBar />
        </div>
    )
};