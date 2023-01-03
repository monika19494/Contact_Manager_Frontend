import React from 'react'
import { Navigate,Outlet} from "react-router-dom"
export default function Protected_route() {
    const token = window.localStorage.getItem("token")
    return (
        <>
            {token ? <Outlet /> : <Navigate to={"/"} />}
        </>
    )
}
