import Logo from '../../../Assets/Img/Logo.svg'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import Account from '../../../API/Account';


const SentEmail = () => {
    const history = useNavigate();

    const [Status, setStatus] = useState('')
    const [sendingReq, setsendingReq] = useState(false)

    // useEffect(() => {

    //     if (localStorage.getItem('User')) {
    //         history('/login')
    //     }
    // }, [])


    const ResendEmal = async (e) => {
        setsendingReq(true)
        e.preventDefault()
        const res = Account.ResendEmail(setStatus)
        res.then((value) => {
            setsendingReq(false)
            // console.log('Login', value)
            if (value?.data?.success) {
                setStatus('Email Sent Successfully')
            } else {
                message.error(value?.response?.data?.status)
            }
        })
    }

    return (
        <div className="main">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="ModalForm bg-white p-4">
                        <div className="p-3">
                            <img className="logo d-block mx-auto mt-2" src={Logo} alt="Logo" />
                            <p className="tc-plum tf-light fw-700 fs45 mt-3 text-center">Verify your Email</p>
                            <p className="mt-3 text-center fw-600 tc-grey fs30" >To login into your account, you’ll need to verify your email. Please follow the instructions in the verification email we sent you from auto@nextcapital.com.pk </p>
                            <button
                                className="filledBtn mt-5 bg-blue text-white w-100 py-3"
                                type="button"
                                onClick={ResendEmal}>

                                Resend Verification Email

                            </button>
                            <p>{Status}</p>
                            <button className="SignInBtn tc-blue bg-white w-100 py-3"
                                onClick={() => history('/login')}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SentEmail;