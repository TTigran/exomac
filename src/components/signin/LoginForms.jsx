import React, {useState, useEffect, useRef, useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import AOS from "aos";


const LoginForm = () => {
    const username = useRef(null);
    const password = useRef(null);
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    function redirectionTo(path,token){
        window.localStorage.setItem("barer_token", token)
        window.location.pathname = path
    }

    function postData(data) {
        return dispatch => {
            axios.post("http://localhost:8080/authenticate", data, {
                headers: {
                    'content-type': 'application/json',
                }
            }).then(res => {
                if (res.data.token) {
                    redirectionTo('/profile', res.data.token);
                    return dispatch({
                        type: "POST_DATA_FOR_AUTHENTICATION",
                        data: res.data
                    });
                }
            });
        };
    }


    const handleLoginSubmite = () => {

        const data = {
            username: username.current.value,
            password: password.current.value,
        }

        dispatch(postData(data));

    }


    return (
        <div className="container">
            <div className="container-group-input-login">
                <input className="input-group-login" ref={username} name='email' type='text'
                       placeholder="username"></input>
                <input className="input-group-login" ref={password} name='password' type='password'
                       placeholder="password"></input>
                <input className="input-group-login" name='submit' type='button' onClick={handleLoginSubmite}
                       value="Login"></input>
            </div>
        </div>
    )
}

export default LoginForm;