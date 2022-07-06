



import { Select } from 'antd';
import { useState } from 'react';
import PostData from "../../../API/PostData"
import { Button, Modal } from 'antd';
import UpperNavigation from '../../Atoms/UpperNavigation';
import BottomNavigation from '../../Atoms/BottomNavigation';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../../Atoms/ScrollToTop';



const { Option } = Select;

const ReviewApplication = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {
    const [Loading, setLoading] = useState(false)
    const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false)
    const [isThankYouModalVisible, setIsThankYouModalVisible] = useState(false)

    const history = useNavigate();


    const showConfirmModal = (e) => {
        e.preventDefault();
        setIsConfirmModalVisible(true);
    };

    const handleConfirmOk = () => {
        setIsConfirmModalVisible(false);
        handleSubmit('Submitted')
    };



    const handleConfirmCancel = () => {
        setIsConfirmModalVisible(false);
    };






    const showThankYouModal = () => {
        setIsThankYouModalVisible(true);
    };

    const handleThankYouOk = () => {
        setIsThankYouModalVisible(false);
        history('/Dashboard')
    };



    const handleThankYouCancel = () => {
        setIsThankYouModalVisible(false);
    };

    const [SaveLoading, setSaveLoading] = useState(false)
    const handleSubmit = (e) => {
        if (e !== 'saveExist') {
            setLoading(true)
            handleSubmitForm('Submitted')
        }
        else {
            handleSubmitForm('continue')
            setSaveLoading(true)
        }
    }


    const handleSubmitForm = (e) => {
        // const res = PostData.SubmitDocument(values);
        // res.then(value => {
        const FormSubmit = PostData.SubmitForm(values, onSuccess, e, 8);
        FormSubmit.then(value => {
            console.log({ value })
            setLoading(false)
            // showThankYouModal()
            // onSuccess()
        })
        // })

    }
    const onSuccess = () => {
        history('/FormSubmitted')
    };





    return (
        <>
            <ScrollToTop />
            <div className="container-fluid px-0 bg-grey-100 review">

                <div className="container px-0">
                    <div >
                        <div className="px-1">


                            <div className="mt-3">
                                <div className="">
                                    <UpperNavigation
                                        Title="Review Application"
                                        prevSec="Terms And Conditions"
                                        prevStep={prevStep} />

                                </div>
                            </div>

                            <div className="accordion mt-40 review" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Personal Details
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body px-0">
                                            <div className="row mt28">

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Account Type</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.AccountType}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">First Name</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.firstName}
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Last Name</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.lastName}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Father’s or Husband’s Name</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.RelativeName}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey  mb-0">Email Address</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.email}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey  mb-0">Phone Number</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.phoneNumber}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Date of Birth (DD-MM-YYYY)</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.BirthDay}
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">
                                                        Country of Birth
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.BirthCountry}
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">City of Birth</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.BirthCity}
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Nationality</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.Nationality?.label}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Resident</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">

                                                        {values?.Resident?.children}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">
                                                        ID Document
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.IDType}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">ID Document Number</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.CNIC}
                                                    </p>
                                                </div>


                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">ID Issue Date (DD-MM-YYYY)</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.IssueDate}
                                                    </p>
                                                </div>
                                                {values?.lifeTimeExpiry ? <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Life Time Expiry</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        True
                                                    </p>
                                                </div> :
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">ID Expiry Date (DD-MM-YYYY)</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.ExpiryDate}
                                                        </p>
                                                    </div>
                                                }
                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Gender</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">{values?.Gender}</p>
                                                </div>

                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-md-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Street Address
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.Street}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Country</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.country?.label}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Province / State</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.Provinces?.label}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">City</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.City?.label}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {!values?.MailingAddress &&
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">
                                                                Mailing Street Address
                                                            </p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.MailStreet}
                                                            </p>
                                                        </div>

                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Mailing Country</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.mailCountry?.label}
                                                            </p>
                                                        </div>

                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Mailing Province / State</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.MailProvinces?.label}
                                                            </p>
                                                        </div>

                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Mailing City</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.MailCity?.label}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            <div className="col-12">
                                                <div className="col-2">
                                                    <button
                                                        className="LogoutBtn tc-blue bg-white px-3 py-1"

                                                        onClick={() => handleDrctChange("step", 1)}
                                                    >Edit</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Financial Details
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div

                                        >
                                            <div className="row mt28">

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Profession</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values.BussType?.children}
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Source of Income</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.IncomeSource?.children}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Bussiness / Employer Name</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.CompName}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                    <p className=" fw-600 fs16 tc-grey  mb-0">Gross Annual Income</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.AnnualIncome}
                                                    </p>
                                                </div>


                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="row">
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Other Income</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.OtherIncome}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Tax Filer
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.TaxFiler == 'YES' ? 'Yes' : "No"}
                                                        </p>
                                                    </div>
                                                    {values?.TaxFiler == 'YES' &&
                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">
                                                                National Tax Number
                                                            </p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.NTN}
                                                            </p>
                                                        </div>}
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Politically Exposed Person</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.PoliticalExpose}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Account Title</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.BankTitle}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Bank Account Number</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">

                                                            {values?.BankNum}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Bank Branch Address</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.BankAddress}
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="row">

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Are you an American Citizen?</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.USCitizen}
                                                        </p>
                                                    </div>


                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">US Green Card Holder</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.USGREENCARD}
                                                        </p>
                                                    </div>
                                                    {values?.USCitizen === 'NO' && values?.USGREENCARD === 'NO' ? null : <>
                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">US Tax Identification Number</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.USTIN}
                                                            </p>
                                                        </div>
                                                        {values?.USGREENCARD !== 'NO' &&
                                                            <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0"> US Green Card Number</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.USGREENCARDNum}
                                                                </p>
                                                            </div>
                                                        }
                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Overseas Contact Number</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.frgnNumber}
                                                            </p>
                                                        </div>

                                                        <div className="col-lg-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Overseas Address</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.OverseasAddress}
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-3 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Have you Given Any Power of Attorney</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.PWRAttorney}
                                                            </p>
                                                        </div>
                                                        {values?.PWRAttorney === "YES" &&
                                                            <div className="col-lg-3 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">Attorney Address</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.AttorneyAddress}
                                                                </p>
                                                            </div>
                                                        }
                                                        <div className="col-lg-3 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Have you Renounced Foreign Citizenship</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.renouncedCitizenchip}
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-3 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0"> W8BEN / W9USA Tax forms submitted</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.taxformSubmit}
                                                            </p>
                                                        </div>
                                                        {values?.taxformSubmit === 'YES' && <div className="col-lg-3 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0"> Date of Submission</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.formSubmitDate}
                                                            </p>
                                                        </div>
                                                        }
                                                    </>}






                                                </div>
                                            </div>


                                            <div className="col-12">
                                                <div className="col-2">
                                                    <button
                                                        className="LogoutBtn tc-blue bg-white px-3 py-1"

                                                        onClick={() => handleDrctChange("step", 2)}
                                                    >Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Next to Kin
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body px-0 col-lg-12 col-md-12 col-12 ">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Full Name</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">{values?.KinName}</p>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Father’s or Husband’s Name</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.KinFthrName}
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">


                                                    <p className="fw-600 fs16 tc-grey mb-0">
                                                        Email
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap" style={{ overflowWrap: 'break-word' }} >

                                                        {values?.KinEmail}

                                                    </p>
                                                </div>


                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">
                                                        Phone Number
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.KinPhoneNumber}
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <p className="fw-600 fs16 tc-grey mb-0">Relationship with Account Holder</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.KinRelation}
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <p className="fw-600 fs16 tc-grey mb-0">Landline Number</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.KinNumber}
                                                    </p>
                                                </div>

                                                <div className="col-md-6 col-12">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">
                                                        Street Address
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {values?.KinMailstreet}
                                                    </p>
                                                </div>

                                            </div>


                                            <>
                                                <div className="accordion-body px-0 col-lg-12 col-md-12 col-12 ">
                                                    <div className="row">
                                                        {/* <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Resident
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        </p>
                                                    </div> */}
                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">
                                                                Country
                                                            </p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.KinMailCountry?.label}
                                                            </p>
                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">
                                                                Province / State
                                                            </p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.KinMailProvinces?.label}
                                                            </p>
                                                        </div>




                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">
                                                                City
                                                            </p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.KinMailCity?.label}
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">ID type</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.KinIDType}
                                                            </p>
                                                        </div>


                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">
                                                                Identity Document Number
                                                            </p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.KinCNIC}
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Account Operating Instruction</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.AccountOperatingInstruction?.children}
                                                            </p>
                                                        </div>


                                                        <div className="col-lg-3 col-md-6 col-12">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">
                                                                Tax Exemption
                                                            </p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values.TaxExemption == "YES" ? 'Yes' : 'No'}
                                                            </p>
                                                        </div>
                                                        {/* <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Mode of Transaction</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values.TransactionMode == "Cheque" ? 'Cheque' : 'RTGS(Prism)'}
                                                        </p>
                                                    </div> */}

                                                        {/* <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Zakat Exemption</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values.ZakatExemption == "YES" ? 'Yes' : "No"}
                                                        </p>
                                                    </div> */}
                                                    </div>
                                                </div>

                                            </>

                                            <div className="col-12">
                                                <div className="col-2">
                                                    <button
                                                        className="LogoutBtn tc-blue bg-white px-3 py-1"

                                                        onClick={() => handleDrctChange("step", 4)}
                                                    >Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* JointAccount */}

                                {values.AccountType == "Joint" &&

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Joint Account Details
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                            <div className="accordion-body px-0">
                                                <div className="row mt28">

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">First Name</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointAccountTitle}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Last Name</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointLastName}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Father’s or Husband’s Name</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointRelativeName}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey  mb-0">Email Address</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.Jointemail}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey  mb-0">Phone Number</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointNumber}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Date of Birth (DD-MM-YYYY)</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointBirthDay}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Country of Birth
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointBirthCountry}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">City of Birth</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointBirthCity}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Nationality</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointNationality?.label}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Resident</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">

                                                            {values?.JointResident?.children}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            ID Document
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointIDType}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">ID Document Number</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointCNIC}
                                                        </p>
                                                    </div>


                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">ID Issue Date (DD-MM-YYYY)</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointIssueDate}
                                                        </p>
                                                    </div>
                                                    {values?.JointlifeTimeExpiry ? <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Life Time Expiry</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            True
                                                        </p>
                                                    </div> :
                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">ID Expiry Date (DD-MM-YYYY)</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.JointExpiryDate}
                                                            </p>
                                                        </div>
                                                    }
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Gender</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">{values?.JointGender}</p>
                                                    </div>

                                                </div>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">
                                                                Street Address
                                                            </p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.Jointstreet}
                                                            </p>
                                                        </div>

                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Country</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.Jointcountry?.label}
                                                            </p>
                                                        </div>

                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Province / State</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.JointProvinces?.label}
                                                            </p>
                                                        </div>

                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">City</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.JointCity?.label}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {!values?.JointMailingAddress &&
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-md-6 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">
                                                                    Mailing Street Address
                                                                </p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointMailstreet}
                                                                </p>
                                                            </div>

                                                            <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">Mailing Country</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointmailCountry?.label}
                                                                </p>
                                                            </div>

                                                            <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">Mailing Province / State</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointMailProvinces?.label}
                                                                </p>
                                                            </div>

                                                            <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">Mailing City</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointMailCity?.label}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }

                                                <div className="row mt28">

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Profession</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointProfession?.children}
                                                        </p>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Source of Income</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointIncomeSource?.children}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">Bussiness / Employer Name</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointCompName}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                        <p className=" fw-600 fs16 tc-grey  mb-0">Gross Annual Income</p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {values?.JointAnnualIncome}
                                                        </p>
                                                    </div>


                                                </div>
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Other Income</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.JointOtherIncome}
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">
                                                                Tax Filer
                                                            </p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.JointTaxFiler == 'YES' ? 'Yes' : "No"}
                                                            </p>
                                                        </div>
                                                        {values?.JointTaxFiler == 'YES' &&
                                                            <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">
                                                                    National Tax Number
                                                                </p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointNTN}
                                                                </p>
                                                            </div>}
                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Politically Exposed Person</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.JointPoliticalExpose}
                                                            </p>
                                                        </div>


                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">Are you an American Citizen?</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.JointUSCitizen}
                                                            </p>
                                                        </div>


                                                        <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                            <p className=" fw-600 fs16 tc-grey mb-0">US Green Card Holder</p>
                                                            <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                {values?.JointUSGREENCARD}
                                                            </p>
                                                        </div>
                                                        {values?.JointUSCitizen === 'NO' && values?.JointUSGREENCARD === 'NO' ? null : <>
                                                            <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">US Tax Identification Number</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointUSTIN}
                                                                </p>
                                                            </div>
                                                            {values?.JointUSGREENCARD !== 'NO' &&
                                                                <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                                    <p className=" fw-600 fs16 tc-grey mb-0"> US Green Card Number</p>
                                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                        {values?.JointUSGREENCARDNum}
                                                                    </p>
                                                                </div>
                                                            }
                                                            <div className="col-lg-3 col-sm-6 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">Overseas Contact Number</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointfrgnNumber}
                                                                </p>
                                                            </div>

                                                            <div className="col-lg-6 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">Overseas Address</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointOverseasAddress}
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">Have you Given Any Power of Attorney</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointPWRAttorney}
                                                                </p>
                                                            </div>
                                                            {values?.JointPWRAttorney === "YES" &&
                                                                <div className="col-lg-3 col-12 mb-3">
                                                                    <p className=" fw-600 fs16 tc-grey mb-0">Attorney Address</p>
                                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                        {values?.JointAttorneyAddress}
                                                                    </p>
                                                                </div>
                                                            }
                                                            <div className="col-lg-3 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0">Have you Renounced Foreign Citizenship</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointRenouncedCitizenchip}
                                                                </p>
                                                            </div>
                                                            <div className="col-lg-3 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0"> W8BEN / W9USA Tax forms submitted</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointTaxformSubmit}
                                                                </p>
                                                            </div>
                                                            {values?.JointTaxformSubmit === 'YES' && <div className="col-lg-3 col-12 mb-3">
                                                                <p className=" fw-600 fs16 tc-grey mb-0"> Date of Submission</p>
                                                                <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                                    {values?.JointformSubmitDate}
                                                                </p>
                                                            </div>
                                                            }
                                                        </>}






                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="col-2">
                                                        <button
                                                            className="LogoutBtn tc-blue bg-white px-3 py-1"

                                                            onClick={() => handleDrctChange("step", 3)}
                                                        >Edit</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>}

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Documents
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body px-0 col-lg-12 col-md-12 col-12 ">
                                            <div className="row">

                                                <p className=" fw-600 fs18 tc-grey my-3"> Main Applicant</p>
                                                {/* Main Applicant */}
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Id Document (Front)</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">{typeof values.CNICFrontFile == 'string' ? values?.CNICFrontFile : values?.CNICFrontFile?.name}</p>
                                                </div>

                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">Id Document (Back)</p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {typeof values.CNICBackFile == 'string' ? values?.CNICBackFile : values?.CNICBackFile?.name}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">
                                                        Proof of Mailing Address
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {typeof values.MailingAddProof == 'string' ? values?.MailingAddProof : values?.MailingAddProof?.name}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-md-6 col-12">

                                                    <p className="fw-600 fs16 tc-grey mb-0">
                                                        Proof of Income
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">

                                                        {typeof values.IncomeProof == 'string' ? values?.IncomeProof : values?.IncomeProof?.name}

                                                    </p>
                                                </div>

                                                <p className=" fw-600 fs18 tc-grey my-3">Next to kin</p>
                                                {/* Kin */}
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">
                                                        CNIC Front
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {typeof values.kinCNICFrontFile == 'string' ? values?.kinCNICFrontFile : values?.kinCNICFrontFile?.name}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">
                                                        CNIC Back
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {typeof values.kinCNICBackFile == 'string' ? values?.kinCNICBackFile : values?.kinCNICBackFile?.name}
                                                    </p>
                                                </div>

                                                {/* <div className="col-lg-3 col-md-6 col-12">
                                                    <p className=" fw-600 fs16 tc-grey mb-0">
                                                        Proof of Mailing Address
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                        {typeof values.KinMailingAddProof == 'string' ? values?.KinMailingAddProof : values?.KinMailingAddProof?.name}
                                                    </p>
                                                </div>

                                                <div className="col-lg-3 col-md-6 col-12">

                                                    <p className="fw-600 fs16 tc-grey mb-0">
                                                        Proof of Income
                                                    </p>
                                                    <p className=" fw-700 fs16 tc-plum Bold overflowWrap">

                                                        {typeof values.KinIncomeProof == 'string' ? values?.KinIncomeProof : values?.KinIncomeProof?.name}

                                                    </p>
                                                </div> */}

                                                {/* Joint */}
                                                <p className=" fw-600 fs18 tc-grey my-3"> Joint Applicant</p>
                                                {values?.AccountType === "Joint" && <>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            CNIC Front
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {typeof values.JointCNICFrontFile == 'string' ? values?.JointCNICFrontFile : values?.JointCNICFrontFile?.name}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            CNIC Back
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {typeof values.JointCNICBackFile == 'string' ? values?.JointCNICBackFile : values?.JointCNICBackFile?.name}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            Proof of Mailing Address
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {typeof values.JointMailingAddProof == 'string' ? values?.JointMailingAddProof : values?.JointMailingAddProof?.name}
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">

                                                        <p className="fw-600 fs16 tc-grey mb-0">
                                                            Proof of Income
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">

                                                            {typeof values.JointIncomeProof == 'string' ? values?.JointIncomeProof : values?.JointIncomeProof?.name}

                                                        </p>
                                                    </div>
                                                </>}
                                                <p className=" fw-600 fs18 tc-grey my-3"> Other Documents</p>
                                                {values.Other.map((each, index) => (

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <p className=" fw-600 fs16 tc-grey mb-0">
                                                            {index + 1}-Additional Document
                                                        </p>
                                                        <p className=" fw-700 fs16 tc-plum Bold overflowWrap">
                                                            {typeof each == 'string' ? each : each?.name}
                                                        </p>
                                                    </div>
                                                ))}

                                            </div>



                                            <div className="col-12">
                                                <div className="col-2">
                                                    <button
                                                        className="LogoutBtn tc-blue bg-white px-3 py-1"

                                                        onClick={() => handleDrctChange("step", values.AccountType == "Joint" ? 5 : 4)}
                                                    >Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>



                    <form onSubmit={showConfirmModal}>
                        <BottomNavigation first="Save & Exit" second="Submit" prevStep={prevStep} Nextdisabled={false} Loading={Loading} handleSubmit={handleSubmit} />
                    </form>
                </div>




                <Modal

                    visible={isConfirmModalVisible}
                    onOk={handleConfirmOk}
                    onCancel={handleConfirmCancel}
                    footer={<>
                        <div className="row">
                            <div className="col">
                                <button
                                    className="tc-grey fw-600 bg-grey-200 border-0 br-8 w-100 py-2"
                                    type="button"
                                    onClick={handleConfirmCancel}
                                >
                                    Cancel

                                </button></div>
                            <div className="col">
                                <button
                                    className="btn-filled fw-600 border-0 br-8 fs16 py-2 w-100"
                                    type="button"
                                    onClick={handleConfirmOk}
                                >

                                    {Loading ? (
                                        // <div className="spinner-border text-light" role="status">
                                        //     <span className="visually-hidden">Loading...</span>
                                        // </div>
                                        <div className="whitespinner">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                    ) : (
                                        <>Yes</>
                                    )}

                                </button>
                            </div>
                        </div>
                    </>


                    }
                >
                    <h1 className="fs24 ls4 fw-800 t-grey-800 mb-3">Are you ready to submit?</h1>

                    <p className="fw-500 fs16 ms-auto">
                        Have you reviewed your information for accuracy and correctness?
                    </p>


                </Modal>

                <Modal

                    visible={isThankYouModalVisible}
                    onOk={handleThankYouOk}
                    onCancel={handleThankYouCancel}
                    footer={<>
                        <Button key="submit" className="w-100" type="primary" onClick={handleThankYouOk}>
                            Yes
                        </Button>
                        {/* <Button key="submit" type="primary" onClick={handleThankYouCancel}>
                            Cancel
                    </Button> */}
                    </>


                    }
                >
                    <h1 className="fs24 ls4 fw-800 t-grey-800 mb-3">Thank You</h1>

                    <p className="fw-500 fs16 ms-auto">
                        Your form has been submitted successfully and is currently being reviewed by Next Capital. For further information contact us
                    </p>


                </Modal>

            </div>
        </>
    );
};

export default ReviewApplication;
