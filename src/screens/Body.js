import './Body.css'
function Body() {
    return (
        <div className="body">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <button type="submit">Sign In</button>

                <h4>
                    <span className="bodyGray">New to Netflix? </span>
                    <span className="bodyLink">Sign Up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default Body;