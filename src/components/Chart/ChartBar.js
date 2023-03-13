import './ChartBar.css'

export default function ChartBar(props) {

    let barFillHeight = '0%'
    let marginTop = '100%'

    if (props.max > 0) {
        console.log('Updating max value')
        barFillHeight = Math.round((props.value / props.max) * 100)
        marginTop = Math.round(100 - barFillHeight) + '%'
        barFillHeight = barFillHeight + '%'
    }

    return (
        <>
        <div className='expenses-chart-bar-container'>
            <div className='expenses-chart-bar-fill-container'>
                <div className='expenses-chart-bar-fill' style={{ height: barFillHeight }}>
                </div>
            </div>
            <div className='expenses-chart-bar-label'>
                { props.label }
            </div>
        </div>
        </>
    )
}