import Cross from '../../Assets/Img/cross.svg'

const FileInputDisplay = (props) => {
    return (
        <div className={props.SectionClass}>
            {props.state ? (
                <>
                    <div className="d-table">
                        <div className="Circularprogress yellow">
                            <span className="Circularprogress-left">
                                <span className="Circularprogress-bar"></span>
                            </span>
                            <span className="Circularprogress-right">
                                <span className="Circularprogress-bar"></span>
                            </span>
                            <div className="Circularprogress-value t-pink fs12 fw-400">
                                {typeof props.state == 'string' ? 'File' : props.state.type.substring(props.state.type.indexOf('/') + 1).toUpperCase()}
                            </div>
                        </div>
                        <div className="position-absolute ml-55">
                            {typeof props.state == 'string' ? (
                                <p className="m-0 t-grey-600 fs16 fw-500 dotted">

                                    {props.state}

                                </p>
                            ) : (
                                <div>
                                    <p className="m-0 t-grey-600 fs16 fw-500 dotted">

                                        {props.state.name}

                                    </p>
                                    <div>

                                        <p className="m-0 t-grey-400 fw-400 fs14 ">

                                            {Math.round(props.state.size / 1024)} kb /
                                            {Math.round(props.state.size / 1024)} kb
                                        </p>
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                    <div className="remove_File" onClick={() => props.deleteFun(props.name, '')}>
                        <img src={Cross} alt="cross" className="mx-auto d-block" />
                    </div>


                </>
            ) : (
                <input
                    type="file"
                    name={props.name}
                    onChange={props.uploadFun}
                    className={`custom-file-input ${props.customClass}`}
                    accept={props.accept}
                    required={props.required}
                />
            )}
        </div>
    );
}

export default FileInputDisplay;