import { Table } from 'antd';
const columns = [
    {
        title: 'Instrument Type',
        dataIndex: 'Instrument_Type',
        sorter: (a, b) => a.Instrument_Type.localeCompare(b.Instrument_Type),
        // fixed: 'left',
        width: 15,
    },
    {
        title: 'Auction Date',
        dataIndex: 'Auction_Date',
        sorter: {
            compare: (a, b) => new Date(a.Auction_Date) - new Date(b.Auction_Date),
            // multiple: 3,
        },
        width: 15,
    },
    {
        title: 'Settlement Date',
        dataIndex: 'Settlement_Date',
        width: 15,
    },
   
];
const data = [
    {
        key: 1,
        Instrument_Type: 'T-Bill',
        Auction_Date: "18-May-22",
        Settlement_Date: " 19-May-22",
        
    },
    {
        key: 2,
        Instrument_Type: 'T-Bill',
        Auction_Date: "1-Jun-22",
        Settlement_Date: "2-Jun-22",
        
    }, {
        key: 3,
        Instrument_Type: 'T-Bill',
        Auction_Date: "15-Jun-22",
        Settlement_Date: "16-Jun-22",
        
    }, {
        key: 4,
        Instrument_Type: 'T-Bill',
        Auction_Date: "29-Jun-22",
        Settlement_Date: " 30-Jun-22",
        
    }, {
        key: 5,
        Instrument_Type: 'T-Bill',
        Auction_Date: "13-Jul-22",
        Settlement_Date: "14-Jul-22",
        
    }, {
        key: 6,
        Instrument_Type: 'T-Bill',
        Auction_Date: "27-Jul-22",
        Settlement_Date: "28-Jul-22",
        
    }, {
        key: 7,
        Instrument_Type: 'PIB',
        Auction_Date: "25-May-22",
        Settlement_Date: "26-May-22",
        
    }, {
        key: 8,
        Instrument_Type: 'PIB',
        Auction_Date: "22-Jun-22",
        Settlement_Date: "23-Jun-22",
        
    }, {
        key: 9,
        Instrument_Type: 'PIB',
        Auction_Date: "20-Jul-22",
        Settlement_Date: "21-Jul-22",
        
    }, {
        key: 10,
        Instrument_Type: 'PIB (Semi-Annual)',
        Auction_Date: "18-May-22",
        Settlement_Date: "19-May-22",
            }, {
        key: 11,
        Instrument_Type: 'PIB (Semi-Annual)',
        Auction_Date: "1-Jun-22",
        Settlement_Date: "2-Jun-22",
            }, {
        key: 12,
        Instrument_Type: 'PIB (Semi-Annual)',
        Auction_Date: "15-Jun-22 ",
        Settlement_Date: "16-Jun-22",
            }, {
        key: 13,
        Instrument_Type: 'PIB (Semi-Annual)',
        Auction_Date: "29-Jun-22",
        Settlement_Date: "30-Jun-22 ",
            }, {
        key: 14,
        Instrument_Type: 'PIB (Semi-Annual)',
        Auction_Date: "13-Jul-22",
        Settlement_Date: "14-Jul-22",
            }, {
        key: 152,
        Instrument_Type: 'PIB (Semi-Annual)',
        Auction_Date: "27-Jul-22",
        Settlement_Date: "28-Jul-22",
            }, {
        key: 16,
        Instrument_Type: 'PIB (Quarterly )',
        Auction_Date: "18-May-22",
        Settlement_Date: "19-May-22",
            }, {
        key: 17,
        Instrument_Type: 'PIB (Quarterly )',
        Auction_Date: "1-Jun-22",
        Settlement_Date: "2-Jun-22",
            }, {
        key: 18,
        Instrument_Type: 'PIB (Quarterly )',
        Auction_Date: "15-Jun-22 ",
        Settlement_Date: "16-Jun-22",
            }, {
        key: 19,
        Instrument_Type: 'PIB (Quarterly )',
        Auction_Date: "29-Jun-22",
        Settlement_Date: "30-Jun-22 ",
            }, {
        key: 20,
        Instrument_Type: 'PIB (Quarterly )',
        Auction_Date: "13-Jul-22",
        Settlement_Date: "14-Jul-22",
            }, {
        key: 15,
        Instrument_Type: 'PIB (Quarterly )',
        Auction_Date: "27-Jul-22",
        Settlement_Date: "28-Jul-22",
            },
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const BiddingTable = () => <Table columns={columns} dataSource={data} pagination={false} onChange={onChange}
    scroll={{
        x: 640,
        y: 515
    }} />;

export default BiddingTable;