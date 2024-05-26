import React from 'react'
import {useNavigate} from 'react-router-dom'
import './LoginScreen.css'

function LoginScreen() {
    const navigate = useNavigate();
    return <div className="loginScreen">
        <div className="loginScreenBackground">
            <img
                className="loginScreenLogo"
                src="../images/vv_logo_red.png"
                alt=""
            />
            <button onClick={() => navigate("/signIn")} className="loginScreenButton">
                Sign In
            </button>
            <div className="loginScreenGradient" />
        </div>
        <div className="loginScreenBody">
            <>
                <h1>Unlimited movies, TV shows, and more</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or
                    restart your membership.</h3>
                <div className="loginScreenInput">
                    <form action="">
                        <input type="email" placeholder="Email Address"/>
                        <button onClick={() => navigate("/signIn")} className="loginScreenGetStarted">
                            Get Started&nbsp;&nbsp;&nbsp;>
                        </button>
                    </form>
                </div>
            </>

        </div>
    </div>
}

export default LoginScreen;