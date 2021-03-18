import React,{ useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../../../components/Middleware/auth';
import { Link,useHistory } from "react-router-dom";
import {Helmet} from "react-helmet";

const SigninComponent = () => {
    let history = useHistory();

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && history.push(`/admindashboard`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                // save user token to cookie
                // save user info to localstorage
                // authenticate user
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        history.push(`/admindashboard`);
                    } else {
                        history.push(`/userdashboard`);
                    }
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const signinForm = () => {
        return (
            <>
                <Helmet>
                <link rel="stylesheet" href="https://m4mohammadkhalid.github.io/file/style2.css" />
            </Helmet>
                <div className="container">
    <div className="header-text">
      <img className="header-text-logo" src="https://seeklogo.com/images/E/educational-people-logo-66BC945BD1-seeklogo.com.png" alt="logo" />
      <p className="header-text-description">Student Login</p>
    </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Signin</button>
                </div>
                        </form>
                        </div>
                </>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signinForm()}
            <br />
            <Link href="/auth/password/forgot" className="btn btn-outline-danger btn-sm">
                Forgot password
            </Link>
        </React.Fragment>
    );
};

export default SigninComponent;
