import Logo from "../../../../Assets/Img/Logo.svg";
import { useNavigate } from "react-router-dom";

const SuccessPasswordReset = () => {
  const history = useNavigate();

  return (
    <div className="main">
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
                  <div className="py-3 px-5">
                    <p className=" tf-light fw-700 fs45 my-3 text-center">
                      Password Reset Successfully.
                    </p>
                    <p className="statusp fw-600 fs30 my-3 text-center">Your pssword has been reset successfully</p>
                    <button
                      className="filledBtn mt-5 bg-blue text-white w-100 py-3"
                      type="button"
                      onClick={() => history('/login')}>
                      Login
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

export default SuccessPasswordReset;
