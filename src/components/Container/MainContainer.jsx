import React from 'react';
import SideBar from '../SideBar/SideBar.jsx'
import Header from '../header/header.jsx'
import MyDropzone from '../SideBar/dropzone.jsx'

export default function MainContainer() {
    return (
        <div>
            <Header />
            <MyDropzone />
            <SideBar />
        </div>
    )
};