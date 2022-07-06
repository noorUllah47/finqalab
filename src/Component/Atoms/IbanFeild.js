import React from 'react'
import ReactDOM from 'react-dom'

import IBAN from './IBAN'


const IbanInput = props => (
    <>
        <IBAN
            {...props}
            render={({ onChange, value, iban, ...rest }) => (
                <React.Fragment>
                    <input {...rest} required onChange={onChange} className="form-control" value={value} />
                    {/* onInvalid={(e)=>{props.error? e.target.setCustomValidity('Enter the Correct IBAN Number'):e.target.setCustomValidity(' ')}}  */}
                </React.Fragment>
            )}
        />
        {// console.log({props})}
    </>
)

export default class IbanFeild extends React.Component {

    render() {
        return (
            <div className="">
                <IbanInput
                    initialValue={this.props.initialValue}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    iban={this.props.iban}
                    placeholder='IBAN Number'
                    minLength={24}
                    error={this.props.Err}
                />

            </div>
        )
    }
}
