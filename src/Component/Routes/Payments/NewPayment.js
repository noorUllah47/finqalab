import React from "react";
import newbid from "../../../Assets/Img/newpayment.png";
function NewPayment() {
  return (
    <div>
      
        <div className=" bg-white mx-5  ">
          <div className="d-flex justify-content-center pt-5 " >
            <img src={newbid} classNames="pt-5" />
          </div>
          <div className="d-flex flex-column align-items-center text-center pb-5 ">
          <p className="mt-4 ">
          You have not made payments yet. Get started <br/> by submitting a payment request.</p>
          <button className="btn-filled fs16 px-3 py-1 mx-1 navBtn mt-4 "> New Payment Request</button>
          </div>
          
        </div>
      </div>
  );
}

export default NewPayment;
