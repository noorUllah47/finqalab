import axios from "axios";

class PostData {
    constructor() {
        this.result = [];
    }

    SubmitDocument = (data) => {
        // console.log({ data })
        const res = async () => {

            console.log(typeof data.CNICFrontFile)


            let formData = new FormData()
            formData.append('uid', data.uid);
            (typeof data.CNICFrontFile !== 'string' && data.CNICFrontFile !== '') && formData.append('cnic_front', data.CNICFrontFile);
            (typeof data.CNICBackFile !== 'string' && data.CNICBackFile !== '') && formData.append('cnic_back', data.CNICBackFile);
            (typeof data.MailingAddProof !== 'string' && data.MailingAddProof !== '') && formData.append('MailingAddProof', data.MailingAddProof);
            (typeof data.IncomeProof !== 'string' && data.IncomeProof !== '') && formData.append('IncomeProof', data.IncomeProof);
            (typeof data.kinCNICFrontFile !== 'string' && data.kinCNICFrontFile !== '') && formData.append('kinCNIC_front', data.kinCNICFrontFile);
            (typeof data.kinCNICBackFile !== 'string' && data.kinCNICBackFile !== '') && formData.append('kinCNIC_back', data.kinCNICBackFile);
            // (typeof data.KinMailingAddProof !== 'string' && data.KinMailingAddProof !== '') && formData.append('KinMailingAddProof', data.KinMailingAddProof);
            // (typeof data.KinIncomeProof !== 'string' && data.KinIncomeProof !== '') && formData.append('KinIncomeProof', data.KinIncomeProof);
            (typeof data.JointCNICFrontFile !== 'string' && data.JointCNICFrontFile !== '') && formData.append('JointCNIC_front', data.JointCNICFrontFile);
            (typeof data.JointCNICBackFile !== 'string' && data.JointCNICBackFile !== '') && formData.append('JointCNIC_back', data.JointCNICBackFile);
            (typeof data.JointMailingAddProof !== 'string' && data.JointMailingAddProof !== '') && formData.append('JointMailingAddProof', data.JointMailingAddProof);
            (typeof data.JointIncomeProof !== 'string' && data.JointIncomeProof !== '') && formData.append('JointIncomeProof', data.JointIncomeProof);

            data.Other.map(each => {
                (typeof each !== 'string' && each !== '') && formData.append('other', each);
            })

            const resp = await axios
                .post("https://ips-multinet-staging.finqalab.com/v1/doc/upload", formData)
                .catch(function (error) {
                    // alert(error.response.data.message);
                    console.log('errrro', error);
                });
            return resp;
        };
        return res();
    };

    SubmitForm = (data, func, type, step) => {
        // console.log({ data })

        let impData = {
            uid: data.uid,
            AccountType: data?.AccountType === 'Joint' ? 'Joint' : 'Single',
            CustomerType: data?.AccountType,
            status: type,
        };

        let postData = {
            firstName: data?.firstName,
            lastName: data?.lastName || ' ',
            RelativeName: data?.RelativeName,
            email: data?.email,
            phoneNumber: data?.phoneNumber,
            BirthDay: data?.BirthDay,
            BirthCountry: 'Pakistan',
            BirthCity:'Lahore',
            Resident: data?.Resident?.children,
            Nationality: data?.Nationality.label,
            otherNationality: " ",
            IDType: data?.IDType,
            CNIC: data?.CNIC,
            IssueDate: data?.IssueDate,
            ExpiryDate: data?.ExpiryDate,
            lifeTimeExpiry: data?.lifeTimeExpiry,
            Gender: data?.Gender,
            Street: data?.Street,
            Country: data?.country?.label,
            Provinces: data?.Provinces?.label,
            City: data?.City?.label,
            MailingAddress: data?.MailingAddress,
            MailStreet: data?.MailingAddress ? data?.Street : data?.MailStreet,
            MailCountry: data?.MailingAddress ? data?.country?.label : data?.mailCountry?.label,
            MailProvinces: data?.MailingAddress ? data?.Provinces?.label : data?.MailProvinces?.label,
            MailCity: data?.MailingAddress ? data?.City?.label : data?.MailCity?.label,
            BussType: data?.BussType?.children,
            IncomeSource: data?.IncomeSource?.children,
            CompName: data?.CompName,
            AnnualIncome: data?.AnnualIncome,
            OtherIncome: data?.OtherIncome,
            TaxFiler: data?.TaxFiler,
            NTN: data?.NTN,
            PoliticalExpose: data?.PoliticalExpose,
            BankTitle: data?.BankTitle,
            BankNum: data?.BankNum,
            // BankBranch: data?.BankBranch,
            BankAddress: data?.BankAddress,
            USCitizen: data?.USCitizen,
            GCard: data?.USGREENCARD,
            USTIN: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.USTIN : '',
            USGREENCARD: data?.USGREENCARD == 'YES' ? data?.USGREENCARDNum : '',
            OverseasAddress: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.OverseasAddress : '',
            frgnNumber: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.frgnNumber : '',
            PWRAttorney: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.PWRAttorney : '',
            AttorneyAddress: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.AttorneyAddress : '',
            renouncedCitizenchip: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.renouncedCitizenchip : '',
            taxformSubmit: data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES' ? data?.taxformSubmit : '',
            formSubmitDate: (data?.USCitizen == 'YES' || data?.USGREENCARD == 'YES') && data.taxformSubmit == 'YES' ? data?.formSubmitDate : '',
            JointAccountTitle: data?.JointAccountTitle,
            JointLastName: data?.JointLastName || ' ',
            JointRelativeName: data?.JointRelativeName,
            Jointemail: data?.Jointemail,
            JointPhoneNumber: data?.JointPhoneNumber,
            JointNumber: data?.JointNumber, //to be added ==>Added
            JointFaxNumber: '', //to be added ==>Added
            Jointstreet: data?.Jointstreet,
            Jointcountry: data?.Jointcountry?.label,
            JointProvinces: data?.JointProvinces?.label,
            JointCity: data?.JointCity?.label,
            JointMailingAddress: data?.JointMailingAddress,
            JointMailstreet: data?.JointMailingAddress ? data?.Jointstreet : data?.JointMailstreet,
            JointmailCountry: data?.JointMailingAddress ? data?.JointCountry?.label : data?.JointmailCountry?.label,
            JointMailProvinces: data?.JointMailingAddress ? data?.JointProvinces?.label : data?.JointMailProvinces?.label,
            JointMailCity: data?.JointMailingAddress ? data?.JointCity?.label : data?.JointMailCity?.label,
            JointBirthDay: data?.JointBirthDay,
            JointBirthCountry: data?.JointBirthCountry, //to be added ==>Added
            JointBirthCity: data?.JointBirthCity, //to be added ==>Added
            JointNationality: data?.JointNationality?.label,
            JointotherNationality: " ",
            JointResident: data?.JointResident?.children, //to be added ==>Added
            JointCNIC: data?.JointCNIC,
            JointIDType: data?.JointIDType,
            JointIssueDate: data?.JointIssueDate,
            JointExpiryDate: data?.JointExpiryDate,
            JointlifeTimeExpiry: data?.JointlifeTimeExpiry,
            JointGender: data?.JointGender,
            JointProfession: data?.JointProfession?.children,
            JointIncomeSource: data?.JointIncomeSource?.children,
            JointCompName: data?.JointCompName,
            JointAnnualIncome: data?.JointAnnualIncome,
            JointOtherIncome: data?.JointOtherIncome,
            JointTaxFiler: data?.JointTaxFiler,
            JointNTN: data?.JointNTN,
            JointPoliticalExpose: data?.JointPoliticalExpose,
            JointUSCitizen: data?.JointUSCitizen,
            JointGCard: data?.JointUSGREENCARD,
            JointUSTIN: data?.JointUSTIN,
            JointUSGREENCARD: data?.JointUSGREENCARDNum,
            JointOverseasAddress: data?.JointOverseasAddress,
            JointfrgnNumber: data?.JointfrgnNumber,
            JointPWRAttorney: data?.JointPWRAttorney,
            JointAttorneyAddress: data?.JointAttorneyAddress,
            JointRenouncedCitizenchip: data?.JointRenouncedCitizenchip,
            JointTaxformSubmit: data?.JointTaxformSubmit,
            JointformSubmitDate: data?.JointformSubmitDate,
            KinName: data?.KinName,
            KinFthrName: data?.KinFthrName,
            KinIDType: data?.KinIDType,
            KinCNIC: data?.KinCNIC,
            KinRelation: data?.KinRelation,
            KinMailstreet: data?.KinMailstreet,
            KinMailCountry: data?.KinMailCountry?.label || "",
            KinMailProvinces: data?.KinMailProvinces?.label || "",
            KinMailCity: data?.KinMailCity?.label || "",
            KinNumber: data?.KinNumber,    //KinNumber to be Added ==>Added
            KinPhoneNumber: data?.KinPhoneNumber,
            KinFax: '',
            KinEmail: data?.KinEmail,
            AccountOperatingInstruction: data?.AccountOperatingInstruction.children,   //feild to be Added ==>Added
            AccountOperatingInstructionOtherDetails: data?.AccountOperatingInstructionOtherDetails,   //feild to be Added ==> Added
            // ZakatExemption: data?.ZakatExemption,
            // ReasonZakat: data?.ReasonZakat?.children,
            // otherZakatReason: data?.otherZakatReason,
            TaxExemption: data?.TaxExemption,
            // TransactionMode: data?.TransactionMode,
            Minnorrelation: data?.Minnorrelation,
            MinnorRelationDetails: data?.MinnorRelationDetails,
            signature: data?.Signatures,
            retirementAgreement: (data?.IncomeSource.children == 'Gift' || data?.IncomeSource.children == 'Inheritance') ? false : data?.retirementAccepted,
            giftAgreement: data?.IncomeSource.children == 'Retired' ? false : data?.giftAccepted,
            tradingAgreement: data?.undertakingAccepted,
            tripartiteAgreement: data?.aggrementtermsandConditions,
            uid: data.uid,
            AccountType: data?.AccountType === 'Joint' ? 'Joint' : 'Single',
            CustomerType: data?.AccountType,
            status: type,

        }

        let continueData

        if (step == 1) {
            continueData = Object.keys(postData).slice(0, 26).reduce((result, key) => {
                result[key] = postData[key];

                return result;
            }, {});
            console.log({ continueData, data, func, type, step })
        }
        if (step == 2) {
            continueData = Object.keys(postData).slice(26, 48).reduce((result, key) => {
                result[key] = postData[key];

                return result;
            }, {});
        }
        if (step == 3) {
            continueData = Object.keys(postData).slice(48, 95).reduce((result, key) => {
                result[key] = postData[key];

                return result;
            }, {});
        }
        if (step == 4) {
            continueData = Object.keys(postData).slice(95, 111).reduce((result, key) => {
                result[key] = postData[key];

                return result;
            }, {});
        }
        if (step == 5) {
            continueData = Object.keys(postData).slice(113, 114).reduce((result, key) => {
                result[key] = postData[key];

                return result;
            }, {});

            if (continueData?.signature == "") {
                continueData = {}
            }
        }
        if (step == 6) {
            continueData = Object.keys(postData).slice(114, 117).reduce((result, key) => {
                result[key] = postData[key];

                return result;
            }, {});
        }
        if (step == 7) {
            continueData = Object.keys(postData).slice(117, 118).reduce((result, key) => {
                result[key] = postData[key];

                return result;
            }, {});
        }
        if (step == 8) {
            continueData = Object.keys(postData).slice(0, 118).reduce((result, key) => {
                result[key] = postData[key];

                return result;
            }, {});
        }

        Object.filter = (obj, predicate) =>
            Object.keys(obj)
                .filter(key => predicate(obj[key]))
                .reduce((res, key) => (res[key] = obj[key], res), {});

        // Example use:
        var filtered = Object.filter(continueData, each => each !== undefined);
        var nullfiltered = Object.filter(filtered, each => each !== null);
        // console.log(altrafiltered);


        const res = async () => {
            const resp = await axios

                .post("https://ips-multinet-staging.finqalab.com/v1/form/submit", { ...nullfiltered, ...impData },
                    {
                        validateStatus: (s) => s <= 500,
                        responseType: 'blob',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/pdf'
                        }
                    })
                .then(async (response) => {
                    if (response.status !== 200) {
                        // error handling
                        const error = JSON.parse(await response.data.text());
                        console.log('error: ', error);
                        alert(error?.error.error);
                    } else {
                        func()
                        // console.log('agj', response)
                        // const url = window.URL.createObjectURL(new Blob([response.data]));
                        // const link = document.createElement('a');
                        // link.href = url;
                        // link.setAttribute('download', 'file.pdf'); //or any other extension
                        // document.body.appendChild(link);
                        // link.click();
                    }
                })
                .catch(function (error) {
                    // alert(error.response.data.message);
                    console.log('errrro', error);
                });
            return resp;
        };
        return res();
    };

    Return() {
        return this.result;
    }
}
export default new PostData();