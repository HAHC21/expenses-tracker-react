import { useState } from 'react'

import './Chart.css'

import ChartBar from "./ChartBar"

export default function Chart(props) {

    const dataPoints = props.dataPoints

    // Extract values from the datapoint objects
    const pointValues  = props.dataPoints.map((point) => point.value)

    // Calculate maximum value
    const max = Math.max(...pointValues)

    return (
        <div className='expenses-chart-container'>
            {
                dataPoints.map((point) => (
                    < ChartBar 
                        value={point.value}
                        label={point.label}
                        key={point.label}
                        max={max}
                    />
                ))
            }
        </div>
    )
}