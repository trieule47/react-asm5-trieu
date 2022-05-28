import React from 'react';
import { Navigate } from 'react-router-dom';
import {Cookie} from '../../util/cookie';

export default function PrivateRoute(props) {
    if(Cookie() == 0) {
        return <Navigate to='/login' replace/>
    }
    return props.children;
}
