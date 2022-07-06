import Logo from '../../../Assets/Img/Logo.svg'
import { useNavigate } from 'react-router-dom';


const EmailVerified = () => {
    const history = useNavigate();

    return (
        <div className="main">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="ModalForm bg-white p-4">
                        <div className="p-3">
                            <div className="my-3">

                                <img className="logo d-block mx-auto mt-2" src={Logo} alt="Logo" />
                                <div className="py-3">
                                    <p className="tc-plum tf-light fw-700 fs45 my-3 text-center">Your email has been successfully verified.</p>
                                </div>
                                <button
                                    className="filledBtn mt-5 bg-blue text-white w-100 py-3"
                                    type="button"
                                    onClick={() => history('/login')}>
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailVerified;