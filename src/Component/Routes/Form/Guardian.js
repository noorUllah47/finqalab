import { Select } from 'antd';
import RequiredFeild from '../../Atoms/RequiredFeild';
import ScrollToTop from '../../Atoms/ScrollToTop';



const { Option } = Select;

const Guardian = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {



    const RelationWithGaudian = [
        // { value: "01", label: "Self" },
        { value: "02", label: "Legal" },
        { value: "03", label: "Natural" },
        { value: "04", label: "Parent" },
    ];





    return (
        <>
            <ScrollToTop />
            <div className="container-fluid pb-3">
                <div className="container">
                    <div className="mt-3">
                        <div className="">
                            <div className="d-inline-flex w-100">
                                <h1 className="fs24 ls4 fw-800 t-grey-800">Gaurdian</h1>
                                <p
                                    className="fw-500 fs16 ms-auto t-grey-400 cursorPointer"
                                    onClick={prevStep}
                                >
                                    Back to Bank Mandate
                                </p>
                            </div>
                            <form onSubmit={nextStep}>
                                <div className="row">

                                    <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                                        <label
                                            htmlFor="Minnorrelation"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Guardian Relationship with Minnor
                                        </label>

                                        <div className="mt-auto">

                                            <Select defaultValue={values?.Minnorrelation?.children ? values?.Minnorrelation?.children : undefined} placeholder="Select any one" onSelect={(value, event) => handleDrctChange("Minnorrelation", event)} rules={[{ required: true }]}>

                                                {RelationWithGaudian.map(optn => (
                                                    <Option key={optn?.value}>{optn?.label}</Option>
                                                ))}

                                            </Select>
                                            {!values.Minnorrelation?.value && <RequiredFeild />}


                                        </div>
                                        {/* {!values?.Minnorrelation?.children && <RequiredFeild />}
                                    {!values?.Minnorrelation?.children && values.continues ? <span id="Minnorrelation" className="text-danger fs10" >Please Select Relation</span> : ""} */}


                                    </div>


                                    <div className="col-12 col-sm-6 col-lg-4  d-flex flex-column mb-3">
                                        <label
                                            htmlFor="MinnorRelationDetails"
                                            className="col-12 col-form-label fw-500"
                                        >
                                            Relation Detail
                                        </label>
                                        <input
                                            type="text"
                                            name="MinnorRelationDetails"
                                            className="form-control mt-auto"
                                            placeholder="Relation Detail"
                                            value={values.MinnorRelationDetails}
                                            onChange={handleChange}
                                            id="MinnorRelationDetails"
                                            required
                                        />
                                    </div>


                                </div>

                                <hr />

                                <div className="mb-3 row">
                                    <div className="col-sm-8">
                                    </div>
                                    <div className="col-sm-4 text-end">
                                        {/* <button className="btn-outlined fs16 px-3 py-1 mx-1">
                                        Save & Exit
                                    </button> */}
                                        <button
                                            className="btn-filled fs16 px-3 py-1 mx-1"
                                            type="submit"
                                            style={{ width: "111px", height: "44px" }}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Guardian;
