import React from 'react';
import SideBar from '../SideBar/SideBar.jsx'
import Header from '../header/Header.jsx'
// import Upload from '../SideBar/Upload.jsx'
import ConnectForm from '../SideBar/ConnectForm.jsx'
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
    HashRouter
} from 'react-router-dom'

export default function MainContainer() {
    return (
        <div>

            <Header />
            {/* <ConnectForm /> */}
            <SideBar />


        </div>
    )
};