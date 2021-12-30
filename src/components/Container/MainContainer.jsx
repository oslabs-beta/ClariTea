import React from 'react';
import SideBar from '../SideBar/SideBar.jsx'
import Header from '../header/header.jsx'
import Upload from '../SideBar/Upload.jsx'
import ConnectForm from '../SideBar/ConnectForm.jsx'

export default function MainContainer() {
    return (
        <div>
            <Header />
            <ConnectForm />
            <Upload />
            <SideBar />
        </div>
    )
};