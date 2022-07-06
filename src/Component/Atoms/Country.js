import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector(props) {
    const [value, setValue] = useState(props.value)
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
        // console.log(value)
        props.updateCountry('Citizenship', value.label)
    }

    return <Select options={options} value={value} defaultInputValue={props.value} onChange={changeHandler} className="CountrySelect" placeholder="Country" />
}

export default CountrySelector