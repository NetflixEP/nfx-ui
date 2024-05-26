import './SignUpScreen.css'
import React from "react";
import {useNavigate} from "react-router-dom";
function SignUpScreen() {
    const navigate = useNavigate();
    return (
        <div className="signUpScreen">
            <div className="signInNav">
                <img
                    className="signInScreenLogo"
                    src="../images/vv_logo_red.png"
                    alt=""
                />
                <button onClick={() => navigate("/signIn")} className="signUpScreenButton">
                    Sign In
                </button>
            </div>

            <div className="body">
                <form>
                    <h2>Create a password to start your membership</h2>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Add a password" type="password"/>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpScreen;