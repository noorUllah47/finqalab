import { SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Modal, Space, Table } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import vector from "../../../Assets/Img/Vector.png"
import DeleteModal from "../Bid/DeleteModal";





const data = [
  {
    key: 1,
    hash: "IPS01",
    Created_Date: "5-7-2022 12:40PM",
    Instrument_Type: "T-Bill",
    Auction_Date: "18-May-22",
  Bank:"Standard Charterd",
    Mode: "IBFTB",
    Settlement_Date: " 19-May-22",
    Bank_Account :"BBBBAAAAAAAAAA",
    Payable_Amount:"1,000,000",
  },
  {
    key: 2,
    hash: "IPS01",

    Created_Date: "5-7-2022 12:40PM",
    Instrument_Type: "T-Bill",
    Auction_Date: "1-Jun-22",

  Bank:"Standard Charterd",
    Mode: "IBFT",
    Settlement_Date: "2-Jun-22",
    Bank_Account :"BBBBAAAAAAAAAA",
    Payable_Amount:"1,000,000"


  },
  {
    key: 3,
    hash: "IPS01",

    Created_Date: "5-7-2022 12:40PM",
    Instrument_Type: "T-Bill",
    Auction_Date: "15-Jun-22",
  Bank:"Standard Charterd",
    Mode: "Chq",
    Settlement_Date: "16-Jun-22",
    Bank_Account :"BBBBAAAAAAAAAA",
    Payable_Amount:"1,000,000"

  
  },
  {
    key: 4,
    hash: "IPS01",

    Created_Date: "5-7-2022 12:40PM",
    Instrument_Type: "T-Bill",
    Auction_Date: "29-Jun-22",
  Bank:"Standard Charterd",
    Mode: "RAAST",
    Settlement_Date: " 30-Jun-22",
    Bank_Account :"BBBBAAAAAAAAAA",
    Payable_Amount:"1,000,000"


  },
  {
    key: 5,
    hash: "IPS01",

    Created_Date: "5-7-2022 12:40PM",
    Instrument_Type: "T-Bill",
    Auction_Date: "13-Jul-22",
  Bank:"Standard Charterd",
    Mode: "Chq",
    Settlement_Date: "14-Jul-22",
    Bank_Account :"BBBBAAAAAAAAAA",
    Payable_Amount:"1,000,000"


  },
  {
    key: 6,
    hash: "IPS01",

    Created_Date: "5-7-2022 12:40PM",
    Instrument_Type: "T-Bill",
    Auction_Date: "27-Jul-22",
  Bank:"Standard Charterd",
    Mode: "IBFT",
    Settlement_Date: "28-Jul-22",
    Bank_Account :"BBBBAAAAAAAAAA",
    Payable_Amount:"1,000,000"

  
  },
  {
    key: 7,
    hash: "IPS01",

    Created_Date: "5-7-2022 12:40PM",
    Instrument_Type: "PIB",
    Auction_Date: "25-May-22",
  Bank:"Standard Charterd",
    Mode: "RAAST",
    Settlement_Date: "26-May-22",
    Bank_Account :"BBBBAAAAAAAAAA",
    Payable_Amount:"1,000,000"},
  
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const PaymentTable = () => {
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [searchText, setSearchText] = useState('');
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    // {
    //   title: "ID",
    //   dataIndex: "hash",
    //   width: 2,
    // },
    {
      title: "Created Date",
      dataIndex: "Created_Date",
      width: 4,
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },],
  ...getColumnSearchProps('Created_Date'),

    },
    
    {
      title: "Auction Date",
      
      dataIndex: "Auction_Date",
      sorter: {
        compare: (a, b) => new Date(a.Auction_Date) - new Date(b.Auction_Date),
        // multiple: 3,
      },
      width: 3,
  ...getColumnSearchProps('Auction_Date'),

    
  
    },
    {
      title: "Instrument Type",
      dataIndex: "Instrument_Type",
      sorter: (a, b) => a.Instrument_Type.localeCompare(b.Instrument_Type),
      // fixed: 'left',
      width: 4,
  ...getColumnSearchProps('Instrument_Type'),

    },
    {
      title: "Mode",
      dataIndex: "Mode",
      width: 2,
  ...getColumnSearchProps('Mode'),

    },
    {
  title:"Bank",
  dataIndex:"Bank",
  width:4,
  ...getColumnSearchProps('Bank'),

    },
    {
      title:"Bank Account #",
      dataIndex:"Bank_Account",
      width:4,
      ...getColumnSearchProps('Bank_Account'),

    // render:()=><p className="tc-parraot" >BBBBAAAAAAAAAA</p>

  
        },
        
    {
      title:"Payable Amount",
      dataIndex:"Payable_Amount",
      width:3,
      ...getColumnSearchProps('Payable_Amount'),

    },
    {
        title:"Status",
        dataIndex:"Bank_Account",
        width:3,
        ...getColumnSearchProps('Bank_Account'),
  
      render:()=><p className="tc-parraot" >Approved</p>
  
    
          },
    
  {
    title:"",
    dataIndex:"",
    width:1,
    render:()=><DeleteModal
    step1="Details"
    step2="Modify"
    step3="Delete"
    text="Are you sure you want to delete this payment request?"
    
    />
  
  }
  ];
return(
<>
  
  <Table
  className="mx-5 mb-3"
    columns={columns}
    dataSource={data}
    pagination={false}
    onChange={onChange}
    scroll={{
      x: 640,
      y: 515,
    }}
  />
  


  </>
)
};

export default PaymentTable;
