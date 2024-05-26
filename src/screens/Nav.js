import React, {useEffect, useState} from 'react'
import './Nav.css'
function Nav() {

    return (
        <div className="nav nav-black">
            <div className="nav-contents">
                <img className="nav-logo" src="../images/vv_logo_red.png" alt=""/>
                <img className="nav-avatar" src="../images/netflix_avatar.png" alt=""/>
            </div>
        </div>
    )
}

export default Nav;