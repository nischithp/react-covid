import PropTypes from 'prop-types'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useState, useMemo, useEffect } from "react";
import { API } from './API';
import axios from 'axios';
import { Card } from './Card';

function CountryDropDown(props) {
  const [value, setValue] = useState('')
  const [vaccineResults, setvaccineResults] = useState({})
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  useEffect(() => {
    
    if (value !== '') {
      let vaccinationBaseURL = `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${value.value}?lastdays=30`
      axios.get(vaccinationBaseURL)
        .then(res => {
          setvaccineResults(res.data)
        })
    }

  }, [value])
  return (
    
    <>
      <Select options={options} value={value} onChange={changeHandler}></Select>
      {
        Object.keys(vaccineResults).length === 0 ? <Card result="-1" />: <Card result={vaccineResults}></Card> 
      }
    </>
  )
}


CountryDropDown.propTypes = {
}

CountryDropDown.defaultProps = {
  value: 'US'
}

export default CountryDropDown

