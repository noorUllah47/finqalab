import { Table } from "antd";
const columns = [
  {
    title: "Instrument Type",
    dataIndex: "Instrument_Type",
    sorter: (a, b) => a.Instrument_Type.localeCompare(b.Instrument_Type),
    // fixed: 'left',
    width: 15,
  },
  {
    title: "Auction Date",
    dataIndex: "Auction_Date",
    sorter: {
      compare: (a, b) => new Date(a.Auction_Date) - new Date(b.Auction_Date),
      // multiple: 3,
    },
    width: 15,
  },
  {
    title: "Settlement Date",
    dataIndex: "Settlement_Date",
    width: 15,
  },
];
const data = [
  
  {
    key: 2,
    Instrument_Type: "T-Bill",
    Auction_Date: "15 June, 2022",
    Settlement_Date: "16 June, 2022",
  },
  {
    key: 3,
    Instrument_Type: "T-Bill",
    Auction_Date: "29 June, 2022",
    Settlement_Date: "30 June, 2022",
  },
  {
    key: 4,
    Instrument_Type: "T-Bill",
    Auction_Date: "13 July, 2022",
    Settlement_Date: "14 July, 20222",
  },
  {
    key: 5,
    Instrument_Type: "T-Bill",
    Auction_Date: "27 July, 2022",
    Settlement_Date: "28 July, 2022",
  },
  {
    key: 6,
    Instrument_Type: "T-Bill",
    Auction_Date: "10 August, 2022",
    Settlement_Date: "11 August, 2022",
  },
  {
    key: 7,
    Instrument_Type: "T-Bill",
    Auction_Date: "24 August, 2022",
    Settlement_Date: "25 August, 2022",
  },
  {
    key: 8,
    Instrument_Type: "PIB (Fixed Rate)",
    Auction_Date: "22 June, 2022",
    Settlement_Date: "23 June, 2022",
  },
  {
    key: 9,
    Instrument_Type: "PIB (Fixed Rate)",
    Auction_Date: "14 July, 2022",
    Settlement_Date: "15 July, 2022",
  },
  {
    key: 10,
    Instrument_Type: "PIB (Fixed Rate)",
    Auction_Date: "3 August, 2022",
    Settlement_Date: "4 August, 2022",
  },
  {
    key: 11,
    Instrument_Type: "PIB (Floating Rate)- Semi-annual",
    Auction_Date: "15 June, 2022",
    Settlement_Date: "16 June, 2022",
  },
  {
    key: 12,
    Instrument_Type: "PIB (Floating Rate)- Semi-annual",
    Auction_Date: "29 June, 2022",
    Settlement_Date: "30 June, 2022",
  },
  {
    key: 13,
    Instrument_Type: "PIB (Floating Rate)- Semi-annual",
    Auction_Date: "13 July, 2022",
    Settlement_Date: "14 July, 2022 ",
  },
  {
    key: 14,
    Instrument_Type: "PIB (Floating Rate)- Semi-annual",
    Auction_Date: "27 July, 2022",
    Settlement_Date: "28 July, 2022",
  },
  {
    key: 152,
    Instrument_Type: "PIB (Floating Rate)- Semi-annual",
    Auction_Date: "10 August, 2022",
    Settlement_Date: "11 August, 2022",
  },
  {
    key: 16,
    Instrument_Type: "PIB (Floating Rate)- Semi-annual",
    Auction_Date: "24 August, 2022",
    Settlement_Date: "25 August, 2022",
  },
  {
    key: 17,
    Instrument_Type: "PIB (Floating Rate)- Quarterly",
    Auction_Date: "15 June, 2022",
    Settlement_Date: "16 June, 2022",
  },
  {
    key: 18,
    Instrument_Type: "PIB (Floating Rate)- Quarterly",
    Auction_Date: "29 June, 2022 ",
    Settlement_Date: "30 June, 2022",
  },
  {
    key: 19,
    Instrument_Type: "PIB (Floating Rate)- Quarterly",
    Auction_Date: "13 July, 2022",
    Settlement_Date: "14 July, 2022 ",
  },
  {
    key: 20,
    Instrument_Type: "PIB (Floating Rate)- Quarterly",
    Auction_Date: "27 July, 2022",
    Settlement_Date: "28 July, 2022",
  },
  {
    key: 21,
    Instrument_Type: "PIB (Floating Rate)- Quarterly",
    Auction_Date: "10 August, 2022",
    Settlement_Date: "11 August, 2022",
  },
  {
    key: 22,
    Instrument_Type: "PIB (Floating Rate)- Quarterly",
    Auction_Date: "24 August, 2022",
    Settlement_Date: "25 August, 2022",
  },
  {
    key: 23,
    Instrument_Type: "Ijara Sukuk- 5 Year",
    Auction_Date: "20 June, 2022",
    Settlement_Date: "23 June, 2022",
  },
  {
    key: 24,
    Instrument_Type: "Ijara Sukuk- 5 Year",
    Auction_Date: "13 July, 2022",
    Settlement_Date: "19 July, 2022",
  },
  {
    key: 25,
    Instrument_Type: "Ijara Sukuk- 5 Year",
    Auction_Date: "4 August, 2022",
    Settlement_Date: "10 August, 2022",
  },
  
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const BiddingTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    onChange={onChange}
    scroll={{
      x: 640,
      y: 515,
    }}
  />
);

export default BiddingTable;
