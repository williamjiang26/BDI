import {useSelector} from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function PrivateRoute() {
    const {currentUser} = useSelector(state => state.user)
    return currentUser ? <Outlet/> : <Navigate to='/sign-in'/>
}

