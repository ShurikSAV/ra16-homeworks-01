import PropTypes from 'prop-types'
import './css/main.css'
import CalendarWeek from './CalendarWeek.js'

function Calendar({dateNow}) {
  /**первая неделя календаря */
  const getFirstDayCalendar = (date) => {
    let result = new Date(date)

    result.setDate(1)

    if (result.getDay() == 0) {
      result.setDate(result.getDate() - 6)
    }
    else if (result.getDay() > 1) {
      result.setDate(result.getDate() + 1 - result.getDay())
    }
    return result
  }
  
  let dateFirst = getFirstDayCalendar(dateNow)

  const getFirstDayWeek = (weekNum) => {
    let result = new Date(dateFirst)

    result.setDate(result.getDate() + weekNum * 7)
    
    return result
  }

  /**Месяц в именительном падеже */
  const getMonthName = (data) => {
    const monthName = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

    return monthName[data.getMonth()]
  }
  
  /**Месяц в родительном падеже */
  const getMonthNameGenitiveCase  = (data) => {
    const monthName = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

    return monthName[data.getMonth()]
  }
  const getWeekDayName  = (data) => {
    const weekDayName = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    return weekDayName[data.getDay()]
  }

  return (
    <div className="calendar">
      <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">{getWeekDayName(dateNow)}</div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{dateNow.getDate()}</div>
            <div className="ui-datepicker-material-month">{getMonthNameGenitiveCase(dateNow)}</div>
            <div className="ui-datepicker-material-year">{dateNow.getFullYear()}</div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">{getMonthName(dateNow)}</span>&nbsp;<span className="ui-datepicker-year">{dateNow.getFullYear()}</span>
          </div>
        </div>
        <table className="ui-datepicker-calendar">
          <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">Пн</th>
              <th scope="col" title="Вторник">Вт</th>
              <th scope="col" title="Среда">Ср</th>
              <th scope="col" title="Четверг">Чт</th>
              <th scope="col" title="Пятница">Пт</th>
              <th scope="col" title="Суббота">Сб</th>
              <th scope="col" title="Воскресенье">Вс</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map(
              (_,i) => <CalendarWeek key={i} dayFirst={getFirstDayWeek(i)} dayNow = {dateNow} />
            )}
            
            
          </tbody>
        </table>
      </div>
    </div>
  )
}


Calendar.propTypes = {
  dateNow: PropTypes.object
}

export default Calendar