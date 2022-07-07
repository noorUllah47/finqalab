import { PlusCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Checkbox, DatePicker, Select } from "antd";
import moment from "moment";
import React from "react";
import NavigationBar from "../../Atoms/NavgationBar";
import ToolTip from "../../Atoms/Tooltip";

function Payment() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const { Option } = Select;

  return (
    <div>
      <NavigationBar step={0} />
      <div className=" formDiv  mt-5">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Payments</Breadcrumb.Item>

          <Breadcrumb.Item>New Payment Request</Breadcrumb.Item>
        </Breadcrumb>
        <div className="row ">
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
        <div className=" px-5  bg-white p-3">
          <div className="row broder-bottom pb-4">
            <div className=" col-12 col-md-4 ">
              <label htmlFor="JointPWRYES" className=" col-form-label fw-500">
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
                    id="gridRadios2"
                    value="option1"
                  />
                  <label class="form-check-label me-5" for="gridRadios2">
                    Competitive Bid{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-8 ">
              <div className=" d-flex flex-column mb-3 justify-content-end align-items-end">
                <label htmlFor="BirthDay" className="col-form-label fw-500">
                  Auction Date
                </label>
                <div className="mt-auto">
                  <DatePicker onChange={onChange} />
                </div>
              </div>
            </div>
          </div>
          <div className="broder-bottom pb-4 pt-4">
            <div className="row ">
              <div
                className="col-12 col-lg-1 col-sm-6 
             mb-3 d-flex flex-column"
              >
                <label htmlFor="BirthCity" className="col-form-label fw-500">
                  S. NO
                </label>
                <input className="form-control  mt-auto" />
              </div>
              <div className="col-12 col-sm-6   payment-input col-lg-3 mb-3 d-flex flex-column">
                <label htmlFor="BirthCity" className="col-form-label fw-500">
                  Instruement
                </label>
                <Select>
                  <Option key="Pib">PIB</Option>
                  <Option key="TBILL">TBILL</Option>
                </Select>
              </div>
              <div className="col-12 payment-input col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                <label htmlFor="BirthCity" className="col-form-label fw-500">
                  Tenor
                </label>
                <Select className="payment-fields ">
                  <Option key="Pib">3 Months</Option>
                  <Option key="TBILL"> 4 Months</Option>
                </Select>
              </div>
              <div className="col-12 col-sm-6 payment-input col-lg-4 mb-3 d-flex flex-column">
                <label htmlFor="BirthCity" className="col-form-label fw-500">
                  Face Value
                </label>
                <input
                  type="text"
                  name="faceValue"
                  className="form-control payment-fields mt-auto"
                  placeholder="Enter Value"
                  // value={values?.lastName}
                  // onChange={handleChange}
                  id="first Name"
                  // required={true}
                  title="Only Alphabets are allowed"
                />
              </div>
            </div>
            <PlusCircleFilled />
            <a className="ms-2 ">Add Bid</a>
          </div>
          <div className="calculator broder-bottom pt-5 pb-5">
            <div className="row ">
              <div className="col-12 col-md-6 ">
                <h3 className="pb-2">Calculator</h3>
                <p>
                  Please select an auction date for which you want to create a{" "}
                  <br /> payment request.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-md-6 col-12 ">
                    <label
                      htmlFor="BirthCity"
                      className="col-form-label fw-500"
                    >
                      Face Value
                    </label>
                    <input
                      type="text"
                      name="faceValue"
                      className="form-control mt-auto"
                      placeholder="Enter Value"
                      // value={values?.lastName}
                      // onChange={handleChange}
                      id="first Name"
                      // required={true}
                      title="Only Alphabets are allowed"
                    />
                  </div>
                  <div className="col-md-6 col-12 ">
                    <label
                      htmlFor="BirthCity"
                      className="col-form-label fw-500"
                    >
                      Last Average Yield
                    </label>
                    <input
                      type="text"
                      name="faceValue"
                      className="form-control mt-auto"
                      placeholder="Enter Value"
                      // value={values?.lastName}
                      // onChange={handleChange}
                      id="first Name"
                      // required={true}
                      title="Only Alphabets are allowed"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 col-12 ">
                    <label
                      htmlFor="BirthCity"
                      className="col-form-label fw-500"
                    >
                      Cheque Amount
                    </label>
                    <input
                      type="text"
                      name="faceValue"
                      className="form-control mt-auto"
                      placeholder="Enter Value"
                      // value={values?.lastName}
                      // onChange={handleChange}
                      id="first Name"
                      // required={true}
                      title="Only Alphabets are allowed"
                    />
                  </div>
                  <div className="col-md-6 col-12 ">
                    <label
                      htmlFor="BirthCity"
                      className="col-form-label fw-500"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      name="faceValue"
                      className="form-control mt-auto"
                      placeholder="Enter Value"
                      // value={values?.lastName}
                      // onChange={handleChange}
                      id="first Name"
                      // required={true}
                      title="Only Alphabets are allowed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="div d-flex mt-5">
              <Checkbox className="me-3"></Checkbox>

              <p>
                I/we hereby undertake to ensure the availability of requisite
                funds in the designated account of National Clearing Company of
                Pakistan Limited (a/c # 020341004590017 maintained with State
                Bank of Pakistan) for settlement of above transactions. In case
                where funds are not arranged due to any reason, the loss
                sustained by NCCPL on subsequent day including interest or bank
                charges levied on account of financing arrangement made by NCCPL
                in this respect shall be reimbursed to NCCPL instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 row justify-content-end pe-4 ">
        <div className=" col-4 ">
          <div className="d-flex ">
          <div className="ms-md-auto row p-0 max75ch">
          <div className=" col-6 col-sm my-2 order-2 order-sm-2" >
                        
                        <button
                            className="btn-filled fs16 px-3 py-1 mx-1 navBtn w-100"
                            type="button"
                            // onClick={() => props.prevStep()}
                        >
                            Submit

                        </button>
                    </div>
                    <div className=" col-6 col-sm my-2 order-3 order-sm-1" >
                    <button
                            className="btn-outlined fs16 px-3 py-1 mx-1 navBtn w-100"
                            type="button"
                            // disabled={props.SaveLoading}
                            // onClick={() => props.handleSubmit('saveExist')}
                        >

                           Cancel
                        </button>
                    </div>
                    
                    
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
