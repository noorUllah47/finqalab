import React from "react";
import BidNav from "./BidNav";
import newbid from "../../../Assets/Img/newbid.png";
function NewBid() {
  return (
    <div>
      <div className="container-fluid ">
        
        <div className=" bg-white mx-5  ">
          <div className="d-flex justify-content-center pt-5 " >
            <img src={newbid} classNames="pt-5" />
          </div>
          <div className="d-flex flex-column align-items-center text-center pb-5 ">
          <p className="mt-4 ">
            You don’t have any bids yet. Get started by submitting a <br/> bid for the
            next upcoming auction.
          </p>
          <button className="btn-filled fs16 px-3 py-1 mx-1 navBtn mt-4">Add New Bid</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default NewBid;
