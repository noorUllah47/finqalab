



import { Select } from 'antd';
import { useState } from 'react';
import PostData from "../../../API/PostData"
import UpperNavigation from '../../Atoms/UpperNavigation';
import BottomNavigation from '../../Atoms/BottomNavigation';
import ScrollToTop from '../../Atoms/ScrollToTop';
import { useNavigate } from 'react-router-dom'



const { Option } = Select;

const TermsAndConditions = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {
    const history = useNavigate();
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
        const FormSubmit = PostData.SubmitForm(values, e !== 'saveExist' ? nextStep : onSuccessSave, "continue", 7);
        FormSubmit.then((value) => {
            console.log({ value });
            setLoading(false);
        });

    }

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
                                Title="NCCPL Terms And Conditions"
                                prevSec="NCCPL Undertaking"
                                prevStep={prevStep} />

                        </div>
                    </div>

                    <div className="container px-0 mt-40">

                        <div className="undertakingsbody ">
                            <div >

                                <ol className=" fs16 t-grey-600 fw-600 mb-3" type='1' >
                                    <li className='t-bold termsandconditionheader fs18 py-3'> Opening of IPS Account</li>
                                    <ul type='A'>
                                        <li className="pb-2">The Investor Portfolio Securities Account (IPS Account) holder shall complete, sign and submit the Account Opening Form to National Clearing Company of Pakistan Limited (NCCPL) for the opening of the IPS Account. NCCPL shall have the right to note accept this IPS Account Opening Form, without assigning any reasons whatsoever, any request for opening of the IPS Account.</li>
                                        <li className="pb-2">NCCPL will send statement of accounts at quarterly basis or frequency stipulated by State Bank of Pakistan (SBP) and as per NCCPL schedule of charges, if applicable.</li>
                                        <li className="pb-2">The IPS account holder may notify NCCPL of any discrepancy in statement of account within 45 days from the date of issue, after which accoutn statement will be considered final.</li>
                                        <li className="pb-2">NCCPL may correct erroneous and incorrect posting of entries with respect to the IPS and inform the IPS Account holder subsequently.</li>
                                        <li className="pb-2">The IPS Account Opening Form shall be accompanied with such documents as specified and such fee and charges as may be specified by NCCPL from time to time. NCCPL may refuse, without assigning any reasons whatsoever, any request for opening of the IPS Account.</li>
                                        <li className="pb-2">Fees and other charges are specified by NCCPL from time to time for opening of the IPS Account shall be paid by IPS Account Holder to NCCPL on or before the due date.</li>
                                        <li className="pb-2">Subject ot he terms and conditions set forth herein, the IPS Account Holder hereby irrevocably and unconditionally authorizes NCCPL to perform such functions and activities as may be necessary or deemed appropriate by NCCPL for performance of its function under these Terms & Conditiions and the applicable law.</li>
                                    </ul>
                                    <li className='t-bold termsandconditionheader fs18 py-3'> Delivery-In</li>
                                    <ul type='A'>
                                        <li className="pb-2">IPS Account shall be credited with any BOok-Entry Securities that are; Deposited and/or </li>
                                        <li className="pb-2">Transferred from any other account, including an IPS Account (where permissble under the applicable SBP regulations).</li>
                                        <li className="pb-2">Securities can be transferred from one IPS Account to any other IPS Account maintained with NCCPL or any another bank/institution subject to written request of the Customer within RTGS Timings. Charges will be applicable on each movement as per NCCPL Schedule of Charges, if applicable.</li>
                                    </ul>

                                    <li className='t-bold termsandconditionheader fs18 py-3'> Delivery-Out</li>
                                    <ul type='A'>
                                        <li className="pb-2" > The IPS Account shall be debited with any Book entry Securities that are transferred to any other account including another IPS Account.</li>
                                        <li className="pb-2" >For the purpose of delivery-out, the IPS Account holder shall submit a written instruction to NCCPL. Incomplete or unsigned instructions or any order covering any book entry securities which are excess of the credit balance in the IPS accounts will not be accepted or acted upon.</li>
                                    </ul>
                                    <li className='t-bold termsandconditionheader fs18 py-3'> No Liability of NCCPL</li>
                                    <ul type='A'>
                                        <li className="pb-2" >Neither NCCPL nor any of its directors, officers, employee or ageny shall be liable for any loss or damage that may be suffered or sustained by the IPS account holder in opening and maintaining the IPS Account.</li>
                                        <li className="pb-2" >Neither NCCPL nor any of its directors, officers, employees or agent shall be liable for any loss or damage that may be suffered or sustained by the IPS Account Holder due to any negligence, inaction, fraud or failure to fullfill any legal obligations by any other IPS account holder.</li>
                                        <li className="pb-2" >NCCPL shall be free of any liabilities for any loss of the book-entry securities in the IPS Account due to any Goverment Act, orders, decrees, regulations, political disputes, laws, tax, embargo, moratorium, exchange control restrictions, expropriation, war, hostilities, civil disobedience, or any other cause beyong the control of NCCPL.</li>
                                    </ul>
                                    <li className='t-bold termsandconditionheader fs18 py-3'> IPS Account Holder’s Liability</li>
                                    <ul type='A'>
                                        <li className="pb-2" > The IPS Account holder shall, during the subsistence of the IPS Account, comply with all applicable laws, and rules.</li>
                                        <li className="pb-2" >The IPS Account holder shall keep all information pertaining to NCCPL’s affairs which may come to the knowledge in strict confidence.</li>
                                        <li className="pb-2" >In case of either (singly) or survivor operation, I/We or any joint holder of the IPS Account can notify NCCPL for change in address or closing of account.</li>

                                    </ul>

                                    <li className='t-bold termsandconditionheader fs18 py-3'> Suspension & Closing of IPS Account</li>
                                    <ul type='A'>
                                        <li className="pb-2" > NCCPL may close the IPS Account at any time by giving fifteen (15) Business Day’s prior written notice to the IPS Account holder. The IPS Account Holder may make representations agaisnt such notice within ten (10) days of reciept of the notice. NCCPL’s decidsion on such representation shall be final and binding. However, incase of any dispute, the same will be referred to SBP and the decision of Competent AUthority of SBP will be binding.</li>
                                        <li className="pb-2" > The IPS Account holder may at any time close the IPS Account by submitting an Account Closing written request to NCCPL. Incomplete or Unsigned request will not be accepted or acted upon.</li>
                                        <li className="pb-2" > The account which has nil balance and remains inactive for 01 year shall be closed.</li>
                                        <li className="pb-2" > In case of death or bankruptcy, NCCPL will stop peration IPS Account immediately, after the receipt of official notice or as and when NCCPL becomes aware of it from any other reliable sources.</li>
                                    </ul>

                                    <li className='t-bold termsandconditionheader fs18 py-3'>Joint Accounts</li>
                                    <ul type='A'>
                                        <li className="pb-2" >If the IPS Account is in the name of two or more persons, the balance to the credit of such IPS Account shall belong to the IPS Account Holders or the surviving IPS Account holders as joint holder.</li>
                                        <li className="pb-2" >A joint IPS Account shall be allowed by NCCPL to be operated strictly in accordance with the instructions in respect of the IPS Account contained in the IPS Account Opening Form.</li>
                                        <li className="pb-2" >NCCPL is authorized to treat all the joint IPS Account holders as being alive unless a death certificate issued by a competent public functionary or evidence satisfactory to the NCCPL has been proved to NCCPL.</li>
                                        <li className="pb-2" >If prior to acting on instructions received from one signatory, where the Joint IPS Account is operated with single signing authority, NCCPL received contradictory instructions from another signatory, NCCPL shall immediately thereafter only act on the mandate of all the joint IPS Account holders or their authorized signatories.</li>

                                    </ul>

                                    <li className='t-bold termsandconditionheader fs18 py-3'>Amendment to the Terms & Conditions</li>
                                    <ul type='A'>
                                        <li className="pb-2" >I/We hereb acknowledge that NCCPL shall the right at any time to amend, modify or substitute these Terms & Conditions and shall provide 30 day’s advance notice, such notice being deemed to have been properly given if the Revised Terms & Conditions are, as undertaken by NCCPL, placed on NCCPL’s website.</li>
                                        <li className="pb-2" >In case of the IPS Account Holder does no tprovide its written consent to the proposed alterations within a 30 (thirty) days period, then NCCPL shall have the right ot close the account after giving 7-day’s notice to the IPS Accuont holder.</li>
                                        <li className="pb-2" >In case of any dispute, matter should be referred to SBP and the decision of SBP will be final and binding in that case.</li>
                                    </ul>




                                </ol>

                            </div>
                        </div>


                        <form className="pt-3">
                            <div className="mb-1 pt-3 row">
                                <div className="col-12 py-3">

                                    <div className="py-3">
                                        <div className="col-sm-12 col-md-10 my-auto ">
                                            <input
                                                className="form-check-input me-1 mb-1"
                                                type="checkbox"
                                                defaultChecked={values.termsandConditions}
                                                onChange={handleChange}
                                                name="termsandConditions"
                                                id="termsandConditions"
                                            />
                                            <label
                                                className="form-check-label tc-plum fw-600 fs16 ps-3"
                                                htmlFor="termsandConditions"
                                            >
                                                I accept all of the above terms & conditions.
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>



                    </div>



                    <h1 className="fs24 ls4 fw-800 t-grey-800 mb-3 mt-40">Next Capital Limited Terms & Conditions - IPS Account Opening</h1>

                    <div className="container px-0 mt-40">

                        <div className="undertakingsbody ">
                            <div >
                                <ol className=" fs16 t-grey-600 fw-600 mb-3" type='1'>
                                    <li className="pb-2" > The IPS Account holder (“the client”) shall complete, sign and submit the IPS account Opening Form to the Next Capital Limited (“the Company”) for the opening of an IPS Account with
                                        NCCPL (“IPS Account”). The IPS Form shall be accompanied with such documents as are listed
                                        there, the company shall have the right to accept/reject without assigning any reasons whatsoever,
                                        any IPS opening request.</li>
                                    <li className="pb-2" >The company shall have the right to close the IPS Account, if the details, particulars and other
                                        information set out in the IPS Account Opening Form relating to such IPS Account are found to
                                        be incorrect.</li>
                                    <li className="pb-2" >It shall be the responsibility of the Investor to ensure availability of sufficient funds in the account
                                        maintained with the company before placement of the order in the prescribed form of NCCPL.
                                        The company shall only forward the orders to NCCPL, if sufficient funds in the account
                                        maintained with the company are available.</li>
                                    <li className="pb-2" >The Company shall submit the transaction order to NCCPL (as per the format prescribed by
                                        NCCPL) duly signed off by the Investor and shares the same to NCCPL either physically,
                                        electronically or through any other means prescribed by NCCPL from time to time. NCCPL shall
                                        submit the bid in Bloomberg module on behalf of investor based on authorized transaction order
                                        received from Broker.</li>
                                    <li className="pb-2" >The IPS Account Holder represents and warrants to the Company that the registration details and
                                        other information set out in the IPS Account Opening Form or in any other document, form,
                                        instruction, or communication submitted by the IPS Account Holder to the Company shall be true
                                        &amp; correct. The IPS Account Holder hereby agrees to indemnify the Company and hold it
                                        indemnified for any losses, damages, costs or expenses that may be suffered, incurred, or
                                        sustained by the company as a result of any inaccuracy or mis-statement contained in the IPS
                                        Account Opening Form any other document, form, instruction or communication, as referred to
                                        above, submitted by the IPS Account Holder to the company.</li>
                                    <li className="pb-2" >Neither the company nor any of its employees or affiliates shall be liable for any loss or damage
                                        that may be suffered or sustained by the client in opening and maintaining the IPS Account, or
                                        due to any negligence or default by anyone other than the company.</li>
                                    <li className="pb-2" >Neither the company or any of its employees or directors or agents shall, if acting in good faith
                                        and without having committed any negligent or wrongful act, be liable for any loss or mis
                                        delivery of securities, or for any action taken or omitted or purported to eb taken or omitted, in
                                        good faith by any of them under or in connection with the terms &amp; conditions or if they are
                                        prevented or delayed by law or any circumstances beyond their control in performing any
                                        obligations of the company under the terms &amp; conditions. </li>
                                    <li className="pb-2" >The Company shall not be liable for any loss, depreciation, cancellation or loss of title in respect
                                        of the securities in the IPS Account due to any Government act, orders, decrees, regulations,
                                        political disputes, laws, tax, embargo, moratorium, exchange control restrictions, expropriation,
                                        war hostiles, civil disobedience or any other cause beyond the control of the Company.</li>
                                    <li className="pb-2" >The IPS Account Holder shall comply with all applicable laws, rules and regulations including
                                        the Terms & Conditions.</li>
                                    <li className="pb-2" >The IPS Account Holder shall keep all information pertaining to the company which may come to
                                        its knowledge in strict confidence.</li>
                                    <li className="pb-2" >The Company shall have the right at any time, without assigning any reason to amend, modify, or
                                        substitute the Terms &amp; Conditions. Any such amendments, shall be binding upon the client and
                                        the company prospectively. The Company undertakes that such amendment, shall be
                                        communicated to the IPS Account Holders through the registered email address.</li>
                                </ol>
                            </div>
                        </div>
                        <form className="pt-3">
                            <div className="mb-1 pt-3 row">
                                <div className="col-12 py-3">

                                    <div className="py-3">
                                        <div className="col-sm-12 col-md-10 my-auto ">
                                            <input
                                                className="form-check-input me-1 mb-1"
                                                type="checkbox"
                                                defaultChecked={values.accountOpeningtermsandConditions}
                                                onChange={handleChange}
                                                name="accountOpeningtermsandConditions"
                                                id="accountOpeningtermsandConditions"
                                            />
                                            <label
                                                className="form-check-label tc-plum fw-600 fs16 ps-3"
                                                htmlFor="accountOpeningtermsandConditions"
                                            >
                                                I accept all of the above terms & conditions.
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </form>




                    </div>



                    <h1 className="fs24 ls4 fw-800 t-grey-800 mb-3 mt-40">Tripartite Agreement for Trading In Government Securities Between NCCPL, Next Capital, and Investor</h1>

                    <div className="container px-0 mt-40">

                        <div className="undertakingsbody ">
                            <div >



                                <p className=" fs16 t-grey-600 fw-600 mb-3">

                                    This Facilitation Agreement for Trading in Government Securities (‘Agreement’) is made on this __ day of ___, 2022, between:
                                </p>
                                <p className=" fs16 t-grey-600 fw-600 mb-3">
                                    {/* Mr. [-----------------], son of Mr. [----------------------], holding CNIC No. [---------------], resident
                                    of [---------------], or [-----------------------------] a company incorporated under the laws of the
                                    Islamic Republic of Pakistan and having its registered office at [-------------] Karachi, acting
                                    through its [------designation----] (hereinafter referred to as the &quot;Investor&quot;, which expression
                                    shall wheresoever the context so permits, includes its successors, legal heirs and executors) */}

                                    Mr. /Mrs./Ms._________, son/daughter/wife of Mr. _______, holding CNIC No. ________, resident of __________________________, (hereinafter referred to as the “Investor”,
                                    which expression shall wheresoever the context so permits, includes its successors, legal heirs and executors).
                                </p>
                                <p className=" fs16 t-grey-600 fw-600 mb-3">And</p>

                                <p className=" fs16 t-grey-600 fw-600 mb-3">
                                    Next Capital Limited, a company incorporated under the laws of the Islamic Republic of
                                    Pakistan holding Trading Right Entitlement Certificate issued by Pakistan Stock Exchange
                                    Limited and registered as a Broker by Securities &amp; Exchange Commission of Pakistan and
                                    having its registered office at Floor 2, Imperial Court Building, Dr. Ziauddin Ahmed Road,
                                    Karachi, acting through its Chief Operating Officer (hereinafter referred to as the “Broker”
                                    which expression shall wheresoever the context so permits, includes its successors and permitted
                                    assigns).
                                </p>
                                <p className=" fs16 t-grey-600 fw-600 mb-3">
                                    And </p>

                                <p className=" fs16 t-grey-600 fw-600 mb-3">
                                    National Clearing Company of Pakistan Ltd, a company incorporated under the laws of
                                    Pakistan, having its Registered Office at 8th floor Pakistan Stock Exchange Building I.I
                                    Chundrigar Road, Karachi, through its authorized attorneys (hereinafter called as “NCCPL”,
                                    which expression shall mean and include, its successors-in-interest, legal representative,
                                    administrators, executors & assigns).
                                </p>


                                <p className=" fs16 t-grey-600 fw-600 mb-3">
                                    (Investor, Broker and NCCPL are individually referred to as ‘Party’ and collectively as
                                    ‘Parties’).
                                </p>
                                <p className='fs18 ls4 fw-700 termsandconditionheader mb-3'>WHEREAS</p>

                                <ul className='fs16 t-grey-600 fw-600 mb-3' type='A'>
                                    <li className="pb-2">
                                        NCCPL has been approved by the State Bank of Pakistan (‘SBP’) as a Special Purpose
                                        Primary Dealer for Government Securities (Pakistan Investment Bonds and Market
                                        Treasury Bills), which enables NCCPL to participate in primary auction of Government
                                        Securities conducted by SBP and provide settlement & custodian services (‘NCCPL IPS
                                        Service’) of Government Securities for its clients. </li>
                                    <li className="pb-2">Investor is interested in trading in Government Securities in primary auction conducted
                                        by SBP through opening of IPS Account with NCCPL.</li>
                                    <li className="pb-2">The Parties have agreed to formalise this arrangement wherein Broker has agreed to act
                                        as an intermediary on behalf of Investor for trading in Government Securities and
                                        NCCPL has agreed to provide settlement and custodial services based on the agreed
                                        terms and conditions.
                                    </li>
                                </ul>
                                <p className='fs16 t-grey-600 fw-600 mb-3'>
                                    NOW, THEREFORE, in consideration of the mutual benefits to be derived and the representations,
                                    warranties and agreements contained herein, the Parties hereby agrees as follows:
                                </p>

                                <h1 className="fs18 ls4 fw-700 termsandconditionheader mb-3">UNDERTAKING AND CONDITIONS OF THE AGREEMENT</h1>

                                <ol className='fs16 t-grey-600 fw-600 mb-3' type='1'>
                                    <li className='pb-2' >
                                        The Investor will be opening IPS Account with NCCPL to enable NCCPL to provide
                                        custodial services of the Government Securities being traded by the Investor.</li>
                                    <li className='pb-2' >The Investor hereby authorizes Broker to act as an intermediary on behalf of Investor in
                                        order to participate in primary auction of Government Securities of SBP through NCCPL.</li>
                                    <li className='pb-2' >  For purchase of Government Securities, the Broker shall submit the transaction order to
                                        NCCPL (as per the format prescribed by NCCPL) duly signed off by the Investor and
                                        shares the same to NCCPL either physically, electronically or through any other means
                                        prescribed by NCCPL from time to time. NCCPL shall submit the bid in Bloomberg
                                        module on behalf of investor based on authorized transaction order received from Broker.</li>
                                    <li className='pb-2' >  It shall be responsibility of Broker to ensure availability of sufficient funds of Investor
                                        with Broker before placement of transaction order with NCCPL or before settlement of
                                        transaction.</li>
                                    <li className='pb-2' > On settlement date, it shall be responsibility of Broker to ensure timely deposit of funds
                                        on behalf of investor in either current account of NCCPL maintained with SBP or in
                                        designated account of NCCPL maintained with other Settling Banks.</li>
                                    <li className='pb-2' > After Settlement of transaction with SBP, the Government Securities will be credited in
                                        the IPS account of Investor maintained with NCCPL and statement of account of same
                                        will be shared with Investor and the Broker.</li>
                                    <li className='pb-2' >The Investor hereby authorizes the Broker to pledge, from time to time, government
                                        securities held by the Investor in its Account in favour of NCCPL to meet margin
                                        requirements prescribed under NCCPL Regulations, 2015.</li>
                                    <li className='pb-2' >  In case where investor wants to liquidate Government Securities held in its IPS account
                                        maintained with NCCPL before maturity, NCCPL based on authorized transaction order
                                        received from Broker on behalf of investor will assist in settlement of transaction based
                                        on DVP or DVF basis.</li>
                                    <li className='pb-2' > It is hereby reiterated that:
                                        <ol type='a'>

                                            <li className='pb-2' >Payment of all settlement obligation for purchase of Government Securities, Coupon
                                                payment, payment of Principal at the time of maturity of Government Securities and
                                                Payment in case of liquidation of transaction before maturity, unless otherwise
                                                instructed by the Broker, will be made on designated account of Broker on behalf of
                                                Investor and the Broker shall be responsible for onward transfer of funds to Investor.</li>
                                            <li className='pb-2' > It shall be responsibility of Broker to ensure availability of sufficient funds on behalf
                                                of investor for timey settlement of accepted bids by SBP. In case of non-availability
                                                of Funds from Investor, the Broker shall be held responsible for timely settlement of
                                                accepted bids.</li>

                                        </ol>
                                        <li className='pb-2' >  NCCPL shall not be held responsible if the submitted bids are not accepted by SBP of
                                            Pakistan.</li>
                                        <li className='pb-2' > It shall be responsibility of Broker to ensure compliance with AML/ CFT requirements
                                            prescribed under applicable regulatory framework of SECP and SBP.</li>
                                        <li className='pb-2' > For Secondary Market trading, all trade settlement on RTGS would be subject to counter
                                            party initiation/ affirmation and it is hereby clarified that NCCPL shall not be responsible
                                            in any way if the transaction could not be successfully settled due to non-initiated/non-
                                            confirmed by the counter-party.</li>
                                    </li>
                                </ol>

                                <h1 className="fs18 ls4 fw-700 termsandconditionheader mb-3">CONSIDERATION</h1>

                                <ul className='fs16 t-grey-600 fw-600 mb-3' type='A'>
                                    <li className='pb-2' >
                                        For the services being rendered by NCCPL, the Broker shall pay to NCCPL the charges
                                        as prescribed/ notified and in the manner and time line specified by NCCPL from time to
                                        time.
                                    </li>
                                </ul>

                                <h1 className="fs18 ls4 fw-700 termsandconditionheader mb-3">REPRESENTATIONS AND WARRANTIES</h1>

                                <ol type='1' className='fs16 t-grey-600 fw-600 mb-3' >
                                    <li className='pb-2' >NCCPL hereby represents and confirms to the other Parties that:</li>
                                    <ol type='a' >
                                        <li className='pb-2' > It shall provide requisite and required information to enable the Broker to execute
                                            trades on behalf of the Investor on primary auction of Government Securities </li>
                                        <li className='pb-2' >   It shall settle all trades through RTGS / DEPOX based on agreed terms and
                                            conditions</li>
                                        <li className='pb-2' > By entering into this Agreement, NCCPL will not:</li>
                                        <ol type='i'>
                                            <li className='pb-2' > be in violation with the provisions of its Articles or Memorandum of Association;</li>
                                            <li className='pb-2' > contravene any applicable law, rule, regulation or any order, judgment, decree or
                                                directive of any court or tribunal to which NCCPL or any of its properties and
                                                businesses are subject;
                                            </li>
                                        </ol>
                                    </ol>
                                    <li className='pb-2' >

                                        The Investor hereby represents and warrants to the other Parties that:</li>
                                    <ol type='a' className='fs16 t-grey-600 fw-600 mb-3'>
                                        <li className='pb-2' >


                                            All information furnished by him is or shall be accurate and that he has not omitted or
                                            concealed and shall not omit or conceal any material facts which would render such
                                            information incorrect, misleading or inaccurate.</li>
                                        <li className='pb-2' >  No extraordinary circumstances and no change of law has occurred which would
                                            make it impossible for him to fulfill his obligations under this Agreement.</li>
                                        <li className='pb-2' >He will comply with all formalities and requirements for maintaining an Account
                                            with NCCPL</li>
                                        <li className='pb-2' >He will not hold the other Parties liable for any losses which he may suffer due to a
                                            trade which has been executed on his request.</li>
                                        <li className='pb-2' > He will be liable and responsible for all trades which have been settled by NCCPL in
                                            his Account based on authorized transaction order received from Broker on its behalf
                                            Any and all claims and disputes in this regard will be settled between the Investor and
                                            the Broker with no reference or resort to NCCPL.</li>
                                        <li className='pb-2' >  He will ensure that he has sufficient funds with Broker on his account before placing
                                            a trade through the Broker.</li>
                                        <li className='pb-2' >  He will comply with all rules and regulations pertaining to (i) trading and settlement
                                            of Government Securities as prescribed by SBP and/or any other regulatory authority
                                            and (ii) all regulations, rules, procedures and the overall framework pertaining to
                                            <li className='pb-2' > NCCPL IPS Services as prescribed by NCCPL from time to time.</li>
                                            He shall pay to the NCCPL and the Broker their consideration as per the agreed
                                            mechanism for the services being rendered by them under this Agreement.</li>




                                    </ol>
                                    <li className='pb-2' >

                                        The Broker hereby represents and warrants to the other Parties that:</li>
                                    <ol type="a" className='fs16 t-grey-600 fw-600 mb-3'>
                                        <li className='pb-2' >
                                            All information furnished by it is or shall be accurate and that it has not omitted or
                                            concealed and shall not omit or conceal any material facts which would render such
                                            information incorrect, misleading or inaccurate.</li>
                                        <li className='pb-2' > No extraordinary circumstances and no change of law has occurred which would
                                            make it impossible for it to carry on its business or fulfill its obligations under this
                                            Agreement.</li>
                                        <li className='pb-2' > It will only process such orders for and on behalf of the Investor for which sufficient
                                            funds is available on account of the Investor</li>
                                        <li className='pb-2' > It will forward transaction order to NCCPL for placement of bids in primary auction
                                            which have been specifically authorized by the Investor.
                                            It will resolve all disputes and claims with the Investor itself without any reference or
                                            resort to NCCPL.</li>
                                        <li className='pb-2' >  It shall comply with all rules and regulations pertaining to (i) trading and settlement
                                            of Government Securities as prescribed by the SBP and/or any other regulatory
                                            authority and (ii) all regulations, rules, procedures and the overall framework
                                            pertaining to NCCPL IPS Services as prescribed by NCCPL from time to time.</li>
                                        <li className='pb-2' >By entering into this Agreement, the Broker will not:</li>
                                        <ol type='i'>
                                            <li className='pb-2' >
                                                be in violation with any of the conditions imposed upon it under any agreement,
                                                contract or document that it is a party to;
                                            </li>
                                            <li className='pb-2' >
                                                be in violation with the provisions of its Articles or Memorandum of
                                                Association;
                                            </li>
                                            <li className='pb-2' >  contravene any applicable law, rule, regulation or any order, judgment,
                                                decree or directive of any court or tribunal;
                                            </li>
                                        </ol>

                                    </ol>
                                </ol>

                                <h1 className="fs18 ls4 fw-700 termsandconditionheader mb-3">INDEMNITY AND LIMIT OF LIABILITY</h1>
                                <ol type='1' className='fs16 t-grey-600 fw-600 mb-3'>
                                    <li className='pb-2' >
                                        Under no circumstances will NCCPL be responsible for:
                                        <ol type='1'>
                                            <li className='pb-2' >
                                                Any actions of the Investor or the Broker carried out in breach of the terms of this
                                                Agreement;</li>
                                            <li className='pb-2' >Any losses to third parties, Investor or Broker caused due to misrepresentation,
                                                wrong commitment, negligence, fraud or wilful misconduct by any such third
                                                party, the Investor or Broker, as the case may be;</li>
                                        </ol>
                                        <li className='pb-2' >Any loss or claim that has arisen due to a breach of any other term of this
                                            Agreement by the Broker and/or the Investor.
                                            The Broker and the Investor hereby unconditionally and irrevocably indemnifies and
                                            agrees to hold NCCPL and officers and directors harmless from and against all actions
                                            from and against claims, demands, liabilities, losses, damages, costs, charges and
                                            expenses of whatsoever nature, including legal fees (collectively the “Losses”) which
                                            may result or which NCCPL (or any of its directors, officers, advisors, agents or
                                            shareholders) may sustain, suffer or arising out of any objections, notices, actions, suits,
                                            proceedings (civil and criminal), inquiries, investigations or otherwise that may be
                                            initiated by (i) any party who may claim to have suffered a loss as a result of any
                                            action/inaction by the Broker and/or the Investor (ii) any regulators, such as the
                                            Securities and Exchange Commission of Pakistan, the NCCPL or the SBP, etc. and/or
                                            (iii) any investigating agencies, such as Federal Investigation Agency, National
                                            Accountability Bureau, Anti-Narcotic Agency, Anti-Money Laundering Cell and such
                                            other authorities, or (iv) any Losses generally incurred by NCCPL in connection with or
                                            arising in any way whatsoever as result of any action/inaction, negligence or wilful
                                            misconduct of the Broker/Investor.</li>
                                        <li className='pb-2' >The Investor hereby further confirms to hold NCCPL harmless for any losses, claims,
                                            demands, liabilities, damages, costs, expenses and charges suffered by the Investor as a
                                            result of:</li>
                                        <ol type='a'>
                                            <li className='pb-2' >
                                                Any trade posted in primary auction by the Broker for any on behalf of the
                                                Investor;</li>
                                            <li className='pb-2' >Any trade settled by NCCPL for and on behalf of the Investor which has been
                                                provided to NCCPL as per mechanism provided under the Agreement;</li>
                                        </ol>
                                        <li className='pb-2' >The Parties hereby further agree to hold one another harmless from and agree to resolve
                                            amongst themselves any and all disputes which may have arisen between them.</li>



                                    </li>
                                </ol>



                                <h1 className="fs18 ls4 fw-700 termsandconditionheader mb-3">CONFIDENTIALITY</h1>

                                <ol type='1' className='fs16 t-grey-600 fw-600 mb-3'>
                                    <li className='pb-2' >
                                        All Parties shall keep all information pertaining to this Agreement and the consequent
                                        business dealings between the Parties as confidential and shall not divulge such
                                        information to any third party except to the extent that the disclosure of information is
                                        required to any regulatory/governmental authority, SBP, under law or through an order of
                                        the Court of law.
                                    </li>
                                </ol>

                                <h1 className="fs18 ls4 fw-700 termsandconditionheader mb-3">TERMINATION</h1>

                                <ol type='1' className='fs16 t-grey-600 fw-600 mb-3'>
                                    <li className='pb-2' >

                                        In case any Party commits breach of any of the terms and conditions of this Agreement,
                                        then the non-defaulting Party shall be free to terminate this Agreement without prejudice
                                        to the right of other Parties to recover any and all losses and damages that may be
                                        suffered or sustained by any Party as a consequence of such a breach done by any Party.
                                        Any Party hereto may terminate this Agreement by serving ten (10) day’s written notice
                                        in advance citing reasons/ breaches along with timeline for rectifying the breach.
                                        However, the Agreement may be terminated before 10 day’s upon mutual consent of all
                                        Parties in writing.
                                        <li className='pb-2' >This Agreement shall terminate automatically upon occurrence of any of the following
                                            events:</li>
                                        <ol type='a'>
                                            <li className='pb-2' >The insolvency or bankruptcy of any Party.</li>
                                            <li className='pb-2' >If it is found that any Party has made any misrepresentation or false commitment
                                                to the other Parties.</li>
                                            <li className='pb-2' >NCCPL is removed from, or decides to voluntarily discontinue the provisions of
                                                RTGS facility, or if NCCPL decides not to provide the NCCPL IPS Service any
                                                further.</li>
                                            <li className='pb-2' >The Investor closing his Account with the NCCPL.</li>
                                            <li className='pb-2' >License of NCCPL as Special Purpose Primary Dealer is expired.</li>
                                            <li className='pb-2' >Upon suspension/cancellation of the Broker’s license as given by SECP.</li>
                                        </ol>
                                    </li>
                                </ol>


                                <h1 className="fs18 ls4 fw-700 termsandconditionheader mb-3">PARTNERSHIP</h1>

                                <ol type='1' className='fs16 t-grey-600 fw-600 mb-3'>
                                    <li className='pb-2' >
                                        This Agreement shall not be deemed to constitute a partnership or joint venture or
                                        contract of employment between the Parties or a contract between principal and agent
                                        and there shall be no relationship of employer-employee or principal –agent between the
                                        Parties at any time during or after the currency of this Agreement.
                                    </li>
                                </ol>

                                <h1 className="fs18 ls4 fw-700 termsandconditionheader mb-3">MISCELLANEOUS</h1>

                                <ol type='1' className='fs16 t-grey-600 fw-600 mb-3'>
                                    <li className='pb-2' >
                                        The above terms and condition may be varied / amended in writing from time to time
                                        upon mutual consultation of the Parties.

                                        <li className='pb-2' >In case of any disputes, such dispute, if not resolved amicable between the Parties, shall
                                            be settled through arbitration to be held in Karachi under the provisions of the Arbitration
                                            Act, 1940.</li>
                                        <li className='pb-2' >If any provision or condition of this Agreement shall be held to be invalid or
                                            unenforceable by any court, or regulatory or self-regulatory agency or body, such
                                            invalidity or unenforceability shall attach only to such provision or condition. The
                                            validity of the remaining provisions and conditions shall not be affected thereby and this
                                            Agreement shall be carried out as if any such invalid or unenforceable provision or
                                            condition were not contained.</li>
                                        <li className='pb-2' >This Agreement shall continue to be valid unless terminated in accordance with
                                            provisions of this Agreement.</li>
                                        <li className='pb-2' >This Agreement shall be governed under the laws of the Islamic Republic of Pakistan.</li>
                                        <li className='pb-2' >This Agreement may be executed in any number of counterparts, and this has the same
                                            effect as if the signatures on the counterparts were on a single copy of this Agreement.
                                        </li>
                                    </li>
                                </ol>


                            </div>

                        </div>

                        <form onSubmit={nextStep} className="pt-3">
                            <div className="mb-1 pt-3 row">
                                <div className="col-12">

                                    <div>
                                        <div className="col-sm-12 col-md-10 my-auto ">
                                            <input
                                                className="form-check-input me-1 mb-1"
                                                type="checkbox"
                                                defaultChecked={values.aggrementtermsandConditions}
                                                onChange={handleChange}
                                                name="aggrementtermsandConditions"
                                                id="aggrementtermsandConditions"
                                            />
                                            <label
                                                className="form-check-label tc-plum fw-600 fs16 ps-3"
                                                htmlFor="aggrementtermsandConditions"
                                            >
                                                I accept all of the above terms & conditions.
                                            </label>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </form>

                        <form onSubmit={handleSubmit} className="pt-3">
                            <BottomNavigation first="Save & Exit" second="Accept" prevStep={prevStep} Nextdisabled={!(values.accountOpeningtermsandConditions && values?.termsandConditions && values?.aggrementtermsandConditions)} Loading={Loading} SaveLoading={SaveLoading} handleSubmit={handleSubmit} />

                        </form>


                        {/* <form className="pt-3">
                        <div className="mb-1 pt-3 row">
                            <div className="col-12">

                                <div>
                                    <div className="col-sm-12 col-md-10 my-auto ">
                                        <input
                                            className="form-check-input me-1 mb-1"
                                            type="checkbox"
                                            defaultChecked={values.accountOpeningtermsandConditions}
                                            onChange={handleChange}
                                            name="accountOpeningtermsandConditions"
                                            id="accountOpeningtermsandConditions"
                                        />
                                        <label
                                            className="form-check-label tc-plum fw-600 fs16"
                                            htmlFor="accountOpeningtermsandConditions"
                                        >
                                            I accept all of the above terms & conditions.
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-1 col-xl-4 text-end col-sm-8 Half2">



                            <button
                                className="btn-outlined fs16 px-1 px-md-3 py-01 py-md-2 mx-1 naviBtn text-nowrap"
                                type='button'

                            >
                                Back

                            </button>

                            <button
                                className="btn-filled fs16 px-1 px-md-3 py-01 py-md-2 mx-1 naviBtn disabledbutton"
                                type="submit"
                                disabled={!values.undertakingAccepted}
                            >
                                Accept
                            </button>
                        </div>
                    </form> */}




                    </div>


                </div>

            </div >
        </>
    );
};

export default TermsAndConditions;
