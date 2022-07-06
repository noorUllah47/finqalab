import { Select, Tooltip, Button, Form, Input, Modal } from "antd";
import ToolTip from "../../Atoms/Tooltip";
import { useState } from "react";

const { Option } = Select;

const BankMandate = ({
  handleDrctChange,
  prevStep,
  nextStep,
  handleChange,
  values,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="row mt-40">
      <div className="col-12 col-sm-6 col-lg-4  d-flex flex-column mb-3">
        <label htmlFor="BankTitle" className="col-12 col-form-label fw-500">
          Account Title
          <ToolTip title="This should match EXACTLY to your title on your cheque book or bank statement. Your bank account should be in your name. We will not accept funds from third parties" />
        </label>
        <input
          type="text"
          name="BankTitle"
          className="form-control mt-auto"
          placeholder="Enter Account Title"
          value={values.BankTitle}
          onChange={handleChange}
          id="BankTitle"
          required
        />
      </div>

      <div className="col-12  col-sm-6 col-lg-4 d-flex flex-column mb-3">
        <label htmlFor="BankNum" className="col-12 col-form-label fw-500">
          Bank Account Number
          <ToolTip title="This should be your 24-character alpha-numeric IBAN number as displayed on your cheque book or your bank statement" />
        </label>
        <input
          type="text"
          name="BankNum"
          className="form-control mt-auto"
          placeholder="Enter Account Number"
          value={values.BankNum}
          onChange={handleChange}
          id="BankNum"
          maxLength={24}
          minLength={24}
          required
        />
      </div>
      {/* <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
            <label
                htmlFor="BankBranch"
                className="col-12 col-form-label fw-500"
            >
                Bank and Branch Name with Code
            </label>
            <input
                type="text"
                name="BankBranch"
                className="form-control mt-auto"
                placeholder="Bank Branch"
                value={values.BankBranch}
                onChange={handleChange}
                id="BankBranch"
                required
            />
        </div> */}
      <div className="col-12 col-lg-12  d-flex flex-column mb-3">
        <label htmlFor="BankAddress" className="col-12 col-form-label fw-500 pb-0 d-flex justify-content-between">
        Bank Branch Name & Address
{/*         
            <Tooltip
              overlayStyle={{ maxWidth: "350px" }}
              title={
                <>
                  Please provide the address for your bank branch. For your
                  convenience we have included an official list from various
                  banks below. Please note that this list is only updated
                  periodically and not maintained by Next Capital Limited.
                  Standard Chartered: https://www.sc.com/pk/atm-branch-locator/
                  Bank Alfalah: https://www.bankalfalah.com/branch-atm-locator/
                  Meezan Bank: https://www.meezanbank.com/branch-locator/ HBL:
                  https://www.hbl.com/branch-locator UBL:
                  https://www.ubldigital.com/Branches MCB:
                  https://www.mcb.com.pk/branch-locator/branch Allied Bank:
                  https://www.abl.com/services/branch-network/ Habib Metro:
                  https://www.habibmetro.com/atm-branch-locator/ Bank Al Habib:
                  https://www.bankalhabib.com/locate-us Bank of Punjab:
                  https://www.bop.com.pk/Branch-Network National Bank of
                  Pakistan: https://www.nbp.com.pk/brntwrk/OnlineBrFinder.aspx
                  Askari Bank: https://askaribank.com/find-us/ Al Baraka:
                  https://www.albaraka.com.pk/store-locator/bank-and-atm/index.php
                  BankIslami Pakistan:
                  https://bankislami.com.pk/atm-branch-locator/ Dubai Islamic
                  Bank:
                  https://www.dibpak.com/wp-content/uploads/2020/03/DIBPL-OPEN-BRANCH-LIST.pdf
                  Faysal Bank: https://www.faysalbank.com/en/branch-locator/
                </>
              }
            >
              <span className="ms-3">
                <HelpIcon />
              </span>
           
            </Tooltip>
          */}
    {/* <ToolTip title="Please provide the address for your bank branch. For your
                  convenience we have included an official list from various
                  banks below. Please note that this list is only updated
                  periodically and not maintained by Next Capital Limited.
                  Standard Chartered: https://www.sc.com/pk/atm-branch-locator/
                  Bank Alfalah: https://www.bankalfalah.com/branch-atm-locator/
                  Meezan Bank: https://www.meezanbank.com/branch-locator/ HBL:
                  https://www.hbl.com/branch-locator UBL:
                  https://www.ubldigital.com/Branches MCB:
                  https://www.mcb.com.pk/branch-locator/branch Allied Bank:
                  https://www.abl.com/services/branch-network/ Habib Metro:
                  https://www.habibmetro.com/atm-branch-locator/ Bank Al Habib:
                  https://www.bankalhabib.com/locate-us Bank of Punjab:
                  https://www.bop.com.pk/Branch-Network National Bank of
                  Pakistan: https://www.nbp.com.pk/brntwrk/OnlineBrFinder.aspx
                  Askari Bank: https://askaribank.com/find-us/ Al Baraka:
                  https://www.albaraka.com.pk/store-locator/bank-and-atm/index.php
                  BankIslami Pakistan:
                  https://bankislami.com.pk/atm-branch-locator/ Dubai Islamic
                  Bank:
                  https://www.dibpak.com/wp-content/uploads/2020/03/DIBPL-OPEN-BRANCH-LIST.pdf
                  Faysal Bank: https://www.faysalbank.com/en/branch-locator/" /> */}
          
            <span
            className="col-form-label modal_span "
              // onClick={}
              onClick={() => setModalVisible(true)}
            >
              {" "}
              Find Branch Address
            </span>
        
        </label>
        <input
          type="text"
          name="BankAddress"
          className="form-control mt-auto"
          placeholder="Enter Bank Branch Name & Address"
          value={values.BankAddress}
          onChange={handleChange}
          id="BankAddress"
          required
        />
      </div>

      <Modal
        // title="Vertically centered modal dialog"
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <h3 className="modal_heading">
          Branch Codes
          <br />
        </h3>
        <p className="pt-3">
          Please select any one of the following banks for to view their bank
          branch codes.
        </p>
        <Form layout="vertical">
          <Form.Item label="Banks">
            <Select defaultValue="Select any bank" onChange={handleChange}>
              <Option value="standard"><a className="bankModal_a" href=" https://www.sc.com/pk/atm-branch-locator/" target="_blank"> Standard Chartered </a></Option>
              <Option value="alfalah"><a className="bankModal_a" href=" https://www.bankalfalah.com/branch-atm-locator/" target="_blank">  Bank Alfalah</a></Option>

              <Option value="meezan"><a className="bankModal_a" href=" https://www.meezanbank.com/branch-locator/" target="_blank"> Meezan Bank</a></Option>
              <Option value="HBL"><a className="bankModal_a" href=" https://www.hbl.com/branch-locator" target="_blank"> HBL</a></Option>
              <Option value="UBL"><a className="bankModal_a" href=" https://www.ubldigital.com/Branches" target="_blank"> UBL</a></Option>
              <Option value="MCB"><a className="bankModal_a" href=" https://www.mcb.com.pk/branch-locator/branch" target="_blank">  MCB</a></Option>
              <Option value="Allied"><a className="bankModal_a" href=" https://www.abl.com/services/branch-network/" target="_blank">   Allied Bank</a></Option>
              <Option value="Habib"><a className="bankModal_a" href=" https://www.habibmetro.com/atm-branch-locator/" target="_blank">   Habib Metro</a></Option>
              <Option value="AL habib"><a className="bankModal_a" href=" https://www.bankalhabib.com/locate-us" target="_blank">  Bank Al Habib</a></Option>
              <Option value="BOP"><a className="bankModal_a" href=" https://www.bop.com.pk/Branch-Network" target="_blank">  Bank of Punjab</a></Option>
              <Option value="NBP"><a className="bankModal_a" href=" https://www.nbp.com.pk/brntwrk/OnlineBrFinder.aspx" target="_blank">   National Bank of Pakistan</a></Option>
              <Option value="askari"><a className="bankModal_a" href=" https://askaribank.com/find-us/" target="_blank">  Askari Bank</a></Option>
              <Option value="Al baraka"><a className="bankModal_a" href=" https://www.albaraka.com.pk/store-locator/bank-and-atm/index.php" target="_blank">  Al Baraka</a></Option>
              <Option value="Islami"><a className="bankModal_a" href=" https://bankislami.com.pk/atm-branch-locator/" target="_blank">   BankIslami Pakistan</a></Option>
              <Option value="Dubai"><a className="bankModal_a" href=" https://www.dibpak.com/wp-content/uploads/2020/03/DIBPL-OPEN-BRANCH-LIST.pdf" target="_blank">   Dubai Islamic Bank</a></Option>
              <Option value="faysal"><a className="bankModal_a" href=" https://www.faysalbank.com/en/branch-locator/" target="_blank">  Faysal Bank</a></Option>




             
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BankMandate;

const HelpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 15C9.45 15 9 14.55 9 14V10C9 9.45 9.45 9 10 9C10.55 9 11 9.45 11 10V14C11 14.55 10.55 15 10 15ZM11 7H9V5H11V7Z"
      fill="#D2D6DC"
    />
  </svg>
);
