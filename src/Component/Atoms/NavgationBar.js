import React from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../../middleWare/Auth/Auth';
import MainLogo from '../../Assets/Img/MainLogo.svg'

const NavigationBar = (props) => {

    const history = useNavigate();

    var signedEmail = JSON.parse(localStorage.getItem("user")).email;

    // console.log('signed email is=============', signedEmail)


    const nav = [
        '',
        'Account',
        'Personal Details',
        "Financial Details",
        "Guardian",
        "Next To Kin (Optional)",
        "Documents ",
        "Undertakings",
        "Terms And Conditions",
        "Review Application",
        "Joint Applicant",
    ]


    return (
        <>
            <div className="pb-0">
                <div className="w-100">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light">
                        <div className="container py-11">
                            <div>
                                <a className="navbar-brand" href="#">
                                    <img src={MainLogo} alt="logo" />
                                    {/* <MainLogo /> */}
                                </a>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse mt-3 mt-md-0" id="navbarSupportedContent">
                                <div className="d-flex ms-auto justify-content-center justify-content-lg-end">
                                    <p className="tc-grey fs16 align-self-center px-3 mb-0" >{signedEmail}</p>

                                    <button
                                        className="LogoutBtn tc-blue bg-white"
                                        onClick={() => {
                                            Auth.logout()
                                            history('/login')
                                        }}>Log out</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {props.step !== 0 &&
                <>
                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${100 / (nav.length - 3) * props.step}%` }}
                            aria-valuenow={`${100 / (nav.length - 3) * props.step}`}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                    <div className="container mt-40">
                        <div className="d-inline-flex w-100">
                            <p className="fs16 fw-500 t-grey-400 pe-3">Step {props.step}</p>
                            <p className="fs16 fw-500 t-grey-800">
                                {props.Acc === 'Joint' && props.step === 3 ? nav[nav.length - 1] : (props.Acc === 'Individual' && props.step > 3) ? nav[props.step + 2] : nav[props.step + 1]}
                            </p>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default NavigationBar;
