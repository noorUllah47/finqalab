import { Alert, Select } from "antd";
import Cross from "../../../Assets/Img/cross.svg";
import SignDoc from "../../Atoms/SignDoc/SignDoc";
import { useState } from "react";
import { Button, Modal } from "antd";
import UpperNavigation from "../../Atoms/UpperNavigation";
import RequiredFeild from "../../Atoms/RequiredFeild";
import PostData from "../../../API/PostData";
import BottomNavigation from "../../Atoms/BottomNavigation";
import ScrollToTop from "../../Atoms/ScrollToTop";
import ToolTip from "../../Atoms/Tooltip";
import FileInputDisplay from "../../Atoms/FileInputDisplay";
import DragDrop from "../../Atoms/DragDrop";
import { useNavigate } from 'react-router-dom'
import GetData from "../../../API/GetData";

const { Option } = Select;

const FileUploading = ({
  handleDrctChange,
  prevStep,
  nextStep,
  handleChange,
  values,
}) => {
  const history = useNavigate();
  const [SaveLoading, setSaveLoading] = useState(false)
  const [Loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    if (e !== 'saveExist') {
      e.preventDefault();
      setLoading(true)
    }
    else {
      setSaveLoading(true)
    }
    const res = PostData.SubmitDocument(values);
    res.then((value) => {
      console.log('fileee', value);
      if (value.data.success) {
        if (e !== 'saveExist') {
          const response = GetData.getEditCorrectionData();
          response.then((value) => {
            console.log({ value })
            handleDrctChange('CNICFrontFile', value?.data?.data?.cnicfront || '')
            handleDrctChange('CNICBackFile', value?.data?.data?.cnicback || '')
            handleDrctChange('MailingAddProof', value?.data?.data?.MailingAddProof || '')
            handleDrctChange('IncomeProof', value?.data?.data?.IncomeProof || '')
            handleDrctChange('kinCNICFrontFile', value?.data?.data?.kinCNIC_front || '')
            handleDrctChange('kinCNICBackFile', value?.data?.data?.kinCNIC_back || '')
            // handleDrctChange('KinMailingAddProof', value?.data?.data?.KinMailingAddProof || '')
            // handleDrctChange('KinIncomeProof', value?.data?.data?.KinIncomeProof || '')
            handleDrctChange('JointCNICFrontFile', value?.data?.data?.JointCNIC_front || '')
            handleDrctChange('JointCNICBackFile', value?.data?.data?.JointCNIC_back || '')
            handleDrctChange('JointMailingAddProof', value?.data?.data?.JointMailingAddProof || '')
            handleDrctChange('JointIncomeProof', value?.data?.data?.JointIncomeProof || '')
            handleDrctChange('OtherNew', value?.data?.data?.other?.other || [])

          })

        }
        const FormSubmit = PostData.SubmitForm(values, e !== 'saveExist' ? onSuccess : onSuccessSave, "continue", 5);
        FormSubmit.then((value) => {
          console.log({ value });
          setLoading(false);
        });
      }
    });
  };
  const onSuccess = () => {
    nextStep();
  };
  const onSuccessSave = () => {
    setSaveLoading(false)
    history('/Dashboard')
  };


  return (
    <>
      <ScrollToTop />
      <div className="container-fluid pb-3">
        <div className="container">
          <div className="mt-3">
            <div className="">
              <UpperNavigation
                Title="Main Applicant"
                prevSec="Next to Kin"
                prevStep={prevStep}
              />
              {/* <p className="tc-plum fw-600 tf-light  fs18 "> */}
              <Alert className="mt-4 alert py-2" showIcon message="Note: Documents can be submitted later. You may proceed without
                submitting at this time, but we will require your documents to
                open your account." type="warning" />
              {/* </p> */}
              <form onSubmit={handleSubmit}>
                <div className="row mt-40">
                  <div className="col-12">
                    <div className="row mb-3">
                      <div className="col-lg-6">
                        <div className="CNIC">
                          <div className="row">
                            <p className="mt-3 tc-grey fw-700 fs14">
                              CNIC Front & Back Images
                            </p>
                            <FileInputDisplay
                              state={values.CNICFrontFile}
                              uploadFun={handleChange}
                              deleteFun={handleDrctChange}
                              name="CNICFrontFile"
                              accept=".jpg, .jpeg, .png, .pdf"
                              customClass="uploadFront"
                              SectionClass="col-6"
                              required={false}
                            />
                            <FileInputDisplay
                              state={values.CNICBackFile}
                              uploadFun={handleChange}
                              deleteFun={handleDrctChange}
                              name="CNICBackFile"
                              accept=".jpg, .jpeg, .png, .pdf"
                              customClass="uploadBack"
                              SectionClass="col-6"
                              required={false}
                            />
                          </div>
                          <p className="tc-lg-grey-2 fw-600 tf-light  fs14 mt-3">
                            The file uploaded must either be a PNG or JPEG or PDF.
                          </p>
                        </div>

                        <div className="MailingAddressProof">
                          <div className="row">
                            <p className="mt-3 tc-grey fw-700 fs14">
                              Proof of Mailing Address (only required if
                              different from CNIC/NICOP)
                            </p>
                            <FileInputDisplay
                              state={values.MailingAddProof}
                              uploadFun={handleChange}
                              deleteFun={handleDrctChange}
                              name="MailingAddProof"
                              accept=".jpg, .jpeg, .png, .pdf"
                              customClass="uploadProof"
                              SectionClass="col-12"
                              required={false}
                            />
                          </div>
                          <p className="tc-lg-grey-2 fw-600 tf-light  fs14 mt-3">
                            Acceptable Documents: utility bills; rental
                            agreement; insurance policy, bank statement, NTN
                            certificate, mobile bills.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="IncomeProof">
                          <div className="row">
                            <p className="mt-3 tc-grey fw-700 fs14">
                              Proof of Income
                            </p>
                            <FileInputDisplay
                              state={values.IncomeProof}
                              uploadFun={handleChange}
                              deleteFun={handleDrctChange}
                              name="IncomeProof"
                              accept=".jpg, .jpeg, .png"
                              customClass="IncomeProof"
                              SectionClass="col-12"
                              required={false}
                            />
                          </div>
                          <p className="tc-lg-grey-2 fw-600 tf-light  fs14 mt-3">
                            The file uploaded must either be a PNG or JPEG or PDF.
                          </p>

                          <ul className="usp">
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

                        {/* <div>

                                                <div className="row">
                                                    <p className="mt-3 tc-grey fw-700 fs14">Bank Account Maintenance Certificate</p>
                                                <FileInputDisplay
                                                            state={values.AccMaintCertificate}
                                                            uploadFun={handleChange}
                                                            deleteFun={handleDrctChange}
                                                            name='AccMaintCertificate'
                                                            accept='.jpg, .jpeg, .png, .pdf'
                                                            customClass="AccMaintCertificate"
                                                            SectionClass="col-12"
                                                            required={false}
                                                        />
                                                </div>
                                                <ol className="tc-lg-grey-2 fw-600 fs14 mt-3">
                                                    <li>Employment Certificate</li>
                                                    <li>Business: NTN Certificate, Sales Tax Registration or Certificate of Registration with Trade Bodies</li>
                                                    <li>Gift/ inheritance, Undertaking on standard format on Rs 100 non judicial stamp paper duly notarized</li>
                                                    <li>Retired, employment/ Retirement proof or Undertaking on standard format on Rs 100 non judicial stamp paper duly notarized</li>
                                                    <li>Others, as per nature of the Case</li>
                                                </ol>
                                            </div> */}
                      </div>


                      {values?.AccountType === "Joint" && (
                        <>
                          <h1 className="fs24 ls4 fw-700 tc-plum mt-40">
                            Joint Applicant
                          </h1>
                          <Alert className="mt-4 alert py-2" showIcon message="Note: Documents can be submitted later. You may proceed without
                            submitting at this time, but we will require your documents to
                            open your account." type="warning" />
                          <div className="col-lg-6">
                            <div className="JointCNIC">
                              <div className="row">
                                <p className="mt-3 tc-grey fw-700 fs14">
                                  CNIC Front & Back Images
                                </p>
                                <FileInputDisplay
                                  state={values.JointCNICFrontFile}
                                  uploadFun={handleChange}
                                  deleteFun={handleDrctChange}
                                  name="JointCNICFrontFile"
                                  accept=".jpg, .jpeg, .png"
                                  customClass="uploadFront"
                                  SectionClass="col-6"
                                  required={false}
                                />
                                <FileInputDisplay
                                  state={values.JointCNICBackFile}
                                  uploadFun={handleChange}
                                  deleteFun={handleDrctChange}
                                  name="JointCNICBackFile"
                                  accept=".jpg, .jpeg, .png"
                                  customClass="uploadBack"
                                  SectionClass="col-6"
                                  required={false}
                                />
                              </div>
                              <p className="tc-lg-grey-2 tf-light fw-600 fs14 mt-3">
                                The file uploaded must either be a PNG or JPEG or PDF.
                              </p>
                            </div>
                            <div className="JointMailingAddressProof">
                              <div className="row">
                                <p className="mt-3 tc-grey fw-700 fs14">
                                  Proof of Mailing Address (only required if
                                  different from CNIC/NICOP)
                                </p>
                                <FileInputDisplay
                                  state={values.JointMailingAddProof}
                                  uploadFun={handleChange}
                                  deleteFun={handleDrctChange}
                                  name="JointMailingAddProof"
                                  accept=".jpg, .jpeg, .png, .pdf"
                                  customClass="uploadProof"
                                  SectionClass="col-12"
                                  required={false}
                                />
                              </div>
                              <p className="tc-lg-grey-2 fw-600 tf-light  fs14 mt-3">
                                Acceptable Documents: utility bills; rental
                                agreement; insurance policy, bank statement, NTN
                                certificate, mobile bills.
                              </p>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="JointIncomeProof">
                              <div className="row">
                                <p className="mt-3 tc-grey fw-700 fs14">
                                  Proof of Income
                                </p>
                                <FileInputDisplay
                                  state={values.JointIncomeProof}
                                  uploadFun={handleChange}
                                  deleteFun={handleDrctChange}
                                  name="JointIncomeProof"
                                  accept=".jpg, .jpeg, .png"
                                  customClass="IncomeProof"
                                  SectionClass="col-12"
                                  required={false}
                                />
                              </div>
                              <p className="tc-lg-grey-2 fw-600 tf-light fs14 mt-3">
                                The file uploaded must either be a PNG or JPEG or PDF.
                              </p>

                              <ul className="usp">
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
                        </>
                      )}

                      <h1 className="fs24 ls4 fw-700 tc-plum mt-40">
                        Next to Kin - Documentation
                      </h1>
                      <Alert className="mt-4 alert py-2" showIcon message="Note: Documents can be submitted later. You may proceed without
                        submitting at this time, but we will require your documents to
                        open your account." type="warning" />
                      <div className="col-lg-6">
                        <div className="KinCNIC">
                          <div className="row">
                            <p className="mt-3 tc-grey fw-700 fs14">
                              CNIC Front & Back Images
                            </p>
                            <FileInputDisplay
                              state={values.kinCNICFrontFile}
                              uploadFun={handleChange}
                              deleteFun={handleDrctChange}
                              name="kinCNICFrontFile"
                              accept=".jpg, .jpeg, .png"
                              customClass="uploadFront"
                              SectionClass="col-6"
                              required={false}
                            />
                            <FileInputDisplay
                              state={values.kinCNICBackFile}
                              uploadFun={handleChange}
                              deleteFun={handleDrctChange}
                              name="kinCNICBackFile"
                              accept=".jpg, .jpeg, .png"
                              customClass="uploadBack"
                              SectionClass="col-6"
                              required={false}
                            />
                          </div>
                          <p className="tc-lg-grey-2 tf-light fw-600 fs14 mt-3">
                            The file uploaded must either be a PNG or JPEG or PDF.
                          </p>
                        </div>
                        {/* <div className="KinMailingAddressProof">
                          <div className="row">
                            <p className="mt-3 tc-grey fw-700 fs14">
                              Proof of Mailing Address (only required if
                              different from CNIC/NICOP)
                            </p>
                            <FileInputDisplay
                              state={values.KinMailingAddProof}
                              uploadFun={handleChange}
                              deleteFun={handleDrctChange}
                              name="KinMailingAddProof"
                              accept=".jpg, .jpeg, .png, .pdf"
                              customClass="uploadProof"
                              SectionClass="col-12"
                              required={false}
                            />
                          </div>
                          <p className="tc-lg-grey-2 fw-600 tf-light  fs14 mt-3">
                            Acceptable Documents: utility bills; rental
                            agreement; insurance policy, bank statement, NTN
                            certificate, mobile bills.
                          </p>
                        </div> */}
                      </div>

                      {/* <div className="col-lg-6">
                        <div className="KinIncomeProof">
                          <div className="row">
                            <p className="mt-3 tc-grey fw-700 fs14">
                              Proof of Income
                            </p>
                            <FileInputDisplay
                              state={values.KinIncomeProof}
                              uploadFun={handleChange}
                              deleteFun={handleDrctChange}
                              name="KinIncomeProof"
                              accept=".jpg, .jpeg, .png"
                              customClass="IncomeProof"
                              SectionClass="col-12"
                              required={false}
                            />
                          </div>
                          <p className="tc-lg-grey-2 fw-600 fs14 mt-3">
                            The file uploaded must either be a PNG or JPEG or PDF. 
                          </p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="AdditionalDocument">
                    <DragDrop
                      Other={values?.Other}
                      handleDrctChange={handleDrctChange}
                    />
                  </div>
                  <div className="col-12 position-relative">
                    <p className="mt-3 tc-grey fw-700 fs14">
                      Provide Signature
                      <ToolTip title="Please input your signature as per your identity document" />
                    </p>
                    <SignDoc handleDrctChange={handleDrctChange} />
                    {values?.Signatures == "" && <RequiredFeild />}
                  </div>
                  {values?.Signatures && (
                    <p className="text-center mt-3">Signature Taken</p>
                  )}
                </div>

                <hr />

                <BottomNavigation
                  first="Save & Exit"
                  second="Next"
                  prevStep={prevStep}
                  Nextdisabled={false}
                  Loading={Loading}
                  handleSubmit={handleSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUploading;
