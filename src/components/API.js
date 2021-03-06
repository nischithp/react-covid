import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import React from 'react'
import { Card } from "./Card";
import axios from 'axios';
import { useState,useEffect } from "react";


export function API(props) {
    const [vaccineResults, setvaccineResults] = useState([])
    const [selectedCountry, setselectedCountry] = useState("India")

    useEffect(() => {
        let vaccinationBaseURL = "https://disease.sh/v3/covid-19/vaccine/coverage/countries/" + props.countryName + "?lastdays=30"
        axios.get(vaccinationBaseURL)
            .then(res => {
                setvaccineResults(res.data)
                console.log(res.data)
            })
    }, [selectedCountry])

    return (
        <div>
            {JSON.stringify(vaccineResults)}
        </div>
    )
}

