import { useState, useEffect } from "react";
import NavigationBar from "../../Atoms/NavgationBar";
import FinqalabHeadQuater from "../../../Assets/Img/FinqalabHeadQuater.svg";
import Bus from "../../../Assets/Img/Bus.svg";
import { message, Button, Modal, Spin } from 'antd'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import GetData from "../../../API/GetData";
import BiddingTable from "../../Atoms/BiddingTable";
import Whatsapp from "../../Atoms/Whatsapp";
import Logo from '../../../Assets/Img/Logo.svg'
import Success from '../../../Assets/Img/Success.svg'
const Dashboard = () => {
    const [isDocumentModalVisible, setIsDocumentModalVisible] = useState(false)
    const [Loading, setLoading] = useState(true)
    const [status, setStatus] = useState("")
    const [statusDetail, setStatusDetail] = useState("")
    const history = useNavigate();
    const navigate = useNavigate();

    let User = JSON.parse(localStorage.getItem('user'));



    useEffect(() => {

        // Runs after the first render() lifecycle
        const response = GetData.getEditCorrectionData();
        response.then((value) => {
            console.log({ value })
            setStatus(value?.data?.data.status)
            setStatusDetail(value?.data?.data.CorrectionDetails)
            setLoading(false)

        })
    }, []);


    const showDocumentModal = () => {
        setIsDocumentModalVisible(true);
    };

    const handleDocumentOk = () => {
        setIsDocumentModalVisible(false);
        history('/IPSForm')

    };

    const handleDocumentCancel = () => {
        setIsDocumentModalVisible(false);
    };

    const contactSupport = () => {
        window.open('https://wa.me/923003672522', '_blank')
    }


    return (
        <>
            <NavigationBar step={0} />
            {console.log({ User })}
            <div className="container mt-40">
                <div className="row">
                    <div className="col-md-7 col-12">
                        <p className="tc-plum fw-700 fs32">Dashboard</p>
                        <div className="account_main mt-5 bg-white br-8">
                            {Loading ? <Spin /> :
                                <>
                                    {(status === "new" || status === "continue") && <>
                                        <p className='tc-plum fw-700 fs24'>  Welcome, {User.name}</p>
                                        <p className="tc-grey fs16 fw-500 mt-3">Open your Investor Portfolio Securities Account (IPS) at the National Clearing Company of Pakistan Limited (NCCPL), a State Bank of Pakistan designated primary dealer.</p>
                                        <button className="mt-4 bg-blue text-white py-3 px-4 br-8 border-0" onClick={() => {
                                            history(status === "new" ? "/usp" : "/IPSForm")
                                        }}>
                                            {status === "new" ? <>Open </> : <>Resume</>} IPS Account
                                        </button>
                                    </>}
                                    {status !== "Submitted" || status !== "submitted" && <>
                                        <p className='tc-plum fw-700 fs24'>  Welcome, {User.name}</p>
                                        <p className="tc-grey fs16 fw-500 mt-3">Thank you for submitting your IPS account opening application. Your IPS account opening application is under review. Our team will get back to you shortly.</p>
                                        <button className="calendarT_header mt-4 tc-blue px-4 py-3 border-0 br-8" onClick={contactSupport}>
                                            Contact Support
                                        </button>
                                    </>}
                                    {status === "Correction Required" && <>
                                        <p className='tc-plum fw-700 fs24'>There’s an issue!</p>
                                        <hr className="t-grey-200 my-2"></hr>
                                        <p className='t-grey-200 fs16 fw-600' >Correction Details:</p>
                                        {statusDetail.length > 0 && statusDetail.split("\n").map((l, i) => <p className="tc-grey fs16 fw-500 mt-3" key={i}>{l}</p>)}
                           <button className="mt-4 bg-blue text-white py-3 px-4 br-8 border-0" onClick={() => history('/IPSForm')}>
                                            Edit IPS Form
                                        </button>
                                        <NavLink
                                            key={"myRoute"}
                                            to="/IPSForm"
                                            state={{ step: "5" }}
                                            className="nav-card ms-3"
                                        >

                                            <button className="calendarT_header mt-4 tc-blue px-4 py-3 border-0 br-8" >
                                                Document Upload
                                            </button>
                                        </NavLink>
                                    </>}
                                    {
                                        status === "Approved" && <>
                                            <p className='tc-plum fw-700 fs24'>Congratulations!</p>
                                            <p className="tc-grey fs16 fw-500 mt-3">Your IPS account opening application has been reviewed and verified by NCCPL. You can now participate in the next primary auction.</p>
                                            <button className="mt-4 bg-blue text-white py-3 px-4 br-8 border-0" onClick={() => message.error('Coming Soon')}>
                                                Submit Bid
                                            </button>
                                        </>
                                    }
                                </>}
                        </div >
                    </div >
                    <div className="col-md-5 col-12 d-flex align-items-center">

                        {status === "Approved" ? <>

                            <img className="w-100" src={Bus} />
                        </> : <img className="w-100" src={FinqalabHeadQuater} />}
                    </div>
                </div >
                <div className="row">
                    <div className="col-md-7 col-12">
                        <div className=" account_main p-0 bg-white br-8 mt-5">
                            <p className="tc-plum fw-700 fs24 ps-4 pt-4 mb-1" >Calendar</p>
                            <p className="tc-grey fs14 fw-600 ps-4 " >Note: Bids will not be accepted  after 3PM on the day before the auction </p>
                            <BiddingTable />
                        </div>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className=" account_main px-0 pb-0 bg-white br-8 mt-5">
                            <p className="tc-plum fw-700 fs24 px32">Instructions</p>
                            <hr />
                            <ol className="p32" >
                                <li className=" tc-grey fs14 fw-600 mb-3">To place a bid in the next auction, please download, print and fill out the form for <a href="https://downloads.finqalab.com/Form_for_Submission_of_Non-Competitive_Bids.pdf" target="_blank" className="tc-blue fs14 text-decoration-none">non-competitive bid</a> or <a href="https://downloads.finqalab.com/Form_for_Submission_of_Competitive_Bids_(Pass_Through_Bids).pdf" target="_blank" className="tc-blue fs14 text-decoration-none">competitive bid</a>, and email us with a scanned copy at ips@nextcapital.com.pk. Please only email us with the registered email address from which you created your account.</li>
                                <li className=" tc-grey fs14 fw-600 mb-3">To fund your bid, prior to the bidding deadline of 3pm, one day prior to the auction date, you can transfer funds to our MCB bank account:
                                    <p className="mb-0 fs14">Title:<span className="tc-plum fs14" > Next Capital Limited-Client Group Account</span></p>
                                    <p className="mb-0 fs14">Branch:<span className="tc-plum fs14" > Stock Exchange Branch Karachi</span></p>
                                    <p className="mb-0 fs14">Acc #:<span className="tc-plum fs14" > 0550019331003195</span></p>
                                    <p className="mb-0 fs14">IBAN #:<span className="tc-plum fs14 " > PK85MUCB0550019331003195</span></p></li>
                                <li className=" tc-grey fs14 fw-600 mb-3">You may send us funds via IBFT, Raast, or Cheque. Cheques must be received 3 days prior to the bid deadline so that there is sufficient time for them to clear. If your funds have not cleared and been received in Next Capital’s bank account, then we will not submit your bid to NCCPL.</li>
                                <li className=" tc-grey fs14 fw-600">Please also note the following:
                                    <ol className="mt-3" type="a">
                                        <li className=" tc-grey fs14 fw-600 mt-3">We will charge a one-time commission of 0.0325% (annualized) on the discounted value of your investment.</li>
                                        <li className=" tc-grey fs14 fw-600 mt-3">Any redemption or profit payments will be sent to us by NCCPL. We can either return these to your bank account or maintain custody on our end for use in future transactions. Please indicate your preferences to us.</li>
                                    </ol>
                                </li>
                            </ol >
                        </div >
                    </div >
                </div >
                <Modal

                    visible={isDocumentModalVisible}
                    onOk={handleDocumentOk}
                    onCancel={handleDocumentCancel}
                    className="br-16"
                    footer={<>
                        <button
                            className="filledBtn mt-4 bg-blue text-white py-3 px-4"
                            onClick={handleDocumentOk}
                            type="button">
                            Continue
                        </button>
                    </>


                    }
                >

                    <img src={Logo} width="50px" alt="" />
                    <p className="mt-40 tc-grey fw-500 fs14">Dear Client,</p>
                    <p className="mt-40 tc-grey fw-500 fs14">We wanted to let you know that the below documents will be required to complete the IPS account opening process. If you do not currently have these on hand, you can still complete your account registration and upload the documents at a later time.</p>
                    <div className="bg-grey br-8 py-3 px-4 mt-3">
                        <div className="d-flex align-items-start">
                            <img src={Success} alt="" className="mt-1" />
                            <div className="ms-3">
                                <p className="tc-plum fs16 fw-600">Copy of CNIC/NICOP (Front & Back)</p>
                                <ul className="ps-3">
                                    <li className="tc-plum fw-700  fs14">Main Mpplicant</li>
                                    <li className="tc-plum fw-700  fs14"> Next to Kin: (if applicable)</li>
                                    <li className="tc-plum fw-700  fs14"> Joint Applicant (if applying for joint account)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-grey br-8 py-3 px-4 mt-3">
                        <div className="d-flex align-items-start">
                            <img src={Success} alt="" className="mt-1" />
                            <div className="ms-3">
                                <p className="tc-plum fs16 fw-600">Proof of Income</p>
                                <ul className="ps-3">
                                    <li className="tc-plum fw-500  fs14"><span className="fw-700">Employee:</span> Employment certificate/salary slip</li>
                                    <li className="tc-plum fw-500  fs14"><span className="fw-700">Business Owner:</span> NTN certificate, Sales tax registration, or Certificatec of registration with trade bodies.</li>
                                    <li className="tc-plum fw-500  fs14"><span className="fw-700">Freelancer:</span> Bank statement & NTN certificate.</li>
                                    <li className="tc-plum fw-500  fs14"><span className="fw-700">Gift/Inheritance:</span> Relevant documents & undertaking (stamp paper to be provided by Next Capital)</li>
                                    <li className="tc-plum fw-500  fs14"><span className="fw-700">Retired:</span> Employment/Retirement proof or Undertaking on standardformat on Rs 100 non judicial stamp paper duly notarized.</li>
                                    <li className="tc-plum fw-500  fs14"><span className="fw-700">Others:</span> As per nature of the Case</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-grey br-8 py-3 px-4 mt-3">
                        <div className="d-flex align-items-start">
                            <img src={Success} alt="" className="mt-1" />
                            <div className="ms-3">
                                <p className="tc-plum fs16 fw-600">Proof of Mailing Address</p>
                                <ul className="ps-3">
                                    <li className="tc-plum fw-700 fs14">Utility Bills</li>
                                    <li className="tc-plum fw-700 fs14">Rental Agreement</li>
                                    <li className="tc-plum fw-700 fs14">Bank Statement</li>
                                    <li className="tc-plum fw-700 fs14">Mobile Bill</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Modal >
                <Whatsapp contactSupport={contactSupport} />
            </div >
        </>
    );
};

export default Dashboard;