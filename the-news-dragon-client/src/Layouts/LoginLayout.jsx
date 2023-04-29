import React from 'react'
import NavigataionBar from '../pages/Shared/NavigationBar/NavigataionBar'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
    return (
        <div>
            <NavigataionBar></NavigataionBar>
            <Outlet></Outlet>
        </div>
    )
}

export default LoginLayout