const BottomNavigation = (props) => {
    return (
        <>
            <div className="mb-40 row mt-40 justify-content-center">
                <div className="ms-md-auto row p-0 max75ch">
                    <div className=" col-6 col-sm my-2 order-3 order-sm-1" >
                        <button
                            className="btn-filled fs16 px-3 py-1 mx-1 navBtn w-100"
                            type="button"
                            onClick={() => props.prevStep()}
                        >
                            Back

                        </button>
                    </div>
                    <div className=" col-6 col-sm my-2 order-2 order-sm-2" >
                        <button
                            className="btn-outlined fs16 px-3 py-1 mx-1 navBtn w-100"
                            type="button"
                            disabled={props.SaveLoading}
                            onClick={() => props.handleSubmit('saveExist')}
                        >

                            {props.SaveLoading ? (
                                // <div className="spinner-border text-light" role="status">
                                //     <span className="visually-hidden">Loading...</span>
                                // </div>
                                <div className="whitespinner blueSpinner">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                            ) : (
                                <>{props.first}</>
                            )}

                        </button>
                    </div>
                    <div className=" col-12 col-sm my-2 order-1 order-sm-3" >
                        <button
                            className="btn-filled fs16 px-3 py-1 mx-1 navBtn w-100"
                            type="submit"
                            disabled={props.Nextdisabled || props.Loading}
                        >

                            {props.Loading ? (
                                // <div className="spinner-border text-light" role="status">
                                //     <span className="visually-hidden">Loading...</span>
                                // </div>
                                <div className="whitespinner">
                                    <div className="bounce1"></div>
                                    <div className="bounce2"></div>
                                    <div className="bounce3"></div>
                                </div>
                            ) : (
                                <>{props.second}</>
                            )}

                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BottomNavigation;