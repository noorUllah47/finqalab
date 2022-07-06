import React, { Component } from "react";
import ReactDOM from "react-dom";
import SignaturePad from "react-signature-canvas";

import styles from "./styles.module.css";

class SignDoc extends Component {
    state = { trimmedDataURL: null };
    sigPad = {};
    clear = () => {
        this.sigPad.clear();
        this.props.handleDrctChange('Signatures', '')
    };
    trim = () => {
        this.setState({
            trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png")
        });
        this.props.handleDrctChange('Signatures', this.sigPad.getTrimmedCanvas().toDataURL("image/png").replace("data:image/png;base64,", ""))

        // const url = this.sigPad.getTrimmedCanvas().toDataURL("image/png");
        // fetch(url)
        //     .then((res) => res.blob())
        //     .then((blob) => {
        //         const file = new File([blob], "File name", { type: "image/png" });
        //         console.log(file);
        //         alert("1");
        //         this.setState({
        //             file: file
        //         });
        //     });
    };

    baseToImage = () => {
        // console.log(this.state.trimmedDataURL);
        const url = this.state.trimmedDataURL;
        fetch(url)
            .then((res) => res.blob())
            .then((blob) => {
                const file = new File([blob], "File name", { type: "image/png" });
                // console.log(file);
                this.setState({
                    file: file
                });
            });
    };

    render() {
        let { trimmedDataURL } = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.sigContainer}>
                    <SignaturePad
                        canvasProps={{ className: styles.sigPad }}
                        ref={(ref) => {
                            this.sigPad = ref;
                        }}
                    />
                </div>
                {/* console.log(this.state) */}
                <div className={`d-flex mt-5 bg-transparent ${styles.btnContainer}`} >
                    <button className="filledBtn bg-blue text-white w-100 py-2 me-1" type="button" onClick={this.clear}>
                        Clear
                    </button>
                    <button className="SignInBtn tc-blue bg-white w-100 py-2 ms-1" type="button" onClick={this.trim}>
                        OK
                    </button>
                </div>
            </div>
        );
    }
}


export default SignDoc