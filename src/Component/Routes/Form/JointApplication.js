import { Select, DatePicker } from 'antd';
import moment from "moment";
import { useState } from 'react';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import Select1 from "react-select";
import PostData from '../../../API/PostData';
import countriesStateCities from '../../../Assets/Data/countries_states_cities.json'
import BottomNavigation from '../../Atoms/BottomNavigation';
import RequiredFeild from '../../Atoms/RequiredFeild';
import ScrollToTop from '../../Atoms/ScrollToTop';
import UpperNavigation from '../../Atoms/UpperNavigation';
import { useNavigate } from 'react-router-dom'

import ToolTip from "../../Atoms/Tooltip"


const { Option } = Select;

const JointApplication = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {

    const history = useNavigate();
    const customStyle = {

        control: (base, state) => ({
            ...base,
            '&:hover': { borderColor: '#E5E7EB' }, // border style on hover
            border: '1px solid #E5E7EB', // default border color
            height: "47px",
            borderRadius: "0.5rem ",
            boxShadow: 'none', // no box-shadow
        }),
    }

    const ZakatExemptionReason = [
        // { value: "01", label: "Self" },
        { value: "02", label: "Non-Muslim" },
        { value: "03", label: "Foriegn National" },
        { value: "04", label: "Due to Fiqah" },
        { value: "05", label: "Other" },
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

    const JointProfession = [
        { value: "Govt Employee", label: "Govt Employee" },
        { value: "Businessman", label: "Businessman" },
        { value: "Private Service", label: "Private Service" },
        { value: "House Wife", label: "House Wife" },
        { value: "Student", label: "Student" },
        { value: "Self Employed Profession", label: "Self Employed Profession" },
        { value: "Retired Person", label: "Retired Person" },
        { value: "Other", label: "Other" },
    ];



    const JointResidents = [
        { value: "01", label: "Resident" },
        { value: "02", label: "Non-Resident" },
    ];

    const JointIncomeSources = [
        { value: "P001", label: "Salaried" },
        { value: "P002", label: "Business" },
        { value: "P003", label: "Inheritance" },
        { value: "P005", label: "Gift" },
        { value: "P006", label: "Retired" },
        { value: "P007", label: "Other" },
    ];

    const JointIDTypes = [
        { value: "CNIC", label: "CNIC" },
        { value: "SNIC", label: "SNIC" },
        { value: "Passport", label: "Passport" },
        { value: "NICOP", label: "NICOP" },
        { value: "POC", label: "POC" },
        { value: "ARC", label: "ARC" },

    ];

    const hanldeResendentialCountries = (e) => {
        hanldeResidentailProvincesAndCities('')
        handleDrctChange("JointCity", '')
        handleDrctChange("Jointcountry", e)
        handleDrctChange("JointresidentiaProvinceList", e.states)
    }


    const hanldeResidentailProvincesAndCities = (e) => {
        handleDrctChange("JointProvinces", e)
        handleDrctChange("JointresidentialCitiesList", e.cities)
        handleDrctChange("JointCity", '')
    }


    const hanldeMailCountries = (e) => {
        handleDrctChange("JointmailProvinceList", e.states)
        handleDrctChange("JointmailCountry", e)
        hanldeJointMailProvincesAndCities('')
        handleDrctChange("JointMailCity", '')
    }



    const hanldeJointMailProvincesAndCities = (e) => {
        handleDrctChange("JointMailProvinces", e)
        handleDrctChange("JointmailCitiesList", e?.cities)
        handleDrctChange("JointMailCity", '')
        // setJointMailCity(e.cities)
    }



    const format = (date) => {
        return moment(date, "DD-MM-YYYY")
    }


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
        const FormSubmit = PostData.SubmitForm(values, e !== 'saveExist' ? onSuccess : onSuccessSave, 'continue', 3);
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
                                Title="Joint Applicant"
                                prevSec="Financial Details"
                                prevStep={prevStep} />
                            {/* <h1 className="fs24 ls4 fw-700 tc-plum ">Personal Detail</h1> */}
                            <form onSubmit={handleSubmit}>
                                <div className="row">

                                    <div className="col-12 col-sm-6 col-lg-4  d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointAccountTitle"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            First Name
                                            <ToolTip title="Please input the joint applicant’s name EXACTLY as it appears on their CNIC, SNIC, NICOP, POC, ARC or Passport." />

                                        </label>
                                        <input
                                            type="text"
                                            name="JointAccountTitle"
                                            className="form-control mt-auto"
                                            placeholder="First Name"
                                            value={values.JointAccountTitle}
                                            onChange={handleChange}
                                            id="JointAccountTitle"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4  d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointLastName"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Last Name
                                            <ToolTip title="Please input the joint applicant’s name EXACTLY as it appears on their CNIC, SNIC, NICOP, POC, ARC or Passport." />

                                        </label>
                                        <input
                                            type="text"
                                            name="JointLastName"
                                            className="form-control mt-auto"
                                            placeholder="Last Name"
                                            value={values.JointLastName}
                                            onChange={handleChange}
                                            id="JointLastName"
                                        // required
                                        />
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label htmlFor="email" className="col-form-label fw-500">
                                            Email
                                            <ToolTip title="This is a mandatory field and must include the joint applicant’s primary e-mail address. Please use a personal e-mail address and not one associated with work as they will be receiving their statements and other important communications from NCCPL and Next Capital Limited on this address." />

                                        </label>
                                        <div className="col-12 mt-auto">
                                            <input
                                                type="email"
                                                name="Jointemail"
                                                className="form-control"
                                                placeholder="someone@domain.com"
                                                onChange={handleChange}
                                                value={values.Jointemail}
                                                // value={values.email ? values?.email : signedEmail}
                                                id="email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label htmlFor="phone" className="col-form-label fw-500">
                                            Phone Number
                                            <ToolTip title="This is a mandatory field and must include the joint applicant’s primary mobile phone number. " />

                                        </label>
                                        <div className="mt-auto">
                                            <ReactPhoneInput
                                                country={"pk"}

                                                inputExtraProps={{
                                                    name: "JointPhoneNumber",
                                                    required: true,
                                                    autoFocus: true,

                                                }}

                                                id="phone"
                                                countryCodeEditable={false}

                                                containerclassName=""

                                                // defaultCountry={"sg"}


                                                value={values.JointPhoneNumber}
                                                // value={ 92 + values.JointPhoneNumber.substr(1)}
                                                onChange={(text) => handleDrctChange("JointPhoneNumber", text)}
                                                specialLabel={false}

                                                inputclassName="form-control p10"
                                            />
                                            {values.JointPhoneNumber.length < 12 && <RequiredFeild />}
                                            {/* {!values?.JointPhoneNumber && values.continues ? <span id="MailCountry" className="text-danger fs10" >Please provide JointPhoneNumber</span> : ""} */}
                                        </div>
                                    </div>

                                    {/* <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label htmlFor="Number" className="col-form-label fw-500">
                                            Landline Number
                                        </label>
                                        <div className="col-12 mt-auto">
                                            <input
                                                type="phone"
                                                name="JointNumber"
                                                className="form-control"
                                                placeholder="(051) 12345678"
                                                onChange={handleChange}
                                                value={values.JointNumber}
                                                // value={values.Number ? values?.Number : signedNumber}
                                                id="Number"
                                                minLength="11"
                                                maxLength="15"
                                            />
                                        </div>
                                    </div> */}

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointBirthDay"
                                            className="col-form-label fw-500"
                                        >
                                            Date of Birth
                                            <ToolTip title="Please input the Date of Birth EXACTLY as it appears on the joint applicant’s CNIC, SNIC, NICOP, POC, ARC or Passport." />

                                        </label>
                                        <div className="mt-auto">
                                            <DatePicker
                                                className="form-control"
                                                onChange={(date, dateString) => { handleDrctChange('JointBirthDay', dateString) }}
                                                defaultPickerValue={moment(new Date().setFullYear(new Date().getFullYear() - 18))}
                                                disabledDate={d => !d || d.isAfter(moment(new Date().setFullYear(new Date().getFullYear() - 18)))}
                                                format="DD-MM-YYYY"
                                                defaultValue={values?.JointBirthDay ? format(values?.JointBirthDay) : undefined} />
                                            {!values?.JointBirthDay && <RequiredFeild />}
                                        </div>
                                    </div>
                                    {/* Permannt */}

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointNationality"
                                            className="col-form-label fw-500"
                                        >
                                            Nationality
                                            <ToolTip title="Please input the country name, e.g., “Pakistan”, not “Pakistani.”" />
                                        </label>
                                        <div className="mt-auto">

                                            <Select1
                                                styles={customStyle}
                                                onChange={(e) => handleDrctChange("JointNationality", e)}
                                                placeholder="Select any one"
                                                id="JointNationality"
                                                options={countriesStateCities}
                                                defaultInputValue={values?.JointNationality?.label ? values?.JointNationality?.label : undefined}
                                                defaultValue={values?.JointNationality?.label ? values?.JointNationality?.label : undefined}
                                                value={values?.JointNationality}

                                            />

                                            {!values.JointNationality?.label && <RequiredFeild />}
                                        </div >
                                        {/* {!values.JointNationality?.value ? <span id="JointNationality" className="text-danger fs10" style={{ display: "none" }} >Please select JointNationality</span> : ""} */}
                                    </div >

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointResident"
                                            className="col-form-label fw-500"
                                        >
                                            Resident Status in Pakistan
                                            <ToolTip title="Please select yes or no based on the type of Pakistan ID card the joint applicant has (CNIC, SNIC, NICOP, POC, or ARC)." />

                                        </label>
                                        <div className="mt-auto">
                                            <Select defaultValue={values.JointResident ? values.JointResident : undefined} placeholder="Select any one" onSelect={(value, event) => handleDrctChange("JointResident", event)} rules={[{ required: true }]}>

                                                {JointResidents.map(residents => (
                                                    <Option key={residents.value}>{residents.label}</Option>
                                                ))}

                                            </Select>
                                            {!values?.JointResident?.value && <RequiredFeild />}
                                        </div >
                                        {/* {!values.JointResident ? <span id="JointResident" className="text-danger fs10" style={{ display: "none" }} >Please select Resident</span> : ""} */}

                                    </div >

                                    <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                        <label
                                            htmlFor="JointBirthCountry"
                                            className="col-form-label fw-500"
                                        >
                                            Country of Birth
                                            <ToolTip title="Please input the joint applicant’s Country of Birth EXACTLY as it appears on their CNIC, SNIC, NICOP, POC, ARC or Passport." />

                                        </label>
                                        <input
                                            type="text"
                                            name="JointBirthCountry"
                                            className="form-control mt-auto"
                                            placeholder="Pakistan"
                                            onChange={handleChange}
                                            value={values.JointBirthCountry}
                                            id="JointBirthCountry"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                        <label
                                            htmlFor="JointBirthCity"
                                            className="col-form-label fw-500"
                                        >
                                            City of Birth
                                            <ToolTip title="Please input the City of Birth EXACTLY as it appears on the joint applicant’s CNIC, SNIC, NICOP, POC, ARC or Passport." />

                                        </label>
                                        <input
                                            type="text"
                                            name="JointBirthCity"
                                            className="form-control mt-auto"
                                            placeholder="Karachi"
                                            onChange={handleChange}
                                            value={values.JointBirthCity}
                                            id="JointBirthCity"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointIDType"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            ID Type
                                            <ToolTip title="Please select either CNIC, SNIC, NICOP, POC, ARC or Passport." />

                                        </label>

                                        <>

                                            <div className="mt-auto">
                                                <Select defaultValue={values?.JointIDType ? values?.JointIDType : undefined} placeholder="ID Type" onSelect={(value, event) => handleDrctChange("JointIDType", event.value)} rules={[{ required: true }]}>

                                                    {JointIDTypes.map(idType => (
                                                        <Option key={idType?.value}>{idType?.label}</Option>
                                                    ))}

                                                </Select>
                                                {values?.JointIDType === "" && <RequiredFeild />}
                                            </div>
                                            {/*{!values.JointIDType && values.continues ? <span id="JointIDType" className="text-danger fs10" >Please Select JointIDType</span> : ""} */}

                                        </>


                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointCNIC"
                                            className="col-12 col-form-label fw-500"
                                        >Identity Document Number
                                            <ToolTip title="Please input the number on the joint applicant’s CNIC, SNIC, NICOP, POC, ARC or Passport." />

                                        </label>

                                        <input
                                            type='text'
                                            name="JointCNIC"
                                            className="form-control"
                                            placeholder="00000-0000000-0"
                                            value={values.JointCNIC}
                                            onChange={handleChange}
                                            id="JointCNIC"
                                            minLength={values.JointIDType == 'Passport' ? '55' : '13'}
                                            maxLength={values.JointIDType == 'Passport' ? '55' : '13'}
                                            required
                                        />
                                        {/* {!values.JointCNIC && values.continues ? <span id="JointIDType" className="text-danger fs10" >Please fill CNIC</span> : ""} */}
                                    </div>


                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointRelativeName"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Father / Husband's Name
                                            <ToolTip title="Please input the joint applicant’s Father/husband’s name EXACTLY as it appears on their CNIC, SNIC, NICOP, POC, ARC or Passport." />

                                        </label>
                                        <input
                                            type="text"
                                            name="JointRelativeName"
                                            className="form-control mt-auto"
                                            placeholder="Relative Name"
                                            value={values.JointRelativeName}
                                            onChange={handleChange}
                                            id="JointRelativeName"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="issueDay"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Issue Date (e.g. 28-02-1995)
                                            <ToolTip title="Please input the joint applicant’s issue date EXACTLY as it appears on their CNIC, SNIC, NICOP, POC, ARC or Passport." />

                                        </label>

                                        <div className="mt-auto">

                                            <DatePicker
                                                className="form-control"
                                                onChange={(date, dateString) => { handleDrctChange('JointIssueDate', dateString) }}
                                                format="DD-MM-YYYY"
                                                disabledDate={d => !d || d.isBefore(format(values?.JointBirthDay)) || d.isAfter(format(values?.JointExpiryDate)) || d.isAfter(format(new Date()))}
                                                defaultValue={values?.JointIssueDate ? moment(values?.JointIssueDate, "DD-MM-YYYY") : undefined} />
                                            {!values?.JointIssueDate && <RequiredFeild />}
                                        </div>
                                        {/* {!values.JointIssueDate && values.continues ? <span className="text-danger fs10" >Please select Issue Date</span> : ""} */}
                                    </div>

                                    {!values?.JointlifeTimeExpiry && (
                                        <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">

                                            {/* {values?.JointIssueDate && <> */}


                                            <label
                                                htmlFor="expiryDay"
                                                className="col-12 col-form-label fw-500"
                                            >
                                                Expiry Date (e.g. 28-02-1995)
                                                <ToolTip title="Please input the joint applicant’s expiry date EXACTLY as it appears on their CNIC, SNIC, NICOP, POC, ARC or Passport." />

                                            </label>
                                            <div className="mt-auto">

                                                <DatePicker
                                                    className="form-control"
                                                    onChange={(date, dateString) => { handleDrctChange('JointExpiryDate', dateString) }}
                                                    format="DD-MM-YYYY"
                                                    disabledDate={d => !d || d.isBefore(format(values?.JointIssueDate)) || d.isBefore(format(values?.JointBirthDay))}
                                                    defaultValue={values?.JointExpiryDate ? format(values?.JointExpiryDate) : undefined} />
                                                {!values?.JointExpiryDate && <RequiredFeild />}
                                                {/*{!values.JointExpiryDate && !values.lifeTimeExpiry && values.continues ? <span className="text-danger fs10" >Please select Expiry Date</span> : ""} */}

                                            </div>


                                        </div>
                                    )}

                                    <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointlifeTimeExpiry"
                                            className="col-12 pb-1 pt-0 col-form-label fw-500"
                                        >
                                            Expiry Limit
                                        </label>
                                        <div className="mt-auto">
                                            <input
                                                className="form-check-input me-1"
                                                type="checkbox"
                                                defaultChecked={values.JointlifeTimeExpiry}
                                                onChange={handleChange}
                                                name="JointlifeTimeExpiry"
                                                id="JointlifeTimeExpiry"
                                            />
                                            <label
                                                className="form-check-label lifetimeexpirylabel"
                                                htmlFor="JointlifeTimeExpiry"
                                            >
                                                Life Time Expiry
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="Male"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Gender
                                        </label>
                                        <div className="mt-auto">
                                            <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="Male"
                                                        name="JointGender"
                                                        value="Male"
                                                        defaultChecked={values.JointGender == "Male"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="Male" className="py-1 mb-0">
                                                        Male
                                                    </label>
                                                </li>
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="Female"
                                                        name="JointGender"
                                                        value="Female"
                                                        defaultChecked={values.JointGender == "Female"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="Female" className="py-1 mb-0">
                                                        Female
                                                    </label>
                                                </li>
                                            </ul>
                                            {!values?.JointGender && <RequiredFeild />}
                                        </div>
                                    </div>

                                    <div className='mt-40'>
                                        <hr className="t-grey-200 mt-40 mb-40"></hr>
                                    </div>
                                    <div className="d-inline-flex w-100 mailing-address-container mb-3 mt-40">
                                        <h1 className="fs24 ls4 fw-700 tc-plum ">Permanent Address
                                        </h1>
                                    </div>

                                    <div className="col-12 mb-3 d-flex flex-column">
                                        <label
                                            htmlFor="Jointstreet"
                                            className="col-form-label fw-500"
                                        >
                                            Street Address
                                        </label>
                                        <input
                                            type="text"
                                            name="Jointstreet"
                                            className="form-control mt-auto"
                                            placeholder="H# 12 Block A, PECHS"
                                            onChange={handleChange}
                                            value={values.Jointstreet}
                                            id="Jointstreet"
                                            required
                                        />
                                        {/* {!values.Jointstreet ? <span id="area" className="text-danger fs10" style={{ display: "none" }} >Please fill Street</span> : ""} */}

                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                        <label
                                            htmlFor="Jointcountry"
                                            className="col-form-label fw-500"
                                        >
                                            Country
                                        </label>


                                        <div className="mt-auto">


                                            <Select1
                                                styles={customStyle}
                                                onChange={(e) => hanldeResendentialCountries(e)}
                                                // onChange={(e) => handleDrctChange("Jointcountry", e)}
                                                placeholder="Select any one"
                                                id="Jointcountry"
                                                options={countriesStateCities}
                                                defaultInputValue={values?.Jointcountry?.label ? values?.Jointcountry?.label : undefined}
                                                defaultValue={values?.Jointcountry?.label ? values?.Jointcountry?.label : undefined}
                                                value={values?.Jointcountry}

                                            />

                                            {!values.Jointcountry?.label && <RequiredFeild />}
                                            {/* {!values.Jointcountry?.label && values.continues ? <span id="Jointcountry" className="text-danger fs10" >Please select Country</span> : ""} */}
                                        </div >
                                    </div >

                                    <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                        <label
                                            htmlFor="JointProvinces"
                                            className="col-form-label fw-500"
                                        >
                                            Province/State
                                        </label>
                                        <div className="mt-auto">

                                            <Select1
                                                styles={customStyle}
                                                // onChange={(e) => handleDrctChange("JointProvinces", e)}
                                                onChange={(e) => hanldeResidentailProvincesAndCities(e)}
                                                placeholder="Select any one"
                                                id="JointProvinces"
                                                options={values?.JointresidentiaProvinceList}
                                                defaultValue={values?.JointProvinces?.label ? values?.JointProvinces?.label : undefined}
                                                value={values?.JointProvinces}

                                            />
                                            {!values?.JointProvinces?.label && <RequiredFeild />}
                                            {/* {!values?.JointProvinces?.label && values.continues ? <span id="province" className="text-danger fs10" >Please select Province</span> : ""} */}
                                        </div >
                                    </div >

                                    <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                        <label htmlFor="JointCity" className="col-form-label fw-500">
                                            City
                                        </label>

                                        <div className="mt-auto">
                                            <Select1
                                                styles={customStyle}
                                                onChange={(e) => handleDrctChange("JointCity", e)}
                                                placeholder="Select any one"
                                                id="JointCity"
                                                options={values?.JointresidentialCitiesList}
                                                defaultValue={values.JointCity.label ? values.JointCity.label : undefined}
                                                value={values.JointCity}
                                            />
                                            {!values?.JointCity?.label && <RequiredFeild />}
                                            {/* {!values?.JointCity?.label && values.continues ? <span id="city" className="text-danger fs10" >Please select JointCity</span> : ""} */}
                                        </div >
                                    </div >
                                    <div className="col-sm-9 col-md-10 my-auto mt-auto d-flex">
                                        <input
                                            className="form-check-input me-1 mb-3"
                                            type="checkbox"
                                            defaultChecked={values.JointMailingAddress}
                                            onChange={handleChange}
                                            name="JointMailingAddress"
                                            id="JointMailingAddress"
                                        />
                                        <label
                                            className="form-check-label fw-500 fs16 mailing-checkbox-label Bold"
                                            htmlFor="JointMailingAddress"
                                        >
                                            My permanent and mailing addresses are the same
                                        </label>
                                    </div>

                                    <div className='mt-40'>
                                        <hr className="t-grey-200 mt-40 mb-40"></hr>
                                    </div>


                                    {!values.JointMailingAddress && (
                                        <>
                                            <div className="d-inline-flex w-100 mailing-address-container mb-3 mt-40">
                                                <h1 className="fs24 ls4 fw-700 tc-plum ">Mailing Address
                                                    <ToolTip title="This address should match the address on the joint applicant’s CNIC, SNIC, NICOP, POC, or ARC. If not, you will have to provide a proof of address document, which can include any of the following: utility bill, rental agreement, insurance policy, bank statement, NTN certificate, or mobile bills. You will also have to provide proof of address if you are using the joint applicant’s passport as the main form of identity documentation. " />

                                                </h1>
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-12 d-flex flex-column mb-3">
                                                        <label
                                                            htmlFor="JointMailstreet"
                                                            className="col-form-label fw-500"
                                                        >
                                                            Street Address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="JointMailstreet"
                                                            className="form-control mt-auto"
                                                            placeholder="H# 12 Block A, PECHS"
                                                            onChange={handleChange}
                                                            value={values.JointMailstreet}
                                                            id="JointMailstreet"
                                                            required
                                                        />
                                                        {/* {!values.JointMailstreet && <RequiredFeild />}
{!values?.JointMailstreet && values.continues ? <span id="JointMailstreet" className="text-danger fs10" >Please fill Street</span> : ""} */}
                                                    </div>


                                                    <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                                        <label
                                                            htmlFor="JointmailCountry"
                                                            className="col-form-label fw-500"
                                                        >
                                                            Country
                                                        </label>


                                                        <div className="mt-auto">


                                                            <Select1
                                                                styles={customStyle}
                                                                onChange={(e) => hanldeMailCountries(e)}
                                                                // onChange={(e) => handleDrctChange("JointmailCountry", e)}
                                                                placeholder="Select any one"
                                                                id="JointmailCountry"
                                                                options={countriesStateCities}
                                                                defaultInputValue={values?.JointmailCountry?.label ? values?.JointmailCountry?.label : undefined}
                                                                defaultValue={values?.JointmailCountry?.label ? values?.JointmailCountry?.label : undefined}
                                                                value={values?.JointmailCountry}

                                                            />

                                                            {!values.JointmailCountry?.label && <RequiredFeild />}
                                                            {/* {!values.JointmailCountry?.label && values.continues ? <span id="JointmailCountry" className="text-danger fs10" >Please select Country</span> : ""} */}
                                                        </div >
                                                    </div >

                                                    <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                                        <label
                                                            htmlFor="JointMailProvinces"
                                                            className="col-form-label fw-500"
                                                        >
                                                            Province/State
                                                        </label>

                                                        <div className="mt-auto">
                                                            <Select1
                                                                styles={customStyle}
                                                                onChange={(e) => hanldeJointMailProvincesAndCities(e)}
                                                                placeholder="Select any one"
                                                                id="JointMailProvinces"
                                                                options={values?.JointmailProvinceList}
                                                                defaultValue={values.JointMailProvinces.label ? values.JointMailProvinces.label : undefined}
                                                                value={values?.JointMailProvinces}
                                                            />
                                                            {!values?.JointMailProvinces?.label && <RequiredFeild />}

                                                        </div >


                                                    </div >


                                                    <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                                        <label
                                                            htmlFor="JointMailCity"
                                                            className="col-form-label fw-500"
                                                        >
                                                            City
                                                        </label>
                                                        <div className="mt-auto">
                                                            <Select1
                                                                styles={customStyle}
                                                                onChange={(e) =>
                                                                    handleDrctChange("JointMailCity", e)
                                                                }
                                                                placeholder="Select any one"
                                                                id="JointMailCity"

                                                                options={values?.JointmailCitiesList}
                                                                defaultValue={values.JointMailCity.label ? values.JointMailCity.label : undefined}
                                                                value={values?.JointMailCity}
                                                            />
                                                            {!values?.JointMailCity?.label && <RequiredFeild />}


                                                        </div >
                                                    </div >

                                                </div >
                                            </div >

                                            <div className='mt-40'>
                                                <hr className="t-grey-200 mt-40 mb-40"></hr>
                                            </div>
                                        </>
                                    )}


                                    <div className="col-12">
                                        <div className="d-inline-flex w-100 mailing-address-container mb-3 mt-40">
                                            <h1 className="fs24 ls4 fw-700 tc-plum">Joint Applicant - Source of Income
                                            </h1>
                                        </div>
                                        <div className="row">

                                            <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                                <label
                                                    htmlFor="JointProfession"
                                                    className="col-12 col-form-label fw-500"
                                                >
                                                    Profession
                                                    <ToolTip title=" In the case that you select “Other,” please email us at ips@nextcapital.com.pk after submitting your account opening form with an explanation of what the joint applicant does. Please email us from the e-mail address you used to create your IPS account on Finqalab and include your full name and identity document number. " />

                                                </label>

                                                <div className="mt-auto">
                                                    <Select defaultValue={values.JointProfession ? values.JointProfession : undefined} placeholder="Type of Business" onSelect={(value, event) => handleDrctChange("JointProfession", event)} rules={[{ required: true }]} >

                                                        {JointProfession?.map(optn => (
                                                            <Option key={optn?.value}>{optn?.label}</Option>
                                                        ))}

                                                    </Select>
                                                    {!values?.JointProfession && <RequiredFeild />}
                                                </div>
                                                {/*{!values.JointProfession.value && values.continues ? <span className="text-danger fs10" >Please Select Occupation</span> : ""} */}
                                            </div>

                                            <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                                <label
                                                    htmlFor="JointIncomeSource "
                                                    className="col-12 col-form-label fw-500"
                                                >
                                                    Source of Income
                                                    <ToolTip title=" If you select Inheritance, Gift, or Retired, the joint applicant will have to sign an additional undertaking. In the case that you select “Other,” please email us at ips@nextcapital.com.pk after submitting your account opening form with an explanation of the joint applicant’s source of income and attach relevant documentary proof. " />

                                                </label>

                                                <div className="mt-auto">
                                                    <Select defaultValue={values.JointIncomeSource ? values.JointIncomeSource : undefined} placeholder="Source of Income" onSelect={(value, event) => handleDrctChange("JointIncomeSource", event)} rules={[{ required: true }]} >

                                                        {JointIncomeSources.map(JointIncomeSource => (
                                                            <Option key={JointIncomeSource.value}>{JointIncomeSource.label}</Option>
                                                        ))}

                                                    </Select>
                                                    {!values?.JointIncomeSource && <RequiredFeild />}
                                                </div>
                                                {/*  {!values.BussType.value && values.continues ? <span className="text-danger fs10" >Please Select Occupation</span> : ""} */}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointCompName"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Business / Employer Name
                                            <ToolTip title="Please input the full, legal name of the joint applicant’s employer or business." />

                                        </label>
                                        <input
                                            type="text"
                                            name="JointCompName"
                                            className="form-control mt-auto"
                                            placeholder="Google Inc"
                                            value={values.JointCompName}
                                            onChange={handleChange}
                                            id="JointCompName"
                                            maxLength="80"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-sm-6 mb-3 col-lg-4 d-flex flex-column">
                                        <label
                                            htmlFor="JointAnnualIncome"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Gross Annual Income (PKR)
                                            <ToolTip title="Please input the joint applicant’s ANNUAL pre-tax income." />

                                        </label>

                                        <div className="mt-auto">

                                            <input
                                                type="text"
                                                name="JointAnnualIncome"
                                                className="form-control mt-auto"
                                                placeholder="1,000,000"
                                                value={values.JointAnnualIncome}
                                                onChange={handleChange}
                                                id="JointAnnualIncome"
                                                required
                                                maxLength="10"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointOtherIncome"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Other Income
                                        </label>
                                        <input
                                            type="text"
                                            name="JointOtherIncome"
                                            className="form-control mt-auto"
                                            placeholder="500,000"
                                            value={values.JointOtherIncome}
                                            onChange={handleChange}
                                            id="JointOtherIncome"
                                            maxLength="10"
                                        />
                                    </div>


                                    <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointTaxYES"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Tax Filer
                                            <ToolTip title=" Please indicate the joint applicant’s current tax filing status with FBR. You can check this using this free online resource: https://www.befiler.com/tax-tools/ntn-status Please note that this website is operated by a third-party and not affiliated with Next Capital Limited or Finqalab." />

                                        </label>
                                        <div className="mt-auto">
                                            <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="JointTaxYES"
                                                        name="JointTaxFiler"
                                                        value="YES"
                                                        defaultChecked={values.JointTaxFiler == "YES"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="JointTaxYES" className="py-1 mb-0">
                                                        YES
                                                    </label>
                                                </li>
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="JointTaxNO"
                                                        name="JointTaxFiler"
                                                        value="NO"
                                                        defaultChecked={values.JointTaxFiler == "NO"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="JointTaxNO" className="py-1 mb-0">
                                                        NO
                                                    </label>
                                                </li>
                                            </ul>
                                            {!values?.JointTaxFiler && <RequiredFeild />}
                                        </div>
                                    </div>

                                    {values?.JointTaxFiler === "YES" && <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointNTN"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Tax Number
                                            <ToolTip title="You can check this for the joint applicant using this free online resource: https://www.befiler.com/tax-tools/ntn-status Please note that this website is operated by a third-party and not affiliated with Next Capital Limited or Finqalab. " />

                                        </label>
                                        <input
                                            type="text"
                                            name="JointNTN"
                                            className="form-control mt-auto"
                                            placeholder=""
                                            value={values.JointNTN}
                                            onChange={handleChange}
                                            id="JointNTN"
                                            maxLength="20"
                                            required
                                        />
                                    </div>}

                                    <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="JointPoliticalYES"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Politically Exposed
                                            <ToolTip title="Politically exposed persons” or “PEPs” mean an individual who is or has been entrusted with a prominent public function either domestically or by a foreign country, or in an international organization and includes but not limited to: (i) for foreign PEPs, Heads of State or of government, senior politicians, senior government, judicial or military officials, senior executives of state-owned corporations and political party officials; (ii) for domestic PEPs, Heads of State or of government, senior politicians, senior government, judicial or military officials, senior executives of state-owned corporations, political party officials; (iii) for international organization PEPs, members of senior management or individuals who have been entrusted with equivalent functions. Family member of PEPs also qualify as PEPs themselves and include, (i) a spouse of the PEP: (ii) lineal ascendants and descendants and siblings of the PEP. If the joint applicant meets any of the above criteria, you should mark “YES”. Your application will be subject to enhanced due diligence as per the Securities Exchange Commission of Pakistan’s regulations concerning Anti Money Laundering and Counter Financing of Terrorism." />

                                        </label>
                                        <div className="mt-auto">
                                            <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="JointPoliticalYES"
                                                        name="JointPoliticalExpose"
                                                        value="YES"
                                                        defaultChecked={values.JointPoliticalExpose == "YES"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="JointPoliticalYES" className="py-1 mb-0">
                                                        YES
                                                    </label>
                                                </li>
                                                <li className="w-50">
                                                    <input
                                                        type="radio"
                                                        id="JointPoliticalNO"
                                                        name="JointPoliticalExpose"
                                                        value="NO"
                                                        defaultChecked={values.JointPoliticalExpose == "NO"}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="JointPoliticalNO" className="py-1 mb-0">
                                                        NO
                                                    </label>
                                                </li>
                                            </ul>
                                            {!values?.JointPoliticalExpose && <RequiredFeild />}
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className='mt-40'>
                                            <hr className="t-grey-200 mt-40 mb-40"></hr>
                                        </div>
                                        <div className="d-inline-flex w-100 mailing-address-container mb-3 mt-40">
                                            <h1 className="fs24 ls4 fw-700 tc-plum ">Foreign Account Tax Compliance Act
                                            </h1>
                                        </div>
                                        <div className="row">

                                            <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                                <label
                                                    htmlFor="JointUSYES"
                                                    className="col-12 col-form-label fw-500"
                                                >
                                                    Are you an American Citizen?
                                                </label>
                                                <div className="mt-auto">
                                                    <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                        <li className="w-50">
                                                            <input
                                                                type="radio"
                                                                id="JointUSYES"
                                                                name="JointUSCitizen"
                                                                value="YES"
                                                                defaultChecked={values.JointUSCitizen == "YES"}
                                                                onChange={handleChange}
                                                            />
                                                            <label htmlFor="JointUSYES" className="py-1 mb-0">
                                                                YES
                                                            </label>
                                                        </li>
                                                        <li className="w-50">
                                                            <input
                                                                type="radio"
                                                                id="JointUSNO"
                                                                name="JointUSCitizen"
                                                                value="NO"
                                                                defaultChecked={values.JointUSCitizen == "NO"}
                                                                onChange={handleChange}
                                                            />
                                                            <label htmlFor="JointUSNO" className="py-1 mb-0">
                                                                NO
                                                            </label>
                                                        </li>
                                                    </ul>
                                                    {!values?.JointUSCitizen && <RequiredFeild />}
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                                <label
                                                    htmlFor="JointUSGREENCARDYES"
                                                    className="col-12 col-form-label fw-500"
                                                >
                                                    US Green Card Holder
                                                </label>
                                                <div className="mt-auto">
                                                    <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                        <li className="w-50">
                                                            <input
                                                                type="radio"
                                                                id="JointUSGREENCARDYES"
                                                                name="JointUSGREENCARD"
                                                                value="YES"
                                                                defaultChecked={values.JointUSGREENCARD == "YES"}
                                                                onChange={handleChange}
                                                            />
                                                            <label htmlFor="JointUSGREENCARDYES" className="py-1 mb-0">
                                                                YES
                                                            </label>
                                                        </li>
                                                        <li className="w-50">
                                                            <input
                                                                type="radio"
                                                                id="JointUSGREENCARDNO"
                                                                name="JointUSGREENCARD"
                                                                value="NO"
                                                                defaultChecked={values.JointUSGREENCARD == "NO"}
                                                                onChange={handleChange}
                                                            />
                                                            <label htmlFor="JointUSGREENCARDNO" className="py-1 mb-0">
                                                                NO
                                                            </label>
                                                        </li>
                                                    </ul>
                                                    {!values?.JointUSGREENCARD && <RequiredFeild />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {(values?.JointUSCitizen === 'YES' || values?.JointUSGREENCARD === 'YES') && <>
                                        <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                            <label
                                                htmlFor="JointUSTIN"
                                                className="col-12 col-form-label fw-500"
                                            >
                                                US Tax Identification Number
                                            </label>
                                            <input
                                                type="text"
                                                name="JointUSTIN"
                                                className="form-control mt-auto"
                                                placeholder="Enter Tax Identification Number"
                                                value={values.JointUSTIN}
                                                onChange={handleChange}
                                                id="JointUSTIN"
                                                maxLength="9"
                                                required
                                            />
                                        </div>
                                        {values?.JointUSGREENCARD === 'YES' &&
                                            <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                                <label
                                                    htmlFor="JointUSGREENCARDNum"
                                                    className="col-12 col-form-label fw-500"
                                                >
                                                    US Green Card Numbery
                                                </label>
                                                <input
                                                    type="text"
                                                    name="JointUSGREENCARDNum"
                                                    className="form-control mt-auto"
                                                    placeholder="Enter Green Card Number"
                                                    value={values.JointUSGREENCARDNum}
                                                    onChange={handleChange}
                                                    id="JointUSGREENCARDNum"
                                                    maxLength="13"
                                                    minLength="13"
                                                    required
                                                />
                                            </div>
                                        }
                                        <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                            <label htmlFor="phone" className="col-form-label fw-500">
                                                Overseas Contact Number
                                            </label>
                                            <div className="mt-auto">
                                                <input
                                                    type="text"
                                                    name="JointfrgnNumber"
                                                    className="form-control mt-auto"
                                                    placeholder="+1 000 0000 000"
                                                    value={values.JointfrgnNumber}
                                                    onChange={handleChange}
                                                    id="JointfrgnNumber"
                                                    maxLength="15"
                                                    minLength="11"
                                                    required
                                                />
                                                {/* <ReactPhoneInput
                                                    country={"us"}

                                                    inputExtraProps={{
                                                        name: "JointfrgnNumber",
                                                        required: true,
                                                        autoFocus: true,

                                                    }}

                                                    id="phone"
                                                    countryCodeEditable={false}

                                                    containerclassName=""

                                                    // defaultCountry={"sg"}


                                                    value={values.JointfrgnNumber}
                                                    // value={ 92 + values.JointfrgnNumber.substr(1)}
                                                    onChange={(text) => handleDrctChange("JointfrgnNumber", text)}
                                                    specialLabel={false}

                                                    inputclassName="form-control p10"
                                                />
                                                {values?.JointfrgnNumber.length < 12 && <RequiredFeild />} */}
                                                {/*{!values?.JointfrgnNumber && values.continues ? <span id="MailCountry" className="text-danger fs10" >Please provide JointfrgnNumber</span> : ""} */}
                                            </div>
                                        </div>
                                        <div className="col-12  d-flex flex-column mb-3">
                                            <label
                                                htmlFor="JointOverseasAddress"
                                                className="col-12 col-form-label fw-500"
                                            >
                                                Overseas Address
                                            </label>
                                            <input
                                                type="text"
                                                name="JointOverseasAddress"
                                                className="form-control mt-auto"
                                                placeholder="Enter your overseas address"
                                                value={values.JointOverseasAddress}
                                                onChange={handleChange}
                                                id="JointOverseasAddress"
                                                required
                                            />
                                        </div>


                                        <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                            <label
                                                htmlFor="JointPWRYES"
                                                className="col-12 col-form-label fw-500"
                                            >
                                                Have you Given Any Power of Attorney
                                            </label>
                                            <div className="mt-auto">
                                                <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                    <li className="w-50">
                                                        <input
                                                            type="radio"
                                                            id="JointPWRYES"
                                                            name="JointPWRAttorney"
                                                            value="YES"
                                                            defaultChecked={values.JointPWRAttorney == "YES"}
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="JointPWRYES" className="py-1 mb-0">
                                                            YES
                                                        </label>
                                                    </li>
                                                    <li className="w-50">
                                                        <input
                                                            type="radio"
                                                            id="JointPWRNO"
                                                            name="JointPWRAttorney"
                                                            value="NO"
                                                            defaultChecked={values.JointPWRAttorney == "NO"}
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="JointPWRNO" className="py-1 mb-0">
                                                            NO
                                                        </label>
                                                    </li>
                                                </ul>
                                                {!values?.JointPWRAttorney && <RequiredFeild />}
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                            <label
                                                htmlFor="JointRenouncedYES"
                                                className="col-12 col-form-label fw-500"
                                            >
                                                Have you Renounced Foreign Citizenship
                                            </label>
                                            <div className="mt-auto">
                                                <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                    <li className="w-50">
                                                        <input
                                                            type="radio"
                                                            id="JointRenouncedYES"
                                                            name="JointRenouncedCitizenchip"
                                                            value="YES"
                                                            defaultChecked={values.JointRenouncedCitizenchip == "YES"}
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="JointRenouncedYES" className="py-1 mb-0">
                                                            YES
                                                        </label>
                                                    </li>
                                                    <li className="w-50">
                                                        <input
                                                            type="radio"
                                                            id="JointRenouncedNO"
                                                            name="JointRenouncedCitizenchip"
                                                            value="NO"
                                                            defaultChecked={values.JointRenouncedCitizenchip == "NO"}
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="JointRenouncedNO" className="py-1 mb-0">
                                                            NO
                                                        </label>
                                                    </li>
                                                </ul>
                                                {!values?.JointRenouncedCitizenchip && <RequiredFeild />}
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                            <label
                                                htmlFor="JointTaxformYES"
                                                className="col-12 col-form-label fw-500"
                                            >
                                                W8BEN / W9USA Tax forms submitted
                                            </label>
                                            <div className="mt-auto">
                                                <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                                    <li className="w-50">
                                                        <input
                                                            type="radio"
                                                            id="JointTaxformYES"
                                                            name="JointTaxformSubmit"
                                                            value="YES"
                                                            defaultChecked={values.JointTaxformSubmit == "YES"}
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="JointTaxformYES" className="py-1 mb-0">
                                                            YES
                                                        </label>
                                                    </li>
                                                    <li className="w-50">
                                                        <input
                                                            type="radio"
                                                            id="JointTaxformNO"
                                                            name="JointTaxformSubmit"
                                                            value="NO"
                                                            defaultChecked={values.JointTaxformSubmit == "NO"}
                                                            onChange={handleChange}
                                                        />
                                                        <label htmlFor="JointTaxformNO" className="py-1 mb-0">
                                                            NO
                                                        </label>
                                                    </li>
                                                </ul>
                                                {!values?.JointTaxformSubmit && <RequiredFeild />}
                                            </div>
                                        </div>

                                        {values?.JointPWRAttorney === "YES" && <div className="col-12 col-lg-8 d-flex flex-column mb-3">
                                            <label
                                                htmlFor="JointAttorneyAddress"
                                                className="col-12 col-form-label fw-500"
                                            >
                                                Attorney Address
                                            </label>
                                            <input
                                                type="text"
                                                name="JointAttorneyAddress"
                                                className="form-control mt-auto"
                                                placeholder="Enter Attorney’s Address"
                                                value={values.JointAttorneyAddress}
                                                onChange={handleChange}
                                                id="JointAttorneyAddress"
                                                required
                                            />
                                        </div>}
                                        {values?.JointTaxformSubmit === 'YES' &&

                                            <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                                <label
                                                    htmlFor="JointformSubmitDate"
                                                    className="col-form-label fw-500"
                                                >
                                                    Date of Submission
                                                </label>
                                                <div className="mt-auto">
                                                    <DatePicker
                                                        className="form-control"
                                                        onChange={(date, dateString) => { handleDrctChange('JointformSubmitDate', dateString) }}
                                                        format="DD-MM-YYYY"
                                                        defaultValue={values?.JointformSubmitDate ? moment(values?.JointformSubmitDate, "DD-MM-YYYY") : undefined} />
                                                    {!values?.JointformSubmitDate && <RequiredFeild />}
                                                </div>
                                            </div>
                                        }
                                    </>}


                                </div>

                                <hr />
                                <BottomNavigation first="Save & Exit" second="Next" Nextdisabled={false} prevStep={prevStep} Loading={Loading} SaveLoading={SaveLoading} handleSubmit={handleSubmit} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JointApplication;
