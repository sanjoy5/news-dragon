import React from 'react'
import { useAuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const PrivayteRoute = ({ children }) => {
    const { user, loading } = useAuthContext()
    const location = useLocation()

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivayteRoute