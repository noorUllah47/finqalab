import { useState, useEffect } from 'react';
import React from 'react';
import Logo from '../../../Assets/Img/Logo.svg'
import { message, Modal } from 'antd'
import Account from '../../../API/Account'
import Auth from '../../../middleWare/Auth/Auth'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const history = useNavigate();

    const [Error, setError] = useState('')

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: "",
        path: '/SentEmail',
        sendingReq: false,

    })
    useEffect(() => {

        if (Auth.isAuthenticated()) {
            history(user.path)
        }
        if (window.history.state) {
            // console.log(window.history)
            if (window.history.state.state) {
                // Because we are passing props from both side from link and Redirect so redirect can be get from window.history

                setUser({ ...user, path: window.history.state.state.from.pathname })
            }
        }

    }, [])



    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const onSignUp = async (e) => {
        setUser({ ...user, sendingReq: true })
        e.preventDefault()
        const res = Account.SignUp(user, setError)
        res.then((value) => {
            setUser({ ...user, sendingReq: false })
            // console.log('Login', value)
            if (value.data.success) {
                // console.log({ value })
                localStorage.setItem('User', value?.data.user)
                localStorage.setItem('Email', user.email)
                goToLogin()
            } else {
                // console.log('error is =============', value)
                message.error(value.data.status)
            }
        })
    }


    const goToLogin = () => {
        history(user.path)
    }

    return (
        <div className="main">
            <div className="container mnHght100">
                <div className="d-flex justify-content-center align-items-center mnHght100 py-5">
                    <div className="ModalForm bg-white p-4">
                        <img className="logo d-block mx-auto" src={Logo} alt="Logo" />
                        <p className="tc-plum tf-light fw-700 fs45 mt-3 text-center">Sign Up</p>
                        <form onSubmit={onSignUp}>
                            <input type="text"
                                className="name w-100 fs30 mt-3 py-2 px-3 lghtBdr"
                                name="name"
                                placeholder="Full Name"
                                required
                                value={user.name}
                                onChange={handleChange}
                            />
                            <input type="text"
                                className="email w-100 fs30 mt-3 py-2 px-3 lghtBdr"
                                name="email"
                                placeholder="Email Address"
                                required
                                value={user.email}
                                onChange={handleChange}
                            />
                            <input type="password"
                                className="password w-100 fs30 mt-3 py-2 px-3 lghtBdr"
                                name="password"
                                placeholder="Password"
                                required
                                value={user.password}
                                onChange={handleChange}
                            />
                            <input type="password"
                                className="password w-100 fs30 mt-3 py-2 px-3 lghtBdr"
                                name="rePassword"
                                placeholder="Confirm Password"
                                required
                                value={user.rePassword}
                                onChange={handleChange}
                            />
                            {user.password && user.password !== user.rePassword ? <p className="mt-1 tc-err fs30 fw-600">Password Should Match</p> : null}
                            <button className="filledBtn mt-4 bg-blue text-white w-100 py-2"
                                disabled={user.password && user.password !== user.rePassword}
                                type="submit">
                                {user.sendingReq ? (
                                    // <div className="spinner-border text-light" role="status">
                                    //     <span className="visually-hidden">Loading...</span>
                                    // </div>
                                    <div className="whitespinner">
                                        <div className="bounce1"></div>
                                        <div className="bounce2"></div>
                                        <div className="bounce3"></div>
                                    </div>
                                ) : (
                                    <>Register </>
                                )}
                            </button>
                            <p className="mt-1 tc-err fs30 fw-600" >{Error}</p>
                        </form>
                        <div className="position-relative align-items-center d-flex my-4">
                            <div className="container__content px-1 tc-grey">
                                or
                            </div>

                            <div className="container__separator"></div>
                        </div>
                        <button className="SignInBtn tc-blue bg-white w-100 py-2" onClick={() => history('/login')}>Sign In</button>
                        <p className="text-center tc-grey mt-3 cursorPointer" onClick={() => window.open('https://www.nextcapital.com.pk/privacy-policy', '_blank')} >Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;