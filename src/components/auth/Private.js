import React,{ useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { isAuth } from '../actions/auth';

const Private = ({ children }) => {
  const history = useHistory();

    useEffect(() => {
        if (!isAuth()) {
            history.push(`/admin`);
        }
    }, []);
    return <React.Fragment>{children}</React.Fragment>;
};

export default Private;
