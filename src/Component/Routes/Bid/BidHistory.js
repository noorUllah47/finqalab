import React from 'react'
import BidNav from './BidNav'
import {Input} from "antd"
import BidTable from './BidTable';
import NewBid from './NewBid';
import NewPayment from '../Payments/NewPayment';
function BidHistory() {
    const { Search } = Input;
  return (
    <div>
        <BidNav/>
        <div className='container-fluid '>
        <div className="row mb-3 mx-5">
          <div className="col-md-6 col-12 ">
            <h2 className="fw-700 fs32 ">Bid History - Primary Auction</h2>
            <p className="tc-grey fw-500 fs30 mt-4 ">
              This is a record of all bids you’ve submitted to us for
              participation in <br /> primary auctions managed by the State Bank
              of Pakistan.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="mt-5">
              <button className="btn-filled  navBtn "> New Bid</button>
            </div>
          </div>
        </div>
        </div>
        <div className='mx-3' >

<BidTable />
        </div>
{/* <NewBid/> */}
{/* <NewPayment/> */}
    </div>
  )
}

export default BidHistory