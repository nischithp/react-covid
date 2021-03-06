import { React, useState } from 'react'
import PropTypes from 'prop-types'
import Highcharts, { time } from 'highcharts'

import HighchartsReact from 'highcharts-react-official'

export function Card(props) {
    if (props.result === "-1") {
        return <span>Please select a country</span>
    }

    

    

    // console.log("Result kelage aithi")
    // console.table(props.result)
    // console.log("Timeline:"+JSON.stringify(props.result.timeline))
    var timeline = Object.keys(props.result.timeline)
    var vaccinations = timeline.map(date => props.result.timeline[date])

    // console.log("Vaccinations: >>>>>"+vaccinations)
    const options = {
        title: {
            text: 'Vaccinations'
        },
        series: [{
            name: 'Vaccinations',
            type: 'line',
            data: vaccinations
        }],
        xAxis: {
            type: 'datetime',
            categories: timeline
        }
    }
    

    return (

        <div>
            <div className="rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    Country: <h1 className="font-bold text-purple-500 text-xl mb-2">{props.result.country}</h1>
                    <div className="font-bold text-yellow-500 text-xl mb-2">
                        {/* <ul>
                            {timeline.map((item) => {
                                return <li>{`${item} : ${props.result.timeline[item]}`}</li>
                            })}
                        </ul> */}
                        <div>
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={options}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {

}

Card.defaultProps = {
    timeline: ['']
}


