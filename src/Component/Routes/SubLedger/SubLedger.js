import React from 'react'
import BidNav from '../Bid/BidNav'
import {Input} from "antd"
import BidTable from '../Bid/BidTable';
import LedgerTable from './LedgerTable';
import { DownloadOutlined } from '@ant-design/icons';
import download from "../../../Assets/Img/down.png"
function SubLedger() {
    const { Search } = Input;
  return (
    <div>
        <BidNav/>
        <div className='container-fluid '>
        <div className="row mb-3 mx-5">
          <div className="col-md-6 col-12 ">
            <h2 className="fw-700 fs32 ">Sub Ledger</h2>
            <p className="tc-grey fw-500 fs30 mt-4 ">
            This is a record of your incoming and outgoing<br/>transactions with Next Capital.  </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="mt-5 d-flex justify-content-end">
              <button className="btn-filled bg-light text-dark  navBtn align-items-baseline p-2">Download PDF <img className='mx-2' src={download} /></button>
        
            </div>
            
          </div>
        </div>
        </div>
        <div className='mx-3' >

<LedgerTable />
        </div>
{/* <NewBid/> */}
{/* <NewPayment/> */}
    </div>
  )
}

export default SubLedger