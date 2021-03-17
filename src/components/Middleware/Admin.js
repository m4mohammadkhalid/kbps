import React,{ useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isAuth } from './auth';

const Admin = ({ children }) => {
    const history = useHistory();
    useEffect(() => {
        if (!isAuth()) {
            history.push(`/admin`);
        } else if (isAuth().role !== 1) {
            history.push(`/`);
        }
    }, []);
    return <React.Fragment>{children}</React.Fragment>;
};

export default Admin;
