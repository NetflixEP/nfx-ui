import React from 'react'
import './SignInScreen.css'
import {useNavigate} from "react-router-dom";

function SignInScreen() {
    const navigate = useNavigate();
    return (
        <div className="signInScreen">
            <div className="signInNav">
                <img
                    className="signInScreenLogo"
                    src="../images/vv_logo_red.png"
                    alt=""
                />
            </div>
            <div className="body">
                <form>
                    <h1>Sign In</h1>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="Password" type="password"/>
                    <button type="submit">Sign In</button>

                    <h4>
                        <span className="bodyGray">New to Netflix? </span>
                        <span className="bodyLink" onClick={() => navigate("/signUp")}>Sign Up now.</span>
                    </h4>
                </form>
            </div>
        </div>
    );
}

export default SignInScreen;