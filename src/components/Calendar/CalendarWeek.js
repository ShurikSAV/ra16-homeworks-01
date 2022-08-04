import PropTypes from 'prop-types'

function CalendarWeek({dayFirst,dayNow}) {
    dayFirst.setHours(0, 0, 0, 0);
    dayNow.setHours(0, 0, 0, 0);
    
    
    if(dayFirst.getMonth() > dayNow.getMonth()) return <></>

    const daysWeek = [...Array(7)].map(
        (_,i) => {
            let day = new Date(dayFirst)
            day.setDate(day.getDate() + i)

            return day
        }
    )

    const getClassName = (day) => {
        let style = null
            
        if(day.getTime() == dayNow.getTime()) style = "ui-datepicker-today"
        else if(day.getMonth() != dayNow.getMonth()) style = "ui-datepicker-other-month"

        return style
    }

    return (
        <tr>
            {daysWeek.map(
                (day,i) => <td key={i} className={getClassName(day)}>{day.getDate()}</td>
            )}
        </tr>  
  )
}

CalendarWeek.propTypes = {
    dayFirst: PropTypes.object,
    dayNow: PropTypes.object
}


export default CalendarWeek