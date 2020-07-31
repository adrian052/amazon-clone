import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase/firebase.js'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e) => {
        e.preventDefault()//stops the refresh
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")
            })
            .catch(e => alert(e.message))
    }

    const register = (e) => {
        e.preventDefault()//stops the refresh
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
                    className="login__logo"
                    alt="logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Pasword</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button
                        className="login__singInButton"
                        type="submit"
                        onClick={login}>
                        Sign In
                    </button>
                </form>
                <p>By singingin you agree to amazon conditions for Use & Sale, be sure of read our politics and conditions</p>
                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
