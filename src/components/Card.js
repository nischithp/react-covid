import React from 'react'
import PropTypes from 'prop-types'

export function Card(props) {
    if(props.result === "-1"){
        return <span>Please select a country</span>
    }
    // console.log("Result kelage aithi")
    // console.table(props.result)
    // console.log("Timeline:"+JSON.stringify(props.result.timeline))
    var timeline = Object.keys(props.result.timeline)
    

    return (
        
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    Country: <div className="font-bold text-purple-500 text-xl mb-2">{props.result.country}</div>
                    Vaccinations: <div className="font-bold text-yellow-500 text-xl mb-2">{timeline.forEach((item) => {
                        console.log(`Result >> ${item} : ${props.result.timeline[item]}`)
                        
                    })}</div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {

}

Card.defaultProps = {
    timeline : ['']
}


