import Button from '@restart/ui/esm/Button';
import { MDBIcon } from 'mdbreact';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

import './Login.css'
const Login = () => {
    const {googleLogIn, setUser,
        setLoading} =useAuth();
    //
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    //
    const handleLogin = () =>{
        googleLogIn()
        .then( result => {
            setUser(result.user)
         history.push(redirect_uri)
       })
       .finally(()=> setLoading(false))
    }
    return (
        <div>
            <Button
            onClick={handleLogin}
            className="btn-google"><MDBIcon fab icon="google-plus-g" />  Login With Google</Button>
        </div>
    );
};

export default Login;