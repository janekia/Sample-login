import React from 'react'
import "./logout.css"
import {logout, selectUser} from "../Features/userSlice"
import {login}  from "../Components/login"
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux";

const Logout = () => {
    const user = useSelector(selectUser)

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
             dispatch(logout());
    }
    return(
        <div className = "logout">
            <h1>Welcome<span className="user_name">{ user.name }</span></h1> {" "}
            <button className="logout_button" onClick={(e) => handleLogout(e)}>LOGOUT</button>
        </div>
    )
}

export default Logout;