import React from 'react'
import { Helmet } from "react-helmet";

const Admin = () => {
    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://m4mohammadkhalid.github.io/file/style.css" />
            </Helmet>
            <div className="container">
                <div className="header-text">
                    <img className="header-text-logo" src="https://seeklogo.com/images/E/educational-people-logo-66BC945BD1-seeklogo.com.png" alt="logo" />
                    <p className="header-text-description">Student Login Khalid</p>
                </div>
                <form>
                    <input type="text" placeholder="Email" name="email" id="email" autoFocus />
                    <input type="password" name="password" id="password" placeholder="Password" required />
                    <button type="submit" name="login">Login</button>
                </form>
            </div>
        </>

    )
}

export default Admin
