import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./usp.css";
import Close from '../../../Assets/Img/Close.svg'


function Usp() {

  const history = useNavigate()
  return (
    <>
      <div className="container">
        <div className="ClosingCross position-relative">
          <img className="position-absolute top-0 end-0 m-4 cursorPointer" onClick={() => history('/Dashboard')} src={Close} alt="Close" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="ModalForm usp p-3">
            <div className="p-3">
              <div className="my-3">
                {/* <img className="logo d-block mx-auto mt-2" src="" alt="Logo" /> */}
                <div className="py-3">
                  <div className="d-flex justify-content-center">
                    <img src="https://i-invest-logos.s3.ap-southeast-1.amazonaws.com/Final.png" />
                  </div>
                  <div className="paragraphs">
                    <p className="pt-5 mt-5">Dear Client</p>
                    <p>We wanted to let you know that the below documents will be required to complete the IPS account opening process. If you do not currently have these on hand, you can still complete your account registration and upload the documents at a later time.
                    </p>
                    <div>
                      <div
                        data-spy="scroll"
                        class="accordion  acoordian "
                        id="style-1"
                      >
                        <div class="accordion-item my-2 accordian_item">
                          <h2
                            class="accordion-header border_top  justify-content-between "
                            id="headingOne"
                          >
                            <button
                              class="accordion-button collapsed accordianbtn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              CNIC/NICOP
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse accordionBody"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body ">
                              <ul className="">
                                <li className="fw-600">Main Applicant</li>

                                <li className="fw-600">Next to Kin (if applicable)</li>

                                <li className="fw-600">Joint Applicant (if applying for joint account)</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="accordion-item my-2 accordian_item">
                          <h2
                            class="accordion-header border_top "
                            id="headingThree"
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Proof of Income
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse accordionBody"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <ul>
                                <li className="fw-600">
                                  <span className="fw-700">Employee:</span> Employment certificate/salary slip
                                </li>
                                <li className="fw-600">
                                  <span className="fw-700">Business Owner:</span> NTN certificate, Sales tax registration, or Certificate
                                  of registration with trade bodies.
                                </li>
                                <li className="fw-600">
                                  <span className="fw-700">Freelancer:</span> Proof of profession such as copy of agreement/certificate/ letter-based correspondence that includes Portal name through which services are provided, Nature of Service, Scope of Work, Copy of Sale TAX NTN Certificate + Recent statement of earnings (3 months)
                                </li>
                                <li className="fw-600">
                                  <span className="fw-700">Gift/Inheritance:</span> Relevant documents & undertaking (stamp paper to
                                  be provided by Next Capital)
                                </li>
                                <li className="fw-600">
                                  <span className="fw-700">Retired:</span> Employment/Retirement proof & Undertaking on standard
                                  format on Rs 100 non judicial stamp paper duly notarized.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="accordion-item my-2 accordian_item">
                          <h2
                            class="accordion-header border_top "
                            id="headingTwo"
                          >
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Proof of Mailing Address
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse accordionBody"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <p className="statusp tf-light fs14 mb-1">Any one of the following</p>
                              <ul className="">
                                <li className="fw-600">
                                  Utility Bill
                                </li>
                                <li className="fw-600">
                                  Rental Agreement
                                </li>
                                <li className="fw-600">
                                  Bank Statement
                                </li>
                                <li className="fw-600">
                                  Mobile Bill
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <button
                          className="filledBtn mt-4 bg-blue text-white w-100 py-2"
                          type="submit"
                          onClick={() => {
                            history("/IPSForm")
                          }}
                        >
                          <div className="whitespinner"></div>

                          <>Continue</>
                        </button>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_div"></div>
    </>
  );
}

export default Usp;
