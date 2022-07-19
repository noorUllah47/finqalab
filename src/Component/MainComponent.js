import IPSForm from "./Routes/Form/IPSForm";
import SignUp from "./Routes/Account/SignUp";
import Login from "./Routes/Account/Login";
import ProtectedRoutes from "../middleWare/ProtectedRouting/ProtectedRute";
import { Routes, Route, Navigate } from 'react-router-dom'
import SentEmail from "./Routes/Account/SentEmail";
import EmailVerified from "./Routes/Account/EmailVerified";
import ForgotPass from "./Routes/Account/ForgotPassword/ForgotPass";
import PasswordResetForm from "./Routes/Account/ForgotPassword/PasswordResetForm";
import IPSFormSubmitted from "./Routes/Form/FormSubmitted";
import ForgotPassApplied from "./Routes/Account/ForgotPassword/ForgotPassApplied";
import SuccessPasswordReset from "./Routes/Account/ForgotPassword/SuccessPasswordReset";
import Dashboard from "./Routes/Dashboard/Dashboard";
import PaymentBiddings from "./Routes/Biddings/Biddings";
import Usp from "./Routes/Usp/Usp";
import DirectLanding from "./Routes/Form/DirectLanding";
import BidNav from "./Routes/Bid/BidNav";
import BidHistory from "./Routes/Bid/BidHistory";
import Payment from "./Routes/Payments/Payment";
import NewBid from "./Routes/Bid/NewBid";
import AllPayment from "./Routes/allPayment/allPayment";
import SubLedger from "./Routes/SubLedger/SubLedger";



const MainComponent = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<SignUp />} />
            <Route path='/SentEmail' element={<SentEmail />} />
            <Route path='/EmailVerified' element={<EmailVerified />} />
            <Route path='/ForgotPass' element={<ForgotPass />} />
            <Route path='/Email_sent_for_new_password/:email' element={<ForgotPassApplied />} />
            <Route path='/ProvideNewPass/:uid' element={<PasswordResetForm />} />
            <Route path='/PasswordReset_Successfully' element={<SuccessPasswordReset />} />
            <Route path='/usp' element={<Usp />} />


            <Route element={<ProtectedRoutes />}>
                {/* <Route path="/IPSForm" element={<IPSForm />} /> */}
                <Route path="/IPSForm" element={<DirectLanding />} />
                <Route path="/Bid" element={<BidHistory />} />
                <Route path="/Payments" element={<AllPayment />} />



                <Route path="/FormSubmitted" element={<IPSFormSubmitted />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Biddings" element={<PaymentBiddings />} />
                <Route path="/Subledger" element={<SubLedger />} />


            </Route>
            <Route
                path="*"
                element={<Navigate to="/Dashboard" replace />}
            />
        </Routes>
    );
}

export default MainComponent;