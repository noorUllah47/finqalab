import Logo from "../../../Assets/Img/Logo.svg";

import NavigationBar from "../../Atoms/NavgationBar";
import { useNavigate } from "react-router-dom";
const IPSFormSubmitted = () => {
  const history = useNavigate();

  return (
    <div className="main">
      <NavigationBar step={0} />
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
                <div className="py-3">
                  <p className=" tf-light fw-800 thankyoup my-3 text-center">
                    Thank You
                  </p>
                  <p className=" statusp fw-600 fs40 my-3 text-center">
                    Your form has been submitted successfully and is currently
                    being reviewed by Next Capital. For further information
                    contact us at{" "}
                    <a className="fs40 fw-600" href="https://wa.me/923003672522">+92 300 367 2522</a>

                  </p>
                </div>
                <button
                  onClick={() => {
                    history("/Dashboard");
                  }}
                  className="filledBtn mt-4 bg-blue text-white w-100 py-3"
                  type="button"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IPSFormSubmitted;
