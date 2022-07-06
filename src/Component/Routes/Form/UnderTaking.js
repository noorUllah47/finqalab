



import { Select } from 'antd';
import { useState } from 'react';
import PostData from "../../../API/PostData"
import UpperNavigation from '../../Atoms/UpperNavigation';
import BottomNavigation from '../../Atoms/BottomNavigation';
import ScrollToTop from '../../Atoms/ScrollToTop';
import { useNavigate } from 'react-router-dom'



const { Option } = Select;

const UnderTaking = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {
    const history = useNavigate();
    const [Loading, setLoading] = useState(false)
    const [SaveLoading, setSaveLoading] = useState(false)
    const handleSubmit = (e) => {
        if (e !== 'saveExist') {
            e.preventDefault();
            setLoading(true)
        }
        else {
            setSaveLoading(true)
        }
        const FormSubmit = PostData.SubmitForm(values, e !== 'saveExist' ? nextStep : onSuccessSave, "continue", 6);
        FormSubmit.then((value) => {
            console.log({ value });
            setLoading(false);
        });

    }
    const onSuccessSave = () => {
        history('/Dashboard')
    };


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <ScrollToTop />
            <div className="container-fluid pb-3">
                <div className="container">
                    <div className="mt-3">
                        <div className="">
                            <UpperNavigation
                                Title="NCCPL Undertaking"
                                prevSec="Required Documents"
                                prevStep={prevStep} />
                        </div>
                    </div>

                    <div className="container px-0 mt-40">

                        <div className="undertakingsbody ">
                            <div >

                                <p className=" fs16 t-grey-600 fw-600 mb-3">
                                    I/ We hereby request NCCPL to open the account(s) mentioned above on the basis of the information supplied by me/us herein, which I/we confirm is true and correct in all aspect. I/we hereby and confirm that I/we have read, understood and received the copy of Account Opening Form and Terms and Conditions Governing the Account and hereby covenant and agree to observe and be bound by the said Terms and Conditions and any changes, supplements of modifications thereto that may be made by the NCCPL from time to time. </p>

                                <p className=" fs16 t-grey-600 fw-600 mb-3">   I/We authorized NCCPL to deduct their charges, along with excise duty, Government Taxes (if applicable). </p>

                                <p className=" fs16 t-grey-600 fw-600 mb-3">  I/We agree and undertake to notify the NCCPL within 30days, if there is a change in any information/document, which I/we have provided to the NCCPL, including an such information that may have impact of FATCA classification. </p>

                                <p className=" fs16 t-grey-600 fw-600 mb-3">  If any person classified as United States of America (USA) Person, NCCPL is bound to share accounts information with the Internal Revenue Service (IRS) of USA and it is clearly Understood that I/we have given our concurrence for this action. </p>

                                <p className=" fs16 t-grey-600 fw-600 mb-3">  I/We hereby declare that the funds to be Invested in NCCPL, belong to me /us and that its source(s) are legitimate. </p>

                            </div>
                        </div>


                        <form onSubmit={nextStep} className="pt-3">
                            <div className="mb-40 pt-3 row">
                                <div className="col-12">
                                    <input
                                        className="form-check-input me-1"
                                        type="checkbox"
                                        defaultChecked={values.undertakingAccepted}
                                        onChange={handleChange}
                                        name="undertakingAccepted"
                                        id="undertakingAccepted"
                                    />
                                    <label
                                        className="form-check-label tc-plum fw-600 fs16 ps-3"
                                        htmlFor="undertakingAccepted"
                                    >
                                        I accept all of the above information mentioned by me is correct and accurate. I also agree to the above mentioned undertaking.
                                    </label>
                                </div>
                            </div>
                        </form>


                    </div>





                    {(values?.IncomeSource.children == 'Gift' || values?.IncomeSource.children == 'Inheritance') &&


                        <div className="container px-0">

                            <div className="undertakingsbody ">
                                <div >



                                    <p className=" fs16 t-grey-600 fw-600 mb-3">
                                        For the purpose of opening an IPS Account with the National Clearing Company of Pakistan Limited (NCCPL), I, the undersigned, hereby undertake as follows: </p>

                                    <p className=" fs16 t-grey-600 fw-600 mb-3">
                                        <ol type="1" >
                                            <li className=" fs16 t-grey-600 fw-600 mb-3">
                                                That the funds being used for my IPS Account operations *are those which have been inherited by me*/are those which have been gifted to me* by my father/mother/grandfather etc.

                                            </li>
                                            <li className=" fs16 t-grey-600 fw-600 mb-3">

                                                That I am well aware of and fully understand and comprehend all the applicable laws, rule, regulations codes and procedures applicable on me for opening and maintaining an IPS Account with NCCPL and that I shall at all times abide by and comply with all such applicable laws, rules, regulations, codes and procedures.
                                            </li>
                                        </ol>
                                    </p>

                                </div>
                            </div>





                            <form onSubmit={nextStep} className="pt-3">
                                <div className="mb-1 pt-3 row">
                                    <div className="col-12">

                                        <div>
                                            <div className="col-sm-12 col-md-10 my-auto ">
                                                <input
                                                    className="form-check-input me-1 mb-1"
                                                    type="checkbox"
                                                    defaultChecked={values.giftAccepted}
                                                    onChange={handleChange}
                                                    name="giftAccepted"
                                                    id="giftAccepted"
                                                />
                                                <label
                                                    className="form-check-label tc-plum fw-600 fs16"
                                                    htmlFor="giftAccepted"
                                                >
                                                    I accept all of the above information mentioned by me is correct and accurate. I also agree to the above mentioned undertaking.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </form>


                        </div>

                    }

                    {values?.IncomeSource.children == 'Retired' &&

                        <div className="container px-0">

                            <div className="undertakingsbody ">
                                <div >



                                    <p className=" fs16 t-grey-600 fw-600 mb-3">
                                        For the purpose of opening an IPS Account with the National Clearning Company of Pakistan (NCCPL) , I, the undersigned, hereby undertake as follows:</p>

                                    <ol type='1'>
                                        <li className=" fs16 t-grey-600 fw-600 mb-3">That I am retired, and I am currently not engaged in any full time employement / service / business. In case of any change to my status, I shall inform NCCPL promptly. </li>
                                        <li className=" fs16 t-grey-600 fw-600 mb-3">That the funds being used for my IPS Account operations *are my personal savings and/or* the retirement benefits recieved by me post my retirement from (--name of organization--)* </li>
                                        <li className=" fs16 t-grey-600 fw-600 mb-3">That I am well aware of and fully understand and comprehend all the applicable laws, rule, regulations codes and procedures applicable on me for opening and maintaining an IPS Account with NCCPL and that I shall at all times abide by and comply with all such applicable laws, rules, regulations, codes and procedures. </li>
                                    </ol>
                                </div>
                            </div>





                            <form onSubmit={nextStep} className="pt-3">
                                <div className="mb-1 pt-3 row">
                                    <div className="col-12">

                                        <div>
                                            <div className="col-sm-12 col-md-10 my-auto ">
                                                <input
                                                    className="form-check-input me-1 mb-1"
                                                    type="checkbox"
                                                    defaultChecked={values.retirementAccepted}
                                                    onChange={handleChange}
                                                    name="retirementAccepted"
                                                    id="retirementAccepted"
                                                />
                                                <label
                                                    className="form-check-label tc-plum fw-600 fs16"
                                                    htmlFor="retirementAccepted"
                                                >
                                                    I accept all of the above information mentioned by me is correct and accurate. I also agree to the above mentioned undertaking.
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-sm-8'></div>
                                </div>



                            </form>


                        </div>

                    }



                    <form onSubmit={handleSubmit} className="pt-3">
                        <BottomNavigation first="Save & Exit" second="Next" prevStep={prevStep} Nextdisabled={!(values?.IncomeSource.children == 'Gift' || values?.IncomeSource.children == 'Inheritance' ? values.giftAccepted : true) || !values.undertakingAccepted || !(values?.IncomeSource.children == 'Retired' ? values.retirementAccepted : true)} Loading={Loading} SaveLoading={SaveLoading} handleSubmit={handleSubmit} />

                    </form>

                </div>

            </div>
        </>
    );
};

export default UnderTaking;
