import { state } from '../RegisterLogin/Login'
import { Navigate, Outlet } from 'react-router-dom'

export default function Protected() {
    return (
        state.isLoggedin ? <Outlet /> : <Navigate to="/login" />
    )
}
