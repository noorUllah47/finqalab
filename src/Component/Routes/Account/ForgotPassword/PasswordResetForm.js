import { useState, useEffect } from 'react';
import Logo from '../../../../Assets/Img/Logo.svg'
import { message, Modal } from 'antd'
import Account from '../../../../API/Account'
import Auth from '../../../../middleWare/Auth/Auth'
import axios from 'axios'
import Confirmed from '../../../../Assets/Img/Confirmed.png'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";


const PasswordResetForm = () => {
    const history = useNavigate();
    const { uid } = useParams()
    const [Error, setError] = useState('')

    const [user, setUser] = useState({

        password: "",
        rePassword: "",

    })


    // const {state} = useLocation();
    // const { id, color } = state;
    console.log(uid)
    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }



    const sendPassword = async (e) => {
        // setsendingReq(true)
        e.preventDefault()
        const res = Account.SendPassword(user.password, uid)
        res.then((value) => {
            console.log("----------->", value)
            if (value?.data?.success) {

                history(`/Email_sent_for_new_password`)
            } else {
                message.error("")
            }
        })
    }

    return (
        <div className="main">
            {console.log({ user })}
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="ModalForm bg-white p-4">
                        <img className="logo d-block mx-auto" src={Logo} alt="Logo" />
                        <p className="tc-plum tf-light fw-700 fs45 mt-3">Reset Your Password</p>
                        <p className="tc-grey  fw-600 fs30 mt-3">Enter your new password and confirm it.</p>
                        <form onSubmit={sendPassword}>
                            <div>
                                <input type="password"
                                    className="password w-100 fs30 mt-3 px-2 py-3 lghtBdr"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    value={user.password}
                                    onChange={handleChange}
                                />
                                <input type="password"
                                    className="password w-100 fs30 mt-3 px-2 py-3 lghtBdr"
                                    name="rePassword"
                                    placeholder="Confirm Password"
                                    required
                                    value={user.rePassword}
                                    onChange={handleChange}
                                />
                                {user.password && user.password !== user.rePassword ? <p className="mt-1 tc-err fs30 fw-600">Password Should Match</p> : null}

                                <button
                                    className="filledBtn mt-5 bg-blue text-white w-100 py-3"
                                    type="submit"

                                    disabled={user.password && user.password !== user.rePassword}
                                >

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
                                        <>Submit</>
                                    )}

                                </button>
                                <p className="mt-1 tc-err fs30 fw-600" >{Error}</p>
                            </div>
                        </form>
                        <hr className="mt-3" />
                        <div className="d-flex justify-content-center">
                            <p className="text-center tc-grey mt-3 px-1" >Go back to </p>
                            <p className="text-center tc-blue mt-3 px-1 cursorPointer" onClick={() => {
                                history(`/Login`)
                            }} > Sign In.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordResetForm;