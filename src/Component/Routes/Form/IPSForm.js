import React, { Component } from "react";
import SelectType from "./SelectType";
import PersonalDetails from "./PersonalDetails";
import SourceIncome from "./SourceIncome";
import NextToKin from "./NextToKin";
import IBAN from 'iban'
import NavigationBar from "../../Atoms/NavgationBar";
import JointApplication from "./JointApplication";
import SampleState from '../../../Assets/filledState'
import FileUploading from "./FileUploading";
import UnderTaking from "./UnderTaking";
import ReviewApplication from "./ReviewApplication";
import TermsAndConditions from "./TermsAndConditions";
import GetData from "../../../API/GetData"
import { Navigate, useParams } from "react-router-dom"
import countriesStateCities from "../../../Assets/Data/countries_states_cities.json";
import { Spin } from "antd";



class IPSForm extends Component {

  componentDidMount(props) {
    this.setState({ Loading: true });
    console.log('MACTH', this.props)
    // Runs after the first render() lifecycle
    const response = GetData.getEditCorrectionData();
    response.then((value) => {
      // console.log(value?.data?.data.status)
      // alert('1')


      if (value?.data?.data.status == 'Correction Required' || value?.data?.data.status == 'continue') {

        const found = countriesStateCities.find(element =>{
          console.log(value?.data?.data?.BirthCountry, element)
          return element.label == value?.data?.data?.BirthCountry});

        console.log({found});
console.log('dfsghdgjkhgdsfjhgdfajh')
        // console.log(value?.data?.data?.BirthDay, 'componentDidMount  is==================>>>>>>>>>>>>>>>>>>>>>>>>', value?.data?.data)
        this.setState({

          uid: localStorage.getItem('uid'),
          AccountType: value?.data?.data?.AccountType == "Joint" ? "Joint" : "Individual" || '',
          firstName: value?.data?.data?.firstName || '',
          lastName: value?.data?.data?.lastName || '',
          RelativeName: value?.data?.data?.RelativeName || '',
          email: JSON.parse(localStorage.getItem('user')).email || '',
          phoneNumber: value?.data?.data?.phoneNumber || '',
          BirthDay: value?.data?.data?.BirthDay || '',
          // BirthCountry: value?.data?.data?.BirthCountry || '',
          // BirthCity: value?.data?.data?.BirthCity || '',

          Nationality: {

            label: value?.data?.data?.Nationality || ''
          },
          Resident: {
            key: value?.data?.data?.Resident || '',
            value: value?.data?.data?.Resident || '',
            children: value?.data?.data?.Resident || ''
          },
          IDType: value?.data?.data?.IDType || '',
          CNIC: value?.data?.data?.CNIC || '',
          IssueDate: value?.data?.data?.IssueDate || '',
          ExpiryDate: value?.data?.data?.ExpiryDate || '',
          lifeTimeExpiry: value?.data?.data?.lifeTimeExpiry == 1 ? true : false,

          Gender: value?.data?.data?.Gender == 'Female' ? 'Female' : 'Male',
          Street: value?.data?.data?.Street || '',
          country: {
            label: value?.data?.data?.Country || '',
          },
          Provinces: {
            label: value?.data?.data?.Provinces || '',
          },
          City: {
            label: value?.data?.data?.City || '',
          },
          MailingAddress: value?.data?.data?.MailingAddress == 1 ? true : false,
          MailStreet: !value?.data?.data?.MailingAddress ? value?.data?.data?.MailStreet : '',
          mailCountry: !value?.data?.data?.MailingAddress ? {
            label: value?.data?.data?.MailCountry || ''
          } : '',
          MailProvinces: !value?.data?.data?.MailingAddress ? {
            label: value?.data?.data?.MailProvinces || '',
          } : '',
          MailCity: !value?.data?.data?.MailingAddress ? {
            label: value?.data?.data?.MailCity || '',
          } : '',
          BussType: {
            children: value?.data?.data?.BussType || '',
            value: value?.data?.data?.BussType || '',
            key: value?.data?.data?.BussType || '',
          },
          IncomeSource: value?.data?.data?.IncomeSource ? {
            children: value?.data?.data?.IncomeSource,
            value: value?.data?.data?.IncomeSource,
            key: value?.data?.data?.IncomeSource,
          } : '',
          CompName: value?.data?.data?.CompName || '',
          AnnualIncome: value?.data?.data?.AnnualIncome || '',
          OtherIncome: value?.data?.data?.OtherIncome || '',
          TaxFiler: value?.data?.data?.TaxFiler || '',
          NTN: value?.data?.data?.NTN || '',
          PoliticalExpose: value?.data?.data?.PoliticalExpose || '',
          BankTitle: value?.data?.data?.BankTitle || '',
          BankNum: value?.data?.data?.BankNum || '',
          BankAddress: value?.data?.data?.BankAddress || '',
          USCitizen: value?.data?.data?.USCitizen || '',
          USGREENCARD: value?.data?.data?.GCard || '',
          USTIN: value?.data?.data?.USTIN || '',
          USGREENCARDNum: value?.data?.data?.USGREENCARD || '',
          OverseasAddress: value?.data?.data?.OverseasAddress || '',
          frgnNumber: value?.data?.data?.frgnNumber || '',
          PWRAttorney: value?.data?.data?.PWRAttorney || '',
          AttorneyAddress: value?.data?.data?.AttorneyAddress || '',
          renouncedCitizenchip: value?.data?.data?.renouncedCitizenchip || '',
          taxformSubmit: value?.data?.data?.taxformSubmit || '',
          formSubmitDate: value?.data?.data?.formSubmitDate || '',
          JointAccountTitle: value?.data?.data?.JointAccountTitle || '',
          JointLastName: value?.data?.data?.JointLastName || '',
          JointRelativeName: value?.data?.data?.JointRelativeName || '',
          Jointemail: value?.data?.data?.Jointemail || '',
          JointPhoneNumber: value?.data?.data?.JointPhoneNumber || '',
          JointNumber: value?.data?.data?.JointNumber || '',
          JointFaxNumber: value?.data?.data?.JointFaxNumber || '',
          Jointstreet: value?.data?.data?.Jointstreet || '',
          Jointcountry: value?.data?.data?.Jointcountry ? {
            label: value?.data?.data?.Jointcountry || '',
          } : '',
          JointProvinces: value?.data?.data?.JointProvinces ? {
            label: value?.data?.data?.JointProvinces
          } : '',
          JointCity: value?.data?.data?.JointCity ? {
            label: value?.data?.data?.JointCity
          } : '',
          JointMailingAddress: value?.data?.data?.JointMailingAddress == "1" ? true : false,
          JointMailstreet: value?.data?.data?.JointMailstreet || '',
          JointmailCountry: value?.data?.data?.JointMailingAddress == "0" ? {
            label: value?.data?.data?.JointmailCountry || ''
          } : '',
          JointMailProvinces: value?.data?.data?.JointMailingAddress == "0" ? {
            label: value?.data?.data?.JointMailProvinces || ''
          } : '',
          JointMailCity: value?.data?.data?.JointMailingAddress == "0" ? {
            label: value?.data?.data?.JointMailCity || ''
          } : '',
          JointBirthDay: value?.data?.data?.JointBirthDay || '',
          JointBirthCountry: value?.data?.data?.JointBirthCountry || '',
          JointBirthCity: value?.data?.data?.JointBirthCity || '',
          JointNationality: value?.data?.data?.JointNationality ? {
            label: value?.data?.data?.JointNationality
          } : '',
          JointResident: value?.data?.data?.JointResident ? {
            key: value?.data?.data?.JointResident || '',
            value: value?.data?.data?.JointResident || '',
            children: value?.data?.data?.JointResident || ''
          } : '',
          JointCNIC: value?.data?.data?.JointCNIC || '',
          JointIDType: value?.data?.data?.JointIDType || '',
          JointIssueDate: value?.data?.data?.JointIssueDate || '',
          JointExpiryDate: value?.data?.data?.JointExpiryDate || '',
          JointlifeTimeExpiry: value?.data?.data?.JointlifeTimeExpiry == 1 ? true : false,
          JointGender: value?.data?.data?.JointGender == 'Female' ? 'Female' : 'Male',
          JointProfession: value?.data?.data?.JointProfession ? {
            children: value?.data?.data?.JointProfession,
            value: value?.data?.data?.JointProfession,
            key: value?.data?.data?.JointProfession,
          } : '',
          JointIncomeSource: value?.data?.data?.JointIncomeSource ? {
            children: value?.data?.data?.JointIncomeSource,
            value: value?.data?.data?.JointIncomeSource,
            key: value?.data?.data?.JointIncomeSource,
          } : '',
          JointCompName: value?.data?.data?.JointCompName || '',
          JointAnnualIncome: value?.data?.data?.JointAnnualIncome || '',
          JointOtherIncome: value?.data?.data?.JointOtherIncome || '',
          JointTaxFiler: value?.data?.data?.JointTaxFiler || '',
          JointNTN: value?.data?.data?.JointNTN || '',
          JointPoliticalExpose: value?.data?.data?.JointPoliticalExpose || '',
          JointUSCitizen: value?.data?.data?.JointUSCitizen || '',
          JointUSGREENCARD: value?.data?.data?.JointGCard || '',
          JointUSTIN: value?.data?.data?.JointUSTIN || '',
          JointUSGREENCARDNum: value?.data?.data?.JointUSGREENCARD || '',
          JointOverseasAddress: value?.data?.data?.JointOverseasAddress || '',
          JointfrgnNumber: value?.data?.data?.JointfrgnNumber || '',
          JointPWRAttorney: value?.data?.data?.JointPWRAttorney || '',
          JointAttorneyAddress: value?.data?.data?.JointAttorneyAddress || '',
          JointRenouncedCitizenchip: value?.data?.data?.JointRenouncedCitizenchip || '',
          JointTaxformSubmit: value?.data?.data?.JointTaxformSubmit || '',
          JointformSubmitDate: value?.data?.data?.JointformSubmitDate || '',
          CNICFrontFile: value?.data?.data?.cnicfront || '',
          CNICBackFile: value?.data?.data?.cnicback || '',
          MailingAddProof: value?.data?.data?.MailingAddProof || '',
          IncomeProof: value?.data?.data?.IncomeProof || '',
          kinCNICFrontFile: value?.data?.data?.kinCNIC_front || '',
          kinCNICBackFile: value?.data?.data?.kinCNIC_back || '',
          // KinMailingAddProof: value?.data?.data?.KinMailingAddProof || '',
          // KinIncomeProof: value?.data?.data?.KinIncomeProof || '',
          JointCNICFrontFile: value?.data?.data?.JointCNIC_front || '',
          JointCNICBackFile: value?.data?.data?.JointCNIC_back || '',
          JointMailingAddProof: value?.data?.data?.JointMailingAddProof || '',
          JointIncomeProof: value?.data?.data?.JointIncomeProof || '',
          KinName: value?.data?.data?.KinName || '',
          KinFthrName: value?.data?.data?.KinFthrName || '',
          KinIDType: value?.data?.data?.KinIDType || '',
          KinCNIC: value?.data?.data?.KinCNIC || '',
          KinRelation: value?.data?.data?.KinRelation || '',
          KinMailstreet: value?.data?.data?.KinMailstreet || '',
          KinMailCountry: value?.data?.data?.KinMailCountry ? {
            label: value?.data?.data?.KinMailCountry
          } : '',
          KinMailProvinces: value?.data?.data?.KinMailProvinces ? {
            label: value?.data?.data?.KinMailProvinces,
          } : '',
          KinMailCity: value?.data?.data?.KinMailCity ? {
            label: value?.data?.data?.KinMailCity,
          } : '',
          KinNumber: value?.data?.data?.KinNumber || '',
          KinPhoneNumber: value?.data?.data?.KinPhoneNumber || '',
          KinFax: value?.data?.data?.KinFax || '',
          KinEmail: value?.data?.data?.KinEmail || '',
          AccountOperatingInstruction: value?.data?.data?.AccountOperatingInstruction ? {
            key: value?.data?.data?.AccountOperatingInstruction || '',
            value: value?.data?.data?.AccountOperatingInstruction || '',
            children: value?.data?.data?.AccountOperatingInstruction || ''
          } : '',
          AccountOperatingInstructionOtherDetails: value?.data?.data?.AccountOperatingInstructionOtherDetails || '',
          // ZakatExemption: value?.data?.data?.,
          // || '' ReasonZakat: value?.data?.data?.,
          // || '' otherZakatReason: value?.data?.data?.,
          TaxExemption: value?.data?.data?.TaxExemption || '',
          // TransactionMode: value?.data?.data?.,
          Minnorrelation: value?.data?.data?.Minnorrelation ? {
            children: value?.data?.data?.Minnorrelation
          } : '',
          MinnorRelationDetails: value?.data?.data?.MinnorRelationDetails || '',
          Other: value?.data?.data?.other?.other || [],
          Signatures: "",
          undertakingAccepted: value?.data?.data?.tradingAgreement == 1 ? true : false,
          giftAccepted: value?.data?.data?.giftAgreement == 1 ? true : false,
          retirementAccepted: value?.data?.data?.retirementAgreement == 1 ? true : false,
          termsandConditions: false,
          accountOpeningtermsandConditions: false,
          aggrementtermsandConditions: value?.data?.data?.tripartiteAgreement == 1 ? true : false,
          Loading: false,
          step: parseInt(this.props.step) || 0
        })
      }


      else if (value?.data?.data.status == 'Submitted' || value?.data?.data.status == 'Approved' || value?.data?.data.status == 'submitted') {
        this.setState({
          redirect: true
        })
      }
      else if (value?.data?.data.status == 'new') {
        this.setState({
          email: JSON.parse(localStorage.getItem('user')).email || '',
          Loading: false
        })
      }
      else {
        this.setState({
          Loading: false
        })
      }
    })

  }

  state = {
    Loading: false,
    redirect: false,
    uid: localStorage.getItem('uid'),
    step: 0,
    AccountType: '',
    firstName: "",
    lastName: "",
    RelativeName: "",
    email: "",
    phoneNumber: "",
    BirthDay: "",
    BirthCountry: "",
    BirthCity: "",
    Nationality: "",
    Resident: "",
    IDType: "CNIC",
    CNIC: "",
    IssueDate: "",
    ExpiryDate: "",
    lifeTimeExpiry: false,
    Gender: "",
    Street: "",
    country: "",
    Provinces: "",
    City: "",
    MailingAddress: true,
    MailStreet: "",
    mailCountry: "",
    MailProvinces: "",
    MailCity: "",
    BussType: "",
    IncomeSource: "",
    CompName: "",
    AnnualIncome: "",
    OtherIncome: "",
    TaxFiler: "",
    NTN: "",
    PoliticalExpose: "",
    BankTitle: "",
    BankNum: "",
    // BankBranch: "",
    BankAddress: "",
    USCitizen: "NO",
    USGREENCARD: "NO",
    USTIN: "",
    USGREENCARDNum: "",
    OverseasAddress: "",
    frgnNumber: "",
    PWRAttorney: "",
    AttorneyAddress: "",
    renouncedCitizenchip: "",
    taxformSubmit: "",
    formSubmitDate: "",
    JointAccountTitle: "",
    JointLastName: "",
    JointRelativeName: "",
    Jointemail: "",
    JointPhoneNumber: "",
    JointNumber: "",
    JointFaxNumber: "",
    Jointstreet: "",
    Jointcountry: "",
    JointProvinces: "",
    JointCity: "",
    JointMailingAddress: false,
    JointMailstreet: "",
    JointmailCountry: "",
    JointMailProvinces: "",
    JointMailCity: "",
    JointBirthDay: "",
    JointBirthCountry: "",
    JointBirthCity: "",
    JointNationality: "",
    JointResident: "",
    JointCNIC: "",
    JointIDType: "",
    JointIssueDate: "",
    JointExpiryDate: "",
    JointlifeTimeExpiry: false,
    JointGender: "",
    JointProfession: "",
    JointIncomeSource: "",
    JointCompName: "",
    JointAnnualIncome: "",
    JointOtherIncome: "",
    JointTaxFiler: "",
    JointNTN: "",
    JointPoliticalExpose: "",
    JointUSCitizen: "",
    JointUSGREENCARD: "",
    JointUSTIN: "",
    JointUSGREENCARDNum: "",
    JointOverseasAddress: "",
    JointfrgnNumber: "",
    JointPWRAttorney: "",
    JointAttorneyAddress: "",
    JointRenouncedCitizenchip: "",
    JointTaxformSubmit: "",
    JointformSubmitDate: "",
    KinName: "",
    KinFthrName: "",
    KinIDType: "",
    KinCNIC: "",
    KinRelation: "",
    KinMailstreet: "",
    KinMailCountry: "",
    KinMailProvinces: "",
    KinMailCity: "",
    KinNumber: "",
    KinPhoneNumber: "",
    KinFax: "",
    KinEmail: "",
    AccountOperatingInstruction: "",
    AccountOperatingInstructionOtherDetails: "",
    // ZakatExemption: "",
    // ReasonZakat: "",
    // otherZakatReason: "",
    TaxExemption: "",
    // TransactionMode: "",
    Minnorrelation: "",
    MinnorRelationDetails: "",
    CNICFrontFile: "",
    CNICBackFile: "",
    MailingAddProof: "",
    IncomeProof: "",
    kinCNICFrontFile: '',
    kinCNICBackFile: '',
    KinMailingAddProof: "",
    KinIncomeProof: "",
    JointCNICFrontFile: "",
    JointCNICBackFile: "",
    JointMailingAddProof: "",
    AccMaintCertificate: "",
    Signatures: "",
    undertakingAccepted: false,
    giftAccepted: false,
    retirementAccepted: false,
    termsandConditions: false,
    accountOpeningtermsandConditions: false,
    aggrementtermsandConditions: false,
    residentiaProvinceList: [],
    residentialCitiesList: [],
    mailProvinceList: [],
    mailCitiesList: [],
    KinmailProvinceList: [],
    KinmailCitiesList: [],
    JointresidentiaProvinceList: [],
    JointresidentialCitiesList: [],
    JointmailProvinceList: [],
    JointmailCitiesList: [],
    Other: [],
  };

  // go back to previous step

  // state = SampleState


  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  goToPersonal = () => {
    this.setState({ step: 2 });
  };
  goToIdentity = () => {
    this.setState({ step: 3 });
  };

  // handle field change
  handleChange = (e) => {

    const { name, value, type, checked, files } = e.target;
    // console.log({ name, value, type, checked, files })
    if (name === 'AccountType') {
      if (value !== 'Joint') {
        this.setState({
          JointAccountTitle: "",
          JointLastName: "",
          JointRelativeName: "",
          Jointemail: "",
          JointPhoneNumber: "",
          JointNumber: "",
          JointFaxNumber: "",
          Jointstreet: "",
          Jointcountry: "",
          JointProvinces: "",
          JointCity: "",
          JointMailingAddress: false,
          JointMailstreet: "",
          JointmailCountry: "",
          JointMailProvinces: "",
          JointMailCity: "",
          JointBirthDay: "",
          JointBirthCountry: "",
          JointBirthCity: "",
          JointNationality: "",
          JointResident: "",
          JointCNIC: "",
          JointIDType: "",
          JointIssueDate: "",
          JointExpiryDate: "",
          JointlifeTimeExpiry: false,
          JointGender: "",
          JointProfession: "",
          JointIncomeSource: "",
          JointCompName: "",
          JointAnnualIncome: "",
          JointOtherIncome: "",
          JointTaxFiler: "",
          JointNTN: "",
          JointPoliticalExpose: "",
          JointUSCitizen: "",
          JointUSGREENCARD: "",
          JointUSTIN: "",
          JointUSGREENCARDNum: "",
          JointOverseasAddress: "",
          JointfrgnNumber: "",
          JointPWRAttorney: "",
          JointAttorneyAddress: "",
          JointRenouncedCitizenchip: "",
          JointTaxformSubmit: "",
          JointformSubmitDate: "",
        })
      }
      if (value !== 'Minor') {
        this.setState({
          Minnorrelation: "",
          MinnorRelationDetails: "",
        })
      }
      this.setState({ [name]: value })
    }
    else if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
    }
    else if (type === "file") {
      this.setState({ [name]: files[0] });
    }
    else if ((name === "CNIC" && this.state.IDType !== 'Passport') || name === "KinFax" || name === "KinNumber" || name === "frgnNumber" || name === "JointfrgnNumber" || name === "JointUSTIN" || name === "JointUSGREENCARDNum" || name === "AnnualIncome" || name === "OtherIncome" || name === "JointAnnualIncome" || name === "JointOtherIncome" || (name === "KinCNIC" && this.state.KinIDType !== 'Passport') || name === "USGREENCARDNum" || name === "USTIN" || (name === "JointCNIC" && this.state.JointIDType !== 'Passport')) {
      this.setState({ [name]: value.replace(/[^0-9]/gi, "") });
    }
    else {
      this.setState({ [name]: value });
    }

    if (name == 'lifeTimeExpiry') {
      this.setState({ ExpiryDate: '' });
    }
    if (name == 'JointlifeTimeExpiry') {
      this.setState({ JointExpiryDate: '' });
    }
  };

  handleDrctChange = (name, e) => {
    // console.log({ name, e })
    if (name === 'Other') {
      let newArray = this.state.Other
      newArray.push(e)
      this.setState({
        Other: newArray
      })
    }
    else if (name === 'OtherNew') {
      this.setState({
        Other: e
      })
    }
    else if (name === 'OtherDelete') {
      var newArray = this.state.Other.filter(function (fileName) {
        if (typeof fileName === 'string') {
          return fileName !== e
        }
        else {
          return fileName.name !== e
        }
      }
      );
      this.setState({
        Other: newArray
      })
    }
    else {
      this.setState({ [name]: e });
    }
    if (name == 'IBAN') {
      this.setState({ IBANError: !IBAN.isValid(e['iban']) });
    }
  };

  render() {
    const { step } = this.state;
    const {
      uid,
      AccountType,
      firstName,
      lastName,
      RelativeName,
      email,
      phoneNumber,
      BirthDay,
      BirthCountry,
      BirthCity,
      Nationality,
      Resident,
      IDType,
      CNIC,
      IssueDate,
      ExpiryDate,
      lifeTimeExpiry,
      Gender,
      Street,
      country,
      Provinces,
      City,
      MailingAddress,
      MailStreet,
      mailCountry,
      MailProvinces,
      MailCity,
      BussType,
      IncomeSource,
      CompName,
      AnnualIncome,
      OtherIncome,
      TaxFiler,
      NTN,
      PoliticalExpose,
      BankTitle,
      BankNum,
      // BankBranch,
      BankAddress,
      USCitizen,
      USGREENCARD,
      USTIN,
      USGREENCARDNum,
      OverseasAddress,
      frgnNumber,
      PWRAttorney,
      AttorneyAddress,
      renouncedCitizenchip,
      taxformSubmit,
      formSubmitDate,
      JointAccountTitle,
      JointLastName,
      JointRelativeName,
      Jointemail,
      JointPhoneNumber,
      JointNumber,
      JointFaxNumber,
      Jointstreet,
      Jointcountry,
      JointProvinces,
      JointCity,
      JointMailingAddress,
      JointMailstreet,
      JointmailCountry,
      JointMailProvinces,
      JointMailCity,
      JointBirthDay,
      JointBirthCountry,
      JointBirthCity,
      JointNationality,
      JointResident,
      JointCNIC,
      JointIDType,
      JointIssueDate,
      JointExpiryDate,
      JointlifeTimeExpiry,
      JointGender,
      JointProfession,
      JointIncomeSource,
      JointCompName,
      JointAnnualIncome,
      JointOtherIncome,
      JointTaxFiler,
      JointNTN,
      JointPoliticalExpose,
      JointUSCitizen,
      JointUSGREENCARD,
      JointUSTIN,
      JointUSGREENCARDNum,
      JointOverseasAddress,
      JointfrgnNumber,
      JointPWRAttorney,
      JointAttorneyAddress,
      JointRenouncedCitizenchip,
      JointTaxformSubmit,
      JointformSubmitDate,
      KinName,
      KinFthrName,
      KinIDType,
      KinCNIC,
      KinRelation,
      KinMailstreet,
      KinMailCountry,
      KinMailProvinces,
      KinMailCity,
      KinNumber,
      KinPhoneNumber,
      KinFax,
      KinEmail,
      AccountOperatingInstruction,
      AccountOperatingInstructionOtherDetails,
      // ZakatExemption,
      // ReasonZakat,
      // otherZakatReason,
      TaxExemption,
      // TransactionMode,
      Minnorrelation,
      MinnorRelationDetails,
      CNICFrontFile,
      CNICBackFile,
      MailingAddProof,
      IncomeProof,
      kinCNICFrontFile,
      kinCNICBackFile,
      KinMailingAddProof,
      KinIncomeProof,
      JointCNICFrontFile,
      JointCNICBackFile,
      JointIncomeProof,
      JointMailingAddProof,
      AccMaintCertificate,
      Signatures,
      undertakingAccepted,
      giftAccepted,
      retirementAccepted,
      termsandConditions,
      accountOpeningtermsandConditions,
      aggrementtermsandConditions,
      residentiaProvinceList,
      residentialCitiesList,
      mailProvinceList,
      mailCitiesList,
      KinmailProvinceList,
      KinmailCitiesList,
      JointresidentiaProvinceList,
      JointresidentialCitiesList,
      JointmailProvinceList,
      JointmailCitiesList,
      Other,
    } = this.state;
    const values = {
      uid,
      AccountType,
      firstName,
      lastName,
      RelativeName,
      email,
      phoneNumber,
      BirthDay,
      BirthCountry,
      BirthCity,
      Nationality,
      Resident,
      IDType,
      CNIC,
      IssueDate,
      ExpiryDate,
      lifeTimeExpiry,
      Gender,
      Street,
      country,
      Provinces,
      City,
      MailingAddress,
      MailStreet,
      mailCountry,
      MailProvinces,
      MailCity,
      BussType,
      IncomeSource,
      CompName,
      AnnualIncome,
      OtherIncome,
      TaxFiler,
      NTN,
      PoliticalExpose,
      BankTitle,
      BankNum,
      // BankBranch,
      BankAddress,
      USCitizen,
      USGREENCARD,
      USTIN,
      USGREENCARDNum,
      OverseasAddress,
      frgnNumber,
      PWRAttorney,
      AttorneyAddress,
      renouncedCitizenchip,
      taxformSubmit,
      formSubmitDate,
      JointAccountTitle,
      JointLastName,
      JointRelativeName,
      Jointemail,
      JointPhoneNumber,
      JointNumber,
      JointFaxNumber,
      Jointstreet,
      Jointcountry,
      JointProvinces,
      JointCity,
      JointMailingAddress,
      JointMailstreet,
      JointmailCountry,
      JointMailProvinces,
      JointMailCity,
      JointBirthDay,
      JointBirthCountry,
      JointBirthCity,
      JointNationality,
      JointResident,
      JointCNIC,
      JointIDType,
      JointIssueDate,
      JointExpiryDate,
      JointlifeTimeExpiry,
      JointGender,
      JointProfession,
      JointIncomeSource,
      JointCompName,
      JointAnnualIncome,
      JointOtherIncome,
      JointTaxFiler,
      JointNTN,
      JointPoliticalExpose,
      JointUSCitizen,
      JointUSGREENCARD,
      JointUSTIN,
      JointUSGREENCARDNum,
      JointOverseasAddress,
      JointfrgnNumber,
      JointPWRAttorney,
      JointAttorneyAddress,
      JointRenouncedCitizenchip,
      JointTaxformSubmit,
      JointformSubmitDate,
      KinName,
      KinFthrName,
      KinIDType,
      KinCNIC,
      KinRelation,
      KinMailstreet,
      KinMailCountry,
      KinMailProvinces,
      KinMailCity,
      KinNumber,
      KinPhoneNumber,
      KinFax,
      KinEmail,
      AccountOperatingInstruction,
      AccountOperatingInstructionOtherDetails,
      // ZakatExemption,
      // ReasonZakat,
      // otherZakatReason,
      TaxExemption,
      // TransactionMode,
      Minnorrelation,
      MinnorRelationDetails,
      CNICFrontFile,
      CNICBackFile,
      MailingAddProof,
      IncomeProof,
      kinCNICFrontFile,
      kinCNICBackFile,
      KinMailingAddProof,
      KinIncomeProof,
      JointCNICFrontFile,
      JointCNICBackFile,
      JointMailingAddProof,
      JointIncomeProof,
      AccMaintCertificate,
      Signatures,
      undertakingAccepted,
      giftAccepted,
      retirementAccepted,
      termsandConditions,
      accountOpeningtermsandConditions,
      aggrementtermsandConditions,
      residentiaProvinceList,
      residentialCitiesList,
      mailProvinceList,
      mailCitiesList,
      KinmailProvinceList,
      KinmailCitiesList,
      JointresidentiaProvinceList,
      JointresidentialCitiesList,
      JointmailProvinceList,
      JointmailCitiesList,
      Other,
    };

    // alert(this.state.Loading)

    console.log("state", this.state);
    if (this.state.redirect) {
      return (

        <Navigate to='/FormSubmitted' replace={true} />
      )
    }
    else if (!this.state.Loading) {
      switch (step) {
        case 0:
          return (
            <>
              <NavigationBar step={this.state.step} />
              <SelectType
                handleDrctChange={this.handleDrctChange}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        case 1:
          return (
            <>
              <NavigationBar step={this.state.step} />
              <PersonalDetails
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        case 2:
          return (
            <>
              <NavigationBar step={this.state.step} />
              <SourceIncome
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        case this.state.AccountType === 'Joint' && 3:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />

              <JointApplication
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        case this.state.AccountType === 'Individual' && 3 || 4:
          return (
            <>
              <NavigationBar step={this.state.step} />
              <NextToKin
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );
        // case this.state.AccountType === 'Minor' && 4:
        //   return (
        //     <>
        //       <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
        //       <Guardian
        //         handleDrctChange={this.handleDrctChange}
        //         prevStep={this.prevStep}
        //         nextStep={this.nextStep}
        //         handleChange={this.handleChange}
        //         values={values}
        //       />
        //     </>
        //   );
        case this.state.AccountType === 'Individual' && 4 || 5:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
              <FileUploading
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );


        case this.state.AccountType === 'Individual' && 5 || 6:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
              <UnderTaking
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );



        case this.state.AccountType === 'Individual' && 6 || 7:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
              <TermsAndConditions
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );

        case this.state.AccountType === 'Individual' && 7 || 8:
          return (
            <>
              <NavigationBar step={this.state.step} Acc={this.state.AccountType} />
              <ReviewApplication
                handleDrctChange={this.handleDrctChange}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </>
          );



        // never forget the default case, otherwise VS code would be mad!
        default:
        // do nothing
      }
    }
    else {
      return (
        <div className="d-flex justify-content-center align-items-center mainLoading">
          <Spin />
        </div>
      )
    }
  }
}

export default IPSForm



