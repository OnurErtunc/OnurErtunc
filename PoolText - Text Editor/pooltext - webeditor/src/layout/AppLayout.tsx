import React from 'react'
import { Outlet } from 'react-router-dom'
import AppTopbar from './AppTopbar'
import '/src/assets/layout/styles/AppLayout.css'

const AppLayout = () => {

    return (
        <>
            <div className="app-header">
                <AppTopbar />
            </div>
            <div className="app-content">
                <div className='layout'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AppLayout
    