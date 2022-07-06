import React, { useState, useEffect } from "react";
import Select1 from "react-select";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Select } from "antd";
import countriesStateCities from "../../../Assets/Data/countries_states_cities.json";
import { DatePicker } from "antd";
import moment from "moment";
import RequiredFeild from "../../Atoms/RequiredFeild";
import UpperNavigation from "../../Atoms/UpperNavigation";
import BottomNavigation from "../../Atoms/BottomNavigation";
import PostData from "../../../API/PostData";
import ScrollToTop from "../../Atoms/ScrollToTop";
import ToolTip from "../../Atoms/Tooltip";
import GetData from "../../../API/GetData";

const { Option, OptGroup } = Select;
const PersonalDetails = ({
  handleDrctChange,
  prevStep,
  nextStep,
  handleChange,
  values,
}) => {
  const customStyle = {
    control: (base, state) => ({
      ...base,
      "&:hover": { borderColor: "#E5E7EB" }, // border style on hover
      border: "1px solid #E5E7EB", // default border color
      height: "47px",
      borderRadius: "0.5rem ",
      boxShadow: "none", // no box-shadow
    }),
  };

  const hanldeResendentialCountries = (e) => {
    hanldeResidentailProvincesAndCities("");
    handleDrctChange("City", "");
    handleDrctChange("country", e);
    handleDrctChange("residentiaProvinceList", e.states);
  };

  const hanldeResidentailProvincesAndCities = (e) => {
    handleDrctChange("Provinces", e);
    handleDrctChange("residentialCitiesList", e.cities);

    handleDrctChange("City", "");
  };

  const hanldeMailCountries = (e) => {
    console.log("first----------------", e);

    handleDrctChange("mailProvinceList", e.states);
    handleDrctChange("mailCountry", e);
    hanldeMailProvincesAndCities("");
    handleDrctChange("MailCity", "");
  };

  const hanldeMailProvincesAndCities = (e) => {
    console.log("first----------------", e);
    handleDrctChange("MailProvinces", e);
    handleDrctChange("mailCitiesList", e?.cities);
    handleDrctChange("MailCity", "");
    // setMailCity(e.cities)
  };

  const Months = [
    { value: "January", label: "January" },
    { value: "Febuary", label: "Febuary" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  const IncomeSources = [
    { value: "P001", label: "Salaried" },
    { value: "P002", label: "Business" },
    { value: "P003", label: "Inheritance" },
    { value: "P005", label: "Gift" },
    { value: "P006", label: "Retired" },
    { value: "P007", label: "Other" },
  ];
  // var signedEmail = JSON.parse(localStorage.getItem("user")).email;

  const Residents = [
    { value: "Resident", label: "Resident" },
    { value: "Non-Resident", label: "Non-Resident" },
  ];

  const IDTypes = [
    { value: "CNIC", label: "CNIC" },
    { value: "SNIC", label: "SNIC" },
    { value: "Passport", label: "Passport" },
    { value: "NICOP", label: "NICOP" },
    { value: "POC", label: "POC" },
    { value: "ARC", label: "ARC" },
  ];

  const format = (date) => {
    return moment(date, "DD-MM-YYYY");
  };

  const [Loading, setLoading] = useState(false);
  const [cities, setCities] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    let impData = {
      uid: values.uid,
      AccountType: values?.AccountType === 'Joint' ? 'Joint' : 'Single',
      CustomerType: values?.AccountType,
  };
    let postData = {
      firstName: values?.firstName,
      lastName: values?.lastName || ' ',
      RelativeName: values?.RelativeName,
      email: values?.email,
      phoneNumber: values?.phoneNumber,
      BirthDay: values?.BirthDay,
      BirthCountry: 'Pakistan',
      BirthCity:'Lahore',
      Resident: values?.Resident?.children,
      Nationality: values?.Nationality.label,
      otherNationality: " ",
      IDType: values?.IDType,
      CNIC: values?.CNIC,
      IssueDate: values?.IssueDate,
      ExpiryDate: values?.ExpiryDate,
      lifeTimeExpiry: values?.lifeTimeExpiry,
      Gender: values?.Gender,
      Street: values?.Street,
      Country: values?.country?.label,
      Provinces: values?.Provinces?.label,
      City: values?.City?.label,
      MailingAddress: values?.MailingAddress,
      MailStreet: values?.MailingAddress ? values?.Street : values?.MailStreet,
      MailCountry: values?.MailingAddress ? values?.country?.label : values?.mailCountry?.label,
      MailProvinces: values?.MailingAddress ? values?.Provinces?.label : values?.MailProvinces?.label,
      MailCity: values?.MailingAddress ? values?.City?.label : values?.MailCity?.label,
      BussType: values?.BussType?.children,
      IncomeSource: values?.IncomeSource?.children,
      CompName: values?.CompName,
      AnnualIncome: values?.AnnualIncome,
      OtherIncome: values?.OtherIncome,
      TaxFiler: values?.TaxFiler,
      NTN: values?.NTN,
      PoliticalExpose: values?.PoliticalExpose,
      BankTitle: values?.BankTitle,
      BankNum: values?.BankNum,
      // BankBranch: values?.BankBranch,
      BankAddress: values?.BankAddress,
      USCitizen: values?.USCitizen,
      GCard: values?.USGREENCARD,
      USTIN: values?.USCitizen == 'YES' || values?.USGREENCARD == 'YES' ? values?.USTIN : '',
      USGREENCARD: values?.USGREENCARD == 'YES' ? values?.USGREENCARDNum : '',
      OverseasAddress: values?.USCitizen == 'YES' || values?.USGREENCARD == 'YES' ? values?.OverseasAddress : '',
      frgnNumber: values?.USCitizen == 'YES' || values?.USGREENCARD == 'YES' ? values?.frgnNumber : '',
      PWRAttorney: values?.USCitizen == 'YES' || values?.USGREENCARD == 'YES' ? values?.PWRAttorney : '',
      AttorneyAddress: values?.USCitizen == 'YES' || values?.USGREENCARD == 'YES' ? values?.AttorneyAddress : '',
      renouncedCitizenchip: values?.USCitizen == 'YES' || values?.USGREENCARD == 'YES' ? values?.renouncedCitizenchip : '',
      taxformSubmit: values?.USCitizen == 'YES' || values?.USGREENCARD == 'YES' ? values?.taxformSubmit : '',
      formSubmitDate: (values?.USCitizen == 'YES' || values?.USGREENCARD == 'YES') && values.taxformSubmit == 'YES' ? values?.formSubmitDate : '',
      JointAccountTitle: values?.JointAccountTitle,
      JointLastName: values?.JointLastName || ' ',
      JointRelativeName: values?.JointRelativeName,
      Jointemail: values?.Jointemail,
      JointPhoneNumber: values?.JointPhoneNumber,
      JointNumber: values?.JointNumber, //to be added ==>Added
      JointFaxNumber: '', //to be added ==>Added
      Jointstreet: values?.Jointstreet,
      Jointcountry: values?.Jointcountry?.label,
      JointProvinces: values?.JointProvinces?.label,
      JointCity: values?.JointCity?.label,
      JointMailingAddress: values?.JointMailingAddress,
      JointMailstreet: values?.JointMailingAddress ? values?.Jointstreet : values?.JointMailstreet,
      JointmailCountry: values?.JointMailingAddress ? values?.JointCountry?.label : values?.JointmailCountry?.label,
      JointMailProvinces: values?.JointMailingAddress ? values?.JointProvinces?.label : values?.JointMailProvinces?.label,
      JointMailCity: values?.JointMailingAddress ? values?.JointCity?.label : values?.JointMailCity?.label,
      JointBirthDay: values?.JointBirthDay,
      JointBirthCountry: values?.JointBirthCountry, //to be added ==>Added
      JointBirthCity: values?.JointBirthCity, //to be added ==>Added
      JointNationality: values?.JointNationality?.label,
      JointotherNationality: " ",
      JointResident: values?.JointResident?.children, //to be added ==>Added
      JointCNIC: values?.JointCNIC,
      JointIDType: values?.JointIDType,
      JointIssueDate: values?.JointIssueDate,
      JointExpiryDate: values?.JointExpiryDate,
      JointlifeTimeExpiry: values?.JointlifeTimeExpiry,
      JointGender: values?.JointGender,
      JointProfession: values?.JointProfession?.children,
      JointIncomeSource: values?.JointIncomeSource?.children,
      JointCompName: values?.JointCompName,
      JointAnnualIncome: values?.JointAnnualIncome,
      JointOtherIncome: values?.JointOtherIncome,
      JointTaxFiler: values?.JointTaxFiler,
      JointNTN: values?.JointNTN,
      JointPoliticalExpose: values?.JointPoliticalExpose,
      JointUSCitizen: values?.JointUSCitizen,
      JointGCard: values?.JointUSGREENCARD,
      JointUSTIN: values?.JointUSTIN,
      JointUSGREENCARD: values?.JointUSGREENCARDNum,
      JointOverseasAddress: values?.JointOverseasAddress,
      JointfrgnNumber: values?.JointfrgnNumber,
      JointPWRAttorney: values?.JointPWRAttorney,
      JointAttorneyAddress: values?.JointAttorneyAddress,
      JointRenouncedCitizenchip: values?.JointRenouncedCitizenchip,
      JointTaxformSubmit: values?.JointTaxformSubmit,
      JointformSubmitDate: values?.JointformSubmitDate,
      KinName: values?.KinName,
      KinFthrName: values?.KinFthrName,
      KinIDType: values?.KinIDType,
      KinCNIC: values?.KinCNIC,
      KinRelation: values?.KinRelation,
      KinMailstreet: values?.KinMailstreet,
      KinMailCountry: values?.KinMailCountry?.label || "",
      KinMailProvinces: values?.KinMailProvinces?.label || "",
      KinMailCity: values?.KinMailCity?.label || "",
      KinNumber: values?.KinNumber,    //KinNumber to be Added ==>Added
      KinPhoneNumber: values?.KinPhoneNumber,
      KinFax: '',
      KinEmail: values?.KinEmail,
      AccountOperatingInstruction: values?.AccountOperatingInstruction.children,   //feild to be Added ==>Added
      AccountOperatingInstructionOtherDetails: values?.AccountOperatingInstructionOtherDetails,   //feild to be Added ==> Added
      // ZakatExemption: values?.ZakatExemption,
      // ReasonZakat: values?.ReasonZakat?.children,
      // otherZakatReason: values?.otherZakatReason,
      TaxExemption: values?.TaxExemption,
      // TransactionMode: values?.TransactionMode,
      Minnorrelation: values?.Minnorrelation,
      MinnorRelationDetails: values?.MinnorRelationDetails,
      signature: values?.Signatures,
      retirementAgreement: (values?.IncomeSource.children == 'Gift' || values?.IncomeSource.children == 'Inheritance') ? false : values?.retirementAccepted,
      giftAgreement: values?.IncomeSource.children == 'Retired' ? false : values?.giftAccepted,
      tradingAgreement: values?.undertakingAccepted,
      tripartiteAgreement: values?.aggrementtermsandConditions,
      uid: values.uid,
      AccountType: values?.AccountType === 'Joint' ? 'Joint' : 'Single',
      CustomerType: values?.AccountType,
      // status: type,

  }
  let continueData

      continueData = Object.keys(postData).slice(0, 26).reduce((result, key) => {
          result[key] = postData[key];

          return result;
      }, {});
      console.log({ continueData})

  Object.filter = (obj, predicate) =>
      Object.keys(obj)
          .filter(key => predicate(obj[key]))
          .reduce((res, key) => (res[key] = obj[key], res), {});

  // Example use:
  var filtered = Object.filter(continueData, each => each !== undefined);
  var nullfiltered = Object.filter(filtered, each => each !== null);
  // console.log(altrafiltered);

  console.log({ ...nullfiltered, ...impData })

    setLoading(true);
    const FormSubmit = PostData.SubmitForm(values, onSuccess, "continue");
    FormSubmit.then((value) => {
      console.log({ value });
      setLoading(false);
    });
  };
  const onSuccess = () => {
    nextStep();
  };
  const handleCoountryOfBirth = (e) => {
    console.log("countries-=------------>", e);
    handleDrctChange("BirthCountry", e);

    const response = GetData.cityByCountries(e.iso2);
    response.then((value) => {
      setCities(value);
      console.log("response---------------->", value);
    });
  };
  console.log("citiessss---------------->", cities);

  return (
    <>
      <ScrollToTop />
      <div className="container-fluid pb-3">
        <div className="container">
          <div className="mt-3">
            <div className="">
              <UpperNavigation
                Title="Personal Details"
                prevSec="Account Selection"
                prevStep={prevStep}
              />
              <form className="mt-40" onSubmit={handleSubmit}>
                <div className="row mb-5">
                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label
                      htmlFor="first Name"
                      className="col-12 col-form-label fw-500"
                    >
                      First Name
                      <ToolTip title="Please input your name EXACTLY as it appears on your CNIC, SNIC, NICOP, POC, ARC or Passport" />
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control mt-auto"
                      placeholder="First Name"
                      value={values?.firstName}
                      onChange={handleChange}
                      id="first Name"
                      required={true}
                      title="Only Alphabets are allowed"
                    />
                    {/* {!values.firstName && values.continues ? <span className="text-danger fs10"  >Please provide first name</span> : ""} */}
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label
                      htmlFor="first Name"
                      className="col-12 col-form-label fw-500"
                    >
                      Last Name
                      <ToolTip title="Please input your name EXACTLY as it appears on your CNIC, SNIC, NICOP, POC, ARC or Passport" />
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control mt-auto"
                      placeholder="Last Name"
                      value={values?.lastName}
                      onChange={handleChange}
                      id="first Name"
                      // required={true}
                      title="Only Alphabets are allowed"
                    />
                    {/* {!values.lastName && values.continues ? <span className="text-danger fs10"  >Please provide first name</span> : ""} */}
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label htmlFor="email" className="col-form-label fw-500">
                      Email Address
                      {/* <ToolTip title="This is a mandatory field and must include your primary e-mail address. Please use a personal e-mail address and not one associated  with work as you will be receiving your statements and other important communications from NCCPL and Next Capital Limited on this address" /> */}
                    </label>
                    <div className="col-12 mt-auto">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="some@domain.com"
                        onChange={handleChange}
                        value={values.email}
                        id="email"
                        readOnly={true}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label htmlFor="phone" className="col-form-label fw-500">
                      Phone Number
                      <ToolTip title="This is a mandatory field and must include your primary mobile phone number" />
                    </label>
                    <div className="mt-auto">
                      <ReactPhoneInput
                        country={"pk"}
                        id="phone"
                        countryCodeEditable={false}
                        containerclassName=""
                        value={values.phoneNumber}
                        // value={ 92 + values.phoneNumber.substr(1)}
                        onChange={(text) =>
                          handleDrctChange("phoneNumber", text)
                        }
                        specialLabel={false}
                        inputclassName="form-control p10"
                      />
                      {values.phoneNumber.length < 12 && <RequiredFeild />}
                      {/* {!values?.phoneNumber && values.continues ? <span id="MailCountry" className="text-danger fs10" >Please provide Number</span> : ""} */}
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="BirthDay"
                      className="col-12 col-form-label fw-500"
                    >
                      Date of Birth
                      <ToolTip title="Please input the Date of Birth EXACTLY as it appears on your CNIC, SNIC, NICOP, POC, ARC or Passport" />
                    </label>
                    <div className="mt-auto">
                      <DatePicker
                        className="form-control"
                        onChange={(date, dateString) => {
                          handleDrctChange("BirthDay", dateString);
                        }}
                        defaultPickerValue={moment(
                          new Date().setFullYear(new Date().getFullYear() - 18)
                        )}
                        format="DD-MM-YYYY"
                        showToday={false}
                        disabledDate={(d) =>
                          !d ||
                          d.isAfter(
                            moment(
                              new Date().setFullYear(
                                new Date().getFullYear() - 18
                              )
                            )
                          )
                        }
                        value={
                          values?.BirthDay
                            ? format(values?.BirthDay)
                            : undefined
                        }
                        defaultValue={
                          values?.BirthDay
                            ? format(values?.BirthDay)
                            : undefined
                        }
                      />
                      {values.BirthDay === "" && <RequiredFeild />}
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label
                      htmlFor="BirthCountry"
                      className="col-form-label fw-500"
                    >
                      Country of Birth
                      <ToolTip title="Please input your Country of Birth EXACTLY as it appears on your CNIC, SNIC, NICOP, POC, ARC or Passport" />
                    </label>
                    <Select1
                      styles={customStyle}
                      onChange={(e) => handleCoountryOfBirth(e)}
                      placeholder="Select any one"
                      id="Nationality"
                      options={countriesStateCities}
                      defaultInputValue={
                        values?.BirthCountry ? values?.BirthCountry : undefined
                      }
                      defaultValue={
                        values?.BirthCountry ? values?.BirthCountry : undefined
                      }
                      value={values?.BirthCountry}
                    />
                    {!values.BirthCountry && <RequiredFeild />}
                    {/* <input
                      type="text"
                      name="BirthCountry"
                      className="form-control mt-auto"
                      placeholder="Pakistan"
                      onChange={handleChange}
                      value={values.BirthCountry}
                      id="BirthCountry"
                      required={true}
                    /> */}
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label
                      htmlFor="BirthCity"
                      className="col-form-label fw-500"
                    >
                      City of Birth
                      <ToolTip title="Please input your City of Birth EXACTLY as it appears on your CNIC, SNIC, NICOP, POC, ARC or Passport" />
                    </label>
                    {/* <Select1
                        styles={customStyle}
                        onChange={(e) => handleDrctChange("BirthCity", e)}
                        placeholder="Select any one"
                        id="Nationality"
                        options={cities.data}
                        defaultInputValue={values?.BirthCity?.name ? values?.BirthCity?.name : undefined}
                        defaultValue={values?.BirthCity?.name ? values?.BirthCity?.name : undefined}
                        value={values?.BirthCity}

                      /> */}
                    <div className="mt-auto">
                      <Select
                        showSearch
                        filterOption={(input, option) =>
                          // console.log(option,input)
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                        defaultValue={
                          values.BirthCity?.children
                            ? values.BirthCity?.children
                            : undefined
                        }
                        value={values?.BirthCity?.children}
                        placeholder="Select any one"
                        onSelect={(value, event) =>
                          handleDrctChange("BirthCity", event)
                        }
                        rules={[{ required: true }]}
                      >
                        {cities?.data?.map((cities) => (
                          <Option key={cities.id}>{cities.name}</Option>
                        ))}
                      </Select>
                      {!values.BirthCity?.value && <RequiredFeild />}
                    </div>

                    {/* {!values.Street ? <span id="area" className="text-danger fs10" style={{ display: "none" }} >Please fill Street</span> : ""} */}
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="Nationality"
                      className="col-form-label fw-500"
                    >
                      Nationality
                      <ToolTip title="Please input the country name, e.g., “Pakistan”, not “Pakistani.”" />
                    </label>
                    <div className="mt-auto">
                      <Select1
                        styles={customStyle}
                        onChange={(e) => handleDrctChange("Nationality", e)}
                        placeholder="Select any one"
                        id="Nationality"
                        options={countriesStateCities}
                        defaultInputValue={
                          values?.Nationality?.label
                            ? values?.Nationality?.label
                            : undefined
                        }
                        defaultValue={
                          values?.Nationality?.label
                            ? values?.Nationality?.label
                            : undefined
                        }
                        value={values?.Nationality}
                      />

                      {!values.Nationality?.label && <RequiredFeild />}
                    </div>
                    {/* {!values.Nationality?.value ? <span id="Nationality" className="text-danger fs10" style={{ display: "none" }} >Please select Nationality</span> : ""} */}
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label htmlFor="Resident" className="col-form-label fw-500">
                      Resident
                      <ToolTip title="Please select yes or no based on the type of Pakistan ID card you have (CNIC, SNIC, NICOP, POC, or ARC)" />
                    </label>
                    <div className="mt-auto">
                      <Select
                        defaultValue={
                          values.Resident?.children
                            ? values.Resident?.children
                            : undefined
                        }
                        value={values?.Resident?.children}
                        placeholder="Select any one"
                        onSelect={(value, event) =>
                          handleDrctChange("Resident", event)
                        }
                        rules={[{ required: true }]}
                      >
                        {Residents.map((residents) => (
                          <Option key={residents.value}>
                            {residents.label}
                          </Option>
                        ))}
                      </Select>
                      {!values.Resident?.value && <RequiredFeild />}
                    </div>
                    {/* {!values.Resident ? <span id="Resident" className="text-danger fs10" style={{ display: "none" }} >Please select Resident</span> : ""} */}
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="IDType"
                      className="col-12 col-form-label fw-500"
                    >
                      ID Type
                      <ToolTip title="Please select either CNIC, SNIC, NICOP, POC, ARC or Passport" />
                    </label>

                    <>
                      <div className="mt-auto">
                        <Select
                          defaultValue={
                            values?.IDType ? values?.IDType : undefined
                          }
                          placeholder="ID Type"
                          onSelect={(value, event) =>
                            handleDrctChange("IDType", event.value)
                          }
                          rules={[{ required: true }]}
                        >
                          {IDTypes.map((idType) => (
                            <Option key={idType?.value}>{idType?.label}</Option>
                          ))}
                        </Select>
                      </div>
                      {values.IDType == "" && <RequiredFeild />}
                      {/* {!values.IDType && values.continues ? <span id="IDType" className="text-danger fs10" >Please Select IDType</span> : ""} */}
                    </>
                  </div>

                  <div className="col-12 mb-3 col-sm-6 col-lg-4 d-flex flex-column">
                    <label
                      htmlFor="CNIC"
                      className="col-12 col-form-label fw-500"
                    >
                      Identity Document Number
                      <ToolTip title=" Please input the number on your CNIC, SNIC, NICOP, POC, ARC or Passport" />
                    </label>

                    <input
                      type="text"
                      name="CNIC"
                      className="form-control mt-auto"
                      placeholder="44444-2223334-7"
                      value={values.CNIC}
                      onChange={handleChange}
                      id="CNIC"
                      minLength={values.IDType == "Passport" ? "0" : "13"}
                      maxLength={values.IDType == "Passport" ? "30" : "13"}
                      required
                    />
                    {/* {values.CNIC == "" && <RequiredFeild />}
                  {!values.CNIC && values.continues ? <span id="IDType" className="text-danger fs10" >Please fill CNIC</span> : ""} */}
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="RelativeName"
                      className="col-form-label fw-500"
                    >
                      Father's or Husband's Full Name
                      <ToolTip title="Please input the name EXACTLY as it appears on your CNIC, SNIC, NICOP, POC, ARC or Passport" />
                    </label>
                    <input
                      type="text"
                      name="RelativeName"
                      className="form-control mt-auto"
                      placeholder="Relative Name"
                      onChange={handleChange}
                      value={values?.RelativeName}
                      id="RelativeName"
                      required={true}
                    />
                    {/* {!values.RelativeName ? <span id="relativename" className="text-danger fs10" style={{ display: "none" }} >Realitive Name Required</span> : ""} */}
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="issueDay"
                      className="col-12 col-form-label fw-500"
                    >
                      Issue Date (e.g. 28-02-1995)
                      <ToolTip title="Please input your issue date EXACTLY as it appears on your CNIC, SNIC, NICOP, POC, ARC or Passport" />
                    </label>

                    <div className="mt-auto">
                      <DatePicker
                        className="form-control"
                        onChange={(date, dateString) => {
                          handleDrctChange("IssueDate", dateString);
                        }}
                        format="DD-MM-YYYY"
                        disabledDate={(d) =>
                          !d ||
                          d.isBefore(format(values?.BirthDay)) ||
                          d.isAfter(format(values?.ExpiryDate)) ||
                          d.isAfter(format(new Date()))
                        }
                        defaultValue={
                          values?.IssueDate
                            ? format(values?.IssueDate)
                            : undefined
                        }
                        value={
                          values?.IssueDate
                            ? format(values?.IssueDate)
                            : undefined
                        }
                      />
                      {values?.IssueDate == "" && <RequiredFeild />}
                    </div>
                    {/* {!values.IssueDate && values.continues ? <span className="text-danger fs10" >Please select Issue Date</span> : ""} */}
                  </div>

                  {!values?.lifeTimeExpiry && (
                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                      {/* {values?.IssueDate && <> */}

                      <label
                        htmlFor="expiryDay"
                        className="col-12 col-form-label fw-500"
                      >
                        Expiry Date (e.g. 28-02-1995)
                        <ToolTip title="Please input your expiry date EXACTLY as it appears on your CNIC, SNIC, NICOP, POC, ARC or Passport" />
                      </label>
                      <div className="mt-auto">
                        <DatePicker
                          className="form-control"
                          onChange={(date, dateString) => {
                            handleDrctChange("ExpiryDate", dateString);
                          }}
                          format="DD-MM-YYYY"
                          disabledDate={(d) =>
                            !d ||
                            d.isBefore(format(values?.IssueDate)) ||
                            d.isBefore(format(values?.BirthDay))
                          }
                          defaultValue={
                            values?.ExpiryDate
                              ? format(values?.ExpiryDate)
                              : undefined
                          }
                        />
                        {values.ExpiryDate === "" && !values.lifeTimeExpiry && (
                          <RequiredFeild />
                        )}
                        {/* {!values.ExpiryDate && !values.lifeTimeExpiry && values.continues ? <span className="text-danger fs10" >Please select Expiry Date</span> : ""} */}
                      </div>
                    </div>
                  )}

                  <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="lifeTimeExpiry"
                      className="col-12 pb-3 pt-0 col-form-label fw-500"
                    >
                      Expiry Limit
                    </label>
                    <div className="mt-auto">
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        defaultChecked={values.lifeTimeExpiry}
                        onChange={handleChange}
                        name="lifeTimeExpiry"
                        id="lifeTimeExpiry"
                      />
                      <label
                        className="form-check-label lifetimeexpirylabel ps-3"
                        htmlFor="lifeTimeExpiry"
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
                            name="Gender"
                            value={"Male"}
                            defaultChecked={values.Gender == "Male"}
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
                            name="Gender"
                            value="Female"
                            defaultChecked={values.Gender == "Female"}
                            onChange={handleChange}
                          />
                          <label htmlFor="Female" className="py-1 mb-0">
                            Female
                          </label>
                        </li>
                      </ul>
                      {values.Gender === "" && <RequiredFeild />}
                    </div>
                  </div>
                  <div className="mt-40">
                    <hr className="t-grey-200 mt-40 mb-40"></hr>
                  </div>

                  <div className="d-inline-flex w-100 mt-40 d-flex flex-column mb-3">
                    <h2 className="fs18 fw-800 t-grey-800">
                      Permanent Address
                      <ToolTip title="Please input your permanent address as per your identity document." />
                    </h2>
                  </div>

                  <div className="col-12 mb-3 d-flex flex-column">
                    <label htmlFor="Address" className="col-form-label fw-500">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="Street"
                      className="form-control mt-auto"
                      placeholder="H# 12 Block A, PECHS"
                      onChange={handleChange}
                      value={values.Street}
                      id="Street"
                      required
                    />
                    {/* {!values.Street ? <span id="area" className="text-danger fs10" style={{ display: "none" }} >Please fill Street</span> : ""} */}
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label htmlFor="country" className="col-form-label fw-500">
                      Country
                    </label>

                    <div className="mt-auto">
                      <Select1
                        onChange={(e) => hanldeResendentialCountries(e)}
                        // onChange={(e) => handleDrctChange("country", e)}
                        placeholder="Select any one"
                        id="country"
                        styles={customStyle}
                        options={countriesStateCities}
                        defaultInputValue={
                          values?.country?.label
                            ? values?.country?.label
                            : undefined
                        }
                        defaultValue={
                          values?.country?.label
                            ? values?.country?.label
                            : undefined
                        }
                        value={values?.country}
                      />

                      {!values.country?.label && <RequiredFeild />}
                      {/* {!values.country?.label && values.continues ? <span id="country" className="text-danger fs10" >Please select Country</span> : ""} */}
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label
                      htmlFor="Provinces"
                      className="col-form-label fw-500"
                    >
                      Province/State
                    </label>
                    <div className="mt-auto">
                      <Select1
                        styles={customStyle}
                        onChange={(e) => hanldeResidentailProvincesAndCities(e)}
                        placeholder="Select any one"
                        id="Provinces"
                        options={values?.residentiaProvinceList}
                        defaultValue={
                          values.Provinces.label
                            ? values.Provinces.label
                            : undefined
                        }
                        value={values.Provinces}
                      />
                      {!values?.Provinces?.label && <RequiredFeild />}
                      {/* {!values?.Provinces?.label && values.continues ? <span id="province" className="text-danger fs10" >Please select Province</span> : ""} */}
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                    <label htmlFor="City" className="col-form-label fw-500">
                      City
                    </label>

                    <div className="mt-auto">
                      <Select1
                        styles={customStyle}
                        onChange={(e) => handleDrctChange("City", e)}
                        placeholder="Select any one"
                        id="City"
                        options={values?.residentialCitiesList}
                        defaultValue={
                          values.City.label ? values.City.label : undefined
                        }
                        value={values.City}
                      />
                      {!values.City?.label && <RequiredFeild />}
                      {/* {!values?.City?.label && values.continues ? <span id="city" className="text-danger fs10" >Please select City</span> : ""} */}
                    </div>
                  </div>

                  <div>
                    <div className="col-sm-9 col-md-10 my-auto mt-auto d-flex">
                      <input
                        className="form-check-input me-1 mb-3"
                        type="checkbox"
                        defaultChecked={values.MailingAddress}
                        onChange={handleChange}
                        name="MailingAddress"
                        id="MailingAddress"
                      />
                      <label
                        className="form-check-label fw-500 fs16 mailing-checkbox-label Bold ps-3"
                        htmlFor="MailingAddress"
                      >
                        My permanent and mailing addresses are the same
                      </label>
                    </div>
                    {!values.MailingAddress && (
                      <div className="d-inline-flex w-100 mailing-address-container mb-3 mt-40">
                        <h2 className="fs18 fw-800 t-grey-800">
                          Mailing Address
                          <ToolTip title="This address should match the address on your CNIC, SNIC, NICOP, POC, or ARC. If not, you will have to provide a proof of address document, which can include any of the following: utility bill, rental agreement, insurance policy, bank statement, NTN certificate, or mobile bills. You will also have to provide proof of address if you are using your passport as your main form of identity documentation" />
                        </h2>
                      </div>
                    )}
                    <div className="col-12">
                      <div className="row">
                        {!values.MailingAddress ? (
                          <>
                            <div className="col-12 d-flex flex-column mb-3">
                              <label
                                htmlFor="MailStreet"
                                className="col-form-label fw-500"
                              >
                                Street Address
                              </label>
                              <input
                                type="text"
                                name="MailStreet"
                                className="form-control mt-auto"
                                placeholder="H# 12 Block A, PECHS"
                                onChange={handleChange}
                                value={values.MailStreet}
                                id="MailStreet"
                                required
                              />
                              {/* {!values.MailStreet && <RequiredFeild />}
                              {!values?.MailStreet && values.continues ? <span id="MailStreet" className="text-danger fs10" >Please fill Street</span> : ""} */}
                            </div>

                            <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                              <label
                                htmlFor="mailCountry"
                                className="col-form-label fw-500"
                              >
                                Country
                              </label>
                              <div className="mt-auto">
                                <Select1
                                  styles={customStyle}
                                  onChange={(e) => hanldeMailCountries(e)}
                                  placeholder="Select any one"
                                  id="mailCountry"
                                  options={countriesStateCities}
                                  defaultValue={
                                    values.mailCountry?.label
                                      ? values.mailCountry?.label
                                      : undefined
                                  }
                                  defaultInputValue={
                                    values?.mailCountry?.label
                                      ? values?.mailCountry?.label
                                      : undefined
                                  }
                                  value={values?.mailCountry}
                                />
                                {!values.mailCountry?.label && (
                                  <RequiredFeild />
                                )}
                              </div>
                            </div>

                            {/* {values?.mailCountry?.label == 'Pakistan' ? ( */}
                            <>
                              <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                <label
                                  htmlFor="MailProvinces"
                                  className="col-form-label fw-500"
                                >
                                  Province/State
                                </label>

                                <div className="mt-auto">
                                  <Select1
                                    styles={customStyle}
                                    onChange={(e) =>
                                      hanldeMailProvincesAndCities(e)
                                    }
                                    placeholder="Select any one"
                                    id="MailProvinces"
                                    options={values?.mailProvinceList}
                                    defaultValue={
                                      values?.MailProvinces?.label
                                        ? values?.MailProvinces?.label
                                        : undefined
                                    }
                                    value={values?.MailProvinces}
                                  />
                                  {!values?.MailProvinces?.label && (
                                    <RequiredFeild />
                                  )}
                                </div>
                              </div>

                              <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                                <label
                                  htmlFor="MailCity"
                                  className="col-form-label fw-500"
                                >
                                  City
                                </label>
                                <div className="mt-auto">
                                  <Select1
                                    styles={customStyle}
                                    onChange={(e) =>
                                      handleDrctChange("MailCity", e)
                                    }
                                    placeholder="Select any one"
                                    id="MailCity"
                                    options={values?.mailCitiesList}
                                    defaultValue={
                                      values?.MailCity?.label
                                        ? values?.MailCity?.label
                                        : undefined
                                    }
                                    value={values?.MailCity}
                                  />
                                  {!values?.MailCity?.label && (
                                    <RequiredFeild />
                                  )}
                                </div>
                              </div>
                            </>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <BottomNavigation
                  first="Save & Exit"
                  second="Next"
                  Nextdisabled={false}
                  Loading={Loading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;

const HelpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z"
      fill="#D2D6DC"
    />
  </svg>
);
