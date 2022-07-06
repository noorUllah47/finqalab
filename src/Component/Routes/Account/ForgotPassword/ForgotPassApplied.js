import Logo from "../../../../Assets/Img/Logo.svg";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from "../../../Atoms/NavgationBar";
import { message, Modal } from 'antd'
import Account from '../../../../API/Account'


const ForgotPassApplied = () => {
  const history = useNavigate();
  const { email } = useParams()
  console.log(email)

  const sendEmail = async (e) => {
    // setsendingReq(true)
    e.preventDefault()
    const res = Account.forgotPass(email)
    res.then((value) => {
      console.log("----------->", value)
      if (value?.data?.success) {
      } else {
        message.error("email not exist")
      }
    })
  }
  return (
    <div className="main">
      {/* <NavigationBar step={0} /> */}
      <div className="main">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="ModalForm bg-white p-4">
              <div className="p-3">
                <div className="my-3">
                  <img
                    className="logo d-block mx-auto mt-2"
                    src={Logo}
                    alt="Logo"
                  />
                  <div className="py-3 px-3">
                    <p className="tc-plum tf-light fw-700 fs45 my-3 text-center">
                      Password Reset Email Sent Successfully.
                    </p>
                    <p className="tc-plum statusp fw-600 fs30 my-3 text-center">Instructions on how to reset your password have been sent on the provided email address. Please follow the instructions to reset your password</p>
                    <button
                      className="filledBtn mt-5 bg-blue text-white w-100 py-3"
                      type="button"
                      onClick={sendEmail}
                    >
                      Resend Password Reset Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassApplied;
