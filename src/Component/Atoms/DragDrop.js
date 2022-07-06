import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import FileIcon from '../../Assets/Img/File.svg'
import DeleteData from '../../API/DeleteData'
import { message } from 'antd'

export default class DragDrop extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.state = {
            selectedFiles: undefined,
            Loading: false
        };
    }

    componentDidMount() {
    }

    onDrop(files) {
        console.log(files);
        if (files.length > 0) {
            this.setState({ selectedFiles: files });
        }
        this.props.handleDrctChange('Other', files[0])
    }

    onDelete(file) {
        this.setState({
            Loading: true
        })
        console.log(typeof file, file)
        if (typeof file !== 'string') {
            this.props.handleDrctChange('OtherDelete', file.name)
            this.setState({
                Loading: false
            })
        }
        else {
            DeleteData.RemoveFile(file).then(res => {
                if (res.data.message == "file deleted successfully") {
                    message.success(res.data.message);
                    this.props.handleDrctChange('OtherDelete', file)
                    this.setState({
                        Loading: false
                    })
                }
            })
        }
    }

    render() {
        const { selectedFiles } =
            this.state;
        return (
            <div>

                <h1 className="fs24 ls4 fw-700 tc-plum mt-40">Other (E.g. Tax Exemption Certificate)</h1>
                {this.props.Other.length < 10 &&
                    <Dropzone onDrop={this.onDrop} multiple={false}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input
                                        accept='.jpg, .jpeg, .png' {...getInputProps()} />
                                    <div>
                                        <img src={FileIcon} alt='file' className='d-block mx-auto mb-4' />
                                        <p className="mb-0" >Drag or drop files or browse to choose files.</p>
                                    </div>
                                </div>
                            </section>
                        )}
                    </Dropzone>}
                {this.props.Other.map((file, index) => (
                    <>
                        <li className="list-group-item d-flex justify-content-between br-8 border-0" key={index}>
                            <div className="d-flex">
                                <FileICON />
                                <div className="ms-3" >
                                    <p className="mb-0 fs16 fw-600 tc-plum" >{typeof file !== 'string' ? file.name : file}</p>
                                    {typeof file !== 'string' && <p className=" mb-0 t-grey-400 fw-400 fs14 ">

                                        {Math.round(file.size / 1024)} kb /
                                        {Math.round(file.size / 1024)} kb
                                    </p>}
                                </div>
                            </div>
                            <div className="my-auto" >
                                <button type="button"
                                    disabled={this.state.Loading}
                                    onClick={() => this.onDelete(file)}
                                    className="fs16 fw-600 dltbtn w-100 py-2 br-8 border-0">

                                    {this.state.Loading ? (
                                        // <div className="spinner-border text-light" role="status">
                                        //     <span className="visually-hidden">Loading...</span>
                                        // </div>
                                        <div className="whitespinner">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                    ) : (
                                        <>Delete</>
                                    )}

                                </button>
                            </div>
                        </li>
                    </>
                ))}
            </div>
        );
    }
}

const FileICON = () => (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#206FEB" />
    <path d="M27 13H16C14.9 13 14 13.9 14 15V28C14 28.55 14.45 29 15 29C15.55 29 16 28.55 16 28V16C16 15.45 16.45 15 17 15H27C27.55 15 28 14.55 28 14C28 13.45 27.55 13 27 13ZM27.59 17.59L32.42 22.42C32.79 22.79 33 23.3 33 23.83V33C33 34.1 32.1 35 31 35H19.99C18.89 35 18 34.1 18 33L18.01 19C18.01 17.9 18.9 17 20 17H26.17C26.7 17 27.21 17.21 27.59 17.59ZM27 24H31.5L26 18.5V23C26 23.55 26.45 24 27 24Z" fill="white" />
</svg>)
