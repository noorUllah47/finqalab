import { Select, DatePicker } from 'antd';
import moment from "moment";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import RequiredFeild from '../../Atoms/RequiredFeild';
import ToolTip from '../../Atoms/Tooltip';



const { Option } = Select;

const ForiegnAccount = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {

    const format = (date) => {
        return moment(date, "DD-MM-YYYY")
    }


    return (

        <div className="row mt-40">
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                        <label
                            htmlFor="USYES"
                            className="col-12 col-form-label fw-500"
                        >
                            Are you an American Citizen?
                        </label>
                        <div className="mt-auto">
                            <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                <li className="w-50">
                                    <input
                                        type="radio"
                                        id="USYES"
                                        name="USCitizen"
                                        value="YES"
                                        defaultChecked={values.USCitizen == "YES"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="USYES" className="py-1 mb-0">
                                        YES
                                    </label>
                                </li>
                                <li className="w-50">
                                    <input
                                        type="radio"
                                        id="USNO"
                                        name="USCitizen"
                                        value="NO"
                                        defaultChecked={values.USCitizen == "NO"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="USNO" className="py-1 mb-0">
                                        NO
                                    </label>
                                </li>
                            </ul>
                            {!values?.USCitizen && <RequiredFeild />}
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                        <label
                            htmlFor="USGREENCARDYES"
                            className="col-12 col-form-label fw-500"
                        >
                            US Green Card Holder
                        </label>
                        <div className="mt-auto">
                            <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">

                                <li className="w-50">
                                    <input
                                        type="radio"
                                        id="USGREENCARDYES"
                                        name="USGREENCARD"
                                        value="YES"
                                        defaultChecked={values.USGREENCARD == "YES"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="USGREENCARDYES" className="py-1 mb-0">
                                        YES
                                    </label>
                                </li>
                                <li className="w-50">
                                    <input
                                        type="radio"
                                        id="USGREENCARDNO"
                                        name="USGREENCARD"
                                        value="NO"
                                        defaultChecked={values.USGREENCARD == "NO"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="USGREENCARDNO" className="py-1 mb-0">
                                        NO
                                    </label>
                                </li>
                                {/* <li className="w-50">
                            <input
                                type="radio"
                                id="USGREENCARDYES"
                                name="USGREENCARD"
                                value="YES"
                                defaultChecked={values.USGREENCARD == "YES" }
                                onChange={handleChange}
                            />
                            <label htmlFor="USGREENCARDYES" className="py-1 mb-0">
                                YES
                            </label>
                        </li>
                        <li className="w-50">
                            <input
                                type="radio"
                                id="USGREENCARDNO"
                                name="USGREENCARD"
                                value="NO"
                                defaultChecked={values.USGREENCARD == "NO" }
                                onChange={handleChange}
                            />
                            <label htmlFor="USGREENCARDNO" className="py-1 mb-0">
                                NO
                            </label>
                        </li> */}
                            </ul>
                            {!values?.USGREENCARD && <RequiredFeild />}
                        </div>
                    </div>
                </div>
            </div>
            {(values?.USCitizen === 'YES' || values?.USGREENCARD === 'YES') && <>
                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                        htmlFor="USTIN"
                        className="col-12 col-form-label fw-500"
                    >
                        US Tax Identification Number
                        <ToolTip title="Please input your SSN, EIN, or ITIN" />
                    </label>
                    <input
                        type="text"
                        name="USTIN"
                        className="form-control mt-auto"
                        placeholder="Enter Tax Identification Number"
                        value={values.USTIN}
                        onChange={handleChange}
                        id="USTIN"
                        minLength="9"
                        maxLength="9"
                        required
                    />
                </div>
                {values?.USGREENCARD === 'YES' &&
                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                        <label
                            htmlFor="USGREENCARDNum"
                            className="col-12 col-form-label fw-500"
                        >
                            US Green Card Number
                        </label>
                        <input
                            type="text"
                            name="USGREENCARDNum"
                            className="form-control mt-auto"
                            placeholder="Enter Green Card Number"
                            value={values.USGREENCARDNum}
                            onChange={handleChange}
                            id="USGREENCARDNum"
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
                            name="frgnNumber"
                            className="form-control mt-auto"
                            placeholder="+1 000 0000 000"
                            value={values.frgnNumber}
                            onChange={handleChange}
                            id="frgnNumber"
                            maxLength="15"
                            minLength="11"
                            required
                        />
                        {/* <ReactPhoneInput
                            country={"us"}

                            inputExtraProps={{
                                name: "frgnNumber",
                                required: true,
                                autoFocus: true,

                            }}

                            id="phone"
                            countryCodeEditable={false}

                            containerclassName=""

                            // defaultCountry={"sg"}


                            value={values.frgnNumber}
                            // value={ 92 + values.frgnNumber.substr(1)}
                            onChange={(text) => handleDrctChange("frgnNumber", text)}
                            specialLabel={false}

                            inputclassName="form-control p10"
                        />
                        {values.frgnNumber.length < 12 && <RequiredFeild />} */}
                        {/* {!values?.frgnNumber && values.continues ? <span id="MailCountry" className="text-danger fs10" >Please provide frgnNumber</span> : ""} */}
                    </div>
                </div>

                <div className="col-12 d-flex flex-column mb-3">
                    <label
                        htmlFor="OverseasAddress"
                        className="col-12 col-form-label fw-500"
                    >
                        Overseas Address
                    </label>
                    <input
                        type="text"
                        name="OverseasAddress"
                        className="form-control mt-auto"
                        placeholder="Enter your overseas address"
                        value={values.OverseasAddress}
                        onChange={handleChange}
                        id="OverseasAddress"
                        required
                    />
                </div>


                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                    <label
                        htmlFor="PWRYES"
                        className="col-12 col-form-label fw-500"
                    >
                        Have you Given Any Power of Attorney
                    </label>
                    <div className="mt-auto">
                        <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                            <li className="w-50">
                                <input
                                    type="radio"
                                    id="PWRYES"
                                    name="PWRAttorney"
                                    value="YES"
                                    defaultChecked={values.PWRAttorney == "YES"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="PWRYES" className="py-1 mb-0">
                                    YES
                                </label>
                            </li>
                            <li className="w-50">
                                <input
                                    type="radio"
                                    id="PWRNO"
                                    name="PWRAttorney"
                                    value="NO"
                                    defaultChecked={values.PWRAttorney == "NO"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="PWRNO" className="py-1 mb-0">
                                    NO
                                </label>
                            </li>
                        </ul>
                        {!values?.PWRAttorney && <RequiredFeild />}
                    </div>
                </div>


                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                    <label
                        htmlFor="renouncedYES"
                        className="col-12 col-form-label fw-500"
                    >
                        Have you Renounced Foreign Citizenship
                    </label>
                    <div className="mt-auto">
                        <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                            <li className="w-50">
                                <input
                                    type="radio"
                                    id="renouncedYES"
                                    name="renouncedCitizenchip"
                                    value="YES"
                                    defaultChecked={values.renouncedCitizenchip == "YES"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="renouncedYES" className="py-1 mb-0">
                                    YES
                                </label>
                            </li>
                            <li className="w-50">
                                <input
                                    type="radio"
                                    id="renouncedNO"
                                    name="renouncedCitizenchip"
                                    value="NO"
                                    defaultChecked={values.renouncedCitizenchip == "NO"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="renouncedNO" className="py-1 mb-0">
                                    NO
                                </label>
                            </li>
                        </ul>
                        {!values?.renouncedCitizenchip && <RequiredFeild />}
                    </div>
                </div>

                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                    <label
                        htmlFor="taxformYES"
                        className="col-12 col-form-label fw-500"
                    >
                        W8BEN / W9USA Tax forms submitted
                    </label>
                    <div className="mt-auto">
                        <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                            <li className="w-50">
                                <input
                                    type="radio"
                                    id="taxformYES"
                                    name="taxformSubmit"
                                    value="YES"
                                    defaultChecked={values.taxformSubmit == "YES"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="taxformYES" className="py-1 mb-0">
                                    YES
                                </label>
                            </li>
                            <li className="w-50">
                                <input
                                    type="radio"
                                    id="taxformNO"
                                    name="taxformSubmit"
                                    value="NO"
                                    defaultChecked={values.taxformSubmit == "NO"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="taxformNO" className="py-1 mb-0">
                                    NO
                                </label>
                            </li>
                        </ul>
                        {!values?.taxformSubmit && <RequiredFeild />}
                    </div>
                </div>

                {values?.PWRAttorney === "YES" && <div className="col-12 col-lg-8 d-flex flex-column mb-3">
                    <label
                        htmlFor="AttorneyAddress"
                        className="col-12 col-form-label fw-500"
                    >
                        Attorney Address
                    </label>
                    <input
                        type="text"
                        name="AttorneyAddress"
                        className="form-control mt-auto"
                        placeholder="Enter Attorney’s Address"
                        value={values.AttorneyAddress}
                        onChange={handleChange}
                        id="AttorneyAddress"
                        required
                    />
                </div>}

                {values?.taxformSubmit === 'YES' &&
                    <>
                        <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                            <label
                                htmlFor="formSubmitDate"
                                className="col-form-label fw-500"
                            >
                                Date of Submission
                            </label>
                            <DatePicker
                                className="form-control"
                                onChange={(date, dateString) => { handleDrctChange('formSubmitDate', dateString) }}
                                format="DD-MM-YYYY"
                                defaultValue={values?.formSubmitDate ? format(values?.formSubmitDate) : undefined} />
                        </div>
                        {!values?.formSubmitDate && <RequiredFeild />}
                    </>
                }
            </>}
        </div>

    );
};

export default ForiegnAccount;
