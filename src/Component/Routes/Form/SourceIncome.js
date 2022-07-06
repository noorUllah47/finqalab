import React, { useState, useEffect } from "react";
import { Select, Tooltip } from 'antd';
import RequiredFeild from "../../Atoms/RequiredFeild";
import UpperNavigation from "../../Atoms/UpperNavigation";
import BottomNavigation from "../../Atoms/BottomNavigation";
import BankMandate from "./BankMandate";
import ForiegnAccount from "./ForiegnAccount";
import PostData from "../../../API/PostData"
import ScrollToTop from "../../Atoms/ScrollToTop";
import ToolTip from "../../Atoms/Tooltip";
import { useNavigate } from 'react-router-dom'
const { Option, OptGroup } = Select;
const SourceIncome = ({
  handleDrctChange,
  prevStep,
  nextStep,
  handleChange,
  values,
}) => {
  const history = useNavigate();



  const Professions = [
    { value: "Govt Employee", label: "Govt Employee" },
    { value: "Businessman", label: "Businessman" },
    { value: "Private Service", label: "Private Service" },
    { value: "House Wife", label: "House Wife" },
    { value: "Student", label: "Student" },
    { value: "Self Employed Profession", label: "Self Employed Profession" },
    { value: "Retired Person", label: "Retired Person" },
    { value: "Other", label: "Other" },
  ];
  const IncomeSources = [
    { value: "Salaried", label: "Salaried" },
    { value: "Business", label: "Business" },
    { value: "Inheritance", label: "Inheritance" },
    { value: "Gift", label: "Gift" },
    { value: "Retired", label: "Retired" },
    { value: "Other", label: "Other" },
  ];

  const AnualIncomes = [
    { value: "J07", label: "Up to 100,000" },
    { value: "J08", label: "100,001 - 250,000" },
    { value: "J09", label: "250,001 - 500,000" },
    { value: "J10", label: "Above 500,000" },
  ];

  const AnualIncomesNormal = [
    { value: "J01", label: "Up to 100,000" },
    { value: "J02", label: "100,001 - 250,000" },
    { value: "J03", label: "250,001 - 500,000" },
    { value: "J04", label: "500,001 - 1,000,000" },
    { value: "J05", label: "1,000,001 - 2,500,000" },
    { value: "J06", label: "Above 2,500,000" },
  ];


  const [Loading, setLoading] = useState(false)
  const [SaveLoading, setSaveLoading] = useState(false)
  const handleSubmit = (e) => {
    if (e !== 'saveExist') {
      e.preventDefault();
      setLoading(true)
    }
    else {
      setSaveLoading(true)
    }
    setLoading(true)
    const FormSubmit = PostData.SubmitForm(values, e !== 'saveExist' ? onSuccess : onSuccessSave, 'continue', 2);
    FormSubmit.then(value => {
      console.log({ value })
      setLoading(false)
    })

  }
  const onSuccess = () => {
    nextStep()
  };

  const onSuccessSave = () => {
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
                Title="Financial Details"
                prevSec="Personal Details"
                prevStep={prevStep} />
              <form onSubmit={handleSubmit}>
                <div className="row mt-40">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                        <label
                          htmlFor="Professions "
                          className="col-12 col-form-label fw-500"
                        >
                          Profession
                          <ToolTip title="   In the case that you select “Other,” please email us at ips@nextcapital.com.pk after submitting your account opening form with an explanation of what you do. Please email us from the e-mail address you used to create your IPS account on Finqalab and include your full name and identity document number." />
                        </label>

                        <div className="mt-auto">
                          <Select defaultValue={values.BussType?.children ? values.BussType?.children : undefined} placeholder="Type of Business" onSelect={(value, event) => handleDrctChange("BussType", event)} rules={[{ required: true }]} >

                            {Professions.map(Professions => (
                              <Option key={Professions.value}>{Professions.label}</Option>
                            ))}
                            ``
                          </Select>
                          {!values?.BussType?.value && <RequiredFeild />}
                        </div>
                        {/* {!values.BussType.value && values.continues ? <span className="text-danger fs10" >Please Select Occupation</span> : ""} */}
                      </div>
                      <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                        <label
                          htmlFor="IncomeSource "
                          className="col-12 col-form-label fw-500"
                        >
                          Source of Income
                          <ToolTip title="*If you select Inheritance, Gift, or Retired, you will have to sign an additional undertaking. In the case that you select “Other,” please email us at ips@nextcapital.com.pk after submitting your account opening form with an explanation of your source of income and attach relevant documentary proof" />                    </label>

                        <div className="mt-auto">
                          <Select defaultValue={values.IncomeSource?.children ? values.IncomeSource?.children : undefined} placeholder="Source of Income" onSelect={(value, event) => handleDrctChange("IncomeSource", event)} rules={[{ required: true }]} >

                            {IncomeSources.map(IncomeSource => (
                              <Option key={IncomeSource.value}>{IncomeSource.label}</Option>
                            ))}

                          </Select>
                          {!values?.IncomeSource?.value && <RequiredFeild />}
                        </div>
                        {/* {!values.BussType.value && values.continues ? <span className="text-danger fs10" >Please Select Occupation</span> : ""} */}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="CompName"
                      className="col-12 col-form-label fw-500"
                    >
                      Business / Employer Name
                      <ToolTip title="Please input the full, legal name of your employer or business" />
                    </label>
                    <input
                      type="text"
                      name="CompName"
                      className="form-control mt-auto"
                      placeholder="Google Inc"
                      value={values.CompName}
                      onChange={handleChange}
                      id="CompName"
                      maxLength="80"
                      required
                    />
                  </div>

                  <div className="col-12 col-sm-6 mb-3 col-lg-4 d-flex flex-column">
                    <label
                      htmlFor="AnualIncomes "
                      className="col-12 col-form-label fw-500"
                    >
                      Gross Annual Income (PKR)
                      <ToolTip title="Please input your ANNUAL pre-tax income" />
                    </label>

                    <div className="mt-auto">

                      <input
                        type="text"
                        name="AnnualIncome"
                        className="form-control mt-auto"
                        placeholder="1,000,000"
                        value={values.AnnualIncome}
                        onChange={handleChange}
                        id="AnnualIncome"
                        required
                        maxLength={10}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="OtherIncome"
                      className="col-12 col-form-label fw-500"
                    >
                      Other Income
                    </label>
                    <input
                      type="text"
                      name="OtherIncome"
                      className="form-control mt-auto"
                      placeholder="500,000"
                      value={values.OtherIncome}
                      onChange={handleChange}
                      id="OtherIncome"
                      maxLength={10}
                    />
                  </div>

                  <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="TaxYES"
                      className="col-12 col-form-label fw-500"
                    >
                      Tax Filer
                      <ToolTip title={<>Please indicate your current tax filing status with FBR. You can check this using this free online resource:  <span className="cursorPointer" onClick={() => { window.open('https://www.befiler.com/tax-tools/ntn-status', '_blank') }}>https://www.befiler.com/tax-tools/ntn-status</span> Please note that this website is operated by a third-party and not affiliated with Next Capital Limited or Finqalab</>} />
                    </label>
                    <div className="mt-auto">
                      <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                        <li className="w-50">
                          <input
                            type="radio"
                            id="TaxYES"
                            name="TaxFiler"
                            value="YES"
                            defaultChecked={values.TaxFiler == "YES"}
                            onChange={handleChange}
                          />
                          <label htmlFor="TaxYES" className="py-1 mb-0">
                            YES
                          </label>
                        </li>
                        <li className="w-50">
                          <input
                            type="radio"
                            id="TaxNO"
                            name="TaxFiler"
                            value="NO"
                            defaultChecked={values.TaxFiler == "NO"}
                            onChange={handleChange}
                          />
                          <label htmlFor="TaxNO" className="py-1 mb-0">
                            NO
                          </label>
                        </li>
                      </ul>
                      {!values?.TaxFiler && <RequiredFeild />}
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="PoliticalYES"
                      className="col-12 col-form-label fw-500"
                    >
                      Politically Exposed Person
                      <ToolTip title="Politically exposed persons” or “PEPs” mean an individual who is or has been entrusted with a prominent public function either domestically or by a foreign country, or in an international organization and includes but not limited to: (i) for foreignPEPs, Heads of State or of government, senior politicians, senior government, judicial or military officials, senior executives of state-owned corporations and political party officials; (ii) for domestic PEPs, Heads of State or of government, senior politicians, senior government,judicial or military officials, senior executives of state-owned corporations, political party officials; (iii) for international organization PEPs, members of senior management or individuals who have been entrusted with equivalent functions. Family member of PEPs also qualify as PEPs themselves and include, (i) a spouse of the PEP: (ii) lineal ascendants and descendants and siblings of the PEP. If you meet any of the above criteria, you should mark “YES”. Your application will be subject to enhanced due diligence as per the Securities Exchange Commission of Pakistan’s regulations concerning Anti Money Laundering and Counter Financing of Terrorism" />
                    </label>
                    <div className="mt-auto">
                      <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                        <li className="w-50">
                          <input
                            type="radio"
                            id="PoliticalYES"
                            name="PoliticalExpose"
                            value="YES"
                            defaultChecked={values.PoliticalExpose == "YES"}
                            onChange={handleChange}
                          />
                          <label htmlFor="PoliticalYES" className="py-1 mb-0">
                            YES
                          </label>
                        </li>
                        <li className="w-50">
                          <input
                            type="radio"
                            id="PoliticalNO"
                            name="PoliticalExpose"
                            value="NO"
                            defaultChecked={values.PoliticalExpose == "NO"}
                            onChange={handleChange}
                          />
                          <label htmlFor="PoliticalNO" className="py-1 mb-0">
                            NO
                          </label>
                        </li>
                      </ul>
                      {!values?.PoliticalExpose && <RequiredFeild />}
                    </div>
                  </div>

                  {values?.TaxFiler === "YES" &&
                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                      <label
                        htmlFor="NTN"
                        className="col-12 col-form-label fw-500"
                      >
                        National Tax Number
                        <ToolTip title={<>"You can check this using this free online resource: <span className="cursorPointer" onClick={() => { window.open('https://www.befiler.com/tax-tools/ntn-status', '_blank') }}>https://www.befiler.com/tax-tools/ntn-status</span> Please note that this website is operated by a third-party and not affiliated with Next Capital Limited or Finqalab." placement="bottom"</>} />
                      </label>
                      <input
                        type="text"
                        name="NTN"
                        className="form-control mt-auto"
                        placeholder=""
                        value={values.NTN}
                        onChange={handleChange}
                        id="NTN"
                        maxLength={20}
                        // minLength={9}
                        required
                      />
                    </div>
                  }

                </div>

                <hr className="mt-40" />
                <h1 className="fs24 ls4 fw-700 tc-plum mt-40">Bank Mandate</h1>

                <BankMandate

                  handleDrctChange={handleDrctChange}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  handleChange={handleChange}
                  values={values} />

                <hr className="mt-40" />

                <h1 className="fs24 ls4 fw-700 tc-plum mt-40">Foreign Account Tax Compliance Act</h1>

                <ForiegnAccount

                  handleDrctChange={handleDrctChange}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  handleChange={handleChange}
                  values={values} />

                <BottomNavigation first="Save & Exit" second="Next" prevStep={prevStep} Nextdisabled={false} Loading={Loading} SaveLoading={SaveLoading} handleSubmit={handleSubmit} />
              </form>
            </div>
          </div >
        </div >
      </div >
    </>
  );
};

export default SourceIncome;


const HelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z" fill="#D2D6DC" />
  </svg>

)