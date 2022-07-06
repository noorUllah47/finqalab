import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../../Assets/Img/DoubleTriangle.png";
import ScrollToTop from "../../Atoms/ScrollToTop"

const SelectType = ({ handleDrctChange, nextStep, handleChange, values }) => {

  const history = useNavigate();

  const continueFun = (e) => {
    e.preventDefault();
    nextStep();
  }


  return (
    <>
      <ScrollToTop />
      <div className="container-fluid pb-3">
        <div className="container">
          <div className="justify-content-center align-items-center d-flex centerParent">
            <div className="py-3 MainAcc">
              <h1 className="fs24 ls4 fw-800 t-grey-800">Welcome To Finqalab</h1>
              <p className="fs16 fw-400 t-grey-400">
                Thank you for trusting us to open your IPS account at NCCPL. To commence with IPS account opening, please select an account type below.
              </p>
              <form onSubmit={continueFun}>
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className={`itemm ${values.AccountType == 'Individual' ? 'Selected' : ''}`}>
                      <input
                        type="radio"
                        className="form-check-input me-3 ms-0 my-0 "
                        id="Individual"
                        value="Individual"
                        name="AccountType"
                        onChange={handleChange}
                        required
                        // onClick={nextStep}
                        defaultChecked={values.AccountType == 'Individual'}
                        aria-label="..." />
                      <label className="fs16 fw-600 pb-0" htmlFor="Individual">
                        Individual Account</label>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className={`itemm ${values.AccountType == 'Joint' ? 'Selected' : ''}`}>
                      <input
                        type="radio"
                        className="form-check-input me-3 ms-0 my-0 "
                        id="Joint"
                        value="Joint"
                        name="AccountType"
                        onChange={handleChange}
                        required
                        // onClick={nextStep}
                        defaultChecked={values.AccountType == 'Joint'}
                        aria-label="..." />
                      <label className="fs16 fw-600 pb-0" htmlFor="Joint">
                        Joint Account</label>
                    </div>
                  </li>
                  {/* <li className="list-group-item">
                  <div className={`itemm ${values.AccountType == 'Minor' ? 'Selected' : ''}`}>
                    <input className="form-check-input me-3 ms-0 my-0 "
                      type="radio"
                      id="Minor"
                      value="Minor"
                      name="AccountType"
                      onChange={handleChange}
                      onClick={nextStep}
                      defaultChecked={values.AccountType == 'Minor'}
                      aria-label="..." />
                    <label className="fs16 fw-600 pb-0" htmlFor="Minor">
                      Minor Account</label>
                  </div>
                </li> */}
                </ul>
                <div className="p-4 list-group">
                  <button className="filledBtn w-100 bg-blue text-white py-3"
                    type="submit">
                    Continue
                  </button>
                  <button className="tc-grey fw-600 bg-grey-200 border-0 br-8 w-100 py-3 mt-4"
                    type="button"
                    onClick={() => history('/Dashboard')}>Back to Dashboard</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectType;
