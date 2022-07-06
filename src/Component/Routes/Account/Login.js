import { useState, useEffect } from 'react';
import Logo from '../../../Assets/Img/Logo.svg'

import Account from '../../../API/Account'
import Auth from '../../../middleWare/Auth/Auth'
import GetData from '../../../API/GetData'

import axios from 'axios'
import Confirmed from '../../../Assets/Img/Confirmed.png'
import { Navigate, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const Login = () => {
    const history = useNavigate();

    const [Error, setError] = useState('')



    const [user, setUser] = useState({
        email: "",
        password: "",
        path: '/Dasboard',
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



    const onLogin = async (e) => {
        setUser({ ...user, sendingReq: true })
        e.preventDefault()
        const res = Account.LoginApi(user, setError)
        res.then((value) => {
            setUser({ ...user, sendingReq: false })
            // console.log('Login', value)
            if (value?.data?.success) {




                localStorage.setItem('x-auth-token', value.data.token)


                let jwtTokenObj = jwt_decode(value?.data?.token);
                // console.log('<<<<<<<<respons eis ============ >>>>>>>>>>', jwtTokenObj)
                localStorage.setItem("user", JSON.stringify(jwtTokenObj));
                localStorage.setItem('uid', value.data.uid)
                localStorage.setItem('loggedIn', 'true')
                // localStorage.setItem('Detail', JSON.stringify(value.data.user))
                Auth.login()
                axios.defaults.headers =
                {
                    'x-auth-token': value.data.token
                }




                goToDashboard()
                // showDocumentModal()

            } else {
            }
        })
    }


    const goToDashboard = () => {
        history(user.path)

        // const response = GetData.getEditCorrectionData();
        // response.then((value) => {
        //     // console.log({ value })
        //     // console.log(value?.data?.data.status)
        //     // alert('1')
        //     if (value?.data?.data.status == 'Correction Required' || value?.data?.data.status == 'continue') {

        //         // console.log(value?.data?.data?.BirthDay, 'componentDidMount  is==================>>>>>>>>>>>>>>>>>>>>>>>>', value?.data?.data)
        //         history('/accountUpdate')
        //     }


        //     else if (value?.data?.data.status == 'Submitted' || value?.data?.data.status == 'submitted') {
        //         history('/accountReview')
        //     }
        //     else if (value?.data?.data.status == 'new') {
        //         history('/presubmission')
        //     }

        //     else if (value?.data?.data.status == 'Approved') {
        //         history('/afterSubmission')
        //     }
        //     else {
        //         history('/presubmission')
        //     }



        // })
    }

    return (
        <div className="main">
            <div className="container mnHght100">
                <div className="d-flex justify-content-center align-items-center mnHght100 py-5">
                    <div className="ModalForm bg-white p-4">
                        <img className="logo d-block mx-auto" src={Logo} alt="Logo" />
                        <p className="tc-plum tf-light fw-700 fs45 mt-3">Sign In</p>
                        <form onSubmit={onLogin}>
                            <div>
                                <input type="email"
                                    className="email w-100 fs30 mt-3 px-3 py-2 lghtBdr"
                                    name="email"
                                    required
                                    placeholder="Email or User ID"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                                <input type="password"
                                    className="password w-100 fs30 mt-3 px-3 py-2 lghtBdr"
                                    name="password"
                                    required
                                    placeholder="Password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                                <p className="fw-700 tc-blue fs30 mt-3 cursorPointer " onClick={() => history('/ForgotPass')} >Forgot Password?</p>
                                <button
                                    className="filledBtn mt-4 bg-blue text-white w-100 py-2"
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
                                        <>Log In</>
                                    )}

                                </button>
                                <p className="mt-1 tc-err fs30 fw-600" >{Error}</p>
                            </div>
                        </form>
                        <div className="position-relative align-items-center d-flex my-4">
                            <div className="container__content px-1 tc-grey">
                                or
                            </div>

                            <div className="container__separator"></div>
                        </div>
                        <button className="SignInBtn tc-blue bg-white w-100 py-2"
                            onClick={() => history('/signup')}>Sign Up</button>
                        <p className="text-center tc-grey mt-3 cursorPointer mb-0" onClick={() => window.open('https://www.nextcapital.com.pk/privacy-policy', '_blank')} >Privacy Policy</p>
                    </div>
                </div>
            </div>







        </div>
    );
}

export default Login;