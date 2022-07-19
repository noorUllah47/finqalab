import { Breadcrumb, DatePicker } from 'antd';
import { useState } from 'react';
import Arrow from '../../../Assets/Img/Arrow.svg'
import Question from '../../../Assets/Img/Question.svg'
import Plus from '../../../Assets/Img/Plus.svg'
import NavigationBar from '../../Atoms/NavgationBar';
import { Select } from 'antd';
import ToolTip from '../../Atoms/Tooltip';


const { Option } = Select;
const PaymentBiddings = () => {

    const [type, setType] = useState('nonCompitativeBid')
    const [justUpdate, setjustUpdate] = useState('')
    const [Date, setDate] = useState('')
    const [Security, setSecurity] = useState('')
    const [Tenor, setTenor] = useState('')
    const [FValue, setFValue] = useState('')
    const [YValue, setYValue] = useState('')
    const [Bids, setBids] = useState([])
    const [Sr, setSr] = useState(Bids.length + 1)

    const [Calculation, setCalculation] = useState({
        LstAvg: "",
        FValue: "",
        YValue: "",
        chqAmount: "",
        Price: ""
    })
    const [Undertaking, setUndertaking] = useState(false)


    const handleChartChange = (event) => {
        const { name, value } = event.target
        setCalculation({ ...Calculation, [name]: value })

    }

    const Securities = [
        { value: "Treasury Bills", label: "Treasury Bills" },
        { value: "Treasury Bills2", label: "Treasury Bills2" },
        { value: "Treasury Bills3", label: "Treasury Bills3" },
    ];
    const Tenors = [
        { value: "3 Months", label: "3 Months" },
        { value: "6 Months", label: "6 Months" },
        { value: "9 Months", label: "9 Months" },
    ];

    const AddBid = () => {

        if (Security !== "" && Tenor !== "" && FValue !== "") {
            // const random = Math.floor(100000 + Math.random() * 900000);
            const newBid = {
                Sr: Sr,
                Security: Security,
                Tenor: Tenor,
                FValue: FValue,
                YValue: YValue
            }
            Bids.push(newBid)
            setSecurity("")
            setTenor("")
            setFValue("")
            setYValue("")
            setSr(Bids.length + 1)
        }
    }


    const onUpdateBid = (id, name, value) => {
        console.log({ id, name, value })
        const newId = parseInt(id);
        console.log({ newId })
        var array = Bids;
        console.log({ array })
        array[newId - 1][name] = value
        console.log({ array })
        setBids(array)
        setjustUpdate(Math.random())
    }

    const renderBids = Bids.map(each => (
        <>

            <div className="col-1  mt-2">

                <input
                    type="text"
                    name="Sr"
                    className="form-control-bidding w-75 border-0 br-8 fs16 fw-600"
                    placeholder="Sr"
                    onChange={(e) => { setSr(e.target.value) }}
                    value={each.Sr}
                    id="Sr"
                    required
                    readOnly
                />
            </div>
            <div className="col-11 mt-2">
                <div className="row">
                    <div className={` col-${type == "nonCompitativeBid" ? '4' : '3'} fs14 tc-grey fw-500 mb-0`}>
                        <Select defaultValue={each.Security?.children ? Security?.children : undefined} value={each.Security?.children} placeholder="Select any one" onSelect={(value, event) => onUpdateBid(each.Sr, 'Security', event)} rules={[{ required: true }]}>

                            {Securities.map(each => (
                                <Option key={each.value}>{each.label}</Option>
                            ))}

                        </Select>
                    </div>
                    <div className={`col-${type == 'nonCompitativeBid' ? '4' : '3'}`}>
                        <Select defaultValue={each.Tenor?.children ? Tenor?.children : undefined} value={each.Tenor?.children} placeholder="Select any one" onSelect={(value, event) => onUpdateBid(each.Sr, 'Tenor', event)} rules={[{ required: true }]}>

                            {Tenors.map(each => (
                                <Option key={each.value}>{each.label}</Option>
                            ))}

                        </Select>
                    </div>
                    <div className={`col-${type == 'nonCompitativeBid' ? '4' : '3'}`}>
                        <input
                            type="text"
                            name="FValue"
                            className="form-control-bidding w-75 border-0 br-8 fs16 fw-600 w-100"
                            placeholder="Face Value"
                            onChange={(e) => { onUpdateBid(each.Sr, 'FValue', e.target.value) }}
                            value={each.FValue}
                            id="FValue"
                            required
                        />
                    </div>
                    {type !== 'nonCompitativeBid' && <div className="col-3">
                        <input
                            type="text"
                            name="YValue"
                            className="form-control-bidding w-75 border-0 br-8 fs16 fw-600 w-100"
                            placeholder="Face Value"
                            onChange={(e) => { onUpdateBid(each.Sr, 'YValue', e.target.value) }}
                            value={each.YValue}
                            id="YValue"
                            required
                        />
                    </div>}
                </div>
            </div>
        </>
    ))



    return (
        <>
            <NavigationBar step={0} />


            {console.log({ Bids })}

            <div className="container Bidding">
                <div className="mt-40">
                    <Breadcrumb separator={<img src={Arrow} alt='' />}>
                        <Breadcrumb.Item>Payments</Breadcrumb.Item>
                        <Breadcrumb.Item>New Payment Request</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="mt-3">
                    <p className="tc-plum fw-700 fs32" >Auction Bidding Instruction</p>
                    <p className="tc-grey fw-500 fs16 max75ch" >Pursuant to the tender notice published by the State Bank of Pakistan for the sale of
                        government securities, I/we, would like to apply for purchase of following</p>
                </div>
                <div className="account_main mt-5 bg-white br-8 px-0 mb-5 pb-0">
                    <div className="row px-4 w-100 mx-auto">
                        <div className="col-9">
                            <div className="d-flex">
                                <p className="fs16 tc-grey fw-500 mb-0" >Choose your bid</p>
                                <img className="ms-2" src={Question} alt='' />
                            </div>
                            <div>
                                <form className="MainAcc w-100">
                                    <ul className="list-group row flex-row w-100">
                                        <div className="col-lg-6 px-0">
                                            <li className="list-group-item ms-0 ps-0 w-100">
                                                <div className={`itemm py-2 ${type == 'nonCompitativeBid' ? 'Selected' : ''}`}>
                                                    <input
                                                        type="radio"
                                                        className="form-check-input me-3 ms-0 my-0 "
                                                        id="nonCompitativeBid"
                                                        value="nonCompitativeBid"
                                                        name="AccountType"
                                                        onChange={() => setType('nonCompitativeBid')}
                                                        required
                                                        // onClick={nextStep}
                                                        defaultChecked={true}
                                                        aria-label="..." />
                                                    <label className="fs16 fw-600 pb-0" htmlFor="nonCompitativeBid">
                                                        Non-Competitive Bid</label>
                                                </div>
                                            </li>
                                        </div>
                                        <div className="col-lg-6 px-0">
                                            <li className="list-group-item ms-0 ps-0 w-100">
                                                <div className={`itemm py-2 ${type == 'CompitativeBid' ? 'Selected' : ''}`}>
                                                    <input
                                                        type="radio"
                                                        className="form-check-input me-3 ms-0 my-0 "
                                                        id="CompitativeBid"
                                                        value="CompitativeBid"
                                                        name="AccountType"
                                                        onChange={() => setType('CompitativeBid')}
                                                        required
                                                        // onClick={nextStep}
                                                        defaultChecked={type == 'CompitativeBid'}
                                                        aria-label="..." />
                                                    <label className="fs16 fw-600 pb-0" htmlFor="CompitativeBid">
                                                        Competitive Bid</label>
                                                </div>
                                            </li>
                                        </div>
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <div className="col-3 col-xl-3 col-lg-4 ">

                            <p className="fs16 tc-grey fw-500 mb-3 text-end" >Auction Date</p>
                            <div className="text-end" >

                                {/* <DatePicker className="py-2 px-3 br-8" onChange={(e) => { setDate(e._d) }} /> */}
                                <Select
                                className='w-75'
                               placeholder="Select an auction date"
                               
                               >

                                    
                                            <Option key={1}>29 June, 2022</Option>
                                            <Option key={2}>13 July, 2022</Option>
                                            <Option key={3}>27 July, 2022</Option>
                                            <Option key={4}>10 August, 2022</Option>

                                      

                                    </Select>
                            </div>
                        </div>
                    </div>
                    <hr className="t-grey-200 my-4"></hr>
                    <div className="row px-4 w-100 mx-auto mt-3">
                        <div className="col-1 fs14 tc-grey fw-500 mb-0">
                            S. No
                        </div>
                        <div className="col-11">
                            <div className="row">
                                <div className={` col-${type == "nonCompitativeBid" ? '4' : '3'} fs14 tc-grey fw-500 mb-0`}>Securities
                                </div>
                                <div className={`col-${type == 'nonCompitativeBid' ? '4' : '3'}`}>
                                    <div className="d-flex">
                                        <p className="fs14 tc-grey fw-500 mb-0" >Tenor</p>
                                        <img className="ms-2" src={Question} alt='' />
                                    </div>
                                </div>
                                <div className={`col-${type == 'nonCompitativeBid' ? '4' : '3'}`}>
                                    <div className="d-flex">
                                        <p className="fs14 tc-grey fw-500 mb-0" >Face Value</p>
                                        <img className="ms-2" src={Question} alt='' />
                                    </div>
                                </div>

                                {type !== 'nonCompitativeBid' && <div className="col-3">
                                    <div className="d-flex">
                                        <p className="fs14 tc-grey fw-500 mb-0" >Last Average Yield </p>
                                        <img className="ms-2" src={Question} alt='' />
                                    </div>
                                </div>}
                            </div>
                        </div>
                        {type !== "nonCompitativeBid" && renderBids}
                        <div className="col-1  mt-2">

                            <input
                                type="text"
                                name="Sr"
                                className="form-control-bidding w-75 border-0 br-8 fs16 fw-600"
                                placeholder="Sr."
                                onChange={(e) => { setSr(e.target.value) }}
                                value={Sr}
                                id="Sr"
                                required
                                readOnly
                            />
                        </div>
                        <div className="col-11 mt-2">
                            <div className="row">
                                <div className={` col-${type == "nonCompitativeBid" ? '4' : '3'} fs14 tc-grey fw-500 mb-0`}>
                                    <Select defaultValue={Security?.children ? Security?.children : undefined} value={Security?.children} placeholder="Select any one" onSelect={(value, event) => setSecurity(event)} rules={[{ required: true }]}>

                                        {Securities.map(each => (
                                            <Option key={each.value}>{each.label}</Option>
                                        ))}

                                    </Select>
                                </div>
                                <div className={`col-${type == 'nonCompitativeBid' ? '4' : '3'}`}>
                                    <Select defaultValue={Tenor?.children ? Tenor?.children : undefined} value={Tenor?.children} placeholder="Select any one" onSelect={(value, event) => setTenor(event)} rules={[{ required: true }]}>

                                        {Tenors.map(each => (
                                            <Option key={each.value}>{each.label}</Option>
                                        ))}

                                    </Select>
                                </div>
                                <div className={`col-${type == 'nonCompitativeBid' ? '4' : '3'}`}>
                                    <input
                                        type="text"
                                        name="FValue"
                                        className="form-control-bidding w-75 border-0 br-8 fs16 fw-600 w-100"
                                        placeholder="Face Value"
                                        onChange={(e) => { setFValue(e.target.value) }}
                                        value={FValue}
                                        id="FValue"
                                        required
                                    />
                                </div>
                                {type !== 'nonCompitativeBid' && <div className="col-3">
                                    <input
                                        type="text"
                                        name="YValue"
                                        className="form-control-bidding w-75 border-0 br-8 fs16 fw-600 w-100"
                                        placeholder="Face Value"
                                        onChange={(e) => { setYValue(e.target.value) }}
                                        value={YValue}
                                        id="YValue"
                                        required
                                    />
                                </div>}
                            </div>
                        </div>
                        {type !== "nonCompitativeBid" &&
                            <div className="col-12 mt-4">
                                <div className="d-flex cursorPointer" onClick={AddBid}>
                                    <img className="me-2" src={Plus} alt='' />
                                    <p className="fs14 tc-blue fw-600 mb-0" >Add Bid</p>
                                </div>
                            </div>}
                    </div>
                    <hr className="t-grey-200 my-5"></hr>
                    <div className="row px-4 w-100 mx-auto">
                        <div className="col-md-5">
                            <p className="tc-plum fw-700 fs24" >Calculator</p>
                            <p className="tc-grey fw-500 fs16" >Please select an auction date for which you want to create a payment request.</p>
                        </div>
                        <div className="col-md-7">
                            <div className="row g-4">
                                <div className="col-md-6 ps-0">
                                    <div className="d-flex mb-3 align-items-center">
                                        <p className="fs14 tc-grey fw-500 mb-0" >Face Value</p>
                                        <ToolTip />
                                    </div>
                                    <div className="Feild br-8">
                                        <input
                                            type="text"
                                            value={Calculation.FValue}
                                            name='FValue'
                                            readOnly={Calculation.review}
                                            className="text-end w-100 pe-0"
                                            onChange={handleChartChange}
                                        />
                                        <p className="tc-plum fw-500 fs25 mb-0 ms-3 ps-0">PKR</p>
                                    </div>
                                </div>
                                <div className="col-md-6 pe-0">
                                    <div className="d-flex mb-3 align-items-center">
                                        <p className="fs14 tc-grey fw-500 mb-0" >Last Average Yield </p>
                                        <ToolTip />
                                    </div>
                                    <div className="Feild disabledFeild br-8">
                                        <input
                                            type="text"
                                            value={Calculation.LstAvg}
                                            name='LstAvg'
                                            readOnly={Calculation.review}
                                            className="text-end w-100 pe-0"
                                            onChange={handleChartChange}
                                            disabled={true}
                                        />
                                        <p className="tc-plum fw-500 fs25 mb-0 ms-3 ps-0">%</p>
                                    </div>
                                </div>
                                <div className="col-md-6 ps-0">
                                    <div className="d-flex mb-3 align-items-center">
                                        <p className="fs14 tc-grey fw-500 mb-0" >Cheque Amount</p>
                                        <ToolTip />
                                    </div>
                                    <div className="Feild disabledFeild br-8">
                                        <input
                                            type="text"
                                            value={Calculation.chqAmount}
                                            name='chqAmount'
                                            readOnly={Calculation.review}
                                            className="text-end w-100 pe-0"
                                            onChange={handleChartChange}
                                            disabled={true}
                                        />
                                        <p className="tc-plum fw-500 fs25 mb-0 ms-3 ps-0">PKR</p>
                                    </div>
                                </div>
                                <div className="col-md-6 pe-0">
                                    <div className="d-flex mb-3 align-items-center">
                                        <p className="fs14 tc-grey fw-500 mb-0" >Price</p>
                                        <ToolTip />
                                    </div>
                                    <div className="Feild disabledFeild br-8">
                                        <input
                                            type="text"
                                            value={Calculation.Price}
                                            name='Price'
                                            readOnly={Calculation.review}
                                            className="text-end w-100 pe-0"
                                            onChange={handleChartChange}
                                            disabled={true}
                                        />
                                        <p className="tc-plum fw-500 fs25 mb-0 ms-3 ps-0">PKR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="t-grey-200 my-5"></hr>

                    <form className="pt-3">
                        <div className="row px-4 w-100 mx-auto mt-3">
                            <div className="col-12">
                                <div class="form-check">
                                    <input class="form-check-input me-1" type="checkbox"
                                        defaultChecked={Undertaking} value="" id="Undertaking"
                                        onChange={(e) => setUndertaking(e.target.checked)} />
                                    <label class="form-check-label tc-grey fw-500 fs14 tf-light ps-3" for="Undertaking">
                                        I/we hereby undertake to ensure the availability of requisite funds in the designated account of National Clearing Company of Pakistan Limited (a/c # 020341004590017 maintained
                                        with State Bank of Pakistan) for settlement of above transactions.
                                        In case where funds are not arranged due to any reason, the loss sustained by NCCPL on subsequent day including interest or bank charges levied on account of financing arrangement
                                        made by NCCPL in this respect shall be reimbursed to NCCPL instantly.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                    <hr className="t-grey-200 mt-5 mb-0"></hr>
                    <div className="bg-grey py-5 px-4 w-100 mx-auto">
                        <div className="d-flex ms-auto justify-content-end" >

                            <button
                                className="br-8 bg-transparent border-0 tc-grey fs16 px-3 py-1 mx-1 navBtn"
                                type="submit"
                            >
                                Cancel

                            </button>
                            <button
                                className="btn-filled fs16 px-3 py-1 mx-1 navBtn"
                                type="button"
                            // onClick={ }
                            >
                                Submit Bid

                            </button>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}

export default PaymentBiddings;