import { Breadcrumb, DatePicker } from "antd";
import moment from "moment";
import React from "react";
import NavigationBar from "../../Atoms/NavgationBar";
import ToolTip from "../../Atoms/Tooltip";

function Payment() {
  return (
    <div>
      <NavigationBar step={0} />
      <div className="mx-5 mt-5">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Payments</Breadcrumb.Item>

          <Breadcrumb.Item>New Payment Request</Breadcrumb.Item>
        </Breadcrumb>
        <div className="row">
          <div className="col-md-6 col-12 ">
            <h2 className="fw-700 fs32 mt-4">Auction Bidding Instruction</h2>
            <p className="tc-grey fw-500 fs30 mt-4 ">
              Pursuant to the tender notice published by the State Bank of
              Pakistan for the sale of government securities, I/we, would like
              to apply for purchase of the following.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <div className="mt-5 d-flex justify-content-end">
              <p>00IPS-BS00213</p>
            </div>
          </div>
        </div>
        <div className="formDiv p-3">
          <div className="row">
            <div className="col-md-4 ">
              <label
                htmlFor="JointPWRYES"
                className="col-12 col-form-label fw-500"
              >
                Choose your bid
                <ToolTip title="Please input your name EXACTLY as it appears on your CNIC, SNIC, NICOP, POC, ARC or Passport" />
              </label>
              <div className="d-flex">
                <div class="form-check me-3  p-1 bid-radio">
                  <input
                    class="form-check-input mx-1  "
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                  />
                  <label class="form-check-label me-5" for="gridRadios1">
                    Non-Competitive Bid
                  </label>
                </div>
                <div class="form-check me-3  p-1 bid-radio">
                  <input
                    class="form-check-input mx-1"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                  />
                  <label class="form-check-label me-5" for="gridRadios1">
                    Competitive Bid{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-8 ">
            <div className=" d-flex justify-content-end">
            <label
                htmlFor="JointPWRYES"
                className="col-12 col-form-label fw-500"
              >
                Choose your bid
              </label>
              <DatePicker
                        className="form-control"
                        // onChange={(date, dateString) => {
                        //   handleDrctChange("BirthDay", dateString);
                        // }}
                        defaultPickerValue={moment(
                          new Date().setFullYear(new Date().getFullYear() - 18)
                        )}
                        format="DD-MM-YYYY"
                        showToday={false}
                        defaultValue={12-3-2010}
                        
                      />
            </div>
            
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
