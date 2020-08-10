import { parseISO, format } from 'date-fns'

export default function Weather({ data }) {
  return (
      <div>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>
        <p>{data.weather[0].main}</p>
        <p>{data.main.temp}</p>
      </div>
  )
}