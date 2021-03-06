import React from "react";
import { Button, Dropdown, Menu, Modal, Space, Table } from "antd";
import { useState } from "react";
import vector from "../../../Assets/Img/Vector.png";
function DeleteModal({step1,step2,step3,text}) {
  const [DeleteModal, setDeleteModal] = useState(false);
  const handleCloseClick = () => {
    setDeleteModal(false);
  };
  const showModal = () => {
    setDeleteModal(true);
  };
  const menu = (
    <Menu
      items={[
        {
          label: <p className="me-3 fw-600 fs25 mb-1 pt-2 bid_menu">{step1}</p>,
          key: "0",
        },
        {
          type: "divider",
        },
        {
          label: <p className="me-3 fw-600  pt-2 mb-1 fs25 bid_menu">{step2}</p>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: (
            <p
              onClick={showModal}
              className="me-5 fw-600 fs25 pt-2 mb-1 ms-4 ps-1 bid_menu"
            >
              {step3}
            </p>
          ),
          key: "3",
        },
      ]}
    />
  );
  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <img src={vector} />

            {/* <DownOutlined /> */}
          </Space>
        </a>
      </Dropdown>

      <Modal
        visible={DeleteModal}
        onOk={handleCloseClick}
        onCancel={handleCloseClick}
        centered
        footer={
          <>
            <div className="row">
              <div className="col">
                <Button
                  key="submit"
                  className="w-100 tc_orange deleteModal-btn"
                  type="primary "
                  onClick={handleCloseClick}
                >
                  Delete
                </Button>
              </div>
              <div className="col">
                <Button
                  key="submit"
                  type=" w-100 btn-outlined deleteModal-btn bg-light"
                  onClick={handleCloseClick}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </>
        }
      >
        <h1 className="fs24 ls4 fw-800 t-grey-800 mb-3 text-center">{text}</h1>

        <p className="fw-500 fs16 ms-auto">
        </p>
      </Modal>
    </div>
  );
}

export default DeleteModal;
