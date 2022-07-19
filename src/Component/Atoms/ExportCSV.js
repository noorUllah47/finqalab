import React, { useEffect, useState } from "react";
import Form from "./DesignForm";
import Navbar from "../Atoms/Navbar";
import GetData from "../api/GetData";
import PaginationComp from "./Pagination/Pagination";
import { SearchOutlined } from '@ant-design/icons';
import { Table, Button, Input, Space, message } from 'antd';
import View from "../Atoms/View";
import { CSVLink } from "react-csv"

const form2 = []

export default function ExportCsv() {
    const [serachTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false)
    const [pgNum, setPgNum] = useState(1);            //currentpage
    const [total, setTotal] = useState(2)             //total pages of all entries initially set 2
    const [Data, setData] = useState([])
    const [CSVData, setCSVData] = useState([])
    const [SData, setSData] = useState([])              //consist of Data of current Page
    const [perPage, setPerPage] = useState(10)         //entries per page
    const [submission, setSubmission] = useState(0)   //total Submissions
    const [searchResult, setsearchResult] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const [searchedColumn, setSearchedColumn] = useState([]);



    useEffect(() => {
        setLoading(true)
        getData()
    }, [pgNum]);



 

    const handleSearch1 = (selectedKeys, confirm, dataIndex) => {
        confirm();
     
    };

    const handleReset = clearFilters => {
        clearFilters();
        // this.setState({ searchText: '' });
        setSearchText('')

    };

    const getData = () => {



        const res = GetData.FormSubmitted(pgNum, perPage)
        res.then(value => {


            // setTotal(value.data.totalPages)

            let reversedata = value.data.data.reverse()

            let newParseArray = []
            reversedata.map(val => {

                newParseArray.push({
                    firstName: val?.firstName,
                    phoneNumber: val?.phoneNumber,
                    email: val?.email,
                    CNIC: val?.CNIC,
                    IssueDate: val?.IssueDate,
                    status: val?.status
                })

            })


            setData(reversedata)
            setCSVData(newParseArray)

            // setSubmission(value.data.totalElements)
            setLoading(false)
        })
            .catch(error => {
                console.log(error.response)

            })
    }

   

    function calcommonChange(v) {
        let encodedForSpecialCharacter = encodeURIComponent(v)

        setSearchTerm(v)

        const res = GetData.FormSearchSubmitted(pgNum, perPage, encodedForSpecialCharacter)
        res.then(value => {


            setTotal(value.data.totalPages)
            let reversedata = value.data.data.reverse()
            setData(reversedata)

            let newParseArray = []
            reversedata.map(val => {

                newParseArray.push({
                    firstName: val?.firstName,
                    phoneNumber: val?.phoneNumber,
                    email: val?.email,
                    CNIC: val?.CNIC,
                    IssueDate: val?.IssueDate,
                    status: val?.status
                })

            })


            setData(reversedata)
            setCSVData(newParseArray)

            setSubmission(value.data.totalElements)
            setLoading(false)
            setsearchResult(value.data.data)
        })
            .catch(error => {
                console.log(error.response)
            })

    }


  
    useEffect(() => {



    }, [serachTerm, searchResult])

  



    return (
        <>
            {/* <Navbar /> */}
            <div className="d-flex justify-content-center m20">
                <CSVLink
                    filename={"Customer_Table.csv"}
                    data={CSVData}
                    className="btn btn-primary"
                    onClick={() => {
                        message.success("The file is downloading")
                    }}
                >
                    Export IPS Users List

                </CSVLink>
            </div>
            
        </>
    );
}

