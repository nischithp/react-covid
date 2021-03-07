import { React, useState } from 'react'
import PropTypes from 'prop-types'
import Highcharts, { time } from 'highcharts'

import HighchartsReact from 'highcharts-react-official'

export function Card(props) {
    if (props.result === "-1") {
        return <span>Please select a country</span>
    }

    var timeline = Object.keys(props.result.timeline)
    var vaccinations = timeline.map(date => props.result.timeline[date])

    const chartParams = {
        title: {
            text: 'Vaccinations'
        },
        series: [{
            type: 'line',
            data: vaccinations,
            showInLegend: false,
        }],
        yAxis: {
            title: {
                text: 'Vaccinations',
                style: {
                    color: 'magenta',
                }
            }
        },
        xAxis: {
            type: 'datetime',
            categories: timeline,
            title: {
                text: 'Date',
                style: {
                    color: 'blue'
                }
            }
        }
    }
    return (
        <div className="px-6 py-4">
            <h1 className="font-bold text-purple-500 text-xl mb-2">{props.result.country}</h1>
            <div className="font-bold text-yellow-500 text-xl mb-2">
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={chartParams}
                    />
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


