import React from 'react'
import BidNav from '../Bid/BidNav'
import {Input ,Tabs}  from "antd"
import BidTable from '../Bid/BidTable';
import PaymentTable from './paymentsTable';
import { useNavigate } from 'react-router-dom';
import SubLedger from '../SubLedger/SubLedger';

function AllPayment() {
    const { Search } = Input;
    const { TabPane } = Tabs;
    const navigate =useNavigate()
  return (
    <div>
        <BidNav/>
        <div className='container-fluid '>
        <div className="row mb-3 mx-5">
          <div className="col-md-6 col-12 ">
            <h2 className="fw-700 fs32 ">Payments</h2>
            <p className="tc-grey fw-500 fs30 mt-4 ">
            This is a record of your incoming and outgoing <br/>transactions with Next Capital.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="mt-5">
              <button className="btn-filled  navBtn ">New Payment Request</button>
        
            </div>
          </div>
          <div>
          <Tabs onChange={()=>{
            navigate("/subledger")
          }} defaultActiveKey="1" >
    <TabPane tab="All Payments" key="1">
    </TabPane>
    <TabPane  tab="Sub-Ledger" key="2">
    </TabPane>
   
  </Tabs>
          </div>
        </div>
        </div>
        <div className='mx-3' >

<PaymentTable />
        </div>
{/* <NewBid/> */}
{/* <NewPayment/> */}
    </div>
  )
}

export default AllPayment