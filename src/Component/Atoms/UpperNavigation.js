const UpperNavigation = (props) => {
    return (
        <>
            <div className="d-inline-flex w-100 mt-40">

                <h1 className="fs24 ls4 fw-700 tc-plum ">{props.Title}</h1>
                <p
                    className="fw-700 fs14 ms-auto tc-grey cursorPointer"
                    onClick={props.prevStep}
                >
                    Back to {props.prevSec}
                </p>
            </div>
        </>
    );
}

export default UpperNavigation;